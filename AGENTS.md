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
- External links open in new tab
- Relative URLs enabled for better portability

## Common Tasks

### Development Commands

```bash
# Build the site
zola build

# Check for errors
zola check --skip-external-links

# Serve locally with live reload
zola serve
```

### Content Management

**Adding new content:**
1. Create `.md` files in appropriate `content/` subdirectory
2. Add frontmatter with `title`, `date`, and other metadata
3. For multilingual content, create `filename/index.LANG.md` variants (e.g., `post/index.bg.md`, `post/index.eo.md`)

**Content file naming:**
- `_index.md` - Section index page
- `page-name/index.md` - Regular page
- `page-name/index.LANG.md` - Translated version

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
   - Test with `zola check --skip-external-links` after changes
   - Preserve styling consistency
   - Respect the multilingual setup

3. **Theme Updates:**
   - Use `git submodule update --remote themes/linkita` to update the submodule
   - Don't modify theme files directly in `themes/linkita/`
   - Create overrides in project root instead

4. **Build & Test:**
   - Run `zola check --skip-external-links` to validate
   - Test locally with `zola build` when possible
   - Check all language variants work correctly

### Code Style

- **TOML:** Use consistent indentation and spacing
- **Markdown:** Follow standard Markdown conventions
- **Justfile:** Maintain existing recipe structure
- **Commit Messages:** Bulgarian or English are both acceptable

### Important Notes

- **Do not** commit built files (Zola generates these in `public/`)
- **Do not** modify the theme submodule directly
- **Do preserve** multilingual content parity where applicable
- **Do test** changes across all language variants when updating shared components

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

### On GitHub
- [Zola Documentation](https://github.com/getzola/zola/tree/master/docs/content/documentation)
- [Linkita Theme](https://github.com/salif/linkita)
- [Justfile Manual](https://github.com/casey/just)

### Online books and links
- [Zola Documentation](https://www.getzola.org/documentation/getting-started/overview/)
- [Tera Template Engine Documentation](https://keats.github.io/tera/docs/)
- [Markdown pulldown-cmark guide](https://pulldown-cmark.github.io/pulldown-cmark/specs.html)
- [Linkita Theme](https://salif.github.io/linkita/about/)
- [Justfile Manual](https://just.systems/man/en/)

## Project Goals

This is a **personal website** project focused on:
- Simple, fast, multilingual static site
- Showcasing projects and contributions
- Providing contact and profile information
- Minimal dependencies and clean design

Keep changes aligned with these goals: simplicity, performance, and multilingual support.
