# AGENTS.md

This document provides guidance for AI assistants and LLMs working with this project.

## Project Overview

This is a personal website built with [Zola](https://www.getzola.org/), a fast static site generator written in Rust. The site is multilingual, supporting English, Bulgarian (bg), Esperanto (eo), and Turkish (tr).

**Live site:** https://salif.eu

## Technology Stack

- **Static Site Generator:** Zola
- **Theme:** linkita (as git submodule)
- **Build Tool:** just (justfile)
- **Deployment:** statichost (see statichost.yml)
- **Languages:** HTML templates, Markdown content, TOML configuration

## Project Structure

```
.
├── config.toml          # Main Zola configuration
├── content/             # Markdown content files
│   ├── _index.md        # Homepage (English)
│   ├── _index.bg.md     # Homepage (Bulgarian)
│   ├── _index.eo.md     # Homepage (Esperanto)
│   ├── _index.tr.md     # Homepage (Turkish)
│   ├── about-site/      # About the site section
│   ├── contributions/   # Contributions section
│   ├── other/           # Other content
│   ├── profiles/        # Social profiles
│   └── projects/        # Project listings
├── templates/           # Custom Zola templates (if any)
├── static/              # Static assets (images, CSS, JS)
├── themes/              # Theme submodule
│   └── linkita/         # The linkita theme
├── justfile             # Task automation recipes
├── statichost.yml       # Deployment configuration
└── LICENSE.txt          # License file
```

## Key Configuration Details

### Supported Languages
- **en** (English) - Primary language with search index
- **bg** (Bulgarian) - Full translation
- **eo** (Esperanto) - Full translation
- **tr** (Turkish) - Full translation

### Important Settings (config.toml)
- Base URL: `https://salif.eu`
- Theme: `linkita`
- Search enabled for English only
- External links open in new tab
- Relative URLs enabled for better portability
- Custom color scheme (light/dark mode support)

### Profile Information
Owner: Salif Mehmed
- GitHub: https://github.com/salif
- Codeberg: https://codeberg.org/salif

## Common Tasks

### Development Commands

```bash
# Serve locally with live reload
just serve
# or: zola serve

# Update the theme submodule
just update-theme

# Build the site
zola build

# Check for errors
zola check --skip-external-links
```

### Content Management

**Adding new content:**
1. Create `.md` files in appropriate `content/` subdirectory
2. Add frontmatter with `title`, `date`, and other metadata
3. For multilingual content, create `filename.LANG.md` variants (e.g., `post.bg.md`, `post.eo.md`)

**Content file naming:**
- `_index.md` - Section index page
- `page-name.md` - Regular page
- `page-name.LANG.md` - Translated version

### Theme Customization

The `linkita` theme is included as a git submodule. To customize:
1. Override templates by creating files in `templates/` with same structure
2. Override static files by placing in `static/`
3. Configure theme settings in `[extra]` section of `config.toml`

## Guidelines for AI Agents

### When Making Changes

1. **Content Changes:**
   - Always maintain consistent structure across language variants
   - Preserve frontmatter format
   - Keep translated content synchronized when updating shared information
   - Bulgarian commit messages are acceptable (project owner uses Bulgarian)

2. **Configuration Changes:**
   - Validate TOML syntax before committing
   - Test with `zola check` after changes
   - Preserve color scheme and styling consistency
   - Respect the multilingual setup

3. **Theme Updates:**
   - Use `just update-theme` to update the submodule
   - Don't modify theme files directly in `themes/linkita/`
   - Create overrides in project root instead

4. **Build & Test:**
   - Run `zola check --skip-external-links` to validate
   - Test locally with `zola serve` when possible
   - Check all language variants work correctly

### Code Style

- **TOML:** Use consistent indentation and spacing
- **Markdown:** Follow standard Markdown conventions
- **Justfile:** Maintain existing recipe structure
- **Commit Messages:** English or Bulgarian are both acceptable

### Important Notes

- **Do not** commit built files (Zola generates these in `public/`)
- **Do not** modify the theme submodule directly
- **Do preserve** multilingual content parity where applicable
- **Do test** changes across all language variants when updating shared components
- **External links** should be relevant and working (checked during build)

## Deployment

The site is deployed using statichost. Configuration is in `statichost.yml`. The deployment process:
1. Push changes to git repository (GitHub/Codeberg)
2. Statichost automatically builds and deploys

## Troubleshooting

### Common Issues

**Theme not found:**
```bash
git submodule init
git submodule update
```

**Build failures:**
```bash
zola check --skip-external-links
# Fix any reported errors
```

**Broken links:**
- Internal: Check path references in Markdown
- External: Update or remove broken URLs

**Translation issues:**
- Ensure all language files have matching structure
- Check `config.toml` language configurations

## Resources

- [Zola Documentation](https://www.getzola.org/documentation/)
- [Linkita Theme](https://github.com/salif/linkita)
- [Just Manual](https://just.systems/)
- [Markdown Guide](https://www.markdownguide.org/)

## Project Goals

This is a **personal website** project focused on:
- Simple, fast, multilingual static site
- Showcasing projects and contributions
- Providing contact and profile information
- Minimal dependencies and clean design

Keep changes aligned with these goals: simplicity, performance, and multilingual support.
