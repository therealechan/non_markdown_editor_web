# {M} Markdown Now

Landing page for [Markdown Now](https://md.nowornever.work) — a fast, native macOS markdown editor built with Rust and GPUI.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `motion` for scroll animations
- `next-themes` for dark/light toggle
- `shadcn/ui` + `lucide-animated` icons
- Geist Sans & Mono fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Geist fonts, ThemeProvider, SEO metadata
│   ├── page.tsx          # Page sections + JSON-LD structured data
│   ├── globals.css       # Liquidator design system variables
│   ├── robots.ts         # Crawler rules
│   └── sitemap.ts        # Sitemap for md.nowornever.work
├── components/
│   ├── nav.tsx           # Sticky nav with logo + theme toggle + GitHub
│   ├── hero.tsx          # Title, tagline, badge, CTA buttons
│   ├── app-preview.tsx   # CSS-built editor mockup (split pane)
│   ├── features.tsx      # 6 feature cards in 3-col grid
│   ├── open-source.tsx   # MIT license + GitHub CTA
│   ├── footer.tsx        # Logo, copyright, links
│   ├── logo.tsx          # {M} logo mark
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ui/               # lucide-animated icon components
└── lib/
    └── utils.ts
```

## License

MIT
