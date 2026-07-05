const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const { createServer } = require('http');
const { startWhatsApp, getSock, getCurrentQR } = require('./whatsapp');

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

app.use('/api/data', require('./routes/api'));
app.use('/api/astrapay', require('./routes/astrapay'));
app.use('/api/whatsapp', require('./routes/whatsapp'));

io.on('connection', (socket) => {
    console.log('Frontend connected via WebSocket:', socket.id);
    
    // Check current state and emit instantly
    const sock = getSock();
    if (sock && sock.user && sock.user.id) {
        let rawNumber = sock.user.id.split(':')[0].split('@')[0];
        socket.emit('authenticated', { message: 'Already connected', number: rawNumber });
    } else {
        const qr = getCurrentQR();
        if (qr) {
            socket.emit('qr', qr);
        }
    }

    socket.on('logout', () => {
        console.log('Frontend requested logout');
        const sock = getSock();
        if (sock) {
            sock.logout('Frontend requested logout');
        }
    });

    socket.on('disconnect', () => {
        console.log('Frontend disconnected:', socket.id);
    });
});

httpServer.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    console.log('Starting WhatsApp service...');
    startWhatsApp(io);
});
