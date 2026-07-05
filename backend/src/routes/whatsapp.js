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

                // Send message
                const sentMsg = await sock.sendMessage(jid, { text: msg.text });
                
                results.push({
                    phone: msg.phone,
                    status: 'success',
                    id: sentMsg?.key?.id
                });
                
                // Small delay to prevent spam flagging
                await new Promise(resolve => setTimeout(resolve, 1000));
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
