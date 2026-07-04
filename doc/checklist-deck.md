# Deck Checklist — AstraPay Chat

> Submit PDF before **June 7, 2026**: https://forms.cloud.microsoft/r/wejuMaW3PE

---

## ⚠️ MUST FILL IN

| # | What | Where |
|---|------|-------|
| 1 | **Team Name** — Nakama | Slide 1 |
| 2 | **Member 1** — Name + Role (Backend Engineer) | Slide 1, 11 |
| 3 | **Member 2** — Name + Role (Frontend Engineer) | Slide 1, 11 |
| 4 | **Member 3** — Name + Role (WA Integration) | Slide 1, 11 |
| 5 | **Member 4** — Name + Role (PM / Presenter) | Slide 1, 11 |
| 6 | **Contact** — Email or phone of team lead | Slide 12 |

## 🎨 MUST CREATE / SCREENSHOT

| # | Visual | For Slide | How |
|---|--------|-----------|-----|
| 7 | **AstraPay Logo** | 1, 12 | Download from astrapay.com |
| 8 | **Architecture diagram** | 9 | `flow.md` Diagram #6 → mermaid.live → screenshot |
| 9 | **Customer flow diagram** | 5 | `flow.md` Diagram #2 → mermaid.live → screenshot |
| 10 | **WhatsApp chat mockup** | 5, 8 | Create in Figma/Canva |
| 11 | **Dashboard mockup** | 4, 8 | Create in Figma/draw.io |
| 12 | **QR code to GitHub** | 12 | Generate at qr-code-generator.com |

## 🖼️ MOCKUP TEMPLATES

### WhatsApp Chat Mockup

```
┌─────────────────────────────────┐
│ 📱 AstraPay Chat                │
│                                 │
│        Warung Bu Rina           │
│        Online                   │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Welcome to Warung Bu Rina! │ │
│ │ What would you like today? │ │
│ │                             │ │
│ │ [🛒 Browse Products]       │ │
│ │ [📢 Promos]  [❓ Help]     │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📦 Catalog                  │ │
│ │                             │ │
│ │ 1. Rice 5kg — Rp 65,000    │ │
│ │ 2. Cooking Oil 2L — 36,000 │ │
│ │ 3. Sugar 1kg — Rp 15,000   │ │
│ │                             │ │
│ │ Type product number:        │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Order Summary               │ │
│ │                             │ │
│ │ Rice 5kg x2 = Rp 130,000   │ │
│ │ Name: Rina                  │ │
│ │ Address: Jl. Melati No. 5   │ │
│ │                             │ │
│ │ [🟣 Bayar dengan AstraPay]    │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ ✅ Order #001 CONFIRMED!    │ │
│ │                             │ │
│ │ Total: Rp 130,000 — PAID   │ │
│ │ Delivery: Tomorrow morning  │ │
│ │ Thank you, Rina! 🙏        │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📦 Order #001 is on its way!│ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### Dashboard Mockup

```
┌──────────────────────────────────────────────────┐
│ 🟣 AstraPay Chat — Dashboard                     │
│                                                  │
│ ┌─────────┐                                     │
│ │ ☰ Menu  │  Welcome, Bu Rina!                  │
│ │         │                                     │
│ │ 📦 Catalog│  ┌─────────────────────────────┐   │
│ │ 📋 Orders │  │ TODAY'S ORDERS               │   │
│ │ 💳 Pay   │  │                               │   │
│ │ 📊 Reports│ │ #001  Rina   Rp 130,000 PAID   │   │
│ │ 📢 Broadcast│ #002  Budi   Rp  75,000 PAID  │   │
│ │ ⚙️ Settings│                                │   │
│ └─────────┘  │ [Process] [Download CSV]        │   │
│              └─────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ SUMMARY                                   │   │
│  │ 💰 Today: Rp 205,000                      │   │
│  │ 📦 New Orders: 2                          │   │
│  │ ✅ Completed: 15                          │   │
│  └──────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘
```

## 🎨 DESIGN SPECS

| Element | Value |
|---------|-------|
| Format | Google Slides 16:9 → Export as PDF |
| Font | Inter or Poppins (free on Google Fonts) |
| Primary Color | `#6C2BD9` (AstraPay purple) |
| Dark Purple | `#4A1D99` |
| Accent Orange | `#FF6B00` |
| Text Dark | `#1A1A2E` |
| BG Soft | `#F5F5F5` |
| Cover & Closing BG | Gradient `#6C2BD9` → `#4A1D99` |
| Content Slides BG | White `#FFFFFF` |

## 🔄 STEP BY STEP

1. Open [slides.google.com](https://slides.google.com) → Blank presentation → Widescreen 16:9
2. Set theme colors as above
3. Copy text from `slide-deck-proposal.md` into each slide
4. Screenshot architecture diagram from mermaid.live (Diagram #6 in `flow.md`)
5. Screenshot customer flow from mermaid.live (Diagram #2 in `flow.md`)
6. Create chat mockup in Figma/Canva → insert into slide 5 & 8
7. Create dashboard mockup in Figma/draw.io → insert into slide 4 & 8
8. Generate QR code for github.com/wmprawiro/astrapay-hackathon-2026 → slide 12
9. Insert AstraPay logo → slide 1 & 12
10. File → Download → PDF
11. Upload to: https://forms.cloud.microsoft/r/wejuMaW3PE

## ✅ FINAL CHECK

| ☐ | Item |
|----|------|
| ☐ | Team name filled |
| ☐ | All 4 members + roles filled |
| ☐ | Contact info added |
| ☐ | AstraPay logo on cover & closing |
| ☐ | Architecture diagram (screenshot) |
| ☐ | Customer flow diagram (screenshot) |
| ☐ | WA chat mockup created |
| ☐ | Dashboard mockup created |
| ☐ | QR code to GitHub |
| ☐ | Colors consistent (purple theme) |
| ☐ | All content in English |
| ☐ | Exported as PDF |
| ☐ | Submitted before June 7, 2026 |
