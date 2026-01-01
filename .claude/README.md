# Claude Code Configuration

This directory contains Claude Code skills specific to the Home Reno Sydney project.

## Installed Skills

All skills are located in `.claude/skills/` and are version-controlled with the project.

### Skills Overview:

1. **nextjs-project-manager** - Next.js 14+ App Router expert guide
2. **react-nextjs-patterns** - React/Next.js implementation patterns
3. **seo-mastery** - Comprehensive SEO optimization
4. **seo-optimization** - On-page SEO and meta tags
5. **performance-optimization** - Full-stack performance analysis
6. **color-scale** - Material Design 3 color palette generation

## Why Skills are in the Project

Including skills in the project repository ensures:
- **Consistency**: Everyone working on the project uses the same skills
- **Version Control**: Skills are tracked with git, can be reviewed and rolled back
- **Portability**: Clone the repo, get the skills automatically
- **Documentation**: Skills serve as development guidelines for the project

## Skill Priority

Claude Code will use project-specific skills (`.claude/skills/`) over global skills (`~/.claude/skills/`), ensuring project-specific configurations take precedence.

## Usage

Skills activate automatically when relevant. No manual invocation needed - Claude Code intelligently applies them during development.
