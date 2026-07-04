const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');
const path = require('path');
const fs = require('fs');

let sock = null;
let currentQR = '';

async function startWhatsApp(io) {
    const authDir = path.join(__dirname, '..', 'auth_info_baileys');
    const { state, saveCreds } = await useMultiFileAuthState(authDir);

    sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: pino({ level: 'silent' }), // Suppress heavy logs
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log('Got QR Code, emitting to frontend...');
            currentQR = qr;
            io.emit('qr', qr);
        }

        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Connection closed due to ', lastDisconnect?.error, ', reconnecting: ', shouldReconnect);
            
            if (shouldReconnect) {
                setTimeout(() => startWhatsApp(io), 2000);
            } else {
                currentQR = '';
                console.log('Logged out. Deleting auth folder to restart session.');
                io.emit('disconnected', 'Logged out');
                try {
                    fs.rmSync(authDir, { recursive: true, force: true });
                } catch(e) {
                    console.error('Failed to delete auth dir', e);
                }
                setTimeout(() => startWhatsApp(io), 2000);
            }
        } else if (connection === 'open') {
            console.log('WhatsApp connection is open!');
            currentQR = '';
            let rawNumber = '';
            if (sock.user && sock.user.id) {
                // e.g. 6281234567890:12@s.whatsapp.net
                rawNumber = sock.user.id.split(':')[0].split('@')[0];
            }
            io.emit('authenticated', { message: 'Connection open', number: rawNumber });
        }
    });

    return sock;
}

function getSock() {
    return sock;
}

function getCurrentQR() {
    return currentQR;
}

module.exports = { startWhatsApp, getSock, getCurrentQR };
