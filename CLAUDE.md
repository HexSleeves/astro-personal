# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **bun** as the package manager. Common development commands:

- `bun install` - Install dependencies
- `bun dev` - Start development server (localhost:4321)
- `bun build` - Build the project for production
- `bun preview` - Preview the production build

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