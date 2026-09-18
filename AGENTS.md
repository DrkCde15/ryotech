# Portfolio Project - Agent Rules

## Project Overview
This is a Next.js 16 portfolio website for Júlio César Santana (Data Engineer | Data Analyst).

## Tech Stack
- Next.js 16.3.5 with App Router
- React 19.2.8
- TypeScript
- Tailwind CSS 4 (@tailwindcss/postcss)
- lucide-react 1.47.0
- Geist + Inter fonts
- ESLint 9

## Architecture
- Server Components by default (Client Components marked with "use client")
- Data-driven with TypeScript interfaces
- All project/experience/skill data in `src/data/`
- Reusable UI components in `src/components/`

## Key Notes
- lucide-react 1.47.0 does NOT export Github or LinkedIn icons - use text labels instead
- Icons with `Icon` suffix pattern (e.g., `MenuIcon`, `XIcon`) in this version
- `Menu` and `X` are the only icon exports available (without suffix)
- `ChevronRight`, `ArrowLeft`, `ArrowRight` are available as regular exports

## Important Paths
- `src/app/layout.tsx` - Root layout with Navbar and Footer
- `src/app/page.tsx` - Home page
- `src/app/projetos/[slug]/page.tsx` - Project detail page (SSG)
- `src/app/api/sitemap/route.ts` - Sitemap API route
- `src/data/projects.ts` - All project data
- `src/data/experience.ts` - Experience data
- `src/data/skills.ts` - Skills data

## Build Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - ESLint check
- `npm run start` - Start production server

## Notes
- The sitemap route uses `GET()` handler to return XML
- All project pages use `generateStaticParams` for SSG
- The project is fully static with dynamic sitemap
