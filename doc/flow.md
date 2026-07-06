# 🌊 Alur Skenario Penggunaan Chatpay: Pak Prengky (Pemilik Cuci Motor)

Skenario ini dirancang untuk mendemonstrasikan **seluruh kapabilitas** dari aplikasi Chatpay dalam studi kasus dunia nyata. 

**Profil Pengguna:**
- **Pemilik Usaha:** Pak Prengky (Pemilik Cuci Motor "Kinclong Sekejap")
- **Klien/Pelanggan:** Mas Budi (Pelanggan yang ingin mencuci motornya)
- **Tujuan:** Pak Prengky ingin mengotomatisasi pertanyaan pelanggan (lokasi, harga, booking) dan mengirim tagihan pembayaran non-tunai (AstraPay) secara profesional langsung via WhatsApp.

---

## 🛠️ Fase 1: Persiapan oleh Pak Prengky (Di Aplikasi Chatpay)

Sebelum melayani pelanggan, Pak Prengky melakukan *setup* di Dashboard Chatpay.

### 1. Membuat *Quick Replies* (Auto-Responder)
Pak Prengky menyadari pelanggan sering menanyakan 3 hal: Harga, Lokasi, dan Cara Booking. Ia mengatur fitur *Quick Reply*:
- **Lokasi:**
  - *Keyword:* `lokasi`, `alamat`, `dimana`
  - *Balasan:* "Halo! Lokasi Cuci Motor Kinclong Sekejap ada di Jl. Sudirman No. 45 (Samping Indomaret). Ditunggu kedatangannya ya! 🏍️✨"
- **Daftar Harga:**
  - *Keyword:* `harga`, `berapa`, `pricelist`
  - *Balasan:* "Daftar Harga Kami:\n1. Cuci Biasa: Rp 15.000\n2. Cuci Salju: Rp 25.000\n3. Cuci + Poles: Rp 35.000"
- **Booking:**
  - *Keyword:* `booking`, `pesan`, `antrian`
  - *Balasan:* "Untuk booking antrian, silakan sebutkan:\nNama:\nJam Kedatangan:\nJenis Cuci:\nNanti kami akan masukkan ke daftar antrian ya! 📝"

### 2. Membuat Template Pesan Tagihan
Pak Prengky membuat *Template* agar tidak perlu mengetik manual saat menagih:
- *Nama Template:* Tagihan Cuci Salju
- *Isi Template:* "Halo {customer_name}, terima kasih sudah mencuci motor di Kinclong Sekejap! Berikut adalah link tagihan untuk pembayaran Cuci Salju motor Anda. Silakan klik link berikut untuk membayar via AstraPay: {payment_link}"

---

## 📱 Fase 2: Interaksi Pelanggan (Mas Budi) via WhatsApp

Mas Budi menemukan nomor WA Cuci Motor Pak Prengky dari Google Maps dan mulai nge-chat.

### 1. Menanyakan Lokasi dan Harga
- **Mas Budi:** "Halo mas, lokasi cuciannya persisnya dimana ya? Terus pricelist harga cucinya berapa?"
- **Bot Chatpay:** *(Muncul indikator "Sedang Mengetik..." selama 5 detik untuk memberi kesan natural)*
- **Bot Chatpay membalas (Lokasi):** "Halo! Lokasi Cuci Motor Kinclong Sekejap ada di Jl. Sudirman No. 45 (Samping Indomaret)..." 
- **Bot Chatpay membalas (Harga):** "Daftar Harga Kami:\n1. Cuci Biasa: Rp 15.000\n2. Cuci Salju: Rp 25.000..." *(Karena Mas Budi menyebutkan kata "lokasi" dan "harga")*

### 2. Melakukan Booking
- **Mas Budi:** "Oke mas, saya mau booking untuk jam 2 siang ya. Nama saya Budi, mau cuci salju."
- **Bot Chatpay (Mendeteksi keyword "booking"):** *(Typing...)* "Untuk booking antrian, silakan sebutkan:\nNama:\nJam Kedatangan:\nJenis Cuci..."
- *Karena Mas Budi sudah memberikan info yang dibutuhkan, Pak Prengky yang sedang memegang HP-nya membaca pesan tersebut dan merespons manual: "Siap Mas Budi, sudah kami catat untuk jam 2 siang. Ditunggu ya!"*

---

## 💳 Fase 3: Pencucian dan Penagihan

Mas Budi datang jam 2 siang, motornya selesai dicuci bersih dengan salju. Mas Budi lupa membawa dompet dan bertanya, "Mas, bisa bayar pakai QRIS / e-wallet gak?"

Pak Prengky tersenyum, "Bisa banget Mas, tagihannya saya kirim ke WA ya."

### 1. Menambahkan Pelanggan ke Database
- Pak Prengky membuka **Chatpay Dashboard**.
- Masuk ke menu **Pelanggan**, klik **Tambah Pelanggan**.
- Mengisi nama: "Budi", Nomor WA: "08123456789". Data Mas Budi kini tersimpan permanen.

### 2. Mengirim Tagihan (Kirim Link Pembayaran)
- Pak Prengky masuk ke menu **Kirim Tagihan**.
- Memilih pelanggan: **Budi**.
- Memilih template: **Tagihan Cuci Salju**.
- Memasukkan nominal: **25000** (Otomatis memanggil API *generate link* QRIS/AstraPay di *backend*).
- Klik **Kirim Tagihan**.

### 3. Pelanggan Menerima & Membayar
- *Ting!* Mas Budi menerima pesan WA resmi dari nomor Cuci Motor Kinclong Sekejap: 
  *"Halo Budi, terima kasih sudah mencuci motor di Kinclong Sekejap! Berikut adalah link tagihan untuk pembayaran Cuci Salju motor Anda. Silakan klik link berikut untuk membayar via AstraPay: https://astrapay.com/pay/qris-xyz-123"*
- Mas Budi mengklik *link* tersebut, masuk ke aplikasi AstraPay-nya, dan melakukan pembayaran senilai Rp 25.000.

---

## 📊 Fase 4: Analisis Bisnis (Dashboard)

Di penghujung hari, Pak Prengky menutup bengkel cucinya dan kembali melihat **Dashboard Chatpay**.

- **Total Pelanggan:** Angkanya bertambah menjadi `1` (Mas Budi).
- **Total Transaksi:** Angkanya bertambah menjadi `1`.
- **Total Tagihan:** Menampilkan angka **Rp 25.000**.
- Pak Prengky juga bisa melihat detail transaksi Budi (Tanggal, Jam, Status: *Sent*) di menu **Riwayat Transaksi**.

**Hasil Akhir:** Pak Prengky berhasil menjalankan bisnis yang sangat profesional layaknya korporat, meminimalisir waktu membalas chat, mendata pelanggan, dan tidak kehilangan omset hanya karena pelanggan lupa membawa uang tunai. Semua diatur dari satu jendela: **Chatpay**.
