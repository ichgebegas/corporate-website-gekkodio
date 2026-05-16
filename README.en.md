# Corporate Website for Gekkodio

[Русская версия](README.md)

Corporate website for Gekkodio, a digital studio focused on websites, web apps, automation, AI integrations, and startup MVP launches.

Live demo: https://gekkodio-showcase.vercel.app

## Goal

Turn an unfinished AI-generated website draft into a polished production-ready showcase:

- improve visual consistency;
- fix responsive layouts for desktop, tablet, and mobile;
- redesign repeated sections that looked too generic;
- build portfolio and case-study pages;
- connect and later stub the contact form flow;
- deploy the final static site to Vercel.

## What Was Done

- Reworked the header dropdown menus and mobile navigation.
- Polished the homepage sections, project cards, testimonials, FAQ, and CTA blocks.
- Built responsive portfolio cards and detailed case pages.
- Added fullscreen image preview for case-study screenshots.
- Redesigned service pages with clearer editorial sections.
- Updated pricing cards, picker states, and FAQ placement.
- Improved tablet and mobile layouts across the site.
- Added a backend endpoint for form submission, currently running as a safe stub.
- Deployed the project to Vercel.

## Stack

- HTML
- CSS
- JavaScript
- Node.js
- Vercel

## Pages

- Home
- Services
- Portfolio
- Case studies
- About
- Startups
- Pricing

## Screenshots

Project images are stored in `assets/img/`.

![Gekkodio case preview](assets/img/school%20lab%20photo.png)

## Run Locally

```bash
npm install
npm start
```

Then open:

```text
http://localhost:3000
```

## Deploy

This project is ready for Vercel deployment.

```bash
vercel deploy --prod
```

## Notes

- `.env` files are intentionally excluded.
- Form submission is currently stubbed in `api/telegram.js`.
- No client secrets or production credentials are included in this repository.
