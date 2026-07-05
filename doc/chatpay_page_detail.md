# 📱 Chatpay — Detail Halaman & Komponen UI

> Chatpay adalah fitur di dalam **Dashboard AstraPay** yang memungkinkan merchant mengirimkan tagihan pembayaran kepada pelanggan melalui WhatsApp. Semua proses pembayaran ditangani sepenuhnya oleh AstraPay.

---

## 1. Aktivasi Chatpay (Onboarding)

> Halaman pertama yang dilihat merchant saat pertama kali membuka menu Chatpay. Tujuannya: menjelaskan fitur dan mengajak merchant untuk mengaktifkan.

| Komponen | Detail |
|:---|:---|
| Hero Section | Ilustrasi/animasi fitur Chatpay + headline menarik ("Terima Pembayaran Langsung dari WhatsApp!") |
| Deskripsi Singkat | 3-4 bullet point keunggulan: kirim tagihan via WA, pembayaran otomatis, notifikasi real-time |
| Langkah Aktivasi | Stepper visual: 1) Aktifkan → 2) Hubungkan WA → 3) Mulai Kirim Tagihan |
| Tombol CTA | "Aktifkan Chatpay Sekarang" |
| FAQ Accordion | Pertanyaan umum: "Apakah gratis?", "Bagaimana cara kerjanya?", "Apakah aman?" |

---

## 2. Scan QR WhatsApp

> Halaman untuk menghubungkan nomor WhatsApp merchant ke sistem Chatpay.

| Komponen | Detail |
|:---|:---|
| QR Code Display | QR Code besar di tengah layar yang di-scan oleh WhatsApp merchant |
| Instruksi Step-by-Step | Panduan bergambar: 1) Buka WhatsApp → 2) Ketuk titik tiga → 3) Linked Devices → 4) Scan QR |
| Timer / Auto Refresh | Countdown timer QR (QR expired tiap ~60 detik), tombol "Refresh QR" |
| Status Indikator | Animasi loading "Menunggu scan..." → berubah jadi ✅ "Terhubung!" saat berhasil |
| Tombol Batal | "Kembali" / "Lakukan Nanti" |
| Alert Info | Catatan: "Pastikan WhatsApp Business Anda aktif dan terhubung ke internet" |

---

## 3. WhatsApp Status & Koneksi

> Halaman yang menampilkan status koneksi WhatsApp merchant saat ini.

| Komponen | Detail |
|:---|:---|
| Status Card | Kartu besar menampilkan: Nomor WA terhubung, nama profil WA, foto profil WA, status (🟢 Aktif / 🔴 Terputus) |
| Statistik Koneksi | Terhubung sejak (tanggal), total pesan terkirim hari ini, uptime |
| Tombol Aksi | "Putuskan Koneksi" (dengan konfirmasi modal), "Ganti Nomor WA" (scan ulang QR) |
| Riwayat Koneksi | Tabel kecil: log kapan terhubung/terputus (tanggal, waktu, alasan) |
| Alert Warning (jika terputus) | Banner merah: "WhatsApp Anda terputus! Tagihan tidak dapat dikirim." + tombol "Hubungkan Ulang" |

### Modal: Konfirmasi Putus Koneksi
| Komponen | Detail |
|:---|:---|
| Judul | "Putuskan Koneksi WhatsApp?" |
| Pesan | "Semua pengiriman tagihan via WA akan berhenti. Anda bisa menghubungkan ulang kapan saja." |
| Tombol | "Ya, Putuskan" (merah) / "Batal" |

---

## 4. Dashboard Chatpay

> Halaman utama setelah Chatpay aktif. Menampilkan ringkasan performa harian dan akses cepat ke fitur utama.

| Komponen | Detail |
|:---|:---|
| **Header Bar** | Judul "Chatpay", status WA (🟢/🔴), tombol "Kirim Tagihan" (CTA utama) |
| **Stat Cards (4 kartu)** | |
| → Transaksi Hari Ini | Jumlah transaksi + persentase naik/turun dibanding kemarin |
| → Pendapatan Hari Ini | Total nominal masuk hari ini (Rp) |
| → Pelanggan Terdaftar | Total pelanggan yang sudah binding AstraPay |
| → Tagihan Menunggu | Jumlah tagihan yang belum dibayar |
| **Grafik Pendapatan** | Line chart pendapatan 7 hari / 30 hari terakhir (toggle periode) |
| **Grafik Transaksi** | Bar chart jumlah transaksi per hari |
| **Transaksi Terbaru (5 terakhir)** | Tabel mini: nama pelanggan, jumlah, status (Berhasil/Menunggu/Gagal), waktu, tombol "Lihat Detail" |
| **Pelanggan Terbaru (5 terakhir)** | Daftar mini: nama, nomor WA, tanggal binding, tombol "Lihat Profil" |
| **Quick Action Buttons** | Shortcut: "Kirim Tagihan", "Tambah Pelanggan", "Lihat Semua Transaksi" |

---

## 5. Manajemen Pelanggan (List)

> Daftar semua pelanggan yang terhubung dengan merchant melalui Chatpay.

| Komponen | Detail |
|:---|:---|
| **Header** | Judul "Pelanggan", tombol "+ Tambah Pelanggan" |
| **Search Bar** | Cari berdasarkan nama / nomor WA |
| **Filter** | Dropdown: Status Binding (Semua / Aktif / Belum Binding / Expired), Urutan (Terbaru / Terlama / Nama A-Z) |
| **Tabel Pelanggan** | |
| → Kolom: Nama | Nama pelanggan |
| → Kolom: Nomor WA | Nomor WhatsApp pelanggan |
| → Kolom: Status Binding | Badge: 🟢 Aktif / 🟡 Belum Binding / 🔴 Expired |
| → Kolom: Total Transaksi | Jumlah transaksi yang pernah dilakukan |
| → Kolom: Terakhir Transaksi | Tanggal transaksi terakhir |
| → Kolom: Aksi | Tombol: "Lihat Detail", "Kirim Tagihan", "Kirim Link Binding" |
| **Pagination** | Navigasi halaman (10/25/50 per halaman) |
| **Empty State** | Ilustrasi + "Belum ada pelanggan. Mulai tambahkan pelanggan pertama Anda!" |
| **Bulk Action** | Checkbox di setiap baris + aksi massal: "Kirim Broadcast", "Export CSV" |

### Modal: Tambah Pelanggan
| Komponen | Detail |
|:---|:---|
| Field: Nama Lengkap | Input teks (mandatory) |
| Field: Nomor WhatsApp | Input nomor dengan prefix +62 (mandatory) |
| Field: Email | Input email (opsional) |
| Field: Catatan | Textarea untuk catatan internal merchant (opsional) |
| Tombol | "Simpan & Kirim Link Binding via WA" / "Simpan Saja" / "Batal" |

### Modal: Kirim Link Binding
| Komponen | Detail |
|:---|:---|
| Info Pelanggan | Nama + Nomor WA yang dituju |
| Preview Pesan WA | Preview template pesan yang akan dikirim (berisi link deeplink AstraPay) |
| Tombol | "Kirim Sekarang" / "Batal" |

---

## 6. Detail Pelanggan

> Halaman profil lengkap satu pelanggan beserta seluruh riwayat interaksinya.

| Komponen | Detail |
|:---|:---|
| **Profil Card** | |
| → Nama | Nama lengkap pelanggan |
| → Nomor WA | Nomor WhatsApp |
| → Email | Email (jika ada) |
| → Tanggal Terdaftar | Kapan pelanggan ditambahkan |
| → Status Binding | Badge: 🟢 Aktif / 🟡 Belum / 🔴 Expired |
| → Catatan Internal | Catatan dari merchant (editable) |
| **Ringkasan Statistik (3 kartu)** | |
| → Total Transaksi | Jumlah transaksi keseluruhan |
| → Total Pembayaran | Nominal total yang pernah dibayar (Rp) |
| → Rata-rata Transaksi | Nominal rata-rata per transaksi |
| **Info Saldo AstraPay** | Saldo BALANCE + POINT (dari API Balance Inquiry), status akun (ACTIVE/LOCKED) |
| **Riwayat Transaksi** | Tabel: tanggal, deskripsi tagihan, jumlah, status, referenceNo |
| **Riwayat Chat WA** | Log pesan WA yang pernah dikirim ke pelanggan ini (tagihan, reminder, konfirmasi) |
| **Tombol Aksi** | "Kirim Tagihan Baru", "Kirim Ulang Link Binding", "Hapus Pelanggan" (dengan konfirmasi) |

### Modal: Hapus Pelanggan
| Komponen | Detail |
|:---|:---|
| Judul | "Hapus Pelanggan?" |
| Pesan | "Data pelanggan akan dihapus dari daftar Chatpay. Binding AstraPay tidak akan terpengaruh." |
| Tombol | "Ya, Hapus" (merah) / "Batal" |

---

## 7. Kirim Tagihan

> Form untuk membuat dan mengirimkan tagihan pembayaran ke pelanggan via WhatsApp.

| Komponen | Detail |
|:---|:---|
| **Step 1: Pilih Pelanggan** | |
| → Dropdown Search | Cari & pilih pelanggan dari daftar (nama / nomor WA) |
| → Quick Add | Link "Pelanggan belum terdaftar? Tambah baru" (buka modal Tambah Pelanggan) |
| → Info Pelanggan | Setelah dipilih, tampilkan: nama, nomor WA, status binding |
| **Step 2: Detail Tagihan** | |
| → Deskripsi Tagihan | Input teks: "Pembayaran untuk..." (mandatory) |
| → Jumlah (Rp) | Input angka dengan format rupiah otomatis, minimum Rp 1.000 (mandatory) |
| → Nomor Invoice | Auto-generate atau input manual (opsional) |
| → Catatan Tambahan | Textarea untuk catatan di pesan WA (opsional) |
| → Batas Waktu Bayar | Date picker: kapan tagihan expired (opsional, default 24 jam) |
| **Step 3: Preview & Kirim** | |
| → Preview Pesan WA | Tampilan mockup chat WA yang akan diterima pelanggan (berisi deskripsi, jumlah, link bayar) |
| → Ringkasan | Pelanggan, jumlah, deskripsi, batas waktu |
| → Tombol | "Kirim Tagihan via WhatsApp" (hijau, warna WA) / "Simpan Sebagai Draft" / "Batal" |
| **Konfirmasi Sukses** | Toast/banner: "✅ Tagihan sebesar Rp xxx berhasil dikirim ke [Nama] via WhatsApp!" |

### Modal: Tagihan Berhasil Dikirim
| Komponen | Detail |
|:---|:---|
| Ikon Sukses | ✅ Animasi centang |
| Info | "Tagihan Rp 150.000 telah dikirim ke John Doe (0812xxxx)" |
| Tombol | "Kirim Tagihan Lagi" / "Lihat Riwayat Transaksi" / "Kembali ke Dashboard" |

---

## 8. Riwayat Transaksi (List)

> Daftar semua transaksi pembayaran yang terjadi melalui channel Chatpay.

| Komponen | Detail |
|:---|:---|
| **Header** | Judul "Riwayat Transaksi", tombol "Export" (CSV/Excel) |
| **Search Bar** | Cari berdasarkan nama pelanggan / nomor referensi / deskripsi |
| **Filter Bar** | |
| → Status | Dropdown: Semua / Menunggu Pembayaran / Berhasil / Gagal / Expired / Refund |
| → Periode | Date range picker (Hari ini / 7 Hari / 30 Hari / Custom) |
| → Rentang Nominal | Input: Rp min - Rp max |
| **Ringkasan Stat (atas tabel)** | Total transaksi di filter ini, Total nominal, Rata-rata |
| **Tabel Transaksi** | |
| → Kolom: Tanggal & Waktu | Format: 01 Jul 2026, 14:30 |
| → Kolom: Pelanggan | Nama + nomor WA |
| → Kolom: Deskripsi | Deskripsi tagihan |
| → Kolom: Jumlah | Nominal (Rp) |
| → Kolom: Status | Badge warna: 🟢 Berhasil / 🟡 Menunggu / 🔴 Gagal / ⚪ Expired / 🔵 Refund |
| → Kolom: Ref. No | Nomor referensi AstraPay |
| → Kolom: Aksi | "Lihat Detail" |
| **Pagination** | Navigasi halaman |
| **Empty State** | "Belum ada transaksi. Mulai kirim tagihan pertama Anda!" |

---

## 9. Detail Transaksi

> Halaman detail lengkap satu transaksi tertentu.

| Komponen | Detail |
|:---|:---|
| **Status Banner** | Banner warna sesuai status di bagian atas (hijau=Berhasil, kuning=Menunggu, merah=Gagal) |
| **Info Transaksi Card** | |
| → Nomor Referensi | referenceNo dari AstraPay |
| → Nomor Invoice | Nomor invoice merchant |
| → Deskripsi | Deskripsi tagihan |
| → Jumlah | Nominal pembayaran |
| → Status | Badge + penjelasan (misal: "Berhasil - Dibayar pada 01 Jul 2026 14:35") |
| → Metode Pembayaran | AstraPay Balance / AstraPay Point |
| → Tanggal Dibuat | Kapan tagihan dikirim |
| → Tanggal Dibayar | Kapan pembayaran masuk (jika sudah bayar) |
| → Batas Waktu | Deadline pembayaran |
| **Info Pelanggan Card** | |
| → Nama | Nama pelanggan |
| → Nomor WA | Nomor WhatsApp |
| → Link ke Profil | "Lihat Profil Pelanggan →" |
| **Timeline Aktivitas** | |
| → Step 1 | 📤 Tagihan dikirim via WA — 01 Jul 14:30 |
| → Step 2 | 👁️ Pesan dibaca — 01 Jul 14:32 |
| → Step 3 | 💳 Pembayaran diterima — 01 Jul 14:35 |
| → Step 4 | ✅ Notifikasi sukses dikirim ke pelanggan — 01 Jul 14:35 |
| **Tombol Aksi** | |
| → Jika Menunggu | "Kirim Reminder via WA", "Batalkan Tagihan" |
| → Jika Berhasil | "Ajukan Refund" |
| → Jika Gagal/Expired | "Kirim Ulang Tagihan" |
| **Info Refund (jika ada)** | Status refund, tanggal pengajuan, tanggal selesai, jumlah refund |

### Modal: Kirim Reminder
| Komponen | Detail |
|:---|:---|
| Preview Pesan | "Halo [Nama], tagihan Rp xxx belum dibayar. Silakan bayar sebelum [deadline]." |
| Tombol | "Kirim Reminder" / "Batal" |

### Modal: Ajukan Refund
| Komponen | Detail |
|:---|:---|
| Jumlah Refund | Input: default full amount, bisa partial |
| Alasan Refund | Dropdown: Barang rusak / Salah kirim / Permintaan pelanggan / Lainnya |
| Catatan | Textarea (opsional) |
| Tombol | "Ajukan Refund" / "Batal" |

### Modal: Batalkan Tagihan
| Komponen | Detail |
|:---|:---|
| Pesan | "Tagihan ini akan dibatalkan dan pelanggan akan mendapat notifikasi via WA." |
| Tombol | "Ya, Batalkan" (merah) / "Kembali" |

---

## 10. Pengaturan Chatpay

> Halaman konfigurasi template pesan dan preferensi Chatpay.

| Komponen | Detail |
|:---|:---|
| **Template Pesan WA** | |
| → Pesan Tagihan Baru | Template yang dikirim saat merchant membuat tagihan. Variabel: `{nama}`, `{jumlah}`, `{deskripsi}`, `{link_bayar}`, `{deadline}` |
| → Pesan Reminder | Template reminder untuk tagihan belum dibayar |
| → Pesan Pembayaran Berhasil | Template konfirmasi setelah pelanggan membayar |
| → Pesan Pembayaran Gagal | Template notifikasi jika pembayaran gagal |
| → Pesan Link Binding | Template untuk mengajak pelanggan menghubungkan akun AstraPay |
| → Pesan Refund Berhasil | Template konfirmasi refund ke pelanggan |
| → Preview | Setiap template ada tombol "Preview" untuk melihat tampilan di mockup WA |
| **Preferensi Notifikasi** | |
| → Auto-Reminder | Toggle on/off: kirim reminder otomatis sebelum deadline (pilih: 1 jam / 3 jam / 6 jam / 12 jam sebelum) |
| → Notifikasi Email Merchant | Toggle: kirim email ke merchant setiap ada pembayaran masuk |
| → Notifikasi WA Merchant | Toggle: kirim WA ke nomor merchant setiap ada pembayaran masuk |
| **Preferensi Tagihan** | |
| → Default Batas Waktu | Dropdown: 1 jam / 6 jam / 12 jam / 24 jam / 3 hari / 7 hari |
| → Prefix Nomor Invoice | Input: misal "INV-" → akan jadi "INV-00001" |
| → Auto-increment Invoice | Toggle on/off |
| **Tombol** | "Simpan Pengaturan" / "Reset ke Default" |

---

## Komponen Global (Muncul di Semua Halaman)

| Komponen | Detail |
|:---|:---|
| **Sidebar Menu** | Menu navigasi: Dashboard, Pelanggan, Kirim Tagihan, Riwayat Transaksi, Pengaturan, Status WA |
| **Top Bar** | Nama merchant, foto profil, notifikasi bell (🔔), status WA (🟢/🔴) |
| **Notification Panel** | Dropdown dari bell: "Pembayaran masuk dari John Doe Rp 150.000", "WhatsApp terputus!", dll |
| **Toast Notifications** | Popup kecil di pojok: sukses/error/info untuk setiap aksi |
| **Loading States** | Skeleton loader untuk setiap tabel dan kartu saat data sedang dimuat |
| **Responsive** | Semua halaman harus responsif (Desktop + Tablet), mobile opsional karena ini dashboard |

---

## Rekap Total Komponen

| Halaman | Komponen Utama | Modal/Popup |
|:---|:---:|:---:|
| 1. Aktivasi Chatpay | 5 | 0 |
| 2. Scan QR WhatsApp | 6 | 0 |
| 3. WhatsApp Status | 5 | 1 |
| 4. Dashboard Chatpay | 8 | 0 |
| 5. Manajemen Pelanggan | 7 | 2 |
| 6. Detail Pelanggan | 7 | 1 |
| 7. Kirim Tagihan | 10 | 1 |
| 8. Riwayat Transaksi | 7 | 0 |
| 9. Detail Transaksi | 6 | 3 |
| 10. Pengaturan Chatpay | 8 | 0 |
| Komponen Global | 5 | 0 |
| **TOTAL** | **74 komponen** | **8 modal** |
