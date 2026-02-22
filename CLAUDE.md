# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint (next/core-web-vitals + next/typescript)
```

No test framework is configured.

## Architecture

**Next.js 14 App Router** site for Solwearth (solar water heater manufacturer), deployed on **Netlify**. Uses React 19, TypeScript strict mode, Tailwind CSS v4, and pnpm.

### Rendering Strategy

Almost everything is statically generated. Pages use `force-static` or `revalidate: false`. Blog pages use `generateStaticParams()` + `dynamicParams = false` to pre-render all slugs and 404 unknown ones without hitting the server. Content updates use on-demand ISR via `/api/revalidate` (protected by `REVALIDATE_SECRET` env var).

### Data Sources

- **WordPress headless CMS** (`cms.solwearth.com/graphql` via WPGraphQL) for blog content only. GraphQL client in `lib/wordpress.ts`.
- **All other content** is hardcoded in components/pages.
- **Lead forms** submit to a Google Apps Script endpoint (fire-and-forget POST).

### Key Patterns

- **Location pages**: 27+ location landing pages all use a single `LocationPageTemplate` component with different props. Located under `app/locations/`.
- **Product pages**: Individual pages under `app/products/se-{model}/page.tsx` (6 products).
- **Server Components by default**; `"use client"` only where interactivity is needed (header, forms, analytics).
- **SEO-first**: Every page exports `metadata` with title, description, keywords, OpenGraph, canonical URL. JSON-LD structured data (Organization/LocalBusiness) in layouts.
- **Performance**: `content-visibility: auto` on below-fold sections, `next/dynamic` with loading skeletons, `lazyOnload` for GA, `requestIdleCallback` for popup form.
- **CDN caching**: Middleware adds `Netlify-CDN-Cache-Control` headers for RSC payloads (`?_rsc=` requests). `robots.ts` disallows RSC URLs to prevent crawler-triggered function calls.

### Styling

Tailwind CSS v4 with `@tailwindcss/postcss` plugin. Brand color is green (`#62bb49`). shadcn/ui (new-york style) with Radix UI primitives in `components/ui/`. Utility function `cn()` from `lib/utils.ts` combines `clsx` + `tailwind-merge`.

### Path Alias

`@/*` maps to project root (e.g., `@/components/header`).

### File Conventions

- kebab-case filenames (`lead-form-section.tsx`)
- PascalCase named exports (`export function LeadFormSection`)

### Environment Variables

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID
- `REVALIDATE_SECRET` — Secret for on-demand revalidation endpoint

### Redirects

`next.config.mjs` contains an extensive 301 redirect map from legacy WordPress URLs to new Next.js routes. When adding/renaming pages, check if redirects need updating.
