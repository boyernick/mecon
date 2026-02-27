# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working in this repository.

## Repository Status

This repository is currently **empty** — no source code, dependencies, or configuration files have been committed yet. This CLAUDE.md will be updated as the project takes shape.

---

## Repository Overview

- **Remote**: `boyernick/mecon`
- **Primary branch**: (to be established — likely `main` or `master`)
- **Current working branch**: `claude/claude-md-mm5d2dg51sydwxpl-D0fKR`

---

## Getting Started

Since the repository has no content yet, the first steps will typically involve:

1. Deciding on the project's language/framework
2. Initializing the project (e.g., `npm init`, `cargo init`, `python -m venv`, etc.)
3. Setting up CI/CD
4. Defining coding conventions

---

## Development Workflow (Template — Update When Project Is Established)

### Branch Naming

- Feature branches: `feature/<short-description>`
- Bug fixes: `fix/<short-description>`
- AI-generated branches: `claude/<session-id>`

### Commit Messages

Use clear, imperative-style commit messages:
```
Add user authentication module
Fix null pointer in payment processor
Update README with setup instructions
```

### Pull Requests

- Keep PRs focused and small
- Include a summary of changes and test plan
- Reference related issues with `#<issue-number>`

---

## AI Assistant Instructions

When this repository contains code, update this file with:

1. **Project overview**: What the project does and its architecture
2. **Setup instructions**: How to install dependencies and run the project locally
3. **Build & test commands**: Exact commands to build, lint, and test
4. **Key directories**: What lives where and why
5. **Conventions**: Naming, formatting, patterns used in the codebase
6. **Environment variables**: Required `.env` variables and where to find examples
7. **Database/migrations**: How to set up and migrate the database
8. **Deployment**: How releases are made

### General Guidelines for AI Assistants

- **Read before editing**: Always read the relevant file(s) before making changes
- **Minimal changes**: Only change what is necessary; avoid refactoring unrelated code
- **No speculative features**: Do not add features not explicitly requested
- **Preserve conventions**: Match the code style already present in the file being edited
- **Test awareness**: Run tests and confirm they pass before committing
- **Security**: Never commit secrets, credentials, or `.env` files
- **Commit on feature branch**: Never push directly to `main`/`master`

---

## Updating This File

Whenever significant changes are made to the project structure, dependencies, or workflows, update this CLAUDE.md to reflect the current state so future AI sessions have accurate context.
