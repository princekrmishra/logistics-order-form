# ShipForge — Figma Design Guide

> This document describes the complete design system. Use it to recreate the UI in Figma.

---

## 🎨 Color Palette

### Background Colors
| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0d0f12` | Page background |
| `--color-surface` | `#161a1f` | Card / panel base |
| `--color-surface-raised` | `#1c2128` | Elevated cards, form section headers |
| `--color-surface-overlay` | `#222830` | Hover states, active backgrounds |
| `--color-border` | `#2a3140` | All borders and dividers |

### Text Colors
| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#f0f2f5` | Headings, important values |
| `--color-text-secondary` | `#8b95a3` | Labels, subtitles |
| `--color-text-muted` | `#505a68` | Hints, placeholders, captions |

### Accent / Brand
| Token | Hex | Usage |
|---|---|---|
| `--color-accent` | `#e8521a` | CTA buttons, active states, focus rings |
| `--color-accent-light` | `#ff6b35` | Hover state of accent |
| `--color-accent-muted` | `rgba(232,82,26,0.12)` | Accent backgrounds |
| `--color-accent-border` | `rgba(232,82,26,0.3)` | Accent borders |

### Semantic
| Token | Hex | Usage |
|---|---|---|
| `--color-express` | `#f0a500` | Express delivery badge |
| `--color-standard` | `#3b82f6` | Standard delivery badge |
| `--color-success` | `#22c55e` | Live indicator, success state |
| `--color-error` | `#ef4444` | Validation errors |
| `--color-fragile` | `#a855f7` | Fragile indicator |
| `--color-insured` | `#06b6d4` | Insurance indicator |

---

## 🔠 Typography

### Font Families
- **Display** — [Syne](https://fonts.google.com/specimen/Syne) (weights: 400, 500, 600, 700, 800)
  - Used for: headings, section titles, labels, buttons, package names
- **Body** — [DM Sans](https://fonts.google.com/specimen/DM+Sans) (weights: 300, 400, 500, 600)
  - Used for: all body text, input values, descriptions

### Type Scale
| Name | Size | Usage |
|---|---|---|
| `--text-xs` | 11px | Hints, captions, badge labels, secondary meta |
| `--text-sm` | 13px | Input labels, subtitles, address text |
| `--text-base` | 15px | Body text, input values, buttons |
| `--text-md` | 16px | Route names |
| `--text-lg` | 18px | Order ID in preview, section items |
| `--text-xl` | 22px | Stat values in preview grid |
| `--text-2xl` | 28px | Form main heading |
| `--text-3xl` | 36px | (Reserved for hero sizes) |

### Type Rules
- All headings: `font-family: Syne`, `letter-spacing: -0.02em to -0.03em`
- Input labels: `font-family: DM Sans`, `font-weight: 500`, `color: text-secondary`
- Stat values: `font-family: Syne`, `font-weight: 800`, `letter-spacing: -0.02em`
- Code/IDs: `font-family: Courier New`, `letter-spacing: 0.04em`

---

## 📐 Spacing System (8px Grid)

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Inline gap, icon-to-text |
| `--space-2` | 8px | Label-to-input gap, small padding |
| `--space-3` | 12px | Card header padding, checkbox gap |
| `--space-4` | 16px | Grid gaps, form field gap |
| `--space-5` | 20px | Section body horizontal padding |
| `--space-6` | 24px | Page padding, section body |
| `--space-8` | 32px | Large vertical separation |
| `--space-10` | 40px | — |
| `--space-12` | 48px | Page vertical padding |
| `--space-16` | 64px | Success state padding |

---

## 🔲 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 6px | Checkbox visual, suffix tags |
| `--radius-md` | 10px | Inputs, buttons, header meta |
| `--radius-lg` | 16px | Package cards, checkbox fields, delivery options |
| `--radius-xl` | 20px | Form sections, panels |
| `--radius-full` | 9999px | Badges, pill tags, live dot |

---

## 🧱 Component Specs

### AppHeader
- Height: 64px
- Background: `color-bg` at 85% opacity + `backdrop-filter: blur(16px)`
- Logo icon: 36×36px, accent-muted background, accent border, border-radius-md
- Brand name: Syne 700, 18px
- Order ID: Courier New, accent color, 13px

### FormSection Card
- Background: `color-surface`
- Border-radius: `radius-xl`
- Top border: 3px colored (orange/blue/purple/grey by accent prop)
- Header background: `color-surface-raised`
- Header padding: 20px 24px
- Body padding: 24px, gap 16px

### InputField
- Height: 44px
- Background: `color-surface-raised`
- Border: 1px solid `color-border`
- Focus: border `color-accent` + `box-shadow: 0 0 0 3px color-accent-muted`
- Error: border `color-error` + `box-shadow: 0 0 0 3px color-error-muted`
- Border-radius: `radius-md`
- Font: DM Sans 400, 15px

### DeliveryTypePicker
- Two options side by side
- Each: padding 16px, border-radius `radius-lg`, 1px border
- Selected Standard: `color-standard-muted` background + ring
- Selected Express: `color-express-muted` background + ring
- Radio check circle: 20×20px, border-radius full

### PackageCard
- Background: `color-surface-raised`
- Border-radius: `radius-lg`
- Header: `color-surface-overlay`, 44px min-height
- Accent dot: 8×8px, `color-accent`
- Remove button: appears on hover with error color

### CheckboxField
- Background: `color-surface-raised`
- Checked Fragile: `color-fragile-muted` + fragile border + double ring
- Checked Insured: `color-insured-muted` + insured border + double ring
- Border-radius: `radius-lg`

### LivePreview Panel
- Full height of viewport on desktop, `position: sticky`
- Header: gradient from `surface-raised` to `surface-overlay`
- Stats grid: 3 columns, 1px gap on `color-border` background
- Package rows: slide-in animation from left, hover border highlight

### Primary Button (Submit)
- Height: 44px, padding 0 24px
- Background: `color-accent`
- Border-radius: `radius-md`
- Hover: `color-accent-light`, translateY(-1px), shadow with accent color
- Font: Syne 700, 15px

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| ≥ 1025px | Two-column grid (50/50), sticky preview panel |
| 641px–1024px | Single column, form then preview, no sticky |
| ≤ 640px | Single column, reduced padding, stacked buttons |
| ≤ 480px | Address grid 1-column, delivery picker 1-column |

---

## ✨ Animations

| Element | Animation | Duration |
|---|---|---|
| Package card added | slideIn (from Y:-8px, opacity 0) | 250ms ease |
| Preview package row | rowIn (from X:-6px, opacity 0) | 200ms ease |
| Live dot | pulse (scale 0.8, opacity 0.5) | 2s infinite |
| Badges (fragile/insured) | badgeIn (scale 0.85→1, opacity) | 200ms ease |
| Success state | fadeIn (scale 0.96→1, opacity) | 400ms ease |
| Input focus | border + shadow | 120ms ease |
| Buttons on hover | background + transform | 120ms ease |
