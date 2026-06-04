# ASTRA PAY CHAT — Ready to Paste

---

## SLIDE 1 — COVER

### Title
AstraPay Chat

### Subtitle
Sell on WhatsApp. Pay with AstraPay.
No Website. No App. No Friction.

### Footer
Hackathon AstraPay 2026 | Team [Nama Tim] | June 2026

### Visual
Background: Gradient ungu `#6C2BD9` → `#4A1D99`
Logo AstraPay di pojok kiri atas
Icon WhatsApp ⊕ AstraPay di tengah

---

## SLIDE 2 — PROBLEM

### Header
MSMEs Sell on WhatsApp — But the Money Flow Is Broken

### Left — Quote (big italic)
"Saya jualan di WhatsApp.
Catat pesanan di buku.
Minta transfer manual.
Bukti transfer dicek satu-satu.
Kadang pesanan hilang.
Kadang pembeli kabur."

— Ibu Rina, Pemilik Warung Sembako

### Right — The Reality
WhatsApp = Indonesia's #1 commerce channel

30M+ MSMEs
230M internet users
>90% on WhatsApp

But payments are: MANUAL · SLOW · UNTRACKED

### Bottom Bar
WhatsApp commerce tools exist. But for AstraPay's ecosystem? Nothing.
MSMEs in the motorcycle sector? Nothing.

---

## SLIDE 3 — SOLUTION

### Header
AstraPay Chat: Turn WhatsApp Into a Store + Cash Register

### Hero
Every WhatsApp chat can now become a storefront.
Browse products, place orders, and pay with AstraPay —
all inside WhatsApp.

### 3 Steps

**① SCAN OR TAP**
Scan QR or tap link. No app to install.

**② CHAT & SHOP**
Bot greets you. Browse catalog. Pick products. Enter your details.

**③ PAY & DONE**
AstraPay payment link. Input HP number + PIN in webview. Paid. Notified.

### Magic Box
Payment happens in an AstraPay webview — auto-detects if app is installed. If not? Stay in webview. No account yet? Register right there. User NEVER leaves their WhatsApp flow. No app install required. No account linking needed.

---

## SLIDE 4 — MERCHANT SIDE

### Header
10-Minute Setup. Zero Coding.

### Left — Setup Flow

**① Register** (1 min) — Email & password

**② Add Products** (3 min) — Upload photo, name, price, stock

**③ Set Chatbot** (2 min) — Write greeting message, menu options

**④ Choose Payment** (1 min) — ☑ AstraPay ☑ QRIS

**⑤ Activate** (1 min) — Get QR code + WhatsApp link

**⑥ Distribute** — Display in store, share to customers, post on social media, print on packaging

### Right — Dashboard Modules

📦 **Product Catalog** — Add photos, prices, manage stock

📋 **Order Inbox** — New → Paid → Shipped → Done

💳 **Payments** — Real-time payment status

📊 **Reports** — Download CSV

📢 **Broadcast** — Mass promo to customers

### Bottom
✅ No coding ✅ No website needed ✅ Setup < 10 min
🟣 Funds settled next day (H+1) 🟣 Full reports

---

## SLIDE 5 — CUSTOMER SIDE

### Header
Customer Flow: Chat to Payment in Under 2 Minutes

### 6 Steps

**❶ SCAN / TAP**
Scan QR at store or tap link from WhatsApp

**❷ BOT GREETS**
"Welcome! What would you like today?"
[🛒 Browse Products] [📢 Promos]

**❸ BROWSE CATALOG**
"1. Rice 5kg — Rp 65,000"
"2. Cooking Oil 2L — Rp 36,000"
"3. Sugar 1kg — Rp 15,000"
Type product number to pick

**❹ ENTER DETAILS**
Name, address, delivery notes

**❺ CHOOSE PAYMENT**
[🟣 AstraPay] or [📱 QRIS]

**❻ PAID & DONE**
"✅ Order #001 PAID. Total: Rp 130,000. Delivering tomorrow. Thank you! 🙏"

### Highlight
⏱ < 2 minutes first chat to payment
📱 100% inside WhatsApp — no app install
💳 Push to Payment — just HP number + PIN in webview
🔁 QRIS accepts ALL e-wallets

---

## SLIDE 6 — PAYMENT FLOW: THE MAGIC

### Header
Seamless Payment Without Leaving WhatsApp

### When User Clicks "Pay"

Bot sends payment link → User taps it → AstraPay webview opens

**Path A: App installed?** YES → Opens AstraPay app → enter PIN → PAID ✅

**Path B: No app?** Stay in webview → input phone number → enter PIN → PAID ✅

**Path C: No account?** Register right there in webview → enter PIN → PAID ✅

### Backend (silent)
Push to Payment API generates payment link
Payment callback updates order status
Bot sends confirmation: "✅ Order #001 PAID"

### Why This Matters
• Zero install required — webview handles everything
• No account linking — Push to Payment uses HP + PIN only
• Fallback is seamless — register in-web if needed
• Fits AstraPay SNAP BI standards

---

## SLIDE 7 — TARGET USERS

### Header
Who Is This For?

### Persona 1 — Ibu Rina
**Grocery Shop Owner**
Tech: Low — only uses WhatsApp

"Customers ask about stock on WhatsApp. I write orders in a notebook. Transfers are a mess."

**What we give her:**
➤ Product catalog right in WhatsApp
➤ AstraPay payment built-in
➤ Orders auto-logged in dashboard

### Persona 2 — Pak Agus
**Motorcycle Workshop Owner**
Tech: Medium

"Customers book service then cancel last minute. Spare part inventory is a nightmare to track."

**What we give him:**
➤ Service booking via WhatsApp
➤ Down payment via AstraPay (reduces no-shows)
➤ Spare part catalog with live stock

### More Use Cases
🍜 Home Catering · 👚 Laundry · 💇 Salon · 📸 Printing · 🍰 Bakeries

### 🎯 Hackathon Bonus Points
✅ MSME Digitalization ✅ Motorcycle Ecosystem

---

## SLIDE 8 — DEMO PLAN

### Header
Live Demo — 6 Minutes, End-to-End

### Scenario 1 — MSME Grocery (3 min)
Merchant adds products in dashboard → Customer browses catalog on WhatsApp → Pays via AstraPay Push to Payment → Order #001 appears PAID in dashboard

### Scenario 2 — Motorcycle Workshop (2 min)
Customer scans workshop QR → Selects service + schedule → Pays down payment via AstraPay → Booking #BKL-088 confirmed

### Scenario 3 — Merchant View (1 min)
Dashboard shows both orders incoming → Merchant updates status: Shipped → Customer gets WhatsApp notification → Download CSV report

### Bottom
⏱ TOTAL DEMO: ~6 MINUTES
💻 FULL E2E: Dashboard → WA Chat → Pay → Callback → Settlement

---

## SLIDE 9 — ARCHITECTURE

### Header
System Architecture

### Diagram
[Insert screenshot from mermaid.live — Diagram #6 in flow.md]

WhatsApp (Customer) → WhatsApp Business Cloud API (Meta) → AstraPay Chat Backend (Bot Engine, Catalog, Order, Payment, Notification services + PostgreSQL + Redis) → AstraPay APIs (Push to Payment, QRIS SNAP BI, Callback/Settlement) + Merchant Dashboard (Next.js)

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend Dashboard | Next.js 14 + Tailwind CSS |
| Backend API | Node.js (NestJS) / Go (Echo) |
| Database | PostgreSQL + Redis (session/cache) |
| WhatsApp API | WhatsApp Business Cloud API (Meta) |
| Payment Integration | AstraPay Payment Channel + QRIS SNAP BI V1.0 |
| Authentication | JWT + OAuth2 (AstraPay Client Credentials) |
| Deployment | Docker + Cloud Run |

---

## SLIDE 10 — WHY THIS WINS

### Header
What Makes AstraPay Chat Different

### The Landscape

**Category 1: Conversation Tools**
WATI, Qiscus, ManyChat, Kata.ai
Chat management, team inbox, campaigns
No built-in payment

**Category 2: Payment-Enabled Commerce**
DOKU PayChat
Bundles general payment methods
AstraPay is just one of 45+

**Category 3: AstraPay Chat (This Project)**
✅ Deep AstraPay native integration
✅ Full ecosystem in one product
✅ MSME + motorcycle focus

### 5 Advantages

**① ASTRA PAY NATIVE**
Push to Payment — just HP number + PIN. No account linking. H+1 settlement.

**② FULL ECOSYSTEM**
Payment + QRIS + Biller + Disbursement + Loyalty + Paylater — from one product.

**③ ZERO FRICTION**
No app install. Setup in <10 min. Chat = your store.

**④ WEBVIEW MAGIC**
Detect if AstraPay app installed. If not? Stay in webview. No account? Register inline. Never leave the flow.

**⑤ MSME + MOTOR FOCUS**
Built for micro-scale merchants. Bonus: motorcycle workshop booking + spare parts. Directly hits hackathon bonus points.

### Business Impact
**For MSMEs:** Digital storefront in 10 min, zero cost
**For AstraPay:** New merchant acquisition from 30M+ MSMEs, full ecosystem adoption in one product
**For Customers:** Buy & pay inside the app they already use

---

## SLIDE 11 — ROADMAP & TEAM

### Header
20 Days to Demo Day

### Roadmap

**Week 1** (11–17 Jun) — SETUP & DASHBOARD
Project init | DB schema | Auth system | Product CRUD | Dashboard MVP

**Week 2** (18–24 Jun) — WA BOT ENGINE
Bot flow: greet → browse → order → pay | Catalog in WhatsApp | Chat session management | WA API integration

**Week 3** (25–30 Jun) — ASTRA PAY INTEGRATION
Push to Payment integration | Callback handling | E2E payment flow | Sandbox testing

**Week 4** (1–3 Jul) — POLISH & DEMO
QRIS integration (bonus) | Error handling | Dry run | Submit & present

### Team

| [Nama] | [Nama] | [Nama] | [Nama] |
| Backend Engineer | Frontend Engineer | WA Integration | PM / Presenter |
| API, DB, AstraPay | Dashboard, UI/UX | Bot engine, flows | Pitch, demo, coordination |

### Risk & Mitigation

| Risk | Mitigation |
|------|-----------|
| WABA verification too slow | Use Meta sandbox / test number |
| AstraPay sandbox unstable | Register early + mock server fallback |
| 20 days is tight | Ruthless MVP focus, parallel development |
| Payment callback fails | Poll transaction status every 5s (max 10x) |

---

## SLIDE 12 — CLOSING

### Title
AstraPay Chat

### Quote
"Sell on WhatsApp. Pay with AstraPay.
No Website. No App. No Friction."

### Info
Repository: github.com/wmprawiro/astrapay-hackathon-2026
Contact: [Email / Phone]
[QR Code to Repository]

### Thank You
Hackathon AstraPay 2026

### Design
Background: Gradient ungu `#6C2BD9` → `#4A1D99` — same as cover
