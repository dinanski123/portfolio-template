# Ferdinand De Gracia — Portfolio

Personal portfolio for Ferdinand De Gracia, built from the portfolio-template foundation.

## Stack

- Vite 6
- React 19
- TypeScript
- React Router
- Three.js / GSAP / Lenis
- Plain CSS custom properties

## Staging

The personalized portfolio work lives on the `staging` branch. `main` is left unchanged.

## Content

The staging portfolio includes:

- Ferdinand's profile and social links
- AI, web, automation, media and music positioning
- Public and private project inventory
- Live project links for SynthIQ Music, SynthIQ Web, AudioTags, The 309 Unit and Blissful Kate
- GitHub links for public repositories
- Private builds identified without exposing source access
- Contact form with optional webhook/email configuration

## Contact configuration

For a production deployment, configure either:

`VITE_CONTACT_ENDPOINT` — a JSON webhook endpoint for inquiries

or

`VITE_CONTACT_EMAIL` — the email address used by the mailto fallback.

No personal email address is committed to the repository.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run lint
```
