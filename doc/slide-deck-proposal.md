# Slide Deck Proposal — AstraPay Chat

> Hackathon AstraPay 2026 — "Product Innovation Integrated with AstraPay Ecosystem"
> Format: Google Slides (16:9) → Export PDF untuk submission

---

## SLIDE 1 — COVER

**Layout:** Full-bleed background (gradient ungu AstraPay #6C2BD9 → #4A1D99), centered text

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                    🟣 AstraPay                           │
│                                                          │
│                    ASTRA PAY CHAT                        │
│           ───────────────────────────                    │
│           Jualan di WhatsApp.                            │
│           Bayar Pakai AstraPay.                          │
│           Tanpa Website. Tanpa Ribet.                    │
│                                                          │
│           Hackathon AstraPay 2026                        │
│           Product Innovation Integrated                  │
│           with AstraPay Ecosystem                        │
│                                                          │
│                                                          │
│           Tim: [Nama Tim]                                │
│           1. [Nama] — [Role]                             │
│           2. [Nama] — [Role]                             │
│           3. [Nama] — [Role]                             │
│           4. [Nama] — [Role]                             │
│                                                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan (Title & Subtitle):**

> **Title:** AstraPay Chat
> **Subtitle:** Jualan di WhatsApp. Bayar pakai AstraPay. Tanpa Website. Tanpa Ribet.
> **Bottom:** Hackathon AstraPay 2026 | Tim [Nama] | Juni 2026

**Design notes:**
- Gunakan logo AstraPay di pojok kiri atas
- Font: Inter atau Poppins bold untuk judul, regular untuk subtitle
- Tambahkan icon WhatsApp + AstraPay di tengah sebagai visual

---

## SLIDE 2 — PROBLEM STATEMENT

**Layout:** 2 kolom — kiri statistik besar, kanan narasi. Background putih, teks gelap.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   MASALAH: 30.2 JUTA UMKM MASIH BERJUANG SECARA MANUAL    │
│                                                          │
│   ┌─────────────────────┐   ┌──────────────────────────┐ │
│   │                     │   │                          │ │
│   │    30.21 JUTA      │   │  "Saya jualan di WA,      │   │
│   │    unit UMKM non-   │   │   catat pesanan di buku,  │   │
│   │    pertanian di     │   │   minta transfer manual.  │   │
│   │    Indonesia        │   │   Kadang pesanan hilang,  │   │
│   │                     │   │   kadang pembeli kabur."  │   │
│   │    99.70%           │   │                           │   │
│   │    adalah skala     │   │   — Bu Rina, Pemilik      │   │
│   │    mikro            │   │     Warung Sembako        │   │
│   │                     │   │                           │   │
│   │    >90%             │   │                           │   │
│   │    pengguna internet│   │                           │   │
│   │    pakai WhatsApp   │   │                           │   │
│   │                     │   │                          │ │
│   └─────────────────────┘   └──────────────────────────┘ │
│                                                          │
│   ⚠️ Jual-beli via WhatsApp saat ini: CHAT → CATAT      │
│   MANUAL → TRANSFER → KONFIRMASI MANUAL                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Masalah: 30.2 Juta UMKM Masih Berjuang Secara Manual

**Kolom Kiri — 3 Statistik Besar:**
- **30.21 Juta** unit UMKM non-pertanian di Indonesia
- **99.70%** adalah skala mikro — tidak punya website/aplikasi
- **>90%** pengguna internet pakai WhatsApp

**Kolom Kanan — Quote:**
> *"Saya jualan di WhatsApp, catat pesanan di buku, minta transfer manual. Kadang pesanan hilang, kadang pembeli kabur."*
> — Bu Rina, Pemilik Warung Sembako

**Bottom Bar (warna merah/warning):**
> ⚠️ Jual-beli via WhatsApp saat ini: **CHAT → CATAT MANUAL → TRANSFER → KONFIRMASI MANUAL** — Lambat, rawan error, tidak scalable.

**Design notes:**
- Angka statistik pakai font sangat besar (72pt+)
- Quote pakai italic, warna abu-abu gelap
- Bottom bar pakai background merah muda / oranye soft

---

## SLIDE 3 — PAIN POINTS: REALITA LAPANGAN

**Layout:** 4 kartu horizontal, masing-masing dengan ikon + pain point. Background putih.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│         KENAPA INI HARUS DISELESAIKAN SEKARANG?          │
│                                                          │
│   ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │
│   │   🏪  UMKM   │ │  👤 PEMBELI  │ │  🏍️ BENGKEL │    │
│   │              │ │              │ │              │    │
│   │ Tidak punya  │ │ Malas install│ │ Booking servis│    │
│   │ sistem order │ │ aplikasi baru│ │ via chat tidak│    │
│   │ terintegrasi │ │ Tidak percaya│ │ terstruktur   │    │
│   │ Pencatatan   │ │ transfer     │ │ Sparepart     │    │
│   │ manual &     │ │ manual       │ │ susah dicatat│    │
│   │ sering hilang│ │ Ingin bayar  │ │ Customer     │    │
│   │              │ │ dalam 1 apps │ │ sering cancel │    │
│   └──────────────┘ └──────────────┘ └──────────────┘    │
│                                                          │
│   ┌──────────────────────────────────────────────────┐   │
│   │          🟣  ASTRA PAY                             │   │
│   │                                                    │   │
│   │  Belum punya kanal WhatsApp Commerce              │   │
│   │  yang memanfaatkan SELURUH ekosistemnya:          │   │
│   │  Payment + QRIS + Biller + Disbursement + Loyalty │   │
│   └──────────────────────────────────────────────────┘   │
│                                                          │
│   💡 WhatsApp adalah "super-app" de facto Indonesia —    │
│      tapi semua transaksinya masih MANUAL.               │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Kenapa Ini Harus Diselesaikan Sekarang?

**4 Kartu Horizontal:**

| Kartu 1 | Kartu 2 | Kartu 3 | Kartu 4 |
|---------|---------|---------|---------|
| **🏪 UMKM Mikro**<br>Tidak punya sistem order & bayar terintegrasi. Pencatatan manual, sering hilang. | **👤 Pelanggan**<br>Malas install aplikasi baru. Tidak percaya transfer manual. Ingin semua dalam 1 apps. | **🏍️ Bengkel Motor**<br>Booking servis via chat tidak terstruktur. Sparepart susah dicatat. Customer sering cancel/no-show. | **🟣 AstraPay**<br>Belum punya kanal WhatsApp Commerce. Padahal punya ekosistem lengkap: Payment, QRIS, Biller, Disbursement, Loyalty. |

**Bottom Box (insight):**
> 💡 WhatsApp adalah "super-app" de facto Indonesia. 2 miliar+ pengguna global. Tapi transaksi jual-beli di dalamnya masih **100% manual**.

**Design notes:**
- 4 kartu berwarna soft berbeda (hijau muda, biru muda, oranye muda, ungu muda)
- Ikon besar di atas setiap kartu
- Insight box di bawah pakai background kuning soft

---

## SLIDE 4 — SOLUTION: APA ITU ASTRA PAY WHATSAPP COMMERCE?

**Layout:** Hero banner di atas, 3 pilar di kolom, USP di grid. Background: putih.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   SOLUSI: ASTRA PAY CHAT                                 │
│                                                          │
│   ┌──────────────────────────────────────────────────┐   │
│   │  "WhatsApp-mu sekarang bisa jadi toko online     │   │
│   │   + mesin kasir digital."                        │   │
│   │                                                  │   │
│   │  Chatbot WhatsApp yang terhubung ke ekosistem    │   │
│   │  AstraPay — pelanggan chat, lihat katalog,       │   │
│   │  pesan, dan BAYAR, semua dalam WhatsApp.         │   │
│   └──────────────────────────────────────────────────┘   │
│                                                          │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   │
│   │ 💻 Dashboard│   │ 🤖 WA Bot   │   │ 🟣 AstraPay │   │
│   │   Merchant  │   │  Customer   │   │  Integration│   │
│   │             │   │             │   │             │   │
│   │ Setup toko  │   │ Chat → lihat│   │ Push to Pay │   │
│   │ dalam <10   │   │ produk →    │   │ + QR MPM    │   │
│   │ menit.      │   │ pilih →     │   │ + callback  │   │
│   │ Tidak perlu │   │ isi data →  │   │ + settlement│   │
│   │ coding.     │   │ bayar.      │   │ H+1         │   │
│   └─────────────┘   └─────────────┘   └─────────────┘   │
│                                                          │
│   5 KEUNGGULAN UTAMA                                     │
│   ┌──────┬──────┬──────┬──────┬──────┐                   │
│   │ Zero │ WA-  │Astra │ Eko- │Settle│                   │
│   │ Inte-│Native│  Pay │sistem│ ment │                   │
│   │grasi │      │ Eco- │Leng- │  H+1 │                   │
│   │      │      │system│  kap │      │                   │
│   └──────┴──────┴──────┴──────┴──────┘                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Solusi: AstraPay Chat

**Hero Banner:**
> *"WhatsApp-mu sekarang bisa jadi toko online + mesin kasir digital."*
> Chatbot WhatsApp yang terhubung ke ekosistem AstraPay — pelanggan chat, lihat katalog, pesan, dan bayar — semua dalam WhatsApp.

**3 Pilar (3 Kolom Sejajar):**

| Pilar 1 | Pilar 2 | Pilar 3 |
|---------|---------|---------|
| **💻 Dashboard Merchant (Web)** | **🤖 WhatsApp Bot** | **🟣 AstraPay Integration** |
| Setup toko dalam <10 menit<br>Kelola produk: foto, harga, stok<br>Pantau pesanan real-time<br>Download laporan transaksi | Chat → lihat katalog<br>Pilih produk → isi data<br>Konfirmasi pesanan<br>Pilih & lakukan pembayaran | Push to Payment<br>QRIS Dynamic SNAP BI<br>Payment Callback<br>Settlement H+1 otomatis |

**5 Keunggulan Utama (5 Kotak Horizontal):**

| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| **Zero Integration**<br>Merchant setup tanpa coding | **WhatsApp-Native**<br>Pelanggan tidak install apa pun | **AstraPay Ecosystem**<br>Saldo AstraPay + QRIS semua e-wallet | **Ekosistem Lengkap**<br>Payment + Biller + Disbursement + Loyalty | **Settlement H+1**<br>Dana cair keesokan hari |

**Design notes:**
- Hero banner pakai gradient ungu (brand AstraPay)
- 3 pilar pakai icon besar di tengah atas
- 5 kotak USP dibikin compact, font kecil tapi bold

---

## SLIDE 5 — CARA KERJA: FLOW PELANGGAN (60 DETIK)

**Layout:** Timeline horizontal 6 langkah, kiri→kanan. Background putih.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   BAGAIMANA CARA KERJANYA? (DARI SISI PELANGGAN)         │
│                                                          │
│   ❶             ❷              ❸                         │
│   Scan QR       Bot            Lihat                     │
│   / Klik        menyapa &      katalog &                 │
│   Link          tampilkan      pilih                     │
│                 menu           produk                    │
│   ┌───────┐    ┌───────┐      ┌───────┐                 │
│   │  📱   │ →  │  🤖   │  →   │  📦   │                 │
│   │Scan QR│    │ Halo! │      │1.Beras│                 │
│   │di toko│    │Mau beli│     │2.Minyak│                │
│   │       │    │apa?   │      │3.Gula │                 │
│   └───────┘    └───────┘      └───────┘                 │
│       ↓            ↓               ↓                    │
│                                                          │
│   ❹             ❺              ❻                         │
│   Isi data      Pilih          Bayar &                   │
│   pengiriman    metode         konfirmasi                │
│                 bayar          sukses                    │
│   ┌───────┐    ┌───────┐      ┌───────┐                 │
│   │  📝   │ →  │  💳   │  →   │  ✅   │                 │
│   │Nama:  │    │Astra  │      │LUNAS! │                 │
│   │Alamat:│    │Pay /  │      │#INV042│                │
│   │       │    │QRIS   │      │Dikirim│                │
│   └───────┘    └───────┘      └───────┘                 │
│                                                          │
│   ⏱ Total waktu dari chat pertama sampai bayar: < 2 menit│
│                                                          │
│   📱 100% dalam WhatsApp — tidak perlu install apa pun    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Bagaimana Cara Kerjanya? (Dari Sisi Pelanggan)

**6 Langkah Timeline Horizontal:**

| ❶ | ❷ | ❸ | ❹ | ❺ | ❻ |
|---|---|---|---|---|---|
| **Scan QR / Klik Link**<br>Customer scan QR di toko/medsos, atau klik link WhatsApp | **Bot Menyapa**<br>"Halo! Selamat datang di [Toko]. Mau pesan apa hari ini?"<br>[🛒 Lihat Produk] [📢 Promo] | **Lihat Katalog & Pilih**<br>Tampilkan daftar produk: nama, harga, stok. Customer pilih & tentukan jumlah. | **Isi Data**<br>Bot minta: Nama, alamat, catatan. Customer isi langsung di chat. | **Pilih Metode Bayar**<br>[🟣 AstraPay Saldo] — input HP + PIN<br>[📱 QRIS] — scan QR | **Bayar & Konfirmasi**<br>"✅ Pesanan #INV-042 diterima! Total: Rp xxx.xxx — LUNAS. Estimasi kirim: besok." |

**Bottom Bar (highlight):**
> ⏱ Total waktu: < 2 menit dari chat pertama sampai bayar.
> 📱 100% dalam WhatsApp — tidak perlu install aplikasi apa pun.

**Design notes:**
- 6 kotak dengan panah di antaranya
- Icon besar di atas tiap langkah
- Gradasi warna dari biru → hijau (progression)
- Timeline pakai garis panah horizontal di bawahnya

---

## SLIDE 6 — CARA KERJA: FLOW MERCHANT + DASHBOARD

**Layout:** 2 kolom — kiri: flow setup, kanan: screenshot mockup dashboard. Background putih.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   BAGAIMANA CARA KERJANYA? (DARI SISI MERCHANT)           │
│                                                          │
│   SETUP < 10 MENIT          │   DASHBOARD: KELOLA        │
│                             │   TOKO DARI MANA SAJA      │
│                             │                            │
│   ① Daftar akun (1 menit)   │   ┌────────────────────┐   │
│      ↓                      │   │ 📦 Katalog Produk  │   │
│   ② Tambah produk:          │   │ Tambah, edit,      │   │
│      foto, nama, harga,     │   │ atur stok          │   │
│      stok (3 menit)         │   │                    │   │
│      ↓                      │   │ 📋 Pesanan Masuk   │   │
│   ③ Atur chatbot: sapaan,   │   │ Baru → Dibayar →   │   │
│      menu (2 menit)         │   │ Dikirim → Selesai  │   │
│      ↓                      │   │                    │   │
│   ④ Pilih metode bayar:     │   │ 💳 Pembayaran      │   │
│      ☑ AstraPay  ☑ QRIS    │   │ Status pembayaran  │   │
│      (1 menit)              │   │ real-time          │   │
│      ↓                      │   │                    │   │
│   ⑤ Aktifkan → dapat QR     │   │ 📊 Laporan         │   │
│      code & link WA         │   │ Download CSV/Excel │   │
│      (1 menit)              │   │                    │   │
│      ↓                      │   │ 📢 Broadcast       │   │
│   ⑥ Sebarkan QR ke:         │   │ Kirim promo massal │   │
│      • Tempel di toko       │   └────────────────────┘   │
│      • Share ke pelanggan   │                            │
│      • Post di medsos       │                            │
│      • Cetak di kemasan     │                            │
│                             │                            │
│   ✅ TIDAK PERLU CODING     │   🟣 DANA CAIR H+1         │
│   ✅ TIDAK PERLU WEBSITE    │   🟣 LAPORAN LENGKAP        │
│                             │                            │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Bagaimana Cara Kerjanya? (Dari Sisi Merchant)

**Kolom Kiri — Setup Flow:**
1. **Daftar akun** — email & password (1 menit)
2. **Tambah produk** — upload foto, nama, harga, stok (3 menit)
3. **Atur chatbot** — tulis sapaan & menu (2 menit)
4. **Pilih metode bayar** — ☑ AstraPay ☑ QRIS (1 menit)
5. **Aktifkan** — dapat QR code & link WhatsApp (1 menit)
6. **Sebarkan** — tempel di toko, share ke pelanggan, post di medsos, cetak di kemasan

**Kolom Kanan — Dashboard Module List:**
- **📦 Katalog Produk** — Tambah, edit, atur stok
- **📋 Pesanan Masuk** — Baru → Dibayar → Dikirim → Selesai
- **💳 Pembayaran** — Status pembayaran real-time
- **📊 Laporan** — Download CSV/Excel
- **📢 Broadcast** — Kirim promo massal ke pelanggan

**Bottom Highlight:**
> ✅ Tidak perlu coding. ✅ Tidak perlu website. ✅ Setup < 10 menit.
> 🟣 Dana cair H+1. 🟣 Laporan lengkap.

**Design notes:**
- Kolom kiri pakai angka besar (① ② ③...) dan panah ke bawah
- Kolom kanan pakai mockup browser window dengan menu sidebar + content
- Kalau bisa, bikin mockup sederhana dashboard pakai Figma / draw.io lalu screenshot

---

## SLIDE 7 — TARGET USER & USE CASE (PERSONA + BONUS FOKUS)

**Layout:** 2 persona cards besar di kiri-kanan, use case grid di bawah. Background putih.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│         SIAPA YANG AKAN MENGGUNAKAN?                     │
│                                                          │
│   ┌───────────────────────┐  ┌───────────────────────┐   │
│   │  👩 BU RINA           │  │  👨 PAK AGUS          │   │
│   │  Pemilik Warung       │  │  Pemilik Bengkel      │   │
│   │  Sembako              │  │  Motor                │   │
│   │                       │  │                       │   │
│   │  🎯 UMKM Mikro        │  │  🎯 Ekosistem Roda 2  │   │
│   │  📱 Tech Level: Low   │  │  📱 Tech Level: Med   │   │
│   │  💬 Hanya bisa WA     │  │  🔧 Butuh booking     │   │
│   │                       │  │     servis terstruktur│   │
│   │  "Pelanggan saya      │  │                       │   │
│   │   banyak yang tanya   │  │  "Customer sering     │   │
│   │   stok & harga lewat  │  │   booking tapi cancel │   │
│   │   WA. Saya catat di   │  │   dadakan. Sparepart  │   │
│   │   buku, sering lupa." │  │   juga susah dicatat."│   │
│   │                       │  │                       │   │
│   │  Solusi:              │  │  Solusi:              │   │
│   │  Katalog WA + Bayar   │  │  Booking WA + DP      │   │
│   │  AstraPay + Order     │  │  AstraPay + Katalog   │   │
│   │  otomatis tercatat    │  │  sparepart            │   │
│   └───────────────────────┘  └───────────────────────┘   │
│                                                          │
│   ┌──────────────────────────────────────────────────┐   │
│   │  USE CASE LAINNYA                                 │   │
│   │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │   │
│   │  │🍜Kuli│ │👚Lau│ │💇Sal│ │📸Fot│ │🍰Kue │    │   │
│   │  │ ner  │ │ ndry │ │  on  │ │okopi│ │ Basah│    │   │
│   │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘    │   │
│   └──────────────────────────────────────────────────┘   │
│                                                          │
│   🎯 BONUS POIN HACKATHON:                               │
│   ✅ Digitalisasi UMKM   ✅ Ekosistem Kendaraan Roda 2    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Siapa yang Akan Menggunakan?

**Persona 1 — Bu Rina (UMKM Mikro):**
- Pemilik Warung Sembako
- Tech level: Low — hanya bisa WhatsApp
- *"Pelanggan saya banyak yang tanya stok & harga lewat WA. Saya catat di buku, sering lupa. Transfer manual juga ribet ceknya satu-satu."*
- **Solusi kami:** Katalog WA + Bayar AstraPay + Order otomatis tercatat — Bu Rina tinggal buka dashboard, lihat pesanan, proses.

**Persona 2 — Pak Agus (Bengkel Motor):**
- Pemilik Bengkel Motor
- Tech level: Medium
- *"Customer sering booking servis tapi cancel dadakan. Sparepart juga susah dicatat — kadang lupa stok apa yang ada."*
- **Solusi kami:** Booking WA + DP AstraPay + Katalog sparepart — customer booking, bayar DP, auto-konfirmasi. Kurangi no-show.

**Use Case Lainnya (Grid 5):**
- 🍜 Kuliner / Catering Rumahan
- 👚 Laundry
- 💇 Salon / Barber
- 📸 Fotokopi / Percetakan
- 🍰 Kue Basah / Oleh-oleh

**Bottom (Bonus Poin):**
> 🎯 **Bonus Poin Hackathon:** ✅ Fokus Digitalisasi UMKM ✅ Fokus Ekosistem Kendaraan Roda Dua

**Design notes:**
- Persona cards pakai border rounded, background soft color
- Foto persona (bisa pakai ilustrasi / avatar)
- Use case grid pakai icon bulat

---

## SLIDE 8 — DEMO FLOW: YANG AKAN DIDEMOKAN 3 JULI

**Layout:** Timeline 3 scenario horizontal, dengan checkpoint. Background putih.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   LIVE DEMO FLOW — DEMO DAY 3 JULI 2026                   │
│                                                          │
│   SCENARIO 1: UMKM SEMBAKO (3 menit)                     │
│   ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐          │
│   │Setup │ →  │Chat  │ →  │Bayar │ →  │Pesanan│          │
│   │Toko  │    │Katalog│   │Astra │    │Masuk  │          │
│   │      │    │Pilih  │    │Pay   │    │Dashbrd│          │
│   └──────┘    └──────┘    └──────┘    └──────┘          │
│   Bu Rina       Customer     Push to     Order           │
│   tambah        pilih        Payment     #001            │
│   produk        beras 5kg    sukses      tampil          │
│                                                          │
│   ─────────────────────────────────────────────────      │
│                                                          │
│   SCENARIO 2: BENGKEL MOTOR (2 menit)                    │
│   ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐          │
│   │Chat  │ →  │Pilih │ →  │Bayar │ →  │Booking│          │
│   │Bengkel│   │Servis│    │DP    │    │Konfir-│          │
│   │      │    │+Jadwal│   │Astra │    │masi   │          │
│   └──────┘    └──────┘    └──────┘    └──────┘          │
│   Customer      Servis       DP 25rb     #BKL-088        │
│   scan QR       Ringan +     dibayar     terkonfirmasi   │
│   bengkel       jadwal                                  │
│                                                          │
│   ─────────────────────────────────────────────────      │
│                                                          │
│   SCENARIO 3: MERCHANT DASHBOARD (1 menit)                │
│   ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐          │
│   │Lihat │ →  │Update│ →  │Notif │ →  │Lapor-│          │
│   │Pesanan│   │Status│    │ke WA │    │an    │          │
│   └──────┘    └──────┘    └──────┘    └──────┘          │
│   2 pesanan    "Dikirim"   Customer     Download         │
│   masuk        + "Selesai" dapat         CSV             │
│                           notif WA                       │
│                                                          │
│   ⏱ TOTAL DEMO: ~6 MENIT                                 │
│   💻 END-TO-END: Dashboard → Chat WA → Bayar → Callback   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Live Demo Flow — Yang Akan Didemokan 3 Juli 2026

**Scenario 1 — UMKM Sembako (3 menit):**

| 1 | 2 | 3 | 4 |
|---|---|---|---|
| **Setup Toko**<br>Bu Rina tambah produk di dashboard: Beras 5kg, Minyak Goreng, Gula | **Chat & Katalog**<br>Customer scan QR → bot tampilkan katalog → pilih Beras 5kg x2 | **Bayar AstraPay**<br>Customer pilih AstraPay → input nomor HP → PIN → sukses | **Pesanan Masuk**<br>Order #001 muncul di dashboard Bu Rina → status PAID → siap diproses |

**Scenario 2 — Bengkel Motor (2 menit):**

| 1 | 2 | 3 | 4 |
|---|---|---|---|
| **Chat Bengkel**<br>Customer scan QR bengkel → bot: "Mau servis apa?" | **Pilih Servis + Jadwal**<br>Pilih "Servis Ringan" → pilih jadwal "Besok 09:00" → isi data motor | **Bayar DP AstraPay**<br>DP Rp 25.000 dibayar via AstraPay Push to Payment | **Booking Konfirmasi**<br>#BKL-088 terkonfirmasi → sisa Rp 50.000 bayar di tempat |

**Scenario 3 — Merchant Dashboard (1 menit):**

| 1 | 2 | 3 | 4 |
|---|---|---|---|
| **Lihat Pesanan**<br>Dashboard tampilkan 2 pesanan masuk | **Update Status**<br>Merchant ubah status: "Dikirim" → "Selesai" | **Notifikasi ke WhatsApp**<br>Customer dapat notif "Pesanan #001 sedang dikirim!" | **Download Laporan**<br>Merchant download CSV transaksi hari ini |

**Bottom Bar:**
> ⏱ Total Demo: ~6 menit | 💻 Full End-to-End: Dashboard → Chat WA → Bayar → Callback → Settlement

**Design notes:**
- 3 baris horizontal terpisah garis pembatas
- Tiap scenario pakai 4 kotak dengan panah
- Warna berbeda per scenario (hijau, biru, ungu)

---

## SLIDE 9 — ARSITEKTUR TEKNIS & TECH STACK

**Layout:** Diagram arsitektur di tengah, tech stack di tabel bawah. Background gelap/putih.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│             ARSITEKTUR SISTEM                            │
│                                                          │
│   ┌──────────────────────────────────────────────────┐   │
│   │                                                  │   │
│   │  📱 WhatsApp ──▶ Backend ──▶ 🟣 AstraPay API     │   │
│   │  (Customer)      (Node/Go)     • Push to Payment  │   │
│   │                                   • QRIS SNAP BI   │   │
│   │  💻 Dashboard ──▶              • Callback         │   │
│   │  (Merchant)                     • Settlement       │   │
│   │                                                  │   │
│   │  🗄️ PostgreSQL + ⚡ Redis                         │   │
│   │                                                  │   │
│   └──────────────────────────────────────────────────┘   │
│                                                          │
│   ┌──────────────────────────────────────────────────┐   │
│   │  TECH STACK                                       │   │
│   │                                                    │   │
│   │  Frontend     │ Next.js 14 + Tailwind CSS          │   │
│   │  Backend      │ Node.js (NestJS) / Go (Echo)       │   │
│   │  Database     │ PostgreSQL + Redis                  │   │
│   │  WhatsApp     │ WhatsApp Business Cloud API (Meta)  │   │
│   │  Payment      │ AstraPay Payment Channel + QRIS    │   │
│   │  Auth         │ JWT + OAuth2 (AstraPay Client Cred) │   │
│   │  File Storage │ S3 / Cloud Storage                   │   │
│   │  Deploy       │ Docker + Cloud Run / Google k8s     │   │
│   │  Monitoring   │ Prometheus + Grafana                 │   │
│   └──────────────────────────────────────────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Arsitektur Teknis

**Diagram Tengah (bisa screenshot dari `flow.md` Diagram 6 — System Architecture):**
> 📱 WhatsApp (Customer) + 💻 Dashboard (Merchant) → Backend API Gateway → Bot Engine / Catalog / Order / Payment → 🟣 AstraPay API (Push to Pay, QRIS, Callback, Settlement) + 🗄️ PostgreSQL + ⚡ Redis

**Tech Stack Table:**

| Layer | Technology |
|-------|-----------|
| Frontend Dashboard | Next.js 14 + Tailwind CSS |
| Backend API | Node.js (NestJS) / Go (Echo) |
| Database | PostgreSQL + Redis (session/cache) |
| WhatsApp API | WhatsApp Business Cloud API (Meta) |
| Payment Integration | AstraPay Payment Channel + QRIS SNAP BI V1.0 |
| Authentication | JWT + OAuth2 (AstraPay Client Credentials) |
| File Storage | S3 / Cloud Storage (product images) |
| Deployment | Docker + Cloud Run / Google Kubernetes Engine |
| Monitoring | Prometheus + Grafana |

**Design notes:**
- Diagram arsitektur bisa langsung screenshot dari mermaid.live (pakai Diagram 6 dari `flow.md`)
- Tech stack pakai 2-column table, font monospace untuk nama teknologi

---

## SLIDE 10 — BUSINESS IMPACT

**Layout:** 3 kolom vertikal untuk 3 stakeholder, metrik besar di atas. Background putih.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   DAMPAK BISNIS — WHY THIS MATTERS                       │
│                                                          │
│   ┌──────────────────────────────────────────────────┐   │
│   │  BAGI UMKM          │  BAGI ASTRA PAY  │ BAGI     │   │
│   │                     │                  │ PELANGGAN│   │
│   │                     │                  │          │   │
│   │  ✅ Setup <10 menit │ ✅ Akuisisi      │ ✅ Belanja│   │
│   │     tanpa coding    │    merchant baru │    di WA  │   │
│   │                     │    dari 30.2jt    │    sehari-│   │
│   │  ✅ Terima bayaran  │    UMKM           │    hari   │   │
│   │     digital tanpa   │                  │          │   │
│   │     mesin EDC       │ ✅ Volume        │ ✅ Bayar  │   │
│   │                     │    transaksi     │    Astra  │   │
│   │  ✅ Order otomatis  │    baru dari WA  │    Pay    │   │
│   │     tercatat        │    commerce      │    / QRIS │   │
│   │                     │                  │          │   │
│   │  ✅ Dana cair H+1   │ ✅ Diferensiasi  │ ✅ Notifi-│   │
│   │    cash flow lancar │    dari kompeti- │    kasi   │   │
│   │                     │    tor (GoPay,   │    real-  │   │
│   │  ✅ Jangkau lebih   │    OVO, Dana)    │    time   │   │
│   │    banyak pelanggan │                  │          │   │
│   │    via WA           │ ✅ Adopsi penuh  │ ✅ Tidak  │   │
│   │                     │    ekosistem     │    was-was│   │
│   │                     │    AstraPay      │    trans- │   │
│   │                     │    dlm 1 solusi  │    fer    │   │
│   │                     │                  │    manual │   │
│   └──────────────────────────────────────────────────┘   │
│                                                          │
│   ⭐ DIFERENSIASI DARI DOKU PAYCHAT:                      │
│   ┌──────────────────┬────────────────────────────────┐   │
│   │ DOKU PayChat     │ AstraPay Chat     │   │
│   │──────────────────│────────────────────────────────│   │
│   │ Payment only     │ Payment + QRIS + Biller +      │   │
│   │                  │ Disbursement + Loyalty +       │   │
│   │                  │ Paylater                       │   │
│   │ Kartu kredit,    │ Saldo AstraPay + QRIS semua    │   │
│   │ bank transfer    │ e-wallet & mobile banking      │   │
│   │ Tidak ada reward │ AstraPoints disbursement       │   │
│   │                  │ untuk loyalty pelanggan        │   │
│   └──────────────────┴────────────────────────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Dampak Bisnis — Why This Matters

**3 Kolom Impact:**

| Bagi UMKM | Bagi AstraPay | Bagi Pelanggan |
|-----------|---------------|----------------|
| ✅ Setup < 10 menit tanpa coding | ✅ Akuisisi merchant baru dari 30.2 juta UMKM | ✅ Belanja di WhatsApp sehari-hari |
| ✅ Terima bayaran digital tanpa EDC | ✅ Volume transaksi baru dari kanal WA commerce | ✅ Bayar pakai AstraPay saldo atau QRIS |
| ✅ Order otomatis tercatat — tidak hilang | ✅ Diferensiasi dari GoPay/OVO/Dana — belum ada yang punya solusi ini | ✅ Notifikasi real-time — tenang |
| ✅ Dana cair H+1 — cash flow lancar | ✅ Adopsi penuh ekosistem AstraPay: Payment + QRIS + Biller + Disbursement + Loyalty | ✅ Tidak was-was transfer manual |
| ✅ Jangkau lebih banyak pelanggan via WA | ✅ Brand AstraPay sebagai enabler digitalisasi UMKM | |

**Diferensiasi vs DOKU PayChat:**

| DOKU PayChat | AstraPay Chat |
|--------------|---------------------------|
| Payment only | Payment + QRIS + Biller + Disbursement + Loyalty + Paylater |
| Sumber dana: kartu kredit, bank transfer | Sumber dana: Saldo AstraPay + QRIS (semua e-wallet & m-banking) |
| Tidak ada reward | AstraPoints disbursement untuk loyalty |
| General UMKM | Dalam untuk UMKM + ekosistem motor |

**Design notes:**
- 3 kolom pakai warna berbeda (hijau, ungu, biru soft)
- Tabel diferensiasi pakai warna kontras — tunjukkan keunggulan AstraPay
- Highlight "Diferensiasi dari Kompetitor" sebagai box khusus

---

## SLIDE 11 — ROADMAP 20 HARI + TIM

**Layout:** Timeline horizontal 4 minggu, team grid di bawah, risk table. Background putih.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   ROADMAP: 20 HARI MENUJU DEMO DAY                        │
│                                                          │
│   WEEK 1            WEEK 2          WEEK 3       WEEK 4  │
│   11-17 Jun         18-24 Jun       25-30 Jun    1-3 Jul │
│   ┌────────┐       ┌────────┐      ┌────────┐  ┌───────┐│
│   │SETUP & │   →   │WA BOT  │  →   │ASTRA   │→ │POLISH ││
│   │DASHBRD │       │ENGINE  │      │PAY INTG│  │& DEMO ││
│   │────────│       │────────│      │────────│  │───────││
│   │•Project│       │•Bot    │      │•Push to│  │•QRIS  ││
│   │ scaffold│      │flow    │      │Payment │  │integ- ││
│   │•DB     │       │•Catalog│      │•Callback│ │ration ││
│   │ schema │       │flow    │      │•Payment │  │•Error ││
│   │•Auth   │       │•Order  │      │end2end  │  │handle ││
│   │•Product│       │flow    │      │•Test    │  │•Dry-  ││
│   │ CRUD   │       │•WA API │      │sandbox  │  │run    ││
│   └────────┘       └────────┘      └────────┘  └───────┘│
│                                                          │
│   ┌──────────────────────────────────────────────────┐   │
│   │  TIM                                              │   │
│   │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     │   │
│   │  │ [Nama] │ │ [Nama] │ │ [Nama] │ │ [Nama] │     │   │
│   │  │Backend │ │Frontend│ │WA Int  │ │PM/     │     │   │
│   │  │Engineer│ │Engineer│ │gration │ │Pitch   │     │   │
│   │  └────────┘ └────────┘ └────────┘ └────────┘     │   │
│   └──────────────────────────────────────────────────┘   │
│                                                          │
│   ⚠️ RISK & MITIGASI:                                    │
│   ┌──────────────────────┬───────────────────────────┐   │
│   │ WABA verif lambat    │ Pakai sandbox Meta / mock │   │
│   │ Sandbox AstraPay     │ Daftar early + mock server │   │
│   │ Waktu 20 hari mepet  │ Fokus MVP, potong scope   │   │
│   │ Callback tidak sampai│ Polling status tiap 5 detik│   │
│   └──────────────────────┴───────────────────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Header:** Roadmap: 20 Hari Menuju Demo Day

**Timeline 4 Minggu:**

| Week 1 (11-17 Jun) | Week 2 (18-24 Jun) | Week 3 (25-30 Jun) | Week 4 (1-3 Jul) |
|---|---|---|---|
| **SETUP & DASHBOARD** | **WA BOT ENGINE** | **ASTRA PAY INTEGRATION** | **POLISHING & DEMO** |
| Project scaffold | Bot flow: greeting → katalog → order | Push to Payment integration | QRIS integration (bonus) |
| Database schema | Catalog browsing flow | Payment callback handling | Error handling edge cases |
| Authentication | Order creation flow | Payment flow end-to-end | Dry-run demo |
| Product CRUD dashboard | WhatsApp Business API integration | End-to-end testing di sandbox | Submit & presentasi |

**Tim (4 orang):**

| Role | Tanggung Jawab |
|------|----------------|
| **[Nama] — Backend Engineer** | API, database, AstraPay integration |
| **[Nama] — Frontend Engineer** | Merchant dashboard, UI/UX |
| **[Nama] — WhatsApp Integration** | Bot engine, WA Business Cloud API, chat flow |
| **[Nama] — PM / Presenter** | Pitch deck, demo script, koordinasi tim |

**Risk & Mitigasi:**

| Risk | Mitigasi |
|------|----------|
| WABA verification lambat (Meta) | Gunakan WhatsApp sandbox / test number Meta |
| AstraPay sandbox down/lambat | Daftar early, siapkan mock server untuk development paralel |
| Waktu 20 hari sangat mepet | Fokus MVP ketat, potong scope, parallel development |
| Callback payment tidak sampai | Polling status transaksi tiap 5 detik (max 10x) |

**Design notes:**
- Timeline pakai 4 kotak horizontal dengan panah
- Tim pakai 4 kartu dengan foto/avatar
- Risk table pakai warna oranye/merah soft

---

## SLIDE 12 — CLOSING / THANK YOU

**Layout:** Full-bleed background ungu (seperti cover), centered. Simple & impactful.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│               🟣 ASTRA PAY CHAT                           │
│                                                          │
│               "Jualan di WhatsApp.                       │
│                Bayar pakai AstraPay.                     │
│                Tanpa Website. Tanpa Ribet."              │
│                                                          │
│               ─────────────────────────                  │
│                                                          │
│               Repository:                                │
│               github.com/wmprawiro/                      │
│               astrapay-hackathon-2026                    │
│                                                          │
│               [QR Code ke repo / demo]                   │
│                                                          │
│                                                          │
│               TERIMA KASIH                               │
│                                                          │
│               Hackathon AstraPay 2026                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Teks untuk dimasukkan:**

> **Judul Besar:** AstraPay Chat
> **Quote:** *"Jualan di WhatsApp. Bayar pakai AstraPay. Tanpa Website. Tanpa Ribet."*
> **Info:**
> - Repository: github.com/wmprawiro/astrapay-hackathon-2026
> - Kontak: [isi]
> - Sumber data: DataReportal Digital 2026, Kementerian UMKM via Katadata Databoks, GWI Q4 2025
> - QR Code ke repository (generate via QR code generator)

---

## LAMPIRAN: TIPS MEMBUAT SLIDE DARI FILE INI

1. **Copy teks per slide** — setiap slide sudah dituliskan teks siap tempel
2. **Diagram Mermaid** — buka `doc/flow.md`, pilih diagram yang relevan:
   - Slide 5: Diagram 2 (Customer End-to-End Flow)
   - Slide 8: Diagram 2 (Customer End-to-End Flow) + Diagram 7 (Timeout Retry)
   - Slide 9: Diagram 6 (System Architecture Overview)
   Copy ke [mermaid.live](https://mermaid.live) → screenshot → tempel di slide
3. **Mockup Dashboard** — bikin sederhana di Figma / draw.io, atau screenshot dari IDE
4. **Warna Brand AstraPay**:
   - Primary: `#6C2BD9` (ungu AstraPay)
   - Secondary: `#4A1D99` (ungu gelap)
   - Accent: `#FF6B00` (oranye — untuk CTA/highlight)
   - Neutral: `#1A1A2E` (teks gelap), `#F5F5F5` (background soft)
5. **Export PDF** — dari Google Slides: File → Download → PDF Document (.pdf)
6. **Submit** — upload PDF ke [form Microsoft Cloud](https://forms.cloud.microsoft/r/wejuMaW3PE) sebelum **7 Juni 2026**

---

*Slide deck detail — 12 slide siap copy-paste ke Google Slides / PowerPoint / Canva.*
