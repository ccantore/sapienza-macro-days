# Sapienza Macro Days Website

Official website for the **Sapienza Macro Days** annual macroeconomics workshop at Sapienza University of Rome.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
sapienza-macro-days/
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages (2024, 2025, 2026)
│   └── styles/          # Global CSS
├── public/              # Static assets
└── astro.config.mjs     # Astro configuration
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Build Targets

Use the default build for Cloudflare Pages previews:

```bash
npm run build
```

Use GitHub-targeted build only when deploying under `username.github.io/repo`:

```bash
DEPLOY_TARGET=github GITHUB_PAGES_USER=YOUR_USERNAME GITHUB_PAGES_REPO=YOUR_REPO npm run build
```

### Setup Instructions

1. Create a new GitHub repository
2. Push this code to the repository
3. Go to Settings → Pages
4. Under "Build and deployment", select "GitHub Actions"
5. Update `astro.config.mjs` with your GitHub username:
   ```js
   site: 'https://YOUR_USERNAME.github.io',
   base: '/sapienza-macro-days',
   ```

## Updating Content

### Adding a New Year

1. Create a new page in `src/pages/` (e.g., `2027.astro`)
2. Update navigation in `src/components/Header.astro`
3. Update "Past Editions" section in `src/pages/index.astro`

### Updating Speaker Information

Edit the `speakers` array in `src/pages/index.astro`

### Adding Programme Details

Use the `SessionBlock` component in the programme section.

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- CSS Custom Properties for theming
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## Organizers

- Cristiano Cantore (Sapienza University of Rome)
- Salvatore Nisticò (Sapienza University of Rome)
