# Artin Portfolio

Personal portfolio for presenting frontend work, selected case studies, and technical positioning.

Built with React, TypeScript, Vite, Three.js, Motion, Tailwind CSS, and bilingual RTL/LTR content support.

## What This Demonstrates

- React application structure with TypeScript
- Bilingual English/Persian content handling
- RTL and LTR document direction switching
- Interactive visual presentation with Three.js and Motion
- Conditional WebGL enhancement with a static fallback
- Smooth scrolling behavior that respects reduced-motion and coarse-pointer contexts
- Case-study oriented portfolio content
- TypeScript build verification through the project scripts

## Tech Stack

- React
- TypeScript
- Vite
- Three.js
- Motion
- Tailwind CSS
- Lenis

## Project Structure

```text
src/
|-- App.tsx
|-- content.ts
|-- components/
|   |-- HeroThreeScene.tsx
|   |-- HeroVisual.tsx
|   |-- JazirehProject.tsx
|   `-- SmoothScrollProvider.tsx
|-- assets/
|-- styles.css
`-- main.tsx
```

## Available Scripts

```bash
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Verification

The production build script runs TypeScript project checks before building:

```bash
npm run build
```

The repository also includes a dedicated type-check command:

```bash
npm run typecheck
```

These commands are documented from `package.json`. They were not executed as part of this documentation-only update.

## Portfolio Focus

This project is intended to present frontend engineering work through real case studies, not only visual styling. It highlights product UI decisions, interface polish, bilingual presentation, responsive layout work, and selected technical projects.
