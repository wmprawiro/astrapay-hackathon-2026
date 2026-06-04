# Research: AstraPay Hackathon 2026

> Tanggal: 4 Juni 2026
> Sumber: [docs.astrapay.com](https://docs.astrapay.com/), [astrapay.com/docs/api](https://www.astrapay.com/docs/api), [astrapay.com](https://www.astrapay.com/)

---

## 1. Ringkasan Hackathon

| Detail | Info |
|--------|------|
| **Tema** | Product Innovation Integrated with AstraPay Ecosystem |
| **Registrasi & Proposal** | 20 Mei – 7 Juni 2026 |
| **Seleksi** | 8 – 9 Juni 2026 |
| **Top 10 Diumumkan** | 10 Juni 2026 |
| **Prototype Development** | 11 – 30 Juni 2026 |
| **Demo Day** | 3 Juli 2026 (online) |
| **Awarding** | 11 Juli 2026 (offline – Semesta Berpesta Bandung) |
| **Tim** | Maks 4 orang, boleh beda universitas/instansi |
| **Pendaftaran** | [Microsoft Forms](https://forms.cloud.microsoft/r/wejuMaW3PE) |

### Komponen Proposal Wajib

1. **Rumusan Masalah**
2. **Solusi / Ide**
3. **Target User / Use Case**
4. **Business Impact**

### Poin Bonus

- Fokus pada **digitalisasi UMKM**
- Fokus pada **ekosistem kendaraan roda dua**
- Solusi harus **terintegrasi** dengan produk/layanan/ekosistem AstraPay
- Prototype harus **fungsional dan dapat didemokan** (bukan sekadar UI/UX)

---

## 2. Ekosistem AstraPay Bisnis

### 2.1 QRIS

**Deskripsi:** Standar pembayaran QR nasional — terima pembayaran dari SEMUA e-wallet (GoPay, OVO, Dana, ShopeePay, dll) dan mobile banking.

**Keunggulan:**

- Pencairan dana **setiap hari** (termasuk hari libur nasional)
- MDR **0%** untuk usaha Mikro
- Akses pembiayaan ekosistem Astra
- Dashboard real-time untuk pantau transaksi

**API (QRIS Dynamic SNAP BI V1.0):**

| API | Method | Fungsi |
|-----|--------|--------|
| Generate QR MPM (Create Bill) | POST | Membuat QR Code bayar |
| QR Payment Query (Check Status) | POST | Cek status pembayaran |
| Payment Notification (Callback) | POST | Notifikasi pembayaran sukses |
| Refund QR MPM | POST | Pengembalian dana |

**Use Case:**

- Mempercepat checkout di kasir (QR scanner / customer-input amount)
- Otomasi mesin parkir tanpa petugas

**Environment:** SNAP BI V1.0

---

### 2.2 Payment Channel

**Deskripsi:** Integrasikan pembayaran AstraPay langsung di aplikasi/web merchant. Pelanggan bayar tanpa harus keluar dari aplikasi Anda.

**Dua Metode:**

| Metode | Cara Kerja |
|--------|-----------|
| **Payment with Linking** | Hubungkan akun AstraPay → bayar dengan saldo terhubung |
| **Push to Payment (BETA)** | Input nomor HP → masukkan PIN → bayar (tanpa linking) |

**Keunggulan:**

- Integrasi cepat via API
- Dashboard transaksi detail & akurat
- Pencairan dana **H+1**
- Dukungan postman collection untuk testing

**API (Payment Channel + SNAP BI V1.0):**

| API | Fungsi |
|-----|--------|
| Account Binding | Link akun AstraPay ke akun merchant |
| Account Binding Inquiry | Cek status binding |
| Account Unbinding | Putuskan link akun |
| Direct Debit Payment | Eksekusi pembayaran (via linking) |
| Direct Debit Payment Status | Cek status transaksi |
| Direct Debit Payment Notify | Callback notifikasi transaksi |
| Direct Debit Payment Refund | Refund transaksi |
| Auth Payment | Pembayaran dengan reserve → capture |
| Capture Payment | Menyelesaikan pembayaran reserved |
| Void Payment | Batalkan transaksi reserved |
| Balance Inquiry | Cek saldo customer |
| Top Up Instruction (BETA) | Instruksi top-up |

**Flow Keamanan (SNAP BI):**

1. Generate Signature Auth (X-CLIENT-KEY + X-TIMESTAMP → SHA256 with RSA-2048 → base64)
2. B2B Access Token Request → accessToken (900 detik)
3. Generate Signature Service (HTTP_METHOD:URL:AccessToken:Hex(SHA256(body)):Timestamp → HMAC_SHA512 dengan Client Secret → base64)

**Reporting & Refund:** Report API untuk rekonsiliasi transaksi.

**Use Case:**

- Layanan ride-hailing / ojek online
- Konsultasi dokter via aplikasi
- In-app purchase / subscription

---

### 2.3 Disbursement

**Deskripsi:** Kirim dana secara massal ke banyak akun AstraPay sekaligus — hitungan menit.

**Dua Metode:**

| Metode | Cara |
|--------|------|
| **Via Dashboard** | Upload file Excel/CSV, tanpa coding |
| **Host-to-Host (API)** | Integrasi langsung ke sistem Anda |

**Tiga Opsi Disbursement:**

| Opsi | Deskripsi |
|------|-----------|
| AstraPay Saldo | Transfer saldo langsung ke akun AstraPay |
| AstraPoints | Transfer poin yang bisa ditukar voucher (Alfamart, Indomaret, Shell, McD, dll) |
| AstraVouchers | Voucher khusus (tagihan, pulsa, game, dll) |

**Batasan Akun:**

| Tipe | Max Saldo | Max Transaksi Bulanan |
|------|-----------|-----------------------|
| Classic (non-KYC) | Rp 2.000.000 | Rp 20.000.000 |
| Preferred (KYC) | Rp 10.000.000 | Rp 20.000.000 |

**API Disbursement:**

| API | Method | Fungsi |
|-----|--------|--------|
| Inquiry | POST `/disbursement-service/h2h/inquiries` | Cek validitas penerima (nomor HP + amount) |
| Payment | POST `/disbursement-service/h2h/disbursements` | Eksekusi transfer (pakai inquiryCode dari Inquiry) |
| Check Status | GET `/disbursement-service/h2h/{inquiryCode}` | Cek status transaksi |

**Catatan Penting:**

- SLA response: **45 detik**
- inquiryCode berlaku: **60 menit**
- Status: PENDING → PROCESSING → SUCCESS / FAILED / EXPIRED
- Timeout handling: merchant wajib melakukan advice (retry dengan inquiryCode yang sama)

**Keamanan (HMAC-SHA256):**

```
StringToSign = HTTPMethod + ":" + URL + ":" + AstraPayKey + ":" + Hex(SHA256(RequestBody)) + ":" + Timestamp
Signature = HMAC-SHA256(StringToSign, AstraPayValidationKey)
```

**Use Case:**

- Penggajian & insentif karyawan
- Pembayaran vendor
- Reimbursement massal
- Refund pelanggan
- Reward/bonus konsumen

---

### 2.4 Mitra AstraPay (Segera Hadir)

**Deskripsi:** Program afiliasi — jual layanan dan produk digital AstraPay, dapatkan komisi per transaksi.

**Produk yang bisa dijual:**

- Top Up Saldo AstraPay
- Bayar Angsuran
- Beli Pulsa & Paket Data
- Bayar Listrik (PLN) Token & Tagihan
- Bayar Tagihan Air
- Bayar BPJS Kesehatan
- Bayar Tagihan TV Kabel & Internet
- Bayar PBB
- Bayar Gas

**Keunggulan:**

- Pencatatan transaksi real-time
- Download laporan kapanpun
- Komisi per transaksi

**Use Case:**

- "Kantor bayar" untuk masyarakat unbanked
- Distribusi saldo ke cabang-cabang

---

### 2.5 Biller Open API

**Deskripsi:** Jual berbagai produk digital langsung di aplikasi Anda melalui API.

**Kategori Produk (13+):**

| Kategori | Detail |
|----------|--------|
| Angsuran | Kredit motor, elektronik, dll |
| Angsuran Dinamis | Cicilan fleksibel |
| Pulsa | All operator (prabayar) |
| Pulsa Pascabayar | Tagihan pascabayar |
| Paket Data | Internet semua operator |
| Token Listrik | PLN prabayar |
| Tagihan Listrik | PLN pascabayar |
| Tagihan Air | PDAM |
| Internet & TV Kabel | ISP dan TV berlangganan |
| Telkom | Telepon rumah, IndiHome |
| BPJS Kesehatan | Iuran BPJS |
| PBB | Pajak Bumi Bangunan |
| Gas | Gas alam |

**API Flow:**

```
Inquiry → Transaksi → Cek Status → Callback
```

**Fitur Kunci:**

- Product List (daftar produk selalu terupdate otomatis)
- Product Notification (notifikasi perubahan harga/produk baru)
- Callback (notifikasi transaksi sukses)

**Use Case:**

- Toko digital dalam aplikasi
- Auto-update harga & katalog produk

---

### 2.6 Layanan Tambahan (dari API Docs)

| Layanan | Deskripsi |
|---------|-----------|
| **Paylater** | Auto-Preferred User, Registration API, Share Data Customer, Reminder Repayment |
| **Customer Top Up (SNAP BI)** | Account Inquiry, Top Up, Inquiry Status |
| **Loyalty** | Customer Earn Point, Reward Engine, Loyalty Webview Integration |
| **Report** | External Report API untuk rekonsiliasi, Rate Limiting |

---

## 3. Flow Bisnis Umum

### Alur Merchant Onboarding

```
Pendaftaran (via dashboard.astrapay.com) 
  → Verifikasi Data (1-3 hari kerja) 
  → Aktivasi → Bisa Bertransaksi
```

### Alur Transaksi QRIS

```
Customer Scan QR / Bayar → Pencatatan Transaksi → Rekonsiliasi Sistem 
  → Settlement (pencairan) → Dana Masuk Rekening Merchant
```

---

## 4. Environment & Endpoint

| Environment | Base URL |
|-------------|----------|
| **Sandbox** | `https://sandbox.astrapay.com/` |
| **Dashboard** | `https://dashboard.astrapay.com/` |
| **API Docs** | `https://www.astrapay.com/docs/api` |
| **Merchant Docs** | `https://docs.astrapay.com/` |

---

## 5. Keamanan API (Ringkasan)

### Payment Channel (Legacy)
- OAuth2 `client_credentials` → Bearer Token (900 detik)
- Callback dilindungi `callbackSecurity` (timestamp + merchantTransactionId)

### SNAP BI (Standar Nasional Open API Pembayaran)
- RSA-2048 untuk Signature Auth
- B2B Access Token (900 detik)
- HMAC-SHA512 untuk Signature Service
- Header: X-CLIENT-KEY, X-TIMESTAMP, X-SIGNATURE, X-PARTNER-ID, X-EXTERNAL-ID, CHANNEL-ID
- X-EXTERNAL-ID: unik, 36 random numeric string, tidak boleh sama dalam 1 hari

### Disbursement
- OAuth2 `client_credentials` → Bearer Token (3600 detik)
- HMAC-SHA256 signature per request
- Header: Authorization, x-signature, x-timestamp, x-astrapay-key

---

## 6. Benchmark: DOKU PayChat (WhatsApp Commerce)

> Sumber: [docs.doku.com](https://docs.doku.com/accept-payments/no-integration-products/paychat), [doku.com/produk](https://www.doku.com/produk/other-products/paychat)

### Apa itu DOKU PayChat?

DOKU PayChat adalah solusi **all-in-one WhatsApp-based commerce** — merchant bisa jualan, komunikasi, dan terima pembayaran **semua dalam WhatsApp** tanpa perlu website atau aplikasi.

### Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| **WhatsApp Business (WABA)** | Profil bisnis resmi via WhatsApp Business API |
| **Accept Order** | Katalog produk dalam chat → pelanggan pilih → pesan → bayar |
| **Bill Broadcast** | Kirim pesan massal (promo, pengingat bayar) via dashboard atau API |
| **Custom Chatbot Flow** | Atur sapaan, pertanyaan, alur pesanan sesuai bisnis |
| **QR Code & Link** | Sebarkan QR/link PayChat di toko, kemasan, online |
| **Dashboard Real-Time** | Pantau chat, pesanan, status bayar dalam satu layar |
| **Ekspor Data** | Download laporan Excel untuk pengiriman/akuntansi |
| **45+ Metode Bayar** | Kartu kredit, bank transfer, QRIS, gerai ritel, dll |

### Contoh Use Case DOKU PayChat

| Use Case | Flow |
|----------|------|
| **Event Registration** | Peserta pilih tiket → isi data di WhatsApp → bayar → data peserta otomatis tercatat |
| **On-Site Payment** | Pesan di tempat → bayar via WhatsApp link → tanpa mesin EDC |
| **Down Payment** | Pelanggan pilih layanan → bayar DP via WhatsApp → otomatis konfirmasi booking |
| **Fundraising** | Donatur pilih nominal → isi data → bayar → terima bukti otomatis |

### Cara Kerja

```
1. Atur chatbot & alur chat dari dashboard
2. Sebarkan QR code / link WhatsApp ke pelanggan  
3. Pelanggan chat → pilih produk → isi data → bayar → selesai
Semua dalam WhatsApp, tanpa install apa pun.
```

### Kenapa Ini Relevan untuk Hackathon AstraPay?

AstraPay memiliki **semua building block** untuk membangun solusi WhatsApp Commerce serupa:

| Komponen DOKU PayChat | Padanan di AstraPay |
|------------------------|---------------------|
| Payment Gateway | **Payment Channel** (Direct Debit / Push to Payment) |
| QRIS | **QRIS Dynamic SNAP BI** |
| Katalog & Broadcast | Bisa dibangun sebagai layer di atas API |
| Chatbot WhatsApp | Integrasi WhatsApp Business API (pihak ketiga) |

---

## 7. Ide Utama Hackathon: "AstraPay WhatsApp Commerce" (PayChat-like)

### Konsep

**AstraPay WhatsApp Commerce** — solusi UMKM jualan dan terima pembayaran AstraPay langsung di WhatsApp tanpa website, tanpa aplikasi, tanpa integrasi rumit.

### Arsitektur

```
┌──────────────────────────────────────────────────────┐
│                  WhatsApp (Customer)                  │
│  Chat → Lihat Katalog → Pilih Produk → Bayar         │
└──────────────────────┬───────────────────────────────┘
                       │ WhatsApp Business API
┌──────────────────────▼───────────────────────────────┐
│              Backend WhatsApp Commerce                │
│  Chatbot Engine │ Product Catalog │ Order Management │
└──────┬──────────────────────────────────┬────────────┘
       │                                  │
┌──────▼──────────┐              ┌───────▼─────────────┐
│  Payment Channel │              │    QRIS Dynamic     │
│  (Push to Pay)   │              │    SNAP BI V1.0     │
│  Via nomor HP    │              │  Generate QR MPM    │
└──────────────────┘              └─────────────────────┘
       │                                  │
┌──────▼──────────────────────────────────▼────────────┐
│              AstraPay Merchant Dashboard              │
│         Settlement H+1 │ Report │ Callback           │
└──────────────────────────────────────────────────────┘
```

### Flow Customer

```
1. Customer scan QR / klik link WhatsApp merchant
2. Bot menyapa, tampilkan katalog produk (dari Biller Open API / custom)
3. Customer pilih produk & jumlah
4. Customer isi data (nama, alamat, dll)
5. Bot generate pembayaran via:
   - Push to Payment: input nomor HP → redirect ke PIN AstraPay → bayar
   - QRIS: tampilkan QR code → customer scan via app apa pun
6. Payment confirmed → notifikasi ke customer & merchant
7. Order tercatat di dashboard → siap diproses
```

### Fitur yang Ditawarkan

| Fitur | Implementasi |
|-------|-------------|
| **Katalog Produk WhatsApp** | Tampilkan produk dalam chat, bisa sync dengan Biller Open API |
| **Pembayaran via Push to Payment** | Customer input nomor HP → PIN AstraPay → transaksi sukses |
| **Pembayaran via QRIS** | Generate QR MPM via SNAP BI → customer scan |
| **Order Management** | Dashboard pantau pesanan real-time |
| **Bill Broadcast** | Kirim promo / pengingat via WhatsApp Business API |
| **Auto Settlement** | Dana masuk rekening H+1 |
| **Laporan Transaksi** | Download via Report API |
| **Reward Customer** | Disbursement AstraPoints untuk pelanggan loyal |

### Mengapa Memenuhi Kriteria Hackathon

| Kriteria | Keterangan |
|----------|-----------|
| ✅ Product Innovation | WhatsApp-first commerce, tanpa perlu website/aplikasi |
| ✅ Integrated with AstraPay | Payment Channel, QRIS, Biller Open API, Disbursement, Report |
| ✅ Digitalisasi UMKM (BONUS) | Target utama: warung, toko kelontong, UMKM tanpa website |
| ✅ Kendaraan Roda 2 (BONUS) | Bisa custom: booking servis motor, beli sparepart, bayar cicilan |
| ✅ Fungsional Prototype | Bisa didemokan: chat WhatsApp → pilih produk → bayar AstraPay |
| ✅ Business Impact | Buka akses pasar digital untuk jutaan UMKM Indonesia |

### Diferensiasi dari DOKU PayChat

| Aspek | DOKU PayChat | AstraPay WhatsApp Commerce |
|-------|-------------|---------------------------|
| Sumber dana | Kartu kredit, bank transfer, QRIS | Saldo AstraPay + QRIS semua e-wallet |
| Ekosistem | Payment only | Payment + Disbursement + Biller + Loyalty + Paylater |
| Use case UMKM | General | Bisa diperdalam untuk UMKM + kendaraan roda 2 |
| Reward | Tidak ada | AstraPoints disbursement untuk loyalty |

### Roadmap Prototype (11–30 Juni)

| Minggu | Target |
|--------|--------|
| **Minggu 1** | Setup WhatsApp Business API + bot engine + catalog sederhana |
| **Minggu 2** | Integrasi AstraPay Payment Channel (Push to Payment) + callback |
| **Minggu 3** | Dashboard admin + order management + QRIS integration |
| **Minggu 4** | Polishing, testing end-to-end, siapkan demo flow |

---

## 8. Ide Alternatif untuk Hackathon

### Alternatif Lain

| Area | Ide |
|------|-----|
| **UMKM** | Aplikasi POS UMKM terintegrasi QRIS + Payment Channel + Biller API + Disbursement untuk payroll & reward |
| **UMKM** | Platform digitalisasi warung/toko kelontong dengan Mitra AstraPay sebagai "kantor bayar" |
| **UMKM** | Solusi pembukuan + pembayaran UMKM dengan QRIS + laporan otomatis via Report API |
| **Kendaraan Roda 2** | Aplikasi servis motor: booking → bayar via Payment Channel → refund/disbursement untuk klaim garansi |
| **Kendaraan Roda 2** | Program cicilan + asuransi motor via Paylater AstraPay |
| **Kendaraan Roda 2** | Loyalty program bengkel: tukar poin hadiah via AstraPoints Disbursement |
| **Cross-cutting** | Super-app UMKM: QRIS + Payment Channel + Mitra + Disbursement + Loyalty |
| **Cross-cutting** | Financial inclusion: agen banking di daerah terpencil via Mitra + Disbursement |
| **Cross-cutting** | Smart parking: QRIS Dynamic + disbursement refund kelebihan bayar |
| **Cross-cutting** | Digital voucher marketplace dengan Biller Open API + Disbursement voucher |

---

## 9. Checklist Pendaftaran

- [ ] Bentuk tim (maks 4 orang)
- [ ] Tentukan ide inovatif sesuai tema
- [ ] Pastikan ide bisa diintegrasikan dengan API AstraPay
- [ ] Buat proposal: Rumusan Masalah, Solusi, Target User/Use Case, Business Impact
- [ ] Fokus pada UMKM atau kendaraan roda dua (nilai tambah)
- [ ] Daftar via [Microsoft Forms](https://forms.cloud.microsoft/r/wejuMaW3PE) sebelum **7 Juni 2026**

---

*Report generated 4 Juni 2026. Last doc update: 6 Maret 2026 (API docs) / 29 April 2026 (Merchant docs).*
