# Aharon Bensadoun — Portfolio

Personal portfolio of **Aharon Bensadoun**, AI Solutions Architect.
Showcases the AI Nexus gateway pattern and a portfolio of production AI systems
across healthcare, commerce, tools, and religious tech.

Live: `https://aharon-bensadoun.github.io/portfolio/`

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion
- react-i18next (EN / FR / HE with RTL)
- Lucide React (icons)
- GitHub Pages + GitHub Actions

## Local dev

```bash
npm install
npm run dev        # http://localhost:5173/portfolio/
npm run build      # output to dist/
npm run preview    # preview the production build
npm run lint       # tsc --noEmit
```

## Customization

Edit `src/data/config.ts` to set:
- `linkedin` — your LinkedIn profile URL
- `whatsappNumber` — international number, no `+`, no spaces (e.g. `972501234567`)
- `introVideo` — path to a video in `public/` or a YouTube embed URL
- `avatar` — path to a square photo in `public/`

Edit `src/data/projects.ts` to add/remove/reorder projects.
Each project is trilingual (en/fr/he tagline + description).

Translations live in `src/i18n/locales/{en,fr,he}.json`.

## Deploy

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml`:

1. Push the repo to `https://github.com/Aharon-Bensadoun/portfolio`
2. In the repo settings → **Pages** → set source to **GitHub Actions**
3. Push to `main` — the workflow builds and deploys

The Vite `base` is set to `/portfolio/` in `vite.config.ts`. If you rename the
repo (e.g. `aharon-bensadoun.github.io` for a user site), update that to `/`.

## Project structure

```
src/
  components/
    layout/       Nav, Footer, LanguageSwitcher
    sections/     Hero, About, Services, Approach, Projects, Contact
    ui/           Section, SectionHeader, ProjectCard
  data/           config.ts, projects.ts, services.ts
  i18n/           config.ts + locales/{en,fr,he}.json
  styles/         index.css (Tailwind layers + design tokens)
  App.tsx
  main.tsx
```

## License

Personal portfolio — no license, all rights reserved.
