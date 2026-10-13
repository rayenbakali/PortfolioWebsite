# Rayen Bakali | Portfolio

Personal portfolio site, live at [rayen-bakali.com](https://www.rayen-bakali.com/).

Couldn't sleep and got bored, time to use Shadcn UI for my own benefits.

## Stack

- React 19 + Vite
- Tailwind CSS v4 + shadcn/ui (Radix primitives)
- Motion for the intro, hero, and manga cursor trail
- Deployed on Vercel (with Speed Insights)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # ESLint
```

## Editing content

All the copy for experience, projects, services, and partnerships lives in
[`src/config/data.js`](src/config/data.js). Projects accept an optional `image`,
`liveUrl`, and `githubUrl`; empty values are hidden, and cards without an image
show a gradient placeholder.

Navigation links are defined once in
[`src/components/NavBar/nav-menu.jsx`](src/components/NavBar/nav-menu.jsx) and
shared by the navbar, mobile sheet, and footer.
