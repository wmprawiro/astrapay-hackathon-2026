# Slide Deck Proposal — AstraPay WhatsApp Commerce

> Hackathon AstraPay 2026 — "Product Innovation Integrated with AstraPay Ecosystem"
> 10 Slide untuk Proposal & Pitch

---

## SLIDE 1 — COVER

**Judul:**
# AstraPay WhatsApp Commerce
## Jualan di WhatsApp, Bayar Pakai AstraPay. Tanpa Website, Tanpa Ribet.

**Subtitle:**
Solusi All-in-One WhatsApp Commerce Terintegrasi Ekosistem AstraPay untuk Digitalisasi UMKM Indonesia

**Nama Tim:** [isi]
**Anggota:** [isi 1-4 orang]
**Hackathon AstraPay 2026**

---

## SLIDE 2 — PROBLEM STATEMENT

**Header: Kenapa Ini Masalah Besar?**

| Fakta | Angka |
|-------|-------|
| UMKM di Indonesia | **64 juta** |
| Yang sudah terdigitalisasi | **< 20%** |
| Pengguna WhatsApp di Indonesia | **90%+ pengguna internet** |
| UMKM punya website/aplikasi sendiri | **< 5%** |

**Realita UMKM Saat Ini:**
- Jualan via WhatsApp → chat pelanngan satu-satu
- Catat pesanan di kertas / buku
- Minta transfer manual → tunggu bukti → cek satu-satu
- Sering salah catat, pesanan hilang, pembeli kabur
- **Lambat, rawan error, tidak scalable**

> **"64 juta UMKM butuh cara jualan digital yang semudah chatting."**

---

## SLIDE 3 — PAIN POINTS (BY STAKEHOLDER)

**Header: Siapa yang Dirugikan?**

| Stakeholder | Pain Point |
|-------------|------------|
| **UMKM (Bu Rina, Warung Sembako)** | Tidak punya sistem order & bayar terintegrasi; pencatatan manual; tidak bisa terima pembayaran digital |
| **Pelanggan** | Ribet pindah aplikasi untuk bayar; tidak percaya transfer manual; malas install aplikasi baru |
| **Bengkel Motor (Pak Agus)** | Booking servis via chat tidak terstruktur; sparepart susah dicatat; customer sering cancel/no-show |
| **AstraPay** | Belum punya kanal WhatsApp commerce yang memanfaatkan seluruh ekosistemnya (Payment + QRIS + Disbursement + Biller + Loyalty) |

> **WhatsApp adalah "super-app" de facto Indonesia — tapi transaksinya masih manual.**

---

## SLIDE 4 — SOLUTION OVERVIEW

**Header: AstraPay WhatsApp Commerce**

> **"WhatsApp-mu sekarang bisa jadi toko online + mesin kasir."**

**Apa ini?**
Chatbot WhatsApp yang terhubung ke ekosistem AstraPay — pelanggan chat, lihat katalog, pesan, dan bayar **semua dalam WhatsApp** tanpa install apa pun.

**3 Pilar Utama:**

| Pilar | Untuk Siapa | Fungsi |
|-------|-------------|--------|
| Dashboard Web | Merchant (UMKM/Bengkel) | Setup katalog, atur chatbot, pantau pesanan & pembayaran |
| WhatsApp Bot | Pelanggan | Chat → lihat produk → pilih → isi data → bayar → konfirmasi |
| AstraPay Integration | Backend | Push to Payment, QRIS SNAP BI, Callback, Settlement H+1 |

**5 Unique Selling Points:**

| USP | Deskripsi |
|-----|-----------|
| **Zero Integration** | Merchant setup dalam < 10 menit, tidak perlu coding |
| **WhatsApp-Native** | Pelanggan tidak install apa pun — WhatsApp sudah ada di HP |
| **AstraPay Ecosystem** | Bayar pakai AstraPay Saldo + QRIS (semua e-wallet/bank) |
| **Ekosistem Lengkap** | Payment + QRIS + Disbursement + Biller + Loyalty |
| **Settlement H+1** | Dana langsung cair keesokan hari |

---

## SLIDE 5 — CARA KERJA (SIMPLE FLOW)

**Header: Gimana Cara Kerjanya?**

```
┌─────────────────────────────────────────────────────┐
│              SISI PELANGGAN (WhatsApp)               │
│                                                       │
│  ❶ Scan QR / Klik Link WA                            │
│  ❷ Bot menyapa → tampilkan katalog                   │
│  ❸ Pilih produk → jumlah → isi data                  │
│  ❹ Konfirmasi pesanan                                │
│  ❺ Pilih bayar: AstraPay / QRIS                      │
│  ❻ Bayar → notifikasi sukses                         │
│                                                       │
└────────────────────────┬────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────┐
│                   SISI MERCHANT                       │
│                                                       │
│  ⓿ Setup toko di dashboard (< 10 menit)               │
│  ❶ Pesanan otomatis muncul di dashboard               │
│  ❷ Pantau status: Baru → Dibayar → Dikirim → Selesai  │
│  ❸ Dana settlement H+1 ke rekening                    │
│  ❹ Download laporan transaksi (CSV)                   │
│                                                       │
└─────────────────────────────────────────────────────┘
```

**Visual suggestion:**
- Tampilkan screenshot mockup WA chat (kiri) + dashboard (kanan)
- Atau pakai diagram Mermaid "Flowchart Customer End-to-End" dari `flow.md`

---

## SLIDE 6 — TARGET USER & USE CASE

**Header: Siapa yang Pakai? Untuk Apa?**

| Segmen | Persona | Use Case |
|--------|---------|----------|
| **UMKM Mikro** | Bu Rina, Pemilik Warung Sembako | Jual sembako via WA, terima pembayaran AstraPay, catat order otomatis |
| **Bengkel Motor** | Pak Agus, Pemilik Bengkel | Booking servis via WA, jual sparepart, DP via AstraPay, kurangi no-show |
| **Kuliner / F&B** | Warung makan, catering rumahan | Terima pesanan pre-order + bayar di muka via WA |
| **Jasa** | Laundry, salon, fotokopi | Booking + bayar via WA tanpa aplikasi |
| **Pelanggan** | 18-55 tahun, terbiasa WhatsApp | Cari produk → pesan → bayar — 100% di HP tanpa pindah aplikasi |

**Fokus Bonus Hackathon:**

| Bonus Poin | Penerapan |
|------------|-----------|
| Digitalisasi UMKM | Target utama: warung, toko kelontong, UMKM tanpa website |
| Ekosistem Kendaraan Roda 2 | Flow booking servis motor, jual sparepart, pembayaran DP/pelunasan |

**Visual suggestion:**
- Tampilkan 2 persona card (Bu Rina + Pak Agus)
- Pakai diagram Mermaid "Customer Journey" dari `flow.md`

---

## SLIDE 7 — FITUR MVP & DEMO FLOW

**Header: Apa yang Akan Didemokan (3 Juli 2026)?**

| Must Have (Demo) | Deskripsi |
|------------------|-----------|
| Merchant Dashboard | Register, login, CRUD produk, lihat pesanan |
| WhatsApp Bot | Greeting, katalog, order flow, konfirmasi |
| Push to Payment AstraPay | Bayar via nomor HP + PIN (tanpa link akun) |
| Payment Callback | Notifikasi sukses ke customer & merchant |

| Should Have | Deskripsi |
|-------------|-----------|
| QRIS Payment | Generate QR MPM via SNAP BI |
| Order Status Tracking | Baru → Dibayar → Diproses → Dikirim → Selesai |
| Broadcast Message | Kirim promo/pengingat ke pelanggan |

**Demo Scenario (Live):**
1. Merchant setup toko di dashboard (2 menit)
2. Customer 1: chat WA → lihat katalog → pesan sembako → bayar AstraPay (1 menit)
3. Customer 2: chat WA → booking servis motor → bayar DP AstraPay (1 menit)
4. Merchant lihat pesanan masuk di dashboard → update status → selesai

---

## SLIDE 8 — TECHNICAL ARCHITECTURE

**Header: Arsitektur Teknis**

```
┌──────────────┐     ┌─────────────────────────┐     ┌──────────────────┐
│  WhatsApp    │────▶│  AstraWhatsApp Backend   │────▶│  AstraPay API    │
│  (Customer)  │     │                          │     │                  │
│              │     │  Bot Engine  Catalog Svc │     │  Push to Payment │
│  Chat → Pilih│     │  Order Svc   Payment Svc │     │  QRIS SNAP BI    │
│  → Bayar     │◀────│  Notif Svc               │◀────│  Callback        │
└──────────────┘     │                          │     │  Settlement      │
                     │  DB: PostgreSQL + Redis  │     └──────────────────┘
┌──────────────┐     │                          │
│  Merchant    │────▶│  API Gateway             │
│  Dashboard   │     └─────────────────────────┘
│  (Web App)   │
└──────────────┘
```

| Layer | Technology |
|-------|-----------|
| Frontend Dashboard | Next.js + Tailwind CSS |
| Backend API | Node.js (NestJS) / Go (Echo) |
| Database | PostgreSQL + Redis |
| WhatsApp API | WhatsApp Business Cloud API (Meta) |
| Payment | AstraPay Payment Channel + QRIS SNAP BI |
| Deployment | Docker + Cloud Run / k8s |

**Visual suggestion:**
- Copy-paste diagram Mermaid "System Architecture Overview" dari `flow.md` ke mermaid.live → screenshot → tempel di slide

---

## SLIDE 9 — BUSINESS IMPACT

**Header: Dampak Bisnis & Keunggulan Kompetitif**

**Bagi UMKM:**
- Setup toko online **< 10 menit** tanpa coding
- Terima pembayaran digital tanpa mesin EDC
- Pencatatan order otomatis → tidak ada pesanan hilang
- Dana settlement **H+1** → cash flow lancar
- Jangkau pelanggan lebih luas via WhatsApp (2 miliar+ pengguna global)

**Bagi AstraPay:**
- **Akuisisi merchant baru** dari 64 juta UMKM Indonesia
- **Volume transaksi baru** dari WhatsApp commerce channel
- **Adopsi ekosistem AstraPay** (Payment + QRIS + Biller + Disbursement + Loyalty) dalam satu solusi
- **Diferensiasi** dari kompetitor (GoPay, OVO, Dana) — belum ada yang punya solusi WA commerce end-to-end
- **Brand awareness** AstraPay sebagai enabler digitalisasi UMKM

**Bagi Pelanggan:**
- Belanja di WhatsApp yang sudah dipakai sehari-hari
- Bayar pakai AstraPay saldo atau QRIS (semua e-wallet)
- Dapat notifikasi real-time, tidak was-was transfer manual

**Diferensiasi vs DOKU PayChat:**

| Aspek | DOKU PayChat | AstraPay WhatsApp Commerce |
|-------|-------------|---------------------------|
| Sumber Dana | Kartu kredit, bank transfer | Saldo AstraPay + QRIS semua e-wallet |
| Ekosistem | Payment only | Payment + QRIS + Biller + Disbursement + Loyalty + Paylater |
| Bonus UMKM | General | Dalam untuk UMKM + ekosistem motor |
| Reward | Tidak ada | AstraPoints disbursement untuk loyalty |

---

## SLIDE 10 — ROADMAP & TIM

**Header: Rencana 20 Hari & Tim**

**Roadmap Prototype (11 Juni – 3 Juli 2026):**

| Minggu | Tanggal | Target | Key Deliverable |
|--------|---------|--------|-----------------|
| Week 1 | 11-17 Jun | Setup & Dashboard | Project scaffold, DB schema, auth, merchant dashboard + CRUD produk |
| Week 2 | 18-24 Jun | WhatsApp Bot Engine | Bot flow (greeting → katalog → order), chat session management, WhatsApp API integration |
| Week 3 | 25-30 Jun | AstraPay Integration | Push to Payment, callback handling, payment flow end-to-end |
| Week 4 | 1-3 Jul | Polishing & Demo | QRIS integration, error handling, dry-run, submit demo |

**Tim:**

| Nama | Role | Tanggung Jawab |
|------|------|----------------|
| [isi] | Backend Engineer | API, database, AstraPay integration |
| [isi] | Frontend Engineer | Merchant dashboard, UI/UX |
| [isi] | WhatsApp Integration | Bot engine, WhatsApp Business API, chat flow |
| [isi] | PM / Presenter | Pitch deck, demo script, koordinasi |

**Key Risk & Mitigasi:**

| Risk | Mitigasi |
|------|----------|
| WABA verification lama (Meta) | Gunakan nomor test / sandbox Meta untuk demo |
| AstraPay sandbox lambat | Daftar early, siapkan mock server untuk development paralel |
| Waktu mepet (20 hari) | Fokus MVP, potong scope tegas, parallel development |

---

## SLIDE 11 — CLOSING (Opsional)

**Header: Siap Digitalisasi 64 Juta UMKM?**

> **AstraPay WhatsApp Commerce**
> Jualan di WhatsApp. Bayar pakai AstraPay. Tanpa Website. Tanpa Ribet.

**Terima Kasih**

- Link Demo: [isi setelah prototype jadi]
- Repository: https://github.com/wmprawiro/astrapay-hackathon-2026
- Kontak: [isi]

---

*Slide deck outline — siap dipindahkan ke Google Slides / PowerPoint / Canva*
*Semua diagram Mermaid tersedia di `flow.md` — screenshot dari mermaid.live lalu tempel ke slide*
