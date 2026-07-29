# GearNest

Premium tech review, buying-guide, and affiliate-marketing site built with **React 19** + **Vite 8** + **Tailwind CSS v4**. Architected so new product verticals (clothing, home, beauty, lifestyle) can be added later without a redesign.

## Tech stack

- **React 19** + **React Router 7** (client-side SPA routing)
- **Vite 8** (build tool)
- **Tailwind CSS v4** via `@tailwindcss/vite` (no separate `tailwind.config.js` needed — theme tokens live in `src/index.css`)
- **react-helmet-async** for per-page SEO meta tags + JSON-LD

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

Requires **Node.js 20.19+ or 22.12+** (see `.nvmrc` / `engines` in `package.json` — Vite 8's minimum requirement).

## Project structure

```
src/
  components/   Header, Footer, Layout, ProductCard, ReviewCard, GuideCard,
                CategoryCard, Newsletter, SEO, Icon, ProductVisual, RatingStars
  data/         products.js, reviews.js, guides.js, categories.js
                (swap these for a CMS/API later — components already
                consume plain JS objects/arrays)
  pages/        Home, Products, ProductDetail, Reviews, ReviewDetail,
                BuyingGuides, GuideDetail, About, Contact, Privacy,
                AffiliateDisclosure, NotFound
public/
  robots.txt, sitemap.xml, _redirects, favicon.svg
```

## Deploying to Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare Pages, create a new project from that repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** set the `NODE_VERSION` environment variable to `20` or `22` (the repo also ships a `.nvmrc` which Pages reads automatically)
4. Deploy. The included `public/_redirects` file (`/* /index.html 200`) makes client-side routing work correctly — without it, refreshing on a route like `/products/laptops` would 404.

No manual dependency edits are required after cloning — `package.json` and `package-lock.json` were generated together from a clean `npm install` and verified with `npm run build`.

## Adding a new product vertical later

The category system in `src/data/categories.js` already separates categories by a `vertical` field (`tech`, `lifestyle`, `home`, `fashion` — only `tech` is active today). To launch a new vertical:

1. Add its categories to `categories.js` and flip `active: true`.
2. Add matching entries to `products.js` (same shape, new `category` values).
3. No routing or component changes are needed — `/products`, `/products/:category`, and `/products/:category/:slug` already work generically.

## Content

Product, review, and guide data in `src/data/` is realistic sample content for launch. Replace with your real catalog, connect a CMS, or wire up the Amazon Product Advertising API — the presentation layer doesn't need to change.

## Notes

- `npm audit` may flag a `react-router` advisory (GHSA-qwww-vcr4-c8h2). It only affects the unstable React Server Components / server-actions code path, which this project does not use (it's a client-only SPA using `BrowserRouter`), so it does not apply here.
- Newsletter and contact forms are front-end only — connect them to a real email/form backend (e.g. Mailchimp, Formspree, a Cloudflare Worker) before launch.
- Product images are rendered as custom gradient "packshots" rather than photography, so there are no external image dependencies or broken-link risk. Swap in real product photography whenever it's ready.
