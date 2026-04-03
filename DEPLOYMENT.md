# Deployment Guide — Vercel

## Prerequisites
- A [Vercel](https://vercel.com) account (free tier is sufficient)
- A public [GitHub](https://github.com) repository with this project pushed to it

---

## Option A — Deploy via Vercel Dashboard (Recommended)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "feat: initial logistics order form"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/logistics-order-form.git
git push -u origin main
```

### Step 2 — Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Add New → Project"**
3. Select **"Import Git Repository"** and pick your repo
4. Vercel auto-detects Next.js — no changes needed
5. Click **"Deploy"**

### Step 3 — Get your live URL
Vercel will give you a URL like:
```
https://logistics-order-form-yourname.vercel.app
```

---

## Option B — Deploy via Vercel CLI

### Step 1 — Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2 — Login
```bash
vercel login
```

### Step 3 — Deploy
```bash
cd logistics-order-form
vercel --prod
```

Follow the prompts. Vercel detects Next.js automatically.

---

## Build Settings (Vercel auto-fills these)

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |
| Node.js Version | 18.x |

---

## Custom Domain (Optional)

1. Go to your project → **Settings → Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

---

## Alternative: Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

Note: For Next.js App Router, Vercel is strongly recommended over Netlify as it has native Next.js support.
