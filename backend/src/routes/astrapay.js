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

        // 2. Call Direct Debit Payment to get Webview URL
        const paymentRelativeUrl = '/merchant-service/snap/v1.0/debit/payment-host-to-host';
        const paymentUrl = `https://sandbox.astrapay.com${paymentRelativeUrl}`;
        const method = 'POST';
        const timestamp = getSnapTimestamp();
        
        // Ensure amount has 2 decimal places as required
        const amountValue = req.body.amount ? Number(req.body.amount).toFixed(2) : "10000.00";
        
        const requestBody = {
            "partnerReferenceNo": "TRX" + Date.now(),
            "amount": {
                "value": amountValue,
                "currency": "IDR"
            },
            "additionalInfo": {
                "description": `Tagihan untuk ${name || 'Customer'}`
            }
        };

        const signatureService = generateSignatureService(method, paymentRelativeUrl, b2bToken, requestBody, timestamp, clientSecret);
        const externalId = generateExternalId();
        
        const response = await fetch(paymentUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${b2bToken}`,
                'X-TIMESTAMP': timestamp,
                'X-SIGNATURE': signatureService,
                'X-PARTNER-ID': clientId,
                'X-EXTERNAL-ID': externalId,
                'CHANNEL-ID': '00854'
            },
            body: JSON.stringify(requestBody)
        });
        
        const data = await response.json();
        
        // If webRedirectUrl is provided, it's successful!
        if (data.webRedirectUrl) {
            res.json({ success: true, redirectUrl: data.webRedirectUrl });
        } else {
            console.error("AstraPay Response Error:", data);
            res.status(500).json({ success: false, error: 'Failed to generate payment URL', details: data });
        }
    } catch (e) {
        console.error('Error generating AstraPay payment link:', e);
        res.status(500).json({ success: false, error: e.message });
    }
});

// Tahap 1: Endpoint untuk menangkap Callback/Redirect dari AstraPay
router.get('/callback', (req, res) => {
    console.log('============= ASTRAPAY GET CALLBACK RECEIVED =============');
    console.log('QUERY:', req.query);
    console.log('BODY:', req.body);
    console.log('==========================================================');
    res.send(`
        <html>
            <head><title>Binding Sukses!</title></head>
            <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
                <h1 style="color: green;">🎉 Otorisasi Selesai!</h1>
                <p>Silakan kembali ke terminal/IDE Anda untuk mengecek log.</p>
                <p>Data yang ditangkap:</p>
                <pre style="text-align: left; background: #eee; padding: 20px; display: inline-block;">${JSON.stringify(req.query, null, 2)}</pre>
            </body>
        </html>
    `);
});

router.post('/callback', (req, res) => {
    console.log('============= ASTRAPAY POST CALLBACK RECEIVED =============');
    console.log('QUERY:', req.query);
    console.log('BODY:', req.body);
    console.log('===========================================================');
    res.json({ status: "OK", message: "Callback received" });
});

module.exports = router;
