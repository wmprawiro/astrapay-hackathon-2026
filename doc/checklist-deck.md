# CHECKLIST: Yang Harus Kamu Isi di Deck Proposal

> Deadline: **7 Juni 2026** — Submit PDF ke https://forms.cloud.microsoft/r/wejuMaW3PE

---

## ⚠️ YANG WAJIB DIISI (placeholder [isi] / [nama])

| # | Lokasi | Yang Harus Diisi | Slide |
|---|--------|-----------------|-------|
| 1 | **Nama Tim** | Nama tim kamu (contoh: "Tim ChatPay", "AstraBot Squad") | Slide 1, Slide 4 |
| 2 | **Anggota 1** | Nama + Role (Backend Engineer) | Slide 1, Slide 11 |
| 3 | **Anggota 2** | Nama + Role (Frontend Engineer) | Slide 1, Slide 11 |
| 4 | **Anggota 3** | Nama + Role (WhatsApp Integration) | Slide 1, Slide 11 |
| 5 | **Anggota 4** | Nama + Role (PM / Presenter) — opsional, min 1 orang | Slide 1, Slide 11 |
| 6 | **Kontak** | Email / nomor HP / LinkedIn ketua tim | Slide 12 |

---

## 🎨 YANG WAJIB DIBUAT / SCREENSHOT (visual)

| # | Yang Harus Dibuat | Untuk Slide | Cara |
|---|-------------------|-------------|------|
| 7 | **Logo AstraPay** | Slide 1, Slide 12 | Download dari astrapay.com |
| 8 | **Diagram Arsitektur Sistem** | Slide 9 | Buka `doc/flow.md` → ambil Diagram #6 → copy ke [mermaid.live](https://mermaid.live) → screenshot PNG |
| 9 | **Diagram Customer Flow** | Slide 5 | Buka `doc/flow.md` → ambil Diagram #2 → mermaid.live → screenshot |
| 10 | **Mockup WhatsApp Chat** | Slide 5, Slide 8 | Bikin di Figma / Canva — lihat template di bawah |
| 11 | **Mockup Dashboard Merchant** | Slide 6, Slide 8 | Bikin di Figma / draw.io — lihat template di bawah |
| 12 | **QR Code ke GitHub** | Slide 12 | Generate di qr-code-generator.com |

---

## 📋 KONTEN PER SLIDE (COPY-PASTE READY)

---

### SLIDE 1 — COVER

```
JUDUL BESAR:
AstraPay Chat

SUBTITLE:
Jualan di WhatsApp. Bayar pakai AstraPay. Tanpa Website. Tanpa Ribet.

BOTTOM:
Hackathon AstraPay 2026 | Tim [ISI NAMA TIM] | Juni 2026
```

**Background:** Gradient ungu `#6C2BD9` → `#4A1D99`

**Visual:** Logo AstraPay kiri atas. Icon WhatsApp ⊕ AstraPay di tengah.

---

### SLIDE 2 — PROBLEM STATEMENT

```
HEADER:
Masalah: 30.2 Juta UMKM Masih Berjuang Secara Manual

KOLOM KIRI (3 ANGKA BESAR):
30.21 Juta
unit UMKM non-pertanian di Indonesia

99.70%
adalah skala mikro — tidak punya website/aplikasi

>90%
pengguna internet pakai WhatsApp

KOLOM KANAN (QUOTE — FONT ITALIC BESAR):
"Saya jualan di WhatsApp, catat pesanan di buku,
minta transfer manual. Kadang pesanan hilang,
kadang pembeli kabur."
— Bu Rina, Pemilik Warung Sembako

BOTTOM BAR (WARNA MERAH SOFT):
⚠️ Jual-beli via WhatsApp saat ini:
CHAT → CATAT MANUAL → TRANSFER → KONFIRMASI MANUAL
Lambat, rawan error, tidak scalable.
```

**Source:** Kementerian UMKM via Katadata Databoks (April 2026), DataReportal Digital 2026

---

### SLIDE 3 — PAIN POINTS

```
HEADER:
Kenapa Ini Harus Diselesaikan Sekarang?

4 KARTU SEJAJAR:

┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│ 🏪 UMKM MIKRO   │ 👤 PELANGGAN     │ 🏍️ BENGKEL MOTOR│ 🟣 ASTRA PAY     │
│                 │                 │                 │                 │
│ Tidak punya     │ Malas install   │ Booking servis  │ Belum punya     │
│ sistem order &  │ aplikasi baru.  │ via chat tidak  │ kanal WhatsApp  │
│ bayar terpadu.  │ Tidak percaya   │ terstruktur.    │ Commerce.       │
│ Pencatatan      │ transfer manual.│ Sparepart susah │ Padahal punya   │
│ manual, sering  │ Ingin semua     │ dicatat.        │ ekosistem:      │
│ hilang.         │ dalam 1 apps.   │ Customer sering │ Payment + QRIS  │
│                 │                 │ cancel/no-show. │ + Biller +      │
│                 │                 │                 │ Disbursement +  │
│                 │                 │                 │ Loyalty         │
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘

INSIGHT BOX (KUNING SOFT):
💡 WhatsApp adalah "super-app" de facto Indonesia.
   2 miliar+ pengguna global. Tapi transaksinya masih 100% MANUAL.
```

---

### SLIDE 4 — SOLUTION

```
HEADER:
Solusi: AstraPay Chat

HERO BANNER (GRADIENT UNGU):
"Jualan di WhatsApp. Bayar pakai AstraPay. Tanpa Website. Tanpa Ribet."

Chatbot WhatsApp terhubung ekosistem AstraPay —
pelanggan chat, lihat katalog, pesan, BAYAR — semua dalam WhatsApp.

3 PILAR (3 KOLOM):
┌──────────────────┬──────────────────┬──────────────────┐
│ 💻 Dashboard     │ 🤖 WhatsApp Bot  │ 🟣 AstraPay      │
│    Merchant      │    (Customer)    │    Integration   │
│                  │                  │                  │
│ Setup toko <10   │ Chat → lihat     │ Push to Payment  │
│ menit. Tidak     │ katalog → pilih  │ + QRIS SNAP BI   │
│ perlu coding.    │ → isi data →     │ + Callback +     │
│                  │ bayar. 100% di   │ Settlement H+1   │
│                  │ WhatsApp.        │                  │
└──────────────────┴──────────────────┴──────────────────┘

5 KEUNGGULAN (5 KOTAK KOMPAK):
┌────────┬────────┬────────┬────────┬────────┐
│ Zero   │ WA-    │ Astra  │ Eko-   │ Settle-│
│ Inte-  │ Native │ Pay    │ sistem │ ment   │
│ grasi  │        │ Ecosys │ Lengkap│ H+1    │
└────────┴────────┴────────┴────────┴────────┘
```

---

### SLIDE 5 — CARA KERJA: FLOW PELANGGAN

```
HEADER:
Bagaimana Cara Kerjanya? (Dari Sisi Pelanggan)

6 LANGKAH HORIZONTAL DENGAN PANAH →:

❶                 ❷                 ❸
Scan QR/Klik      Bot menyapa &     Lihat katalog
Link              tampilkan menu    & pilih produk
[ 📱 ]           [ 🤖 ]            [ 📦 ]
"Scan QR di       "Halo! Mau        "1. Beras 5kg
toko atau klik    beli apa?"        Rp 65.000"
link WA
     ↓                ↓                 ↓

❹                 ❺                 ❻
Isi data          Pilih metode      Bayar &
pengiriman        bayar             konfirmasi sukses
[ 📝 ]           [ 💳 ]            [ ✅ ]
"Nama: Rina       [🟣 AstraPay]     "LUNAS!
Alamat: Jl. M.5"  [📱 QRIS]         #INV-042"

HIGHLIGHT BAR:
⏱ < 2 menit dari chat pertama sampai bayar
📱 100% dalam WhatsApp — tidak install apa pun

VISUAL:
Screenshot mockup WA chat di bawah timeline
(lihat template chat di bawah)
```

---

### SLIDE 6 — CARA KERJA: FLOW MERCHANT

```
HEADER:
Bagaimana Cara Kerjanya? (Dari Sisi Merchant)

2 KOLOM:

KIRI — SETUP < 10 MENIT:       KANAN — DASHBOARD:
                                
① Daftar akun (1 menit)         ┌─────────────────────┐
   ↓                            │ 📦 Katalog Produk   │
② Tambah produk (3 menit)       │ Tambah, edit, stok  │
   Upload foto, nama,           │                     │
   harga, stok                  │ 📋 Pesanan Masuk    │
   ↓                            │ Baru → Dibayar →    │
③ Atur chatbot (2 menit)        │ Dikirim → Selesai   │
   Tulis sapaan & menu          │                     │
   ↓                            │ 💳 Pembayaran       │
④ Pilih metode bayar (1 menit)  │ Status real-time    │
   ☑ AstraPay  ☑ QRIS          │                     │
   ↓                            │ 📊 Laporan          │
⑤ Aktifkan (1 menit)            │ Download CSV/Excel  │
   Dapat QR + link WA           │                     │
   ↓                            │ 📢 Broadcast        │
⑥ Sebarkan QR                   │ Kirim promo massal  │
   • Tempel di toko             └─────────────────────┘
   • Share ke pelanggan
   • Post di medsos

BOTTOM:
✅ Tidak perlu coding  ✅ Tidak perlu website  ✅ Setup < 10 menit
🟣 Dana cair H+1        🟣 Laporan lengkap

VISUAL:
KANAN: Screenshot mockup dashboard (bikin di Figma)
```

---

### SLIDE 7 — TARGET USER

```
HEADER:
Siapa yang Akan Menggunakan?

2 PERSONA CARDS SEJAJAR:

┌─────────────────────────┐  ┌─────────────────────────┐
│ 👩 BU RINA              │  │ 👨 PAK AGUS             │
│ Pemilik Warung Sembako │  │ Pemilik Bengkel Motor   │
│                         │  │                         │
│ 🎯 UMKM Mikro           │  │ 🎯 Ekosistem Roda 2     │
│ 📱 Tech: Low            │  │ 📱 Tech: Medium         │
│ 💬 Hanya bisa WA        │  │ 🔧 Butuh booking        │
│                         │  │    servis terstruktur    │
│ "Pelanggan saya banyak  │  │                         │
│  yang tanya stok lewat  │  │ "Customer sering        │
│  WA. Saya catat di buku,│  │  booking tapi cancel    │
│  sering lupa."          │  │  dadakan."              │
│                         │  │                         │
│ SOLUSI KAMI:            │  │ SOLUSI KAMI:            │
│ Katalog WA + Bayar      │  │ Booking WA + DP        │
│ AstraPay + Order        │  │ AstraPay + Katalog     │
│ otomatis tercatat       │  │ sparepart              │
└─────────────────────────┘  └─────────────────────────┘

USE CASE LAIN (5 ICON BULAT):
🍜 Kuliner    👚 Laundry    💇 Salon    📸 Fotokopi    🍰 Kue Basah

🎯 BONUS POIN:
✅ Digitalisasi UMKM    ✅ Ekosistem Kendaraan Roda 2
```

---

### SLIDE 8 — DEMO FLOW

```
HEADER:
Live Demo — Yang Akan Didemokan 3 Juli 2026

SCENARIO 1 — UMKM SEMBAKO (3 menit):
Setup Toko → Chat Katalog → Bayar AstraPay → Pesanan Masuk
Bu Rina tambah   Customer pilih   Push to Payment   Order #001 tampil
produk           beras 5kg        sukses            di dashboard

SCENARIO 2 — BENGKEL MOTOR (2 menit):
Chat Bengkel → Pilih Servis+Jadwal → Bayar DP → Booking Konfirmasi
Customer scan    Servis Ringan        DP 25rb     #BKL-088
QR bengkel       Besok 09:00         dibayar      terkonfirmasi

SCENARIO 3 — DASHBOARD MERCHANT (1 menit):
Lihat Pesanan → Update Status → Notifikasi WA → Download CSV
2 pesanan masuk  "Dikirim"         Customer dapat  Laporan
                 +"Selesai"        notif          transaksi

⏱ TOTAL DEMO: ~6 MENIT
💻 END-TO-END: Dashboard → Chat WA → Bayar → Callback → Settlement
```

---

### SLIDE 9 — ARSITEKTUR & TECH STACK

```
HEADER:
Arsitektur Teknis

DIAGRAM (SCREENSHOT DARI MERMAID.LIVE):
[Gambar Diagram 6 dari doc/flow.md]
📱 WhatsApp + 💻 Dashboard → Backend API → 🟣 AstraPay API

TECH STACK TABLE:
┌─────────────────────┬──────────────────────────────────┐
│ Layer               │ Technology                        │
├─────────────────────┼──────────────────────────────────┤
│ Frontend Dashboard  │ Next.js 14 + Tailwind CSS         │
│ Backend API         │ Node.js (NestJS) / Go (Echo)      │
│ Database            │ PostgreSQL + Redis (session/cache)│
│ WhatsApp API        │ WhatsApp Business Cloud API (Meta)│
│ Payment Integration │ AstraPay Payment Channel + QRIS   │
│ Authentication      │ JWT + OAuth2 (AstraPay Client ID) │
│ File Storage        │ S3 / Cloud Storage                │
│ Deployment          │ Docker + Cloud Run / Google k8s   │
│ Monitoring          │ Prometheus + Grafana              │
└─────────────────────┴──────────────────────────────────┘
```

---

### SLIDE 10 — BUSINESS IMPACT

```
HEADER:
Dampak Bisnis — Why This Matters

3 KOLOM:

BAGI UMKM                │ BAGI ASTRA PAY         │ BAGI PELANGGAN
─────────────────────────│───────────────────────│──────────────────
✅ Setup <10 menit       │ ✅ Akuisisi merchant   │ ✅ Belanja di WA
   tanpa coding          │    baru dari 30.2jt    │    sehari-hari
✅ Terima bayaran        │    UMKM                │ ✅ Bayar AstraPay
   digital tanpa EDC     │ ✅ Volume transaksi    │    / QRIS
✅ Order otomatis        │    baru kanal WA       │ ✅ Notifikasi
   tercatat              │    commerce            │    real-time
✅ Dana cair H+1         │ ✅ Diferensiasi dari   │ ✅ Tidak was-was
   cash flow lancar      │    GoPay/OVO/Dana      │    transfer manual
✅ Jangkau lebih banyak  │ ✅ Adopsi penuh        │
   pelanggan via WA      │    ekosistem AstraPay  │

⭐ DIFERENSIASI vs DOKU PAYCHAT:
┌────────────────────┬───────────────────────────┐
│ DOKU PayChat       │ AstraPay Chat              │
├────────────────────┼───────────────────────────┤
│ Payment only       │ Payment + QRIS + Biller +  │
│                    │ Disbursement + Loyalty +   │
│                    │ Paylater                   │
│ Kartu kredit, bank │ Saldo AstraPay + QRIS      │
│ transfer           │ semua e-wallet & m-banking │
│ Tidak ada reward   │ AstraPoints untuk loyalty  │
└────────────────────┴───────────────────────────┘
```

---

### SLIDE 11 — ROADMAP & TIM

```
HEADER:
Roadmap: 20 Hari Menuju Demo Day

TIMELINE:
WEEK 1 (11-17 Jun) │ WEEK 2 (18-24 Jun) │ WEEK 3 (25-30 Jun) │ WEEK 4 (1-3 Jul)
──────────────────┼─────────────────┼──────────────────┼────────────────
SETUP & DASHBOARD │ WA BOT ENGINE    │ ASTRA PAY INTG   │ POLISHING & DEMO
• Project scaffold│ • Bot flow       │ • Push to Payment│ • QRIS integration
• DB schema       │ • Catalog flow   │ • Callback       │ • Error handling
• Auth            │ • Order flow     │ • End-to-end     │ • Dry-run
• Product CRUD    │ • WA API connect │ • Sandbox test   │ • Submit & demo

TIM:
┌────────────────┬────────────────┬────────────────┬────────────────┐
│ [NAMA]         │ [NAMA]         │ [NAMA]         │ [NAMA]         │
│ Backend        │ Frontend       │ WhatsApp Int   │ PM / Presenter │
│ Engineer       │ Engineer       │ egration       │                │
│ API, DB,       │ Dashboard,     │ Bot engine,    │ Pitch deck,    │
│ AstraPay int.  │ UI/UX          │ WA Cloud API   │ demo, koor.    │
└────────────────┴────────────────┴────────────────┴────────────────┘

RISK & MITIGASI:
┌──────────────────────────┬───────────────────────────┐
│ WABA verification lambat │ Pakai Meta sandbox / mock │
│ AstraPay sandbox down    │ Daftar early, mock server │
│ Waktu 20 hari mepet      │ Fokus MVP, potong scope   │
│ Callback tidak sampai    │ Polling tiap 5 detik (10x)│
└──────────────────────────┴───────────────────────────┘
```

---

### SLIDE 12 — CLOSING

```
JUDUL BESAR:
AstraPay Chat

QUOTE:
"Jualan di WhatsApp. Bayar pakai AstraPay. Tanpa Website. Tanpa Ribet."

INFO:
Repository: github.com/wmprawiro/astrapay-hackathon-2026
Kontak: [ISI EMAIL/HP KETUA TIM]
Sumber data: DataReportal Digital 2026, Kementerian UMKM via Katadata, GWI Q4 2025

[QR Code ke repository]

TERIMA KASIH
Hackathon AstraPay 2026
```

**Background:** Gradient ungu (sama seperti cover)

---

## 🖼️ TEMPLATE MOCKUP (WhatsApp Chat)

Gunakan ini sebagai referensi bikin mockup di Figma/Canva:

```
┌─────────────────────────────────┐
│ 📱 WhatsApp                     │
│                                 │
│        Toko Bu Rina             │
│        Online                   │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Halo! Selamat datang di    │ │
│ │ Warung Bu Rina.            │ │
│ │ Mau pesan apa hari ini?    │ │
│ │                             │ │
│ │ [🛒 Lihat Produk]          │ │
│ │ [📢 Promo]   [❓ Bantuan]  │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📦 Katalog Warung Bu Rina   │ │
│ │                             │ │
│ │ 1. Beras 5kg — Rp 65.000   │ │
│ │ 2. Minyak Goreng 2L — 36rb │ │
│ │ 3. Gula Pasir 1kg — 15rb   │ │
│ │                             │ │
│ │ Ketik nomor produk:         │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Konfirmasi Pesanan          │ │
│ │                             │ │
│ │ Beras 5kg x2 = Rp 130.000  │ │
│ │ Nama: Rina                  │ │
│ │ Alamat: Jl. Melati No. 5    │ │
│ │                             │ │
│ │ Pilih metode bayar:         │ │
│ │ [🟣 AstraPay]  [📱 QRIS]   │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ ✅ Pesanan #INV-042         │ │
│ │    DITERIMA!                │ │
│ │                             │ │
│ │ Total: Rp 130.000 — LUNAS  │ │
│ │ Estimasi kirim: Besok pagi │ │
│ │ Terima kasih, Rina! 🙏     │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📦 Pesanan #INV-042         │ │
│ │ sedang dikirim!             │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

---

## 🖥️ TEMPLATE MOCKUP (Dashboard Merchant)

```
┌──────────────────────────────────────────────────┐
│ 🔵 AstraPay Chat — Dashboard                     │
│                                                  │
│ ┌─────────┐                                     │
│ │ ☰ Menu  │  Selamat Datang, Bu Rina!           │
│ │         │                                     │
│ │ 📦 Katalog│  ┌─────────────────────────────┐   │
│ │ 📋 Order │  │ PESANAN HARI INI             │   │
│ │ 💳 Bayar │  │                               │   │
│ │ 📊 Report│  │ #001  Rina    Rp 130.000 PAID │   │
│ │ 📢 Broad-│  │ #002  Budi    Rp  75.000 PAID │   │
│ │    cast  │  │                               │   │
│ │ ⚙️ Seting│  │ [Proses] [Download CSV]       │   │
│ └─────────┘  └─────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ RINGKASAN                                │   │
│  │ 💰 Total Hari Ini: Rp 205.000            │   │
│  │ 📦 Pesanan Baru: 2                       │   │
│  │ ✅ Selesai: 15                           │   │
│  └──────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘
```

---

## 📐 CARA KERJA STEP-BY-STEP

### Step 1: Siapkan Google Slides
1. Buka [slides.google.com](https://slides.google.com)
2. Buat presentasi baru → Pilih template kosong (Blank)
3. Atur ukuran: File → Page setup → Widescreen 16:9

### Step 2: Set Tema Warna
- **Background slide:** Putih (`#FFFFFF`)
- **Cover & Closing:** Gradient ungu (`#6C2BD9` → `#4A1D99`)
- **Teks judul:** `#1A1A2E` (gelap) atau `#FFFFFF` (putih di bg gelap)
- **Teks body:** `#333333`
- **Highlight / CTA:** `#FF6B00` (oranye)
- **Font:** Inter atau Poppins (gratis dari Google Fonts)

### Step 3: Isi Slide 1-12
Copy teks dari file ini ke setiap slide. Ikuti layout per slide.

### Step 4: Tambah Visual
1. Logo AstraPay → download dari website AstraPay
2. Diagram → screenshot dari mermaid.live
3. Mockup WA Chat → bikin di Figma/Canva (pakai template di atas)
4. Mockup Dashboard → bikin di Figma/draw.io (pakai template di atas)

### Step 5: Export ke PDF
File → Download → PDF Document (.pdf)

### Step 6: Submit
Upload PDF ke form: https://forms.cloud.microsoft/r/wejuMaW3PE

Pastikan submit **sebelum 7 Juni 2026**.

---

## ✅ FINAL CHECKLIST

| Done | Item |
|------|------|
| ☐ | Nama tim diisi |
| ☐ | Nama anggota 1-4 diisi |
| ☐ | Role tiap anggota ditentukan |
| ☐ | Kontak ketua tim diisi |
| ☐ | Logo AstraPay dimasukkan ke slide 1 & 12 |
| ☐ | Diagram arsitektur di-screenshot dari mermaid.live → slide 9 |
| ☐ | Diagram customer flow di-screenshot → slide 5 |
| ☐ | Mockup WA chat dibuat & dimasukkan → slide 5 & 8 |
| ☐ | Mockup dashboard dibuat & dimasukkan → slide 6 & 8 |
| ☐ | QR code GitHub dimasukkan → slide 12 |
| ☐ | Warna brand AstraPay digunakan konsisten |
| ☐ | Semua teks slide sudah di-copy dari file ini |
| ☐ | Export ke PDF |
| ☐ | Upload PDF ke Microsoft Forms sebelum 7 Juni 2026 |
