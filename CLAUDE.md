# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **bun** as the package manager. Common development commands:

- `bun install` - Install dependencies
- `bun dev` - Start development server (localhost:4321)
- `bun build` - Build the project for production
- `bun preview` - Preview the production build

Note: No linting or testing scripts are configured in package.json.

## Project Architecture

This is an Astro personal website/blog using TypeScript and TailwindCSS with a retro-inspired Zaggonaut theme.

### Key Architecture Points

- **Static Site Generation**: Built with Astro for optimal performance and SEO
- **TypeScript**: Strict TypeScript configuration extends `astro/tsconfigs/strict`
- **Styling**: Uses TailwindCSS v4 with custom CSS variables for theming
- **Component-Based**: Astro components (.astro files) with optional TypeScript logic

### Critical Files

- `src/lib/variables.ts` - Site-wide configuration including metadata, social links, menu items, and all text content
- `src/styles/global.css` - Global styles and CSS custom properties for theming
- `astro.config.mjs` - Astro configuration with TailwindCSS integration

### Project Structure

- `src/pages/` - File-based routing (index, blog, projects, 404)
- `src/components/` - Reusable Astro components organized by feature
- `src/layouts/` - Page layout templates
- `src/lib/` - TypeScript utilities and configuration

### Content Management

- Blog posts: Markdown files in `src/pages/blog/`
- Projects: Markdown files in `src/pages/projects/`
- Site customization: Update `src/lib/variables.ts` for all text and metadata
- Theme customization: Modify CSS variables in `src/styles/global.css`

### Development Notes

- The project uses Astro's file-based routing
- Components are primarily `.astro` files with optional TypeScript frontmatter
- Featured articles/projects are managed through the `src/lib/featured.ts` module
- Dark/light mode is implemented via CSS custom properties and theme switching

### Zaggonaut Theme System

This project uses a custom "Zaggonaut" retro theme implemented through:

- **CSS Custom Properties**: Theme colors defined in `src/styles/global.css` using CSS variables like `--color-zag-dark`, `--color-zag-light`, etc.
- **Utility Classes**: Custom utility classes like `.zag-bg`, `.zag-text`, `.zag-accent` for consistent theming
- **Typography**: Custom fonts including "press-start-2p" for display text and "Literata Variable" for body text
- **Responsive Design**: Theme adapts automatically between light and dark modes using CSS `:where(.dark, .dark *)` selectors

### Content Frontmatter Structure

Both blog posts and projects use TypeScript-defined frontmatter schemas:

- **Projects**: Require `title`, `description`, `timestamp`, `filename`. Optional: `tags`, `githubUrl`, `liveUrl`, `featured`
- **Articles**: Require `title`, `description`, `time`, `featured`, `timestamp`, `filename`. Optional: `tags`

### Featured Content System

Featured items are automatically processed and sorted by timestamp using `src/lib/featured.ts`, which filters content marked with `featured: true` in frontmatter.
