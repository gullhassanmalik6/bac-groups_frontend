# Al Dour Al Aliah — Website

React + Vite + TypeScript + Tailwind CSS bilingual (EN/AR, LTR/RTL) corporate site for **Al Dour Al Aliah Contracting Establishment** (Madinah).

## Stack

- React 19, Vite 6, TypeScript, Tailwind 4, Framer Motion
- i18n catalogs in `src/i18n/en` and `src/i18n/ar`
- Contact/newsletter → FastAPI `/api/v1/website/*` (fail-closed)

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Environment

Copy `.env.example` to `.env`. Contact defaults:

- `turki.hejaili@gmail.com`
- `+966599000789`
- Madinah 42393

## Railway

See `/docs/DEPLOYMENT.md`. Root directory: `Website`. Production domain: **www.bacgroupsa.com**.

## Content rules

Company copy and projects come from the client profile PDF/DOCX. Do not invent statistics, VAT, or project details.
