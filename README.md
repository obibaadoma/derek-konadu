# Derek Konadu Portfolio

A modern, responsive portfolio website for Derek Konadu, built with React, TypeScript, and Vite. The site highlights his professional background, engineering philosophy, featured projects, technical skills, work experience, and contact details.

## Features

- Responsive one-page portfolio experience
- Smooth animations and transitions
- Dark/light theme toggle
- Lazy-loaded sections for improved performance
- Content-driven structure for easy updates

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## Available Scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run format` — format the codebase with Prettier
- `npm run format:check` — check formatting

## Project Structure

```text
src/
  components/   # Reusable UI and section components
  data/         # Portfolio content and project information
  hooks/        # Custom hooks
  types/        # TypeScript types
  utils/        # Shared utilities
```

## Deployment

This project can be deployed to any static hosting platform such as Vercel, Netlify, or GitHub Pages.

For a production build, run:

```bash
npm run build
```

The generated files will be available in the `dist/` directory.