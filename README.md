# Professional Portfolio Website

A modern, job-ready portfolio built with **React**, **Tailwind CSS**, and **Recharts**. All content is driven by a single JSON file so you can update your site without touching component code.

## Features

- Responsive layout (mobile & desktop)
- Hero with CV download and contact CTA
- About, Skills, Projects, Ongoing projects, Dashboard, Certificates, Contact
- Project cards with **Completed / Ongoing / Planned** status badges
- Progress bars for ongoing projects
- Analytics dashboard: skill levels, project categories, status breakdown
- Framer Motion scroll animations
- Organized `public/assets/` folders for images, certificates, and CV

## Quick start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Project structure

```
portfolio-website/
├── public/
│   └── assets/
│       ├── cv/                 # PDF resume (see README inside)
│       ├── certificates/       # Certificate images
│       └── projects/
│           ├── completed/      # Finished project screenshots
│           ├── ongoing/        # In-progress project screenshots
│           └── planned/        # Planned project mockups
├── src/
│   ├── data/
│   │   └── portfolio.json      # ← Edit this to update all content
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Reusable UI pieces
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## Customizing content

### 1. Profile & contact

Edit `src/data/portfolio.json` → `profile`, `contact`, and `cv`:

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Job Title",
    "intro": "...",
    "about": "...",
    "email": "you@email.com"
  },
  "cv": {
    "filename": "your-name-cv.pdf",
    "label": "Download CV"
  }
}
```

Place your PDF at `public/assets/cv/your-name-cv.pdf`.

### 2. Skills

Add or edit entries under `skills` (name, level 0–100, category).

### 3. Projects

Each project supports:

| Field          | Description                                      |
|----------------|--------------------------------------------------|
| `status`       | `"completed"`, `"ongoing"`, or `"planned"`       |
| `progress`     | 0–100 (ongoing only)                             |
| `image`        | Path under `public/`, e.g. `assets/projects/ongoing/my-app.jpg` |
| `technologies` | Array of tech tags                               |

**Ongoing example** (this site is included at 40%):

```json
{
  "id": "portfolio-website",
  "title": "Professional Portfolio Website",
  "status": "ongoing",
  "progress": 40,
  "image": "assets/projects/ongoing/portfolio-website.jpg"
}
```

### 4. Certificates

Add images to `public/assets/certificates/` and reference them in `certificates`.

## Tech stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Recharts](https://recharts.org/) for dashboard charts
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons

## Deployment

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.

## License

MIT — use freely for your personal portfolio.
