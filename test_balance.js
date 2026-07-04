const crypto = require('crypto');
const fs = require('fs');

const clientId = '4ade124d-012b-4914-9eea-0ed31e17aeb7';
const clientSecret = 'twoVn0hh0q29Egk6jsRZsJsPkKb8mMVx';
const privateKeyPath = 'C:\\Users\\wagyu\\Downloads\\Nakama-uat\\Nakama-uat\\pkcs8_rsa_private_key.pem';
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

// Token B2B2C dari proses sebelumnya (Masa aktif 15 Hari)
const b2b2cToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIyNTAyOTA3OCIsImFjY291bnRJZCI6MzI4NDIsImFjY291bnRJZFBvaW50IjoxNzA0OCwiYWNjb3VudElkU2V0dGxlbWVudCI6MCwibmJmIjoxNzgyNzQ4Mzc3LCJjYklkIjoiYTU4NzlkMzEtODQ5Ni00Mzc5LTg0Y2MtMTllMjYwOWJiNmE5IiwiaXNzIjoiQXN0cmFQYXktRGV2IiwiY2xhaW0iOiJTTkFQIiwiY3JlZGVudGlhbElkIjowLCJleHAiOjE3ODQwNDQzNzcsImlhdCI6MTc4Mjc0ODM3NywianRpIjoiMzRjY2Q3ZGYtZjY3NS00N2ZhLWFjNzAtNjFjNTEzMmE0ZTRiIn0.SmtauKIThQBNLbxPygta7PF9ntIDTvnwwD87QppxVUDvufxT7RqsQbFLfFWGY7Rli_QE2m4QEqEE70-zbjHVfKkUwC_es42xLXELeKn9d4UX0fXSLJVG0KmVSOBoyERljw6Qb5FVp_3WVq0qjUvM3IhVLwB--NfzfYXyTCe1hbnM6FnOQxAgm5jBgn3iGSuDY1AKPrweqhSxW22DmOUjlwPLqrmdMTldOmjmbsa9Z3fUxYm6HLqV0Nl2NeYLuWQORzGC0DYQ00eMfQOO1s49wvFfSC6ES9E2c3-q3rT9khEgxkobjQD7zbgagmyrhgmQYy23kQRMoH_BizKdf63IIw';

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

async function runBalanceInquiry() {
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
    
    console.log('🔄 2. Memanggil API Balance Inquiry (Cek Saldo)...');
    const relativeUrl = '/merchant-service/snap/v1.0/balance-inquiry';
    const url = `https://sandbox.astrapay.com${relativeUrl}`;
    const method = 'POST';
    const timestamp = getSnapTimestamp();
    
    const requestBody = {
        "balanceTypes": ["BALANCE", "POINT"]
    };
    
    const signatureService = generateSignatureService(method, relativeUrl, b2bToken, requestBody, timestamp, clientSecret);
    const externalId = generateExternalId();
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${b2bToken}`,
                'Authorization-Customer': `Bearer ${b2b2cToken}`, // Menggunakan Token Pelanggan kita
                'X-TIMESTAMP': timestamp,
                'X-SIGNATURE': signatureService,
                'X-PARTNER-ID': clientId,
                'X-EXTERNAL-ID': externalId,
                'X-DEVICE-ID': 'DeviceSandboxNakama01',
                'CHANNEL-ID': '00311'
            },
            body: JSON.stringify(requestBody)
        });
        
        const data = await response.json();
        console.log('\n📄 --- RESPONSE BALANCE INQUIRY ---');
        console.log('Status HTTP:', response.status, response.statusText);
        console.log(JSON.stringify(data, null, 2));
        
        if (data.responseCode === '2001100') {
            console.log('\n======================================================');
            console.log('✅ BERHASIL CEK SALDO!');
            data.accountInfos.forEach(info => {
                console.log(`💰 Saldo ${info.balanceType}: ${info.amount.currency} ${info.amount.value}`);
            });
            const userStatus = data.additionalInfo 
                ? (data.additionalInfo.userStatus || (Array.isArray(data.additionalInfo) && data.additionalInfo[0] && data.additionalInfo[0].userStatus)) 
                : 'N/A';
            console.log('Status Akun:', userStatus);
            console.log('======================================================\n');
        }
    } catch (e) {
        console.error('❌ Error API Balance Inquiry:', e);
    }
}

runBalanceInquiry();
