# 15-Minute Dumbbell Power Session

Single-page Next.js site delivering a minimalist 15-minute full-body routine built around a pair of 5 kg PVC dumbbells. The session targets hypertrophy, strength, and balanced aesthetics with a repeatable structure that fits inconsistent schedules.

## 🚀 Tech Stack

- Next.js 14 (App Router)
- React 18 with TypeScript
- Tailwind CSS 3

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the plan.

### Production Build

```bash
npm run build
npm start
```

## 📂 Key Files

- `app/page.tsx` — workout plan content
- `app/layout.tsx` — shared layout + metadata
- `app/globals.css` — global styles and Tailwind directives

## ✅ Deployment

Optimized for deployment to Vercel. Build with `npm run build` before running `vercel deploy`.
