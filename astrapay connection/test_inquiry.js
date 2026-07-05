const crypto = require('crypto');
const fs = require('fs');

const clientId = '4ade124d-012b-4914-9eea-0ed31e17aeb7';
const clientSecret = 'twoVn0hh0q29Egk6jsRZsJsPkKb8mMVx';
const privateKeyPath = 'C:\\Users\\wagyu\\Downloads\\Nakama-uat\\Nakama-uat\\pkcs8_rsa_private_key.pem';
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

// Refresh Token yang kita dapatkan dari eksekusi Token B2B2C sebelumnya
const refreshToken = 'c525dcba-5a5a-45f7-b7ea-ad1117e3208b';

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

async function runBindingInquiry() {
    console.log('🔄 1. Meminta Token B2B Baru...');
    const authTimestamp = getSnapTimestamp();
    const authSignature = generateSignatureAuth(clientId, authTimestamp);
    let b2bToken = '';
    
    try {
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
        if (tokenData.responseCode === '2007300') {
            b2bToken = tokenData.accessToken;
        } else {
            console.error('❌ Gagal ambil token B2B', tokenData);
            return;
        }
    } catch (e) {
        console.error('❌ Error API B2B', e);
        return;
    }
    
    console.log('🔄 2. Memanggil API Account Binding Inquiry...');
    const relativeUrl = '/snap-service/snap/v1.0/registration-account-inquiry';
    const url = `https://sandbox.astrapay.com${relativeUrl}`;
    const method = 'POST';
    const timestamp = getSnapTimestamp();
    
    const requestBody = {
        "additionalInfo": {
            "refreshToken": refreshToken
        }
    };
    
    const signatureService = generateSignatureService(method, relativeUrl, b2bToken, requestBody, timestamp, clientSecret);
    const externalId = generateExternalId();
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${b2bToken}`,
                'X-TIMESTAMP': timestamp,
                'X-SIGNATURE': signatureService,
                'X-PARTNER-ID': clientId,
                'X-EXTERNAL-ID': externalId,
                'X-DEVICE-ID': 'DeviceSandboxNakama01',
                'CHANNEL-ID': '01108'
            },
            body: JSON.stringify(requestBody)
        });
        
        const data = await response.json();
        console.log('\n📄 --- RESPONSE ACCOUNT BINDING INQUIRY ---');
        console.log('Status HTTP:', response.status, response.statusText);
        console.log(JSON.stringify(data, null, 2));
        
        if (data.responseCode === '2000800') {
            console.log('\n======================================================');
            console.log('✅ STATUS BINDING VALID & AKTIF!');
            console.log('Nomor Referensi:', data.referenceNo);
            console.log('======================================================\n');
        }
    } catch (e) {
        console.error('❌ Error API Inquiry:', e);
    }
}

runBindingInquiry();
