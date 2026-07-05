const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Credential
const clientId = '4ade124d-012b-4914-9eea-0ed31e17aeb7';
const clientSecret = 'twoVn0hh0q29Egk6jsRZsJsPkKb8mMVx';
const merchantId = '26c062c9-ef5e-461e-97a4-52905dfaba96';
// Read from local keys folder (for Docker portability)
const privateKeyPath = path.join(__dirname, '../../keys/pkcs8_rsa_private_key.pem');
let privateKey;

try {
    privateKey = fs.readFileSync(privateKeyPath, 'utf8');
} catch (err) {
    console.error("Failed to read private key from path:", privateKeyPath);
}

function getSnapTimestamp() {
    const d = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
    const pad = (n) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}+07:00`;
}

function generateSignatureAuth(clientId, timestamp) {
    const payload = `${clientId}|${timestamp}`;
    const sign = crypto.createSign('SHA256');
    sign.update(payload);
    sign.end();
    return sign.sign(privateKey, 'base64');
}

function minifyJson(bodyObj) {
    return JSON.stringify(bodyObj); 
}

function generateSignatureService(method, relativeUrl, accessToken, bodyObj, timestamp, clientSecret) {
    const minifiedBody = minifyJson(bodyObj);
    const hash = crypto.createHash('sha256').update(minifiedBody).digest('hex').toLowerCase();
    const payload = `${method}:${relativeUrl}:${accessToken}:${hash}:${timestamp}`;
    return crypto.createHmac('sha512', clientSecret).update(payload).digest('base64');
}

function generateExternalId() {
    return crypto.randomBytes(18).toString('hex').substring(0, 36);
}

router.post('/generate-link', async (req, res) => {
    try {
        if (!privateKey) {
            return res.status(500).json({ success: false, error: 'Private key not loaded' });
        }

        const { name, email, phone } = req.body;

        // 1. Get B2B Token
        const authTimestamp = getSnapTimestamp();
        const authSignature = generateSignatureAuth(clientId, authTimestamp);
        
        const tokenResponse = await fetch('https://sandbox.astrapay.com/snap-service/snap/v1.0/access-token/b2b', {
            method: 'POST',
            headers: {
                'x-client-key': clientId,
                'x-timestamp': authTimestamp,
                'x-signature': authSignature,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ grantType: 'client_credentials' })
        });
        
        const tokenData = await tokenResponse.json();
        if (tokenData.responseCode !== '2007300') {
            return res.status(500).json({ success: false, error: 'Failed to get B2B token', details: tokenData });
        }
        
        const b2bToken = tokenData.accessToken;

        // 2. Call Account Binding
        const bindingRelativeUrl = '/snap-service/snap/v1.0/registration-account-binding';
        const bindingUrl = `https://sandbox.astrapay.com${bindingRelativeUrl}`;
        const method = 'POST';
        const timestamp = getSnapTimestamp();
        
        const requestBody = {
            "merchantId": merchantId,
            "additionalInfo": {
                "finishBindingUrl": "https://www.astrapay.com", // Redirect to AstraPay homepage after success
                "externalUid": `Nakama_${Date.now()}`,
                "name": name || "AstraPay Customer",
                "email": email || "customer@email.com"
            }
        };

        if (phone) {
            // Remove non-numeric characters for phoneNo
            requestBody.phoneNo = phone.replace(/[^0-9]/g, '');
        }
        
        const signatureService = generateSignatureService(method, bindingRelativeUrl, b2bToken, requestBody, timestamp, clientSecret);
        const externalId = generateExternalId();
        
        const response = await fetch(bindingUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${b2bToken}`,
                'X-TIMESTAMP': timestamp,
                'X-SIGNATURE': signatureService,
                'X-PARTNER-ID': clientId,
                'X-EXTERNAL-ID': externalId,
                'X-DEVICE-ID': 'DeviceSandboxNakama01',
                'CHANNEL-ID': '01207'
            },
            body: JSON.stringify(requestBody)
        });
        
        const data = await response.json();
        if (data.redirectUrl) {
            res.json({ success: true, redirectUrl: data.redirectUrl });
        } else {
            res.status(500).json({ success: false, error: 'Failed to generate redirect URL', details: data });
        }
    } catch (e) {
        console.error('Error generating AstraPay link:', e);
        res.status(500).json({ success: false, error: e.message });
    }
});

module.exports = router;
