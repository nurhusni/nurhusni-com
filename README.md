# Personal Site

Personal site built with Vite, React, and Tailwind CSS.

## Getting Started

```sh
npm install
npm run dev
```

The dev server listens on port 8080 (see `vite.config.ts`).

## Scripts

- `npm run dev` – start the development server with hot reloading.
- `npm run build` – generate a production build in `dist/`.
- `npm run preview` – serve the built assets locally.
- `npm run lint` – run ESLint across the project.

## Deployment

The repository ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and deploys it to GitHub Pages. Push to `main` or trigger the workflow manually to publish the latest build.

## Docker

A production image is available via the provided `Dockerfile`. Use `docker-compose.yml` to build and run the static bundle behind nginx:

```sh
docker compose up --build
```
