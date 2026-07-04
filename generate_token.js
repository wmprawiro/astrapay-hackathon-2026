const crypto = require('crypto');
const fs = require('fs');

const clientId = '4ade124d-012b-4914-9eea-0ed31e17aeb7';
const privateKeyPath = 'C:\\Users\\wagyu\\Downloads\\Nakama-uat\\Nakama-uat\\pkcs8_rsa_private_key.pem';
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

function getSnapTimestamp() {
    const d = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
    const pad = (n) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}+07:00`;
}

const timestamp = getSnapTimestamp();
const payload = `${clientId}|${timestamp}`;

const sign = crypto.createSign('SHA256');
sign.update(payload);
sign.end();
const signature = sign.sign(privateKey, 'base64');

console.log('====================================');
console.log('🚀 MENGIRIM REQUEST KE ASTRAPAY SANDBOX');
console.log('====================================');
console.log('Client ID   :', clientId);
console.log('Timestamp   :', timestamp);
console.log('Mengeksekusi API B2B Access Token...');

async function getAccessToken() {
    try {
        const response = await fetch('https://sandbox.astrapay.com/snap-service/snap/v1.0/access-token/b2b', {
            method: 'POST',
            headers: {
                'x-client-key': clientId,
                'x-timestamp': timestamp,
                'x-signature': signature,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grantType: 'client_credentials'
            })
        });

        const data = await response.json();
        console.log('\n✅ --- RESPONSE STATUS ---');
        console.log(response.status, response.statusText);
        console.log('\n📄 --- RESPONSE BODY ---');
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('\n❌ --- ERROR ---');
        console.error(error);
    }
}

getAccessToken();
