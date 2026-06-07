# PRD: AstraPay Chat

> **Product Requirements Document**
> Hackathon AstraPay 2026 — "Product Innovation Integrated with AstraPay Ecosystem"
> Version 1.1 — 4 Juni 2026 (updated with 2025-2026 market data)

---

## 1. Executive Summary

**AstraPay Chat** adalah solusi all-in-one yang memungkinkan merchant (UMKM, bengkel motor, warung, toko kelontong) untuk **menjual produk, menerima pesanan, dan menerima pembayaran AstraPay langsung di WhatsApp** — tanpa perlu website, tanpa aplikasi, dan tanpa integrasi teknis.

Pelanggan cukup chat, pilih produk, dan bayar dalam satu alur di WhatsApp yang sudah mereka gunakan sehari-hari.

---

## 2. Problem Statement

### 2.1 Masalah

- **30.21 juta unit UMKM non-pertanian** di Indonesia per 2025, **99.70% skala mikro** (Kementerian UMKM via Katadata, April 2026)
- **14.14 juta UMKM** bergerak di sektor perdagangan + reparasi motor — fokus bonus hackathon (Kementerian UMKM via Katadata)
- Mayoritas UMKM belum terdigitalisasi — tidak punya website, aplikasi, atau sistem point-of-sale
- **230 juta pengguna internet** di Indonesia (80.5% penetrasi), **180 juta pengguna social media** (DataReportal Digital 2026)
- WhatsApp adalah aplikasi komunikasi #1 di Indonesia — **estimasi >90% pengguna internet** memakainya
- Proses jual-beli via WhatsApp saat ini manual: chat, catat pesanan di kertas, minta transfer, cek bukti manual → lambat, rawan error, tidak scalable

### 2.2 Pain Points

| Stakeholder | Pain Point |
|-------------|-----------|
| **UMKM** | Tidak punya sistem order & bayar terintegrasi; pencatatan manual |
| **Pelanggan** | Ribet pindah aplikasi untuk bayar; tidak percaya transfer manual |
| **AstraPay** | Belum ada kanal WhatsApp commerce yang memanfaatkan ekosistemnya |

---

## 3. Solution Overview

### 3.1 Value Proposition

> **"Chat, Shop, Pay with AstraPay"**

Sebuah chatbot WhatsApp yang terhubung ke ekosistem AstraPay:
- Merchant setup katalog produk via dashboard dalam 10 menit
- Pelanggan chat WhatsApp → lihat produk → pilih → bayar AstraPay → selesai
- Order & pembayaran tercatat otomatis

### 3.2 Unique Selling Points

| USP | Deskripsi |
|-----|-----------|
| Zero Integration | Merchant tidak perlu coding — setup via dashboard, langsung aktif |
| WhatsApp-Native | Pelanggan tidak perlu install apa pun — WhatsApp sudah ada di HP |
| AstraPay Ecosystem | Bayar pakai saldo AstraPay + QRIS (semua e-wallet/bank) |
| Bonus Ekosistem | Loyalty Points, Disbursement reward, Biller products |
| H+1 Settlement | Dana langsung cair keesokan hari |

---

## 4. Target Users

### 4.1 Primary: UMKM Mikro & Kecil

| Persona | Karakteristik |
|---------|--------------|
| Nama | Bu Rina, Pemilik Warung Sembako |
| Usia | 30–50 tahun |
| Tech Level | Low — hanya bisa WhatsApp |
| Device | Smartphone Android entry-level |
| Kebutuhan | Jualan lebih rapi, terima order tanpa catat manual, terima pembayaran digital |
| Pain | Pembeli sering tanya "masih ada stok?", "bisa transfer?"; catatan sering hilang |

### 4.2 Secondary: Bengkel & Ekosistem Motor (Bonus Fokus)

| Persona | Karakteristik |
|---------|--------------|
| Nama | Pak Agus, Pemilik Bengkel Motor |
| Usia | 25–45 tahun |
| Tech Level | Medium |
| Kebutuhan | Booking servis via WhatsApp, jual sparepart, terima pembayaran DP/pelunasan |
| Pain | Pelanggan booking servis tapi sering cancel/no-show; sparepart susah dicatat |

### 4.3 Tertiary: Pelanggan UMKM & Bengkel

| Persona | Karakteristik |
|---------|--------------|
| Usia | 18–55 tahun |
| Tech Level | Familiar dengan WhatsApp |
| Kebutuhan | Cari produk/jasa → pesan → bayar — semua di WhatsApp |
| Pain | Malas download app baru, malas pindah channel |

---

## 5. Product Architecture

```
┌───────────────────────────────────────────────────────────────┐
│                    WHATSAPP (CUSTOMER SIDE)                    │
│                                                                 │
│  Scan QR / Klik Link                                           │
│  → Bot: "Halo! Mau pesan apa hari ini?"                        │
│  → Tampilkan katalog produk                                    │
│  → Customer pilih produk & jumlah                              │
│  → Isi data (nama, alamat, notes)                              │
│  → Konfirmasi pesanan & total                                  │
│  → Pilih bayar: [AstraPay Saldo] [QRIS]                        │
│  → AstraPay: input nomor HP → PIN → sukses                     │
│  → QRIS: tampilkan QR → customer scan → sukses                 │
│  → "Pesanan #123 diterima! Dikirim besok ya 🙏"                │
└──────────────────────┬────────────────────────────────────────┘
                       │
               WhatsApp Business API
                       │
┌──────────────────────▼────────────────────────────────────────┐
│                 ASTRAWHATSAPP BACKEND                           │
│                                                                 │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────────┐     │
│  │ Bot Engine   │  │ Catalog      │  │ Order Management  │     │
│  │ - Flow mgmt  │  │ - Produk     │  │ - Order ID        │     │
│  │ - NLP simple │  │ - Harga      │  │ - Status tracking │     │
│  │ - Session    │  │ - Stok       │  │ - History         │     │
│  └──────┬───────┘  └──────┬───────┘  └────────┬──────────┘     │
│         │                 │                    │                │
│  ┌──────▼─────────────────▼────────────────────▼──────────┐    │
│  │                   API INTEGRATION LAYER                 │    │
│  │  ┌──────────────┐ ┌──────────┐ ┌─────────────┐        │    │
│  │  │ Payment Ch.  │ │ QRIS SNAP│ │ Report API  │        │    │
│  │  │ Push to Pay  │ │ BI V1.0  │ │             │        │    │
│  │  └──────────────┘ └──────────┘ └─────────────┘        │    │
│  │  ┌──────────────┐ ┌──────────┐ ┌─────────────┐        │    │
│  │  │ Biller Open  │ │ Disburse │ │ Loyalty     │        │    │
│  │  │ API          │ │ ment API │ │ API         │        │    │
│  │  └──────────────┘ └──────────┘ └─────────────┘        │    │
│  └────────────────────────────────────────────────────────┘    │
└──────────────────────┬────────────────────────────────────────┘
                       │
┌──────────────────────▼────────────────────────────────────────┐
│                  MERCHANT DASHBOARD (WEB)                       │
│                                                                 │
│  ┌────────────┐ ┌────────────┐ ┌───────────┐ ┌──────────┐    │
│  │ Catalog    │ │ Orders     │ │ Payments  │ │ Reports  │    │
│  │ Management │ │ Management │ │ Overview  │ │ Export   │    │
│  └────────────┘ └────────────┘ └───────────┘ └──────────┘    │
│                                                                 │
│  Setup in <10 menit:                                            │
│  1. Daftar akun                                                 │
│  2. Tambah produk (nama, harga, foto, stok)                     │
│  3. Atur sapaan chatbot                                         │
│  4. Dapatkan QR code / link WhatsApp                            │
│  5. Sebarkan & mulai jualan                                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Key Features

### 6.1 Merchant Dashboard (Web)

| Feature | Priority | Deskripsi |
|---------|----------|-----------|
| **Catalog Management** | P0 | CRUD produk: nama, deskripsi, harga, foto, stok, varian |
| **Chatbot Flow Builder** | P0 | Atur sapaan, pertanyaan, urutan chat — no-code |
| **QR & Link Generator** | P0 | Generate QR code unik + link WhatsApp per merchant |
| **Order Dashboard** | P0 | List pesanan: baru, diproses, dikirim, selesai, batal |
| **Payment Overview** | P1 | Status bayar, settlement tracking |
| **Report Export** | P1 | Download CSV/Excel transaksi & pesanan |
| **Broadcast Message** | P1 | Kirim promo / pengingat ke pelanggan via template |

### 6.2 WhatsApp Bot (Customer Side)

| Feature | Priority | Deskripsi |
|---------|----------|-----------|
| **Greeting & Menu** | P0 | Sapaan otomatis + menu navigasi (Lihat Produk / Promo / Bantuan) |
| **Product Catalog** | P0 | Tampilkan produk dalam chat (nama, harga, gambar) |
| **Order Flow** | P0 | Pilih produk → jumlah → isi data → konfirmasi |
| **Payment: Push to Pay** | P0 | Customer input nomor HP → redirect ke halaman PIN AstraPay |
| **Payment: QRIS** | P1 | Generate QR MPM → tampilkan di chat → customer scan |
| **Order Confirmation** | P0 | Notifikasi order sukses + nomor pesanan |
| **Order Status Check** | P2 | Customer bisa cek status pesanan via chat |

### 6.3 Payment Flow

| Flow | Trigger | API AstraPay |
|------|---------|-------------|
| Push to Payment | Customer pilih "Bayar AstraPay" | `POST /merchant-service/push-payments` |
| QRIS Generate QR | Customer pilih "Bayar QRIS" | `POST /snap/v1.0/qr/qr-mpm-generate` |
| Payment Callback | AstraPay kirim notifikasi | Callback URL merchant |
| QR Payment Notification | QRIS dibayar customer | Payment Notification Callback SNAP BI |

### 6.4 Bonus Features (Extendable)

| Feature | API | Use Case |
|---------|-----|----------|
| **Jual Pulsa & Token** | Biller Open API | Warung bisa jual pulsa langsung di WhatsApp |
| **Reward Loyalty** | Disbursement AstraPoints | Pelanggan repeat order dapat poin |
| **Paylater** | Paylater API | Customer bisa cicil pembelian |

---

## 7. User Flows

### 7.1 Flow: Customer Membeli Produk

```
1. Customer scan QR / klik link WhatsApp merchant
2. Bot kirim pesan selamat datang
   "Halo! Selamat datang di Warung Bu Rina. Mau pesan apa hari ini?"
   [🛒 Lihat Produk] [📢 Promo] [❓ Bantuan]
3. Customer klik "Lihat Produk"
4. Bot tampilkan daftar produk:
   "📦 Katalog Warung Bu Rina:
   1. Beras 5kg — Rp 65.000
   2. Minyak Goreng 2L — Rp 36.000
   3. Gula Pasir 1kg — Rp 15.000
   Ketik nomor produk yang ingin dipesan:"
5. Customer: "1"
6. Bot: "Beras 5kg — Rp 65.000. Mau berapa?"
7. Customer: "2"
8. Bot: "Total: Rp 130.000. Mau tambah lagi?
   [➕ Tambah Produk] [💳 Bayar Sekarang]"
9. Customer klik "Bayar Sekarang"
10. Bot: "Isi data pengiriman ya:
    Nama:"
11. Customer: "Rina"
12. Bot: "Alamat lengkap:"
13. Customer: "Jl. Melati No. 5, Jakarta"
14. Bot: "Catatan (optional):"
15. Customer: "Tolong packing rapi"
16. Bot: "✅ Konfirmasi Pesanan:
    - Beras 5kg x2 = Rp 130.000
    - Nama: Rina
    - Alamat: Jl. Melati No. 5
    [💳 Bayar dengan AstraPay]"
17. Customer klik "Bayar dengan AstraPay"
18. Bot kirim link pembayaran AstraPay
19. Customer klik → halaman PIN AstraPay di webview
20. Jika app AstraPay terpasang: buka app → input PIN → sukses
   Jika tidak: tetap di webview → input nomor HP + PIN → sukses
21. Bot: "✅ Pesanan #INV-042 diterima!
    Total: Rp 130.000 — LUNAS
    Estimasi pengiriman: besok pagi.
    Terima kasih, Rina! 🙏"
```

### 7.2 Flow: Merchant Setup (First Time)

```
1. Merchant daftar di dashboard.astrapaychat.com
2. Verifikasi nomor WhatsApp bisnis
3. Masuk ke dashboard → "Buat Toko Baru"
4. Isi nama toko, kategori, jam operasional
5. Tambah produk:
   - Upload foto → nama → harga → stok
6. Atur chatbot welcome message:
   "Halo! Selamat datang di {nama_toko}. Ada yang bisa dibantu?"
7. Atur metode pembayaran: [✓] AstraPay Saldo [✓] QRIS
8. Klik "Aktifkan"
9. Dapatkan QR code + link WhatsApp
10. Merchant simpan QR code → tempel di toko / share ke pelanggan
```

### 7.3 Flow: Booking Servis Motor (Bonus Fokus)

```
1. Customer scan QR bengkel
2. Bot: "Halo! Bengkel Motor Pak Agus. Mau servis apa?"
   [🔧 Servis Ringan] [🔩 Ganti Oli] [🛵 Tune Up] [📦 Sparepart]
3. Customer klik "Servis Ringan"
4. Bot: "Servis Ringan — Rp 75.000. Pilih jadwal:"
   [📅 Besok 09:00] [📅 Besok 13:00] [📅 Pilih Tanggal]
5. Customer pilih jadwal
6. Bot: "Nama & nomor motor:"
7. Customer: "Agus — Honda Beat AB 1234 CD"
8. Bot: "Total: Rp 75.000. Booking dikonfirmasi setelah bayar DP Rp 25.000"
   [💳 Bayar DP]
9. Customer bayar DP via AstraPay
10. Bot: "✅ Booking #BKL-088 dikonfirmasi!
     Servis Ringan | Besok 09:00
     DP: Rp 25.000 — LUNAS
     Sisa: Rp 50.000 (bayar di tempat)
     Terima kasih! 🏍️"
```

---

## 8. Technical Specifications

### 8.1 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Dashboard** | Next.js / React + Tailwind CSS |
| **Backend API** | Node.js / Go (NestJS / Echo) |
| **Database** | PostgreSQL + Redis (session/cache) |
| **WhatsApp API** | WhatsApp Business Cloud API (Meta) |
| **Payment API** | AstraPay Payment Channel + QRIS SNAP BI |
| **File Storage** | S3 / Cloud Storage (product images) |
| **Deployment** | Docker + k8s / Cloud Run |
| **Monitoring** | Prometheus + Grafana |

### 8.2 Database Schema (Core)

```sql
-- Merchant
CREATE TABLE merchants (
    id              UUID PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    phone           VARCHAR(20) UNIQUE NOT NULL,
    waba_id         VARCHAR(50),
    client_id       VARCHAR(36),  -- AstraPay client_id
    is_active       BOOLEAN DEFAULT false,
    created_at      TIMESTAMP DEFAULT NOW()
);

-- Products
CREATE TABLE products (
    id              UUID PRIMARY KEY,
    merchant_id     UUID REFERENCES merchants(id),
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    price           DECIMAL(12,2) NOT NULL,
    stock           INTEGER DEFAULT 0,
    image_url       TEXT,
    is_active       BOOLEAN DEFAULT true,
    created_at      TIMESTAMP DEFAULT NOW()
);

-- Orders
CREATE TABLE orders (
    id              UUID PRIMARY KEY,
    merchant_id     UUID REFERENCES merchants(id),
    customer_name   VARCHAR(255),
    customer_phone  VARCHAR(20),
    address         TEXT,
    notes           TEXT,
    total_amount    DECIMAL(12,2),
    status          VARCHAR(20),  -- pending, confirmed, paid, shipped, done, cancelled
    payment_method  VARCHAR(20),  -- astrapay, qris
    payment_status  VARCHAR(20),  -- unpaid, paid, refunded
    astrapay_trx_id VARCHAR(255),
    created_at      TIMESTAMP DEFAULT NOW()
);

-- Order Items
CREATE TABLE order_items (
    id              UUID PRIMARY KEY,
    order_id        UUID REFERENCES orders(id),
    product_id      UUID REFERENCES products(id),
    quantity        INTEGER NOT NULL,
    price           DECIMAL(12,2) NOT NULL
);

-- Chat Sessions
CREATE TABLE chat_sessions (
    id              UUID PRIMARY KEY,
    merchant_id     UUID REFERENCES merchants(id),
    customer_phone  VARCHAR(20),
    state           VARCHAR(50),  -- greeting, browsing, ordering, payment, done
    context         JSONB,
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW()
);
```

### 8.3 API Endpoints (Backend)

```
POST   /api/auth/login                    # Dashboard login
POST   /api/auth/register                 # Merchant register

GET    /api/merchants/:id                  # Get merchant profile
PUT    /api/merchants/:id                  # Update merchant profile

GET    /api/products                       # List products (by merchant)
POST   /api/products                       # Create product
PUT    /api/products/:id                   # Update product
DELETE /api/products/:id                   # Delete product

GET    /api/orders                         # List orders (by merchant)
GET    /api/orders/:id                     # Get order detail
PUT    /api/orders/:id/status              # Update order status

POST   /api/webhooks/whatsapp              # Receive WhatsApp messages
POST   /api/webhooks/astrapay/payment      # Receive AstraPay callbacks
POST   /api/webhooks/astrapay/qris         # Receive QRIS notifications

POST   /api/broadcast                      # Send broadcast message

GET    /api/reports/orders                 # Export order report
GET    /api/reports/payments               # Export payment report
```

### 8.4 AstraPay API Integration

| Function | API | Endpoint |
|----------|-----|----------|
| Push to Payment (create transaction) | Payment Channel | `POST /merchant-service/push-payments` |
| Payment Callback (receive status) | Payment Channel | Callback URL (merchant-defined) |
| Generate QR MPM | QRIS SNAP BI | `POST /snap/v1.0/qr/qr-mpm-generate` |
| QR Payment Notification | QRIS SNAP BI | Callback URL |
| Check Transaction Status | Payment Channel | `GET /merchant-service/payments/status` |
| Disbursement (reward) | Disbursement | `POST /disbursement-service/h2h/inquiries` |
| Biller Inquiry | Biller Open API | Inquiry endpoint per product |
| Report | Report API | `POST /snap/v1.0/report` |

---

## 9. WhatsApp Bot Flow (State Machine)

```
                    ┌──────────┐
                    │ GREETING │
                    └────┬─────┘
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
        ┌─────────┐ ┌────────┐ ┌──────────┐
        │ CATALOG │ │  PROMO │ │  HELP     │
        └────┬────┘ └────────┘ └──────────┘
             │
             ▼
        ┌─────────┐
        │ SELECT  │ ◄── Pick product + qty
        │ PRODUCT │
        └────┬────┘
             │
             ▼
        ┌─────────┐
        │ ADD     │ ──► [Tambah Produk] → loop to CATALOG
        │ MORE?   │
        └────┬────┘
             │ [Bayar Sekarang]
             ▼
        ┌─────────┐
        │ COLLECT │ ◄── Name, address, notes
        │ DETAILS │
        └────┬────┘
             │
             ▼
        ┌─────────┐
        │ CONFIRM │ ◄── Order summary
        │ ORDER   │
        └────┬────┘
             │
      ┌──────┴──────┐
      ▼              ▼
┌──────────┐   ┌──────────┐
│ ASTRA PAY│   │   QRIS   │
│ Push to  │   │ Generate │
│ Pay      │   │ QR MPM   │
└────┬─────┘   └────┬─────┘
     │              │
     └──────┬───────┘
            ▼
     ┌──────────┐
     │  PAYMENT │ ◄── Wait callback AstraPay
     │  WAITING │
     └────┬─────┘
          │
     ┌────┴────┐
     ▼         ▼
┌────────┐ ┌────────┐
│SUCCESS │ │ FAILED │
└────────┘ └────────┘
     │
     ▼
┌──────────┐
│   DONE   │
└──────────┘
```

---

## 10. Payment Flow Detail

### 10.1 Push to Payment Sequence

```
WhatsApp Bot              Backend                   AstraPay
     │                       │                          │
     │  Customer input nomor HP                        │
     │──────────────────────►│                          │
     │                       │  POST /push-payments     │
     │                       │  {merchantTrxId, amount} │
     │                       │─────────────────────────►│
     │                       │                          │
     │                       │  Response: {urlRedirect} │
     │                       │◄─────────────────────────│
     │                       │                          │
     │  Kirim link bayar     │                          │
     │◄──────────────────────│                          │
     │                       │                          │
     │  Customer klik link → buka halaman PIN AstraPay  │
     │─────────────────────────────────────────────────►│
     │                       │                          │
     │  Customer input PIN                              │
     │─────────────────────────────────────────────────►│
     │                       │                          │
     │                       │  Payment Callback         │
     │                       │  {merchantTrxId, astrapayTrxId, status: "Approved"}
     │                       │◄─────────────────────────│
     │                       │                          │
     │                       │  Update order status     │
     │                       │  "paid"                  │
     │                       │                          │
     │  Konfirmasi sukses    │                          │
     │◄──────────────────────│                          │
```

### 10.2 QRIS Sequence

```
WhatsApp Bot              Backend                   AstraPay SNAP BI
     │                       │                          │
     │  Customer pilih QRIS                             │
     │──────────────────────►│                          │
     │                       │  POST qr-mpm-generate     │
     │                       │  {partnerRefNo, amount}   │
     │                       │─────────────────────────►│
     │                       │                          │
     │                       │  Response: {qrContent}    │
     │                       │◄─────────────────────────│
     │                       │                          │
     │  Tampilkan QR code    │                          │
     │◄──────────────────────│                          │
     │                       │                          │
     │  Customer scan QR → bayar via e-wallet/bank      │
     │─────────────────────────────────────────────────►│
     │                       │                          │
     │                       │  Payment Notification     │
     │                       │  {originalPartnerRefNo, status} │
     │                       │◄─────────────────────────│
     │                       │                          │
     │                       │  Update order status     │
     │                       │                          │
     │  Konfirmasi sukses    │                          │
     │◄──────────────────────│                          │
```

---

## 11. Scope & Priorities

### MVP (Demo Day — 3 Juli 2026)

| Must Have | 
|-----------|
| Merchant dashboard: register, login, CRUD products |
| WhatsApp bot: greeting, catalog browsing, order flow |
| Payment: Push to Payment AstraPay |
| Order management: list, status update |
| Payment callback handling |

| Should Have |
|-------------|
| QRIS payment method |
| Order confirmation message |
| Dashboard report export |
| Template broadcast message |

| Nice to Have |
|--------------|
| Order status check via WhatsApp |
| Multi-varian produk |
| Loyalty points via Disbursement |
| Biller products (pulsa, token) |

### Out of Scope (Hackathon)

| Item | Reason |
|------|--------|
| WABA verification (Meta business) | Butuh approval Meta, terlalu lama |
| Production deployment | Hackathon scope = prototype sandbox |
| Full NLP chatbot | Gunakan rule-based menu (lebih reliable untuk demo) |
| Payment reconciliation automation | Gunakan manual check via dashboard |

---

## 12. Success Metrics (Demo)

| Metric | Target |
|--------|--------|
| Merchant setup time | < 10 menit dari register sampai aktif |
| Customer order flow | < 2 menit dari chat pertama sampai bayar |
| Payment success rate | > 90% di sandbox |
| Demo scenario | 1 merchant + 2 customer flow via WhatsApp live |

---

## 13. Risk & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| WhatsApp Business API sandbox terbatas | Flow tidak bisa live via WA | Gunakan WhatsApp simulator atau mock |
| AstraPay sandbox down / lambat | Pembayaran gagal | Siapkan fallback flow & simulasi |
| Waktu development mepet (20 hari) | Fitur tidak selesai | Fokus MVP, potong scope tegas |
| Callback payment tidak sampai | Order stuck "unpaid" | Polling status transaksi tiap 5 detik |

---

## 14. Timeline (11 Juni – 3 Juli)

| Week | Date | Deliverable |
|------|------|------------|
| **Week 1** | 11–17 Jun | Project setup, DB schema, auth, merchant dashboard + CRUD products |
| **Week 2** | 18–24 Jun | WhatsApp bot engine, catalog browsing flow, order creation flow |
| **Week 3** | 25–30 Jun | AstraPay Push to Payment integration, callback, payment flow end-to-end |
| **Week 4** | 1–3 Jul | QRIS integration, polishing, bug fixes, dry-run demo, submit |

---

## 15. Appendix

### A. References

- [AstraPay Merchant Docs](https://docs.astrapay.com/)
- [AstraPay API Docs](https://www.astrapay.com/docs/api)
- [AstraPay Hackathon 2026](https://www.astrapay.com/blog/astrapay-hackathon-2026)
- [WhatsApp Business Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api)
- [DOKU PayChat Benchmark](https://docs.doku.com/accept-payments/no-integration-products/paychat)
- [SNAP BI Specification](https://github.com/orgs/Swift-Indonesia/discussions/)

### B. Glossary

| Term | Definition |
|------|-----------|
| WABA | WhatsApp Business Account — akun resmi bisnis di WhatsApp |
| Push to Payment | Metode bayar AstraPay tanpa linking akun (input HP + PIN) |
| QR MPM | QR Merchant Presented Mode — QR yang ditampilkan merchant ke customer |
| SNAP BI | Standar Nasional Open API Pembayaran — standar Bank Indonesia |
| MDR | Merchant Discount Rate — biaya layanan per transaksi |
| Settlement | Proses pencairan dana dari payment gateway ke rekening merchant |

---

*PRD Version 1.0 — AstraPay Hackathon 2026*
