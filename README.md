# 🏥 CarePulse — Clinical Intelligence Dashboard

> A role-based clinical care coordination dashboard that surfaces patient risk, care gaps, and staff workload — built to demonstrate UX thinking aligned with Ursamin's platform vision.

---

## What It Does

CarePulse simulates the core workflows of a care coordination platform:

- **Critical Alerts** — real-time flags for patients needing immediate attention (lab results, missed check-ins, out-of-range values)
- **Patient List** — risk-stratified patient roster with care gap indicators, filterable by risk level
- **Care Gaps** — open quality measures organized by priority, type, and assignee
- **Staff Workload** — role-based task distribution across physicians and NPs with capacity visualization
- **Tasks Panel** — interactive daily task list with completion tracking

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Charts | Recharts |
| Styling | Vanilla CSS + custom design token system |
| Fonts | Instrument Serif (display) + DM Sans (body) + DM Mono (data) |
| Data | Structured clinical mock data |

---

## Design System

### Theme — Mix: Dark Header + Light Content
- **Header**: `#0F1623` dark navy — professional, clinical authority
- **Content**: `#F4F6FA` light gray — clean, readable, reduces eye strain for long shifts
- **Cards**: Pure white with subtle shadows — clear information hierarchy

### Clinical Color Encoding
```
🔴 Critical  #DC2626  — Immediate action required
🟡 Warning   #D97706  — Attention needed soon  
🟢 Stable    #059669  — Within normal parameters
🔵 Info      #2563EB  — Informational / brand
```

### Typography
- **Instrument Serif** — card titles, KPI values (warm, human, not cold/sterile)
- **DM Sans** — body text, labels, navigation (clean, highly legible)
- **DM Mono** — patient IDs, timestamps, numeric data (precise alignment)

---

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Design Decisions

**Why dark header + light body?**
Clinical dashboards are used in bright hospital environments. A fully dark UI strains eyes in well-lit rooms. The mixed approach keeps the navigation authoritative while the content area is optimized for readability.

**Why Instrument Serif for a clinical app?**
Most clinical software feels cold and utilitarian. Serif typography adds warmth and trust — reminding care teams that they're working with human patients, not just data records.

**Why color-coded left borders on cards?**
Clinicians process hundreds of data points per shift. Left-border color encoding allows instant triage without reading text — a critical affordance for time-pressured workflows.

**Why interactive task checkboxes?**
Demonstrating state management and micro-interactions shows the interface is a working tool, not just a static design.

---

## Folder Structure

```
carepulse/
├── src/
│   ├── components/
│   │   ├── layout/Header.jsx       # Dark clinical header with role context
│   │   ├── cards/
│   │   │   ├── KpiCards.jsx        # 4 top-level clinical KPIs
│   │   │   ├── AlertsFeed.jsx      # Critical patient alerts
│   │   │   ├── CareGaps.jsx        # Open quality measure gaps
│   │   │   ├── StaffWorkload.jsx   # Role-based capacity view
│   │   │   └── TasksPanel.jsx      # Interactive daily task list
│   │   └── tables/
│   │       └── PatientTable.jsx    # Filterable risk-stratified patient list
│   ├── data/clinicalData.js        # Structured clinical mock data
│   └── styles/
│       ├── tokens.css              # Full design token system
│       └── global.css              # Base styles + animations
└── README.md
```

---

## Built By

**Aditi Nitin Shardul** — UI/UX Developer  
Portfolio project demonstrating clinical dashboard design for care coordination platforms.

> Aligned with Ursamin's mission: helping care teams know exactly what's due next, for whom, and by whom.
