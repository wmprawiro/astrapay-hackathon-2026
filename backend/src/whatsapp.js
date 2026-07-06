const { Client, LocalAuth } = require('whatsapp-web.js');

const path = require('path');
const fs = require('fs');

let client = null;
let currentQR = '';

async function startWhatsApp(io) {
    client = new Client({
        authStrategy: new LocalAuth({ dataPath: path.join(__dirname, '..', '.wwebjs_auth') }),
        puppeteer: {
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined
        }
    });

    client.on('qr', (qr) => {
        console.log('Got QR Code, emitting to frontend...');
        currentQR = qr;
        io.emit('qr', qr);
    });

    client.on('ready', () => {
        console.log('WhatsApp connection is open!');
        currentQR = '';
        let rawNumber = '';
        if (client.info && client.info.wid) {
            rawNumber = client.info.wid.user;
        }
        io.emit('authenticated', { message: 'Connection open', number: rawNumber });
    });

    client.on('disconnected', async (reason) => {
        console.log('Client was logged out', reason);
        currentQR = '';
        io.emit('disconnected', 'Logged out');
        
        try {
            await client.destroy();
        } catch (e) {
            console.error('Error destroying client on disconnect:', e);
        }
        
        const authPath = path.join(__dirname, '..', '.wwebjs_auth');
        if (fs.existsSync(authPath)) {
            try {
                fs.rmSync(authPath, { recursive: true, force: true });
                console.log('Cleared .wwebjs_auth folder');
            } catch (e) {
                console.error('Failed to clear auth folder', e);
            }
        }
        
        client.initialize();
    });

    client.on('message', async (msg) => {
        try {
            if (msg.fromMe) return;

            const text = msg.body;
            if (!text) return;

            const jid = msg.from;
            const lowercaseText = text.toLowerCase();

            // Load Quick Replies
            const dbPath = path.join(__dirname, '..', 'data', 'db.json');
            if (fs.existsSync(dbPath)) {
                const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
                const quickReplies = dbData.quick_replies || [];

                let matchedAny = false;
                for (const reply of quickReplies) {
                    if (reply.keywords && Array.isArray(reply.keywords)) {
                        const matched = reply.keywords.some(kw => {
                            const k = kw.toLowerCase();
                            // Exact match for numbers like "1", "2", "3" to prevent false positives
                            if (k.length <= 2) return lowercaseText.trim() === k;
                            return lowercaseText.includes(k);
                        });
                        if (matched) {
                            matchedAny = true;
                            console.log(`Auto-replying to ${jid} for keyword match.`);
                            
                            // 1. Simulate "Typing..." state
                            const chat = await msg.getChat();
                            await chat.sendStateTyping();
                            
                            // Random typing duration between 4 to 8 seconds
                            const typingDelay = Math.floor(Math.random() * 4000) + 4000;
                            await new Promise(resolve => setTimeout(resolve, typingDelay));
            
                            // Send message
                            await client.sendMessage(jid, reply.message);
                            
                            // 2. Stop "Typing..." state
                            await chat.clearState();
                            
                            break; // Stop after first match
                        }
                    }
                }
                
                // Fallback Main Menu
                if (!matchedAny) {
                    console.log(`Sending Welcome Menu to ${jid}`);
                    // Cari custom welcome message di database (yang shortcut-nya /welcome atau /mainmenu)
                    const customWelcome = quickReplies.find(r => r.shortcut === '/welcome' || r.shortcut === '/main_menu');
                    const welcomeMsg = customWelcome 
                        ? customWelcome.message 
                        : `Halo! Selamat datang di layanan *Cuci Motor Prengky Tampan* 🏍️✨\n\nSilakan balas dengan *angka* untuk memilih menu:\n*1.* Booking Jadwal Cuci\n*2.* Bayar Transaksi\n*3.* Chat dengan Prengky Tampan`;
                    
                    const chat = await msg.getChat();
                    await chat.sendStateTyping();
                    const typingDelay = Math.floor(Math.random() * 2000) + 2000;
                    await new Promise(resolve => setTimeout(resolve, typingDelay));
                    await client.sendMessage(jid, welcomeMsg);
                    await chat.clearState();
                }
            }
        } catch (error) {
            console.error("Error in auto-responder:", error);
        }
    });

    client.initialize();
    return client;
}

function getClient() {
    return client;
}

function getCurrentQR() {
    return currentQR;
}

async function logoutClient() {
    if (client) {
        try {
            await client.logout();
        } catch (err) {
            console.error('Logout API failed (maybe already disconnected):', err);
        }
        try {
            await client.destroy();
        } catch (err) {
            console.error('Destroy API failed:', err);
        }
        
        const authPath = path.join(__dirname, '..', '.wwebjs_auth');
        if (fs.existsSync(authPath)) {
            try {
                fs.rmSync(authPath, { recursive: true, force: true });
                console.log('Force cleared .wwebjs_auth folder');
            } catch(e) {}
        }
        
        client.initialize();
    }
}

module.exports = { startWhatsApp, getClient, getCurrentQR, logoutClient };
