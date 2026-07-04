const crypto = require('crypto');
const fs = require('fs');

const clientId = '4ade124d-012b-4914-9eea-0ed31e17aeb7';
const privateKeyPath = 'C:\\Users\\wagyu\\Downloads\\Nakama-uat\\Nakama-uat\\pkcs8_rsa_private_key.pem';
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

// Kode Otorisasi dari response API Account Binding sebelumnya
const authCode = 'TR6CH8W6Y4X0972ZC3UNRCCJ95LYNGWDSZZSMGRYYLM2H6YI5V'; 

// Timestamp sesuai zona waktu Jakarta (+07:00)
function getSnapTimestamp() {
    const d = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
    const pad = (n) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}+07:00`;
}

// Fungsi Generate Signature Auth (RSA 2048)
function generateSignatureAuth(clientId, timestamp) {
    const payload = `${clientId}|${timestamp}`;
    const sign = crypto.createSign('SHA256');
    sign.update(payload);
    sign.end();
    return sign.sign(privateKey, 'base64');
}

async function runTestB2B2C() {
    console.log('🔄 Memanggil API Access Token B2B2C untuk menukarkan authCode...');
    
    const timestamp = getSnapTimestamp();
    const signature = generateSignatureAuth(clientId, timestamp);
    const url = 'https://sandbox.astrapay.com/snap-service/snap/v1.0/access-token/b2b2c';

    const requestBody = {
        "grantType": "AUTHORIZATION_CODE",
        "authCode": authCode
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'x-client-key': clientId,
                'x-timestamp': timestamp,
                'x-signature': signature,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        
        const data = await response.json();
        console.log('\n📄 --- RESPONSE B2B2C TOKEN ---');
        console.log('Status HTTP:', response.status, response.statusText);
        console.log(JSON.stringify(data, null, 2));
        
        if (data.accessToken) {
            console.log('\n======================================================');
            console.log('✅ SELAMAT! TOKEN B2B2C BERHASIL DIDAPATKAN!');
            console.log('Token ini digunakan untuk transaksi spesifik (seperti potong saldo) dari akun yang sudah di-bind.');
            console.log('======================================================\n');
        }
    } catch (e) {
        console.error('❌ Error API B2B2C:', e);
    }
}

runTestB2B2C();
