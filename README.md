# Bonyan Advanced Contracting Establishment — Website

React + Vite + TypeScript + Tailwind CSS bilingual (EN/AR, LTR/RTL) corporate site for **Bonyan Advanced Contracting Establishment** (Madinah).

## Stack

- React 19, Vite 6, TypeScript, Tailwind 4, Framer Motion
- i18n catalogs in `src/i18n/en` and `src/i18n/ar`
- Contact/newsletter → FastAPI `/api/v1/website/*` (fail-closed)
- Brand logo: `public/logo.jpeg`

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Environment

Copy `.env.example` to `.env`. Defaults:

- `info@bacgroupsa.com`
- `+966599000789`
- CR `7026169222`
- Madinah 42393
- Site URL `https://www.bacgroupsa.com`

## Railway

## Workspace layout

Open the **`Crypto/`** directory at the repo root (local monorepo may also expose it as a sibling of `Backend/` and `Website/`).

See project `docs/DEPLOYMENT.md`. Railway web root directory: **`Website`**. Production domain: **www.bacgroupsa.com**.

## Content rules

Company copy comes from the client Word profile. Do not invent VAT, statistics, or undocumented projects. Equipment prices on the site are **indicative** catalogue ranges.
