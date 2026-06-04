# Mermaid Diagrams — AstraPay Chat

> Semua diagram di bawah bisa langsung copy-paste ke [mermaid.live](https://mermaid.live)
> Format: Mermaid.js

---

## 1. FLOWCHART: Merchant Setup di Dashboard (First Time)

```mermaid
flowchart TD
    START(["🚀 Merchant Baru Mendaftar"]) --> REG["Buka dashboard.astrapaychat.com"]
    REG --> FORM["Isi Form Registrasi:<br/>Nama Toko, Email, Password"]
    FORM --> VERIFY["Verifikasi Email<br/>(klik link di email)"]
    VERIFY --> LOGIN["Login ke Dashboard"]
    LOGIN --> CONNECT["Hubungkan Nomor WhatsApp Bisnis<br/>(masukkan nomor WA + verifikasi OTP)"]
    CONNECT --> SETUP_STORE["Setup Toko:<br/>Nama, Kategori, Jam Operasional"]
    SETUP_STORE --> ADD_PRODUCT["Tambah Produk:<br/>Upload Foto → Nama → Harga → Stok"]
    ADD_PRODUCT --> MORE{"Tambah Produk<br/>Lain?"}
    MORE -->|Ya| ADD_PRODUCT
    MORE -->|Tidak| CHATBOT["Atur Chatbot:<br/>Sapaan, Menu, Pertanyaan"]
    CHATBOT --> PAYMENT["Pilih Metode Pembayaran:<br/>☑ AstraPay Saldo<br/>☑ QRIS"]
    PAYMENT --> ACTIVATE["Klik AKTIFKAN"]
    ACTIVATE --> QR["Dapatkan QR Code + Link WhatsApp Toko"]
    QR --> SPREAD["Sebarkan QR/Link:<br/>Tempel di Toko · Share ke Pelanggan<br/>Post di Sosmed · Cetak Kemasan"]
    SPREAD --> DONE(["✅ Toko Siap Jualan!"])

    style START fill:#4CAF50,color:#fff
    style DONE fill:#4CAF50,color:#fff
    style ACTIVATE fill:#FF9800,color:#fff
    style QR fill:#2196F3,color:#fff
```

---

## 2. FLOWCHART: Customer End-to-End Order Flow (Happy Path)

```mermaid
flowchart TD
    START(["📱 Customer Scan QR / Klik Link WA"]) --> GREET["Bot WhatsApp Menyapa:<br/>'Halo! Selamat datang di [Nama Toko]'<br/>[🛒 Lihat Produk] [📢 Promo] [❓ Bantuan]"]
    GREET --> CHOOSE{"Customer Pilih?"}
    CHOOSE -->|"🛒 Lihat Produk"| CATALOG["Bot Tampilkan Katalog:<br/>1. Produk A — Rp XX.XXX<br/>2. Produk B — Rp XX.XXX<br/>3. Produk C — Rp XX.XXX<br/>Ketik nomor produk:"]
    CHOOSE -->|"📢 Promo"| PROMO["Bot Tampilkan Promo:<br/>'Diskon 10% produk XYZ!'<br/>[🛒 Ke Katalog]"]
    CHOOSE -->|"❓ Bantuan"| HELP["Bot Tampilkan Bantuan:<br/>Cara Pesan · Pembayaran · Kontak<br/>[🛒 Ke Katalog]"]
    PROMO --> CATALOG
    HELP --> CATALOG

    CATALOG --> SELECT["Customer Ketik Nomor Produk<br/>Contoh: '1'"]
    SELECT --> QTY["Bot: 'Mau berapa?'<br/>Customer: '2'"]
    QTY --> MORE_ITEM{"Bot: 'Tambah produk lain?'<br/>[➕ Tambah] [💳 Bayar]"}

    MORE_ITEM -->|"➕ Tambah"| CATALOG
    MORE_ITEM -->|"💳 Bayar"| COLLECT["Bot Kumpulkan Data:<br/>Nama · Alamat · Catatan"]

    COLLECT --> CONFIRM["Bot Tampilkan Ringkasan Pesanan:<br/>Produk xQty = Total Harga<br/>Nama · Alamat<br/>[✅ Konfirmasi] [❌ Batal]"]
    CONFIRM -->|"❌ Batal"| CANCEL(["❌ Pesanan Dibatalkan"])
    CONFIRM -->|"✅ Konfirmasi"| PAY_METHOD["Pilih Metode Bayar:<br/>[🟣 AstraPay Saldo] [📱 QRIS]"]

    PAY_METHOD -->|"🟣 AstraPay"| ASTRA_FLOW["Bot: 'Masukkan nomor HP AstraPay:'<br/>Customer input nomor HP"]
    PAY_METHOD -->|"📱 QRIS"| QRIS_FLOW["Bot generate QR Code MPM<br/>Tampilkan gambar QR di chat"]

    ASTRA_FLOW --> LINK["Bot kirim link pembayaran AstraPay"]
    LINK --> CLICK["Customer klik link → buka halaman PIN AstraPay"]
    CLICK --> PIN["Customer input PIN AstraPay"]
    PIN --> PIN_VALID{"PIN Valid?"}
    PIN_VALID -->|Ya| ASTRA_SUCCESS
    PIN_VALID -->|Tidak| PIN_RETRY["'PIN salah. Coba lagi (sisa X)'"]
    PIN_RETRY -->|Coba lagi| PIN
    PIN_RETRY -->|Gagal 3x| ASTRA_FAIL(["❌ Pembayaran Gagal"])

    QRIS_FLOW --> SCAN["Customer scan QR via e-wallet / m-banking"]
    SCAN --> QRIS_CONFIRM["Customer konfirmasi bayar di app"]
    QRIS_CONFIRM --> QRIS_VALID{"Bayar Sukses?"}
    QRIS_VALID -->|Ya| ASTRA_SUCCESS
    QRIS_VALID -->|Tidak| QRIS_FAIL(["❌ Pembayaran Gagal"])

    ASTRA_SUCCESS["✅ Pembayaran SUKSES"] --> CALLBACK["AstraPay kirim callback ke Backend<br/>{status: Approved, trxId: MP-xxx}"]
    CALLBACK --> UPDATE["Backend update status order → PAID"]
    UPDATE --> NOTIF["Bot kirim konfirmasi ke Customer:<br/>'✅ Pesanan #INV-042 diterima!<br/>Total: Rp XX.XXX — LUNAS<br/>Estimasi kirim: Besok pagi<br/>Terima kasih! 🙏'"]

    NOTIF --> DASHBOARD["📊 Di Dashboard Merchant:<br/>Order #042 muncul → status PAID<br/>Merchant proses pesanan"]
    DASHBOARD --> SHIP["Merchant update status → DIKIRIM"]
    SHIP --> COMPLETE(["🎉 Pesanan Selesai!"])

    style START fill:#4CAF50,color:#fff
    style COMPLETE fill:#4CAF50,color:#fff
    style ASTRA_SUCCESS fill:#4CAF50,color:#fff
    style CANCEL fill:#f44336,color:#fff
    style ASTRA_FAIL fill:#f44336,color:#fff
    style QRIS_FAIL fill:#f44336,color:#fff
    style DASHBOARD fill:#2196F3,color:#fff
    style CATALOG fill:#FF9800,color:#000
    style CONFIRM fill:#FF9800,color:#000
    style NOTIF fill:#9C27B0,color:#fff
```

---

## 3. SEQUENCE DIAGRAM: Full System Interaction (Merchant Setup → Customer Order → Payment → Settlement)

```mermaid
sequenceDiagram
    actor M as 🏪 Merchant
    actor C as 📱 Customer
    participant D as Dashboard Web
    participant BE as Backend API
    participant DB as Database
    participant WA as WhatsApp API (Meta)
    participant AP as AstraPay API

    %% ===== PHASE 1: MERCHANT SETUP =====
    rect rgb(255, 243, 224)
    Note over M,DB: PHASE 1 — MERCHANT ONBOARDING & SETUP
    M->>D: Buka dashboard.astrapaychat.com
    M->>D: Register (nama, email, password)
    D->>BE: POST /api/auth/register
    BE->>DB: INSERT merchants
    DB-->>BE: OK
    BE-->>D: 201 Created
    D-->>M: "Cek email untuk verifikasi"

    M->>D: Klik link verifikasi
    D->>BE: PUT /api/auth/verify
    BE->>DB: UPDATE merchants SET verified=true
    BE-->>D: OK

    M->>D: Login
    D->>BE: POST /api/auth/login
    BE-->>D: JWT token

    M->>D: Hubungkan nomor WA
    D->>BE: PUT /api/merchants/:id
    BE->>WA: Register WABA / verify number
    WA-->>BE: OK
    BE->>DB: UPDATE merchants SET waba_id, phone
    BE-->>D: OK

    M->>D: Tambah Produk
    D->>BE: POST /api/products
    BE->>DB: INSERT products
    DB-->>BE: OK
    BE-->>D: 201 Created

    M->>D: Atur Chatbot Sapaan
    D->>BE: PUT /api/merchants/:id
    BE->>DB: UPDATE merchants SET chatbot_config
    BE-->>D: OK

    M->>D: Klik AKTIFKAN
    D->>BE: PUT /api/merchants/:id/activate
    BE->>DB: UPDATE merchants SET is_active=true
    BE-->>D: {qr_code_url, wa_link}
    D-->>M: Tampilkan QR Code & Link WA
    end

    %% ===== PHASE 2: CUSTOMER ORDER =====
    rect rgb(227, 242, 253)
    Note over C,BE: PHASE 2 — CUSTOMER ORDER FLOW VIA WHATSAPP
    C->>WA: Scan QR / Klik Link WA
    WA->>BE: POST /api/webhooks/whatsapp<br/>{from: "628xxx", text: "Halo"}
    BE->>DB: SELECT products WHERE merchant.wa_link matches
    DB-->>BE: [product list]
    BE->>DB: INSERT chat_sessions
    BE->>WA: Send message: "Halo! Mau pesan apa?" + catalog menu

    WA->>C: Tampilkan greeting + menu
    C->>WA: "1" (pilih produk pertama)
    WA->>BE: POST /api/webhooks/whatsapp<br/>{from: "628xxx", text: "1"}
    BE->>DB: SELECT product id=1
    DB-->>BE: {name, price, stock}
    BE->>DB: UPDATE chat_sessions SET state='browsing'
    BE->>WA: Send: "Produk A — Rp 50.000. Mau berapa?"
    WA->>C: "Mau berapa?"

    C->>WA: "3"
    WA->>BE: POST /api/webhooks/whatsapp<br/>{text: "3"}
    BE->>BE: Calculate: 3 x 50.000 = 150.000
    BE->>DB: UPDATE chat_sessions SET context={cart: [{id:1, qty:3}]}
    BE->>WA: Send: "Total Rp 150.000. [➕ Tambah] [💳 Bayar]"
    WA->>C: Tampilkan pilihan

    C->>WA: "Bayar"
    WA->>BE: POST /api/webhooks/whatsapp<br/>{text: "Bayar"}
    BE->>DB: UPDATE chat_sessions SET state='collecting'
    BE->>WA: Send: "Nama:"
    WA->>C: "Nama:"
    C->>WA: "Rina"
    WA->>BE: {text: "Rina"}
    BE->>WA: Send: "Alamat:"
    WA->>C: "Alamat:"
    C->>WA: "Jl. Melati No. 5"
    WA->>BE: {text: "Jl. Melati No. 5"}
    BE->>WA: Send: "Catatan (optional):"
    WA->>C: "Catatan:"
    C->>WA: "Packing rapi ya"
    WA->>BE: {text: "Packing rapi ya"}

    BE->>DB: INSERT orders (status=pending, payment=unpaid)
    DB-->>BE: {order_id: "INV-042"}
    BE->>DB: UPDATE chat_sessions SET state='confirm'
    BE->>WA: Send: "✅ Ringkasan Pesanan #INV-042<br/>Produk A x3 = Rp 150.000<br/>Nama: Rina<br/>[✅ Konfirmasi] [❌ Batal]"
    WA->>C: Tampilkan ringkasan
    C->>WA: "Konfirmasi"
    WA->>BE: {text: "Konfirmasi"}
    BE->>WA: Send: "Pilih bayar: [🟣 AstraPay] [📱 QRIS]"
    WA->>C: Pilih metode bayar
    end

    %% ===== PHASE 3: PAYMENT - ASTRA PAY =====
    rect rgb(232, 245, 233)
    Note over C,AP: PHASE 3A — PAYMENT VIA ASTRA PAY (PUSH TO PAYMENT)
    C->>WA: "AstraPay"
    WA->>BE: {text: "AstraPay"}
    BE->>WA: Send: "Masukkan nomor HP AstraPay:"
    WA->>C: "Nomor HP:"
    C->>WA: "081234567890"
    WA->>BE: {text: "081234567890"}

    BE->>AP: POST /merchant-service/push-payments<br/>{merchantTransactionId: "INV-042", amount: "150000"}
    AP-->>BE: {token: "xxx", urlRedirect: "https://sandbox.astrapay.com/..."}
    BE->>WA: Send payment link
    WA->>C: "[Klik di sini untuk bayar]"
    C->>AP: Buka halaman PIN AstraPay
    C->>AP: Input PIN
    AP->>AP: Validasi PIN

    AP->>BE: POST Payment Callback<br/>{merchantTransactionId: "INV-042",<br/>astrapayTransactionId: "MP-001",<br/>status: "Approved", amount: "150000"}
    BE->>DB: UPDATE orders SET status='paid',<br/>astrapay_trx_id='MP-001', payment_status='paid'
    BE->>WA: Send: "✅ Pesanan #INV-042 LUNAS!<br/>Total: Rp 150.000<br/>Terima kasih Rina! 🙏"
    WA->>C: Konfirmasi pembayaran sukses
    end

    %% ===== PHASE 3B: PAYMENT - QRIS (ALTERNATE) =====
    rect rgb(255, 235, 238)
    Note over C,AP: PHASE 3B — PAYMENT VIA QRIS (ALTERNATE FLOW)
    C->>WA: "QRIS" (alternate choice)
    WA->>BE: {text: "QRIS"}
    BE->>AP: POST /snap/v1.0/qr/qr-mpm-generate<br/>{partnerReferenceNo: "INV-042", amount: "150000"}
    AP-->>BE: {qrContent: "000201010212...", qrImage: "base64..."}
    BE->>WA: Send QR code image
    WA->>C: Tampilkan QR Code
    C->>AP: Scan QR via e-wallet / m-banking
    AP->>BE: POST Payment Notification<br/>{originalPartnerRefNo: "INV-042", status: "SUCCESS"}
    BE->>DB: UPDATE orders SET status='paid', payment_status='paid'
    BE->>WA: Send: "✅ Pesanan #INV-042 LUNAS via QRIS!"
    WA->>C: Konfirmasi sukses
    end

    %% ===== PHASE 4: MERCHANT PROCESSING =====
    rect rgb(243, 229, 245)
    Note over M,DB: PHASE 4 — MERCHANT PROSES PESANAN
    M->>D: Buka dashboard → lihat pesanan baru
    D->>BE: GET /api/orders?status=paid
    BE->>DB: SELECT orders WHERE status='paid'
    DB-->>BE: [INV-042: Rina, Produk A x3, Rp 150.000]
    BE-->>D: Order list
    D-->>M: Tampilkan semua pesanan PAID

    M->>D: Klik "Proses" → status: SHIPPED
    D->>BE: PUT /api/orders/INV-042/status<br/>{status: "shipped"}
    BE->>DB: UPDATE orders SET status='shipped'
    BE->>WA: Send: "📦 Pesanan #INV-042 sedang dikirim!"
    WA->>C: Notifikasi pengiriman

    M->>D: Klik "Selesai" → status: DONE
    D->>BE: PUT /api/orders/INV-042/status<br/>{status: "done"}
    BE->>DB: UPDATE orders SET status='done'
    end

    %% ===== PHASE 5: SETTLEMENT =====
    rect rgb(255, 249, 196)
    Note over M,AP: PHASE 5 — SETTLEMENT (H+1)
    AP->>AP: Settlement auto (H+1)
    AP->>M: Dana Rp 150.000 masuk rekening
    M->>D: Buka dashboard → lihat laporan
    D->>BE: GET /api/reports/payments
    BE->>DB: SELECT orders WHERE status='done'
    DB-->>BE: Report data
    BE-->>D: Report
    D-->>M: Download CSV laporan transaksi
    end
```

---

## 4. FLOWCHART: Error & Edge Cases

```mermaid
flowchart TD
    START(["⚠️ Edge Cases & Error Handling"]) --> EDGE1{"Customer input<br/>nomor HP tidak valid?"}
    EDGE1 -->|Ya| E1["Bot: 'Nomor HP tidak valid. Format: 08xxxx'"]
    E1 --> EDGE1

    EDGE1 -->|Tidak| EDGE2{"Nomor HP belum<br/>terdaftar AstraPay?"}
    EDGE2 -->|Ya| E2["Bot arahkan ke halaman registrasi AstraPay<br/>→ Setelah daftar, ulangi bayar"]
    E2 --> EDGE2

    EDGE2 -->|Tidak| EDGE3{"Saldo AstraPay<br/>tidak cukup?"}
    EDGE3 -->|Ya| E3["Bot: 'Saldo tidak cukup. Top up dulu ya!'<br/>[🔄 Coba Lagi] [📱 Bayar QRIS]"]
    E3 --> EDGE3

    EDGE3 -->|Tidak| EDGE4{"PIN AstraPay<br/>salah?"}
    EDGE4 -->|Ya, <3x| E4["Bot: 'PIN salah. Coba lagi (sisa X percobaan)'"]
    E4 --> EDGE4
    EDGE4 -->|Ya, 3x| E5["🔒 Akun terkunci sementara<br/>Bot: 'Maaf, akun terkunci. Hubungi CS AstraPay'"]
    E5 --> FAIL(["❌ Gagal"])

    EDGE4 -->|Tidak| EDGE5{"Payment<br/>timeout?"}
    EDGE5 -->|Ya| E6["Bot: 'Pembayaran timeout. Silakan ulangi.'<br/>[💳 Bayar Ulang]"]
    E6 --> EDGE5

    EDGE5 -->|Tidak| EDGE6{"Stok produk<br/>habis saat order?"}
    EDGE6 -->|Ya| E7["Bot: 'Maaf, produk ini habis. Pilih yang lain ya?'<br/>[🛒 Ke Katalog]"]
    E7 --> EDGE6

    EDGE6 -->|Tidak| EDGE7{"Callback payment<br/>tidak sampai?"}
    EDGE7 -->|Ya| E8["Backend polling status transaksi<br/>ke AstraPay tiap 5 detik<br/>Maks 10x polling"]
    E8 --> EDGE7

    EDGE7 -->|Tidak| SUCCESS(["✅ Happy Path"])

    style START fill:#FF9800,color:#000
    style SUCCESS fill:#4CAF50,color:#fff
    style FAIL fill:#f44336,color:#fff
    style E5 fill:#f44336,color:#fff
```

---

## 5. STATE DIAGRAM: Order Lifecycle

```mermaid
stateDiagram-v2
    [*] --> PENDING: Customer konfirmasi pesanan
    PENDING --> UNPAID: Menunggu pembayaran
    UNPAID --> PAID: Pembayaran sukses<br/>(callback AstraPay)
    UNPAID --> CANCELLED: Customer batal /<br/>payment timeout /<br/>payment failed
    PAID --> PROCESSING: Merchant mulai proses
    PROCESSING --> SHIPPED: Barang dikirim
    SHIPPED --> DONE: Pesanan selesai
    PAID --> REFUNDED: Merchant refund<br/>via AstraPay Refund API
    CANCELLED --> [*]
    DONE --> [*]
    REFUNDED --> [*]

    note right of PAID
        AstraPay callback:
        {status: "Approved"}
        astrapayTransactionId: MP-xxx
    end note

    note right of REFUNDED
        POST refund API
        AstraPay Direct Debit Refund
    end note
```

---

## 6. GRAPH: System Architecture Overview

```mermaid
graph TB
    subgraph "👤 Customer Side"
        C[📱 Customer WhatsApp]
    end

    subgraph "🏪 Merchant Side"
        M[💻 Merchant Dashboard]
    end

    subgraph "☁️ AstraPay Chat Backend"
        API[🔌 API Gateway]
        BOT[🤖 Bot Engine]
        CAT[📦 Catalog Service]
        ORD[📋 Order Service]
        PAY[💳 Payment Service]
        NOTIF[🔔 Notification Service]
        DB[(🗄️ PostgreSQL)]
        CACHE[(⚡ Redis)]
    end

    subgraph "🔗 External APIs"
        WA[WhatsApp Cloud API<br/>Meta]
        AP_PC[AstraPay<br/>Payment Channel]
        AP_QR[AstraPay<br/>QRIS SNAP BI]
        AP_RP[AstraPay<br/>Report API]
    end

    C <-->|"Chat Messages<br/>Webhooks"| WA
    WA <--> API

    M -->|"HTTPS"| API

    API --> BOT
    API --> CAT
    API --> ORD
    API --> PAY
    API --> NOTIF

    BOT --> CACHE
    BOT --> DB
    CAT --> DB
    ORD --> DB
    PAY --> DB

    PAY -->|"Push to Payment"| AP_PC
    PAY -->|"Generate QR MPM"| AP_QR
    PAY -->|"Callback"| AP_PC
    PAY -->|"Payment Notification"| AP_QR

    NOTIF -->|"Send Message"| WA
    NOTIF --> DB

    ORD -->|"Report"| AP_RP

    style C fill:#4CAF50,color:#fff
    style M fill:#2196F3,color:#fff
    style WA fill:#9C27B0,color:#fff
    style AP_PC fill:#FF9800,color:#000
    style AP_QR fill:#FF9800,color:#000
    style AP_RP fill:#FF9800,color:#000
    style DB fill:#607D8B,color:#fff
    style CACHE fill:#795548,color:#fff
```

---

## 7. SEQUENCE DIAGRAM: Payment Timeout & Retry Logic

```mermaid
sequenceDiagram
    actor C as 📱 Customer
    participant WA as WhatsApp
    participant BE as Backend
    participant AP as AstraPay

    C->>WA: Pilih bayar AstraPay
    WA->>BE: Request payment
    BE->>AP: POST /merchant-service/push-payments
    AP-->>BE: {urlRedirect}
    BE->>WA: Kirim link bayar

    Note over C,AP: SLA AstraPay: 45 detik

    C->>AP: Buka link bayar
    C->>AP: Input PIN
    AP->>AP: Processing...

    Note over C,AP: ⏱ Timeout setelah 45 detik<br/>tanpa response

    AP--xBE: Callback tidak sampai

    Note over BE: Backend mendeteksi<br/>order stuck >60 detik

    loop Polling (max 10x, tiap 5 detik)
        BE->>AP: GET /merchant-service/payments/status?trxId=INV-042
        alt Status: Approved
            AP-->>BE: {status: "Approved", trxId: "MP-001"}
            BE->>WA: Send: "✅ Pembayaran sukses!"
        else Status: Pending
            AP-->>BE: {status: "Pending"}
            Note over BE: Wait 5 detik, retry
        else Status: Timeout
            AP-->>BE: {status: "Timeout"}
            BE->>WA: Send: "⏱ Pembayaran timeout. Silakan ulangi."
        end
    end
```

---

## 8. FLOWCHART: Broadcast Message ke Pelanggan

```mermaid
flowchart TD
    START(["📢 Merchant Kirim Broadcast"]) --> DASH["Buka Dashboard → Menu Broadcast"]
    DASH --> TYPE{"Pilih Jenis Broadcast?"}

    TYPE -->|"Promo"| PROMO["Tulis pesan promo:<br/>'Diskon 20% akhir pekan ini!'"]
    TYPE -->|"Pengingat Bayar"| REMINDER["Pilih pesanan unpaid →<br/>Auto-generate pesan pengingat"]
    TYPE -->|"Custom"| CUSTOM["Tulis pesan bebas"]

    PROMO --> ADD_IMG{"Tambahkan<br/>Gambar?"}
    REMINDER --> TEMPLATE["Gunakan template:<br/>'Halo {nama}, pesanan #{order_id}<br/>menunggu pembayaran nih!'"]
    CUSTOM --> ADD_IMG

    ADD_IMG -->|Ya| UPLOAD["Upload gambar produk / promo"]
    ADD_IMG -->|Tidak| TARGET["Pilih target broadcast:"]
    UPLOAD --> TARGET
    TEMPLATE --> TARGET

    TARGET --> ALL{"Target?"}
    ALL -->|"Semua Pelanggan"| ALL_CUST["Pilih dari daftar semua<br/>customer yang pernah order"]
    ALL -->|"Segment Tertentu"| SEGMENT["Filter berdasarkan:<br/>- Order terakhir < 30 hari<br/>- Belum order > 60 hari<br/>- Kategori produk tertentu"]

    ALL_CUST --> PREVIEW["Preview pesan"]
    SEGMENT --> PREVIEW
    PREVIEW --> CONFIRM_SEND{"Konfirmasi Kirim?"}

    CONFIRM_SEND -->|"✅ Kirim"| SEND["Backend kirim ke WhatsApp API<br/>POST /api/broadcast<br/>{template, recipients}"]
    CONFIRM_SEND -->|"❌ Batal"| CANCEL(["Dibatalkan"])

    SEND --> WA_SEND["WhatsApp Business API<br/>kirim pesan satu per satu<br/>(rate limit: ~20/detik)"]
    WA_SEND --> RESULT["Dashboard tampilkan:<br/>✅ Terkirim: 87<br/>❌ Gagal: 3<br/>⏳ Pending: 10"]
    RESULT --> DONE(["📊 Selesai"])

    style START fill:#2196F3,color:#fff
    style DONE fill:#4CAF50,color:#fff
    style SEND fill:#FF9800,color:#000
```

---

## 9. JOURNEY MAP: Customer Experience

```mermaid
journey
    title Customer Journey — Belanja via WhatsApp AstraPay
    section Discovery
      Lihat QR di toko/media sosial: 5: Customer
      Scan QR / klik link: 5: Customer
    section Browse
      Bot menyapa dengan ramah: 5: Customer
      Lihat katalog produk: 4: Customer
      Pilih produk yang menarik: 4: Customer
    section Order
      Tentukan jumlah: 5: Customer
      Isi data pengiriman: 3: Customer
      Review ringkasan pesanan: 4: Customer
    section Payment
      Pilih metode bayar: 4: Customer
      Masukkan nomor HP AstraPay: 4: Customer
      Verifikasi PIN: 3: Customer
    section Confirmation
      Terima notifikasi sukses: 5: Customer
      Lihat nomor pesanan: 5: Customer
      Tenang karena sudah LUNAS: 5: Customer
    section Delivery
      Terima notifikasi dikirim: 5: Customer
      Pesanan sampai: 5: Customer
```

---

## 10. CLASS DIAGRAM: Database Entity Relationship

```mermaid
classDiagram
    class Merchant {
        +UUID id
        +String name
        +String email
        +String password_hash
        +String phone
        +String waba_id
        +String client_id
        +JSON chatbot_config
        +String qr_code_url
        +String wa_link
        +Boolean is_active
        +DateTime created_at
        +DateTime updated_at
    }

    class Product {
        +UUID id
        +UUID merchant_id FK
        +String name
        +Text description
        +Decimal price
        +Integer stock
        +String image_url
        +String category
        +Boolean is_active
        +DateTime created_at
        +DateTime updated_at
    }

    class Order {
        +UUID id
        +UUID merchant_id FK
        +String customer_name
        +String customer_phone
        +Text address
        +Text notes
        +Decimal total_amount
        +String status
        +String payment_method
        +String payment_status
        +String astrapay_trx_id
        +DateTime created_at
        +DateTime updated_at
    }

    class OrderItem {
        +UUID id
        +UUID order_id FK
        +UUID product_id FK
        +Integer quantity
        +Decimal price
        +DateTime created_at
    }

    class ChatSession {
        +UUID id
        +UUID merchant_id FK
        +String customer_phone
        +String state
        +JSON context
        +DateTime created_at
        +DateTime updated_at
    }

    class Broadcast {
        +UUID id
        +UUID merchant_id FK
        +String template_text
        +String image_url
        +JSON recipients
        +Integer sent_count
        +Integer failed_count
        +String status
        +DateTime created_at
    }

    class Payment {
        +UUID id
        +UUID order_id FK
        +String method
        +String astrapay_trx_id
        +Decimal amount
        +String status
        +JSON callback_raw
        +DateTime paid_at
        +DateTime created_at
    }

    class Settlement {
        +UUID id
        +UUID merchant_id FK
        +Date settlement_date
        +Decimal total_amount
        +Integer order_count
        +String status
        +DateTime created_at
    }

    Merchant "1" -- "many" Product : has
    Merchant "1" -- "many" Order : receives
    Merchant "1" -- "many" ChatSession : has
    Merchant "1" -- "many" Broadcast : sends
    Merchant "1" -- "many" Settlement : receives
    Order "1" -- "many" OrderItem : contains
    OrderItem "many" -- "1" Product : references
    Order "1" -- "1" Payment : has
```

---

*Semua diagram siap copy-paste ke [mermaid.live](https://mermaid.live)*
