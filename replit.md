# RuhanTech Landing Page

## Overview
A static marketing landing page for RuhanTech, built with React 19, Vite 7, TypeScript, Tailwind CSS 4, and Radix UI / shadcn-style components. No backend or database — content lives in `src/lib/site.ts` and the page components under `src/pages` and `src/components`.

## Running the project
- The "Start application" workflow runs `PORT=5000 pnpm dev` (Vite dev server bound to 0.0.0.0:5000) and drives the Replit preview.
- `pnpm build` produces a static build in `dist/`; `pnpm preview` serves that build.
- Optional env var: `VITE_RUHANQALAM_URL` (see `.env.example`) — absolute URL of the separately-deployed RuhanQalam landing page; defaults to `https://ruhanqalam.com` when unset.
- `Dockerfile`, `nginx.conf`, and `build_deploy.sh` are for the project's original (non-Replit) deployment path and are unused by the Replit workflow.

## Project structure
- `src/App.tsx`, `src/main.tsx` — app entry
- `src/pages/` — route-level pages (Home, not-found)
- `src/components/layout/`, `src/components/sections/` — page layout and content sections
- `src/components/ui/` — shared UI primitives (Radix/shadcn-based)
- `src/lib/site.ts` — site copy/content constants

## User preferences
None recorded yet.
