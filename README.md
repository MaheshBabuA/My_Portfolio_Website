# Mahesh Babu A — Portfolio

A developer portfolio built with React, Three.js, and Framer Motion, featuring interactive 3D elements and scroll-driven animations.

**Live site:** [maheshbabua.dev](https://maheshbabua.dev) <!-- TODO: replace with actual deployed URL -->

---

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS
- **3D / Graphics:** Three.js, React Three Fiber, Drei
- **Animation:** Framer Motion, GSAP
- **Backend integrations:** Socket.io, LangChain, FastMCP
- **Deployment:** Vercel, Render

## Features

- Interactive 3D desktop model with drag-to-rotate
- Scroll-driven motorcycle animation on the experience timeline
- Mouse-reactive tech icons that shake with cursor movement and assemble on corner hover
- Fully responsive design with mobile-optimized navigation
- Contact form powered by EmailJS

## Getting Started

```bash
git clone https://github.com/MaheshBabuA/My_Portfolio_Website.git
cd My_Portfolio_Website
npm install --legacy-peer-deps
npm run dev
```

The dev server starts at `http://localhost:5173`.

> **Note:** `--legacy-peer-deps` is required due to a peer dependency conflict in `react-tilt`.

## Project Structure

```
src/
├── assets/          # Icons, images, 3D model references
├── components/      # React components (Hero, About, Experience, Tech, Works, Contact)
├── constants/       # Data arrays (technologies, experiences, projects)
├── hoc/             # Higher-order components (SectionWrapper)
└── utils/           # Framer Motion animation variants
```

## 3D Models

| Model | Author | License |
|-------|--------|---------|
| Gaming Desktop PC | Yolala1232 | [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) via Sketchfab |
| Stylized Planet | cmzw | [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) via Sketchfab |

## License

This project is based on [adrianhajdin/project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio) (MIT License). Customizations and content are original.
