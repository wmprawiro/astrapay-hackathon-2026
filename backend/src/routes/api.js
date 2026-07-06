const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../data/db.json');

function readDB() {
    try {
        if (!fs.existsSync(dbPath)) {
            // Initialize if not exists
            const dir = path.dirname(dbPath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(dbPath, JSON.stringify({ customers: [], templates: [], transactions: [] }, null, 2));
        }
        const data = fs.readFileSync(dbPath, 'utf8');
        const parsed = JSON.parse(data);
        return {
            customers: parsed.customers || [],
            templates: parsed.templates || [],
            transactions: parsed.transactions || [],
            quick_replies: parsed.quick_replies || []
        };
    } catch (e) {
        console.error("Error reading db.json", e);
        return { customers: [], templates: [], transactions: [], quick_replies: [] };
    }
}

function writeDB(data) {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Error writing db.json", e);
    }
}

// Customers
router.get('/customers', (req, res) => {
    const db = readDB();
    res.json(db.customers || []);
});

router.post('/customers', (req, res) => {
    const db = readDB();
    db.customers = req.body.customers || db.customers;
    writeDB(db);
    res.json({ success: true });
});

// Templates
router.get('/templates', (req, res) => {
    const db = readDB();
    res.json(db.templates || []);
});

router.post('/templates', (req, res) => {
    const db = readDB();
    db.templates = req.body.templates || db.templates;
    writeDB(db);
    res.json({ success: true });
});

// Transactions
router.get('/transactions', (req, res) => {
    const db = readDB();
    res.json(db.transactions || []);
});

router.post('/transactions', (req, res) => {
    const db = readDB();
    const newTx = req.body; // Expects array of transactions or a single transaction
    if (!db.transactions) db.transactions = [];
    
    if (Array.isArray(newTx)) {
        db.transactions.push(...newTx);
    } else {
        db.transactions.push(newTx);
    }
    
    writeDB(db);
    res.json({ success: true });
});

// Quick Replies
router.get('/quick-replies', (req, res) => {
    const db = readDB();
    res.json(db.quick_replies || []);
});

router.post('/quick-replies', (req, res) => {
    const db = readDB();
    db.quick_replies = req.body.quick_replies || db.quick_replies || [];
    writeDB(db);
    res.json({ success: true });
});

module.exports = router;
