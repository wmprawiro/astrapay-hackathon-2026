const crypto = require('crypto');
const fs = require('fs');

// Credential Anda
const clientId = '4ade124d-012b-4914-9eea-0ed31e17aeb7';
const clientSecret = 'twoVn0hh0q29Egk6jsRZsJsPkKb8mMVx';
const merchantId = '26c062c9-ef5e-461e-97a4-52905dfaba96';
const privateKeyPath = 'C:\\Users\\wagyu\\Downloads\\Nakama-uat\\Nakama-uat\\pkcs8_rsa_private_key.pem';
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

// Fungsi pembantu untuk membuat timestamp sesuai zona waktu Jakarta (+07:00)
function getSnapTimestamp() {
    const d = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
    const pad = (n) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}+07:00`;
}

// 1. Fungsi Generate Signature Auth (RSA 2048) untuk Token B2B
function generateSignatureAuth(clientId, timestamp) {
    const payload = `${clientId}|${timestamp}`;
    const sign = crypto.createSign('SHA256');
    sign.update(payload);
    sign.end();
    return sign.sign(privateKey, 'base64');
}

// Fungsi pembantu minify JSON (menghilangkan spasi)
function minifyJson(bodyObj) {
    return JSON.stringify(bodyObj); 
}

// 2. Fungsi Generate Signature Service (HMAC SHA512) untuk Layanan Transaksi AstraPay
function generateSignatureService(method, relativeUrl, accessToken, bodyObj, timestamp, clientSecret) {
    const minifiedBody = minifyJson(bodyObj);
    // Hashing Body menggunakan SHA-256 lalu hex encode lalu jadikan lowercase
    const hash = crypto.createHash('sha256').update(minifiedBody).digest('hex').toLowerCase();
    
    // Format payload
    const payload = `${method}:${relativeUrl}:${accessToken}:${hash}:${timestamp}`;
    
    // Enkripsi Payload menggunakan HMAC SHA-512 dengan Client Secret
    return crypto.createHmac('sha512', clientSecret).update(payload).digest('base64');
}

// Randomizer untuk X-EXTERNAL-ID
function generateExternalId() {
    return crypto.randomBytes(18).toString('hex').substring(0, 36);
}

async function runTest() {
    console.log('🔄 1. Meminta Token B2B...');
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
            console.log('✅ Token B2B Berhasil Didapatkan!');
        } else {
            console.error('❌ Gagal ambil token B2B', tokenData);
            return;
        }
    } catch (e) {
        console.error('❌ Error API B2B', e);
        return;
    }
    
    console.log('\n🔄 2. Memanggil API Account Binding...');
    const bindingRelativeUrl = '/snap-service/snap/v1.0/registration-account-binding';
    const bindingUrl = `https://sandbox.astrapay.com${bindingRelativeUrl}`;
    const method = 'POST';
    const timestamp = getSnapTimestamp();
    
    const requestBody = {
        "merchantId": merchantId,
        "additionalInfo": {
            "finishBindingUrl": "https://google.com", // Dummy Callback ke Google
            "externalUid": "TestingNakama22",
            "name": "John Doe",
            "email": "john.doe@email.com"
        }
    };
    
    // Membuat Signature Service khusus untuk API Account Binding ini
    const signatureService = generateSignatureService(method, bindingRelativeUrl, b2bToken, requestBody, timestamp, clientSecret);
    const externalId = generateExternalId();
    
    try {
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
        console.log('\n📄 --- RESPONSE ACCOUNT BINDING ---');
        console.log('Status HTTP:', response.status, response.statusText);
        console.log(JSON.stringify(data, null, 2));
        
        if (data.redirectUrl) {
            console.log('\n======================================================');
            console.log('🎉 BERHASIL MENDAPATKAN REDIRECT URL 🎉');
            console.log('Silakan copy link di bawah ini dan buka di Browser Anda:');
            console.log('👉', data.redirectUrl);
            console.log('======================================================\n');
        }
    } catch (e) {
        console.error('❌ Error Account Binding:', e);
    }
}

runTest();
