const express = require('express');
const router = express.Router();
const { getSock } = require('../whatsapp');

router.post('/send', async (req, res) => {
    try {
        const { messages } = req.body;
        
        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ success: false, error: 'Messages array is required' });
        }

        const sock = getSock();
        if (!sock) {
            return res.status(503).json({ success: false, error: 'WhatsApp service not ready' });
        }

        const results = [];

        for (const msg of messages) {
            try {
                // Format phone number to JID
                // Replace leading 0 with 62
                let phone = msg.phone.replace(/[^0-9]/g, '');
                if (phone.startsWith('0')) {
                    phone = '62' + phone.substring(1);
                }
                const jid = `${phone}@s.whatsapp.net`;

                // 1. Simulate "Typing..." state for a realistic human feel
                await sock.sendPresenceUpdate('composing', jid);
                
                // Random typing duration between 4 to 8 seconds (4000ms to 8000ms)
                const typingDelay = Math.floor(Math.random() * 4000) + 4000;
                await new Promise(resolve => setTimeout(resolve, typingDelay));

                // Send message
                const sentMsg = await sock.sendMessage(jid, { text: msg.text });
                
                // 2. Stop "Typing..." state
                await sock.sendPresenceUpdate('paused', jid);
                
                results.push({
                    phone: msg.phone,
                    status: 'success',
                    id: sentMsg?.key?.id
                });
                
                // 3. Random delay before sending the NEXT message to prevent bulk-spam flagging
                // Random delay between 3 to 15 seconds (3000ms to 15000ms)
                const nextMessageDelay = Math.floor(Math.random() * 12000) + 3000;
                await new Promise(resolve => setTimeout(resolve, nextMessageDelay));
            } catch (err) {
                console.error(`Failed to send message to ${msg.phone}:`, err);
                results.push({
                    phone: msg.phone,
                    status: 'error',
                    error: err.message
                });
            }
        }

        res.json({
            success: true,
            results: results
        });
    } catch (error) {
        console.error('Error in /whatsapp/send:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

module.exports = router;
