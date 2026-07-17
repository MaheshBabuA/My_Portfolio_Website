import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  fastapi,
  flask,
  socketio,
  vercel,
  render,
  langgraph,
  mcp,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// TODO: Icons below don't semantically match the new titles — swap later with proper icons:
//   "AI Orchestration" needs a dedicated icon (currently uses `web`)
//   "Systems Architecture" needs a dedicated icon (currently uses `backend`)
//   "Full-Stack Development" needs a dedicated icon (currently uses `mobile`)
//   "Founder & Builder" needs a dedicated icon (currently uses `creator`)
const services = [
  {
    title: "AI Orchestration",
    icon: web,
  },
  {
    title: "Systems Architecture",
    icon: backend,
  },
  {
    title: "Full-Stack Development",
    icon: mobile,
  },
  {
    title: "Founder & Builder",
    icon: creator,
  },
];

// TODO: Missing icon assets — need to source from simpleicons.org or svgl.app:
//   - FastAPI
//   - Flask
//   - Socket.io
//   - LangGraph
//   - MCP
//   - Vercel
//   - Render
const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React / Next.js",
    icon: reactjs,
  },
  {
    name: "Node.js / Express",
    icon: nodejs,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Socket.io",
    icon: socketio,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Render",
    icon: render,
  },
  {
    name: "LangGraph",
    icon: langgraph,
  },
  {
    name: "MCP",
    icon: mcp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "GitHub",
    icon: git,
  },
];

const experiences = [
  {
    title: "Founder & CEO",
    company_name: "Zenthoryx Group",
    icon: web,
    iconBg: "#383E56",
    date: "April 2026 - Present",
    points: [
      "Founded a private limited holding company, UDYAM certified, for two ventures.",
      "Leading ShaadiSync, an AI-powered wedding-planning OS for Indian couples.",
      "Leading LevelUpCoders, an edtech venture focused on coding education.",
    ],
  },
  {
    title: "Hackathon Builder",
    company_name: "SOLARIS X, RNSIT",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "April 2026",
    points: [
      "Built Quorix MCP, an autonomous cybersecurity threat-intelligence system using FastMCP, Groq Llama 3.3 70B, and the AbuseIPDB API.",
      "Received positive Phase 1 judge feedback in the MCP-Based Systems track.",
    ],
  },
  {
    title: "AI Intern",
    company_name: "NoviTech R&D Pvt. Ltd.",
    icon: backend,
    iconBg: "#383E56",
    date: "March 2025 - April 2025",
    points: [
      "Designed a Moving Object Detection System for real-time object tracking using computer vision.",
      "Developed an AI-powered Smart Attendance System using facial recognition.",
      "Built a Face Emotion Recognition model using deep learning techniques.",
      "Built a Hand Gesture Recognition System enabling gesture-based human-computer interaction.",
    ],
  },
  {
    title: "Team Lead",
    company_name: "WEBATHON 2026, RajaRajeswari College",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "April 2026",
    points: [
      "Led a team building a hospital appointment platform with real-time Socket.io flow, QR check-in, and a LangChain RAG assistant.",
      "Advanced past Round 1, scoring 41.3/50.",
    ],
  },
];

// TODO: image fields need real screenshots — replace null with imported images once supplied.
//       Works.jsx has been updated to render a placeholder block when image is falsy.
const projects = [
  {
    name: "Quorix MCP",
    description:
      "Autonomous cybersecurity threat-intelligence system built for the SOLARIS X hackathon's MCP-Based Systems track. Uses FastMCP, Groq Llama 3.3 70B, and the AbuseIPDB API behind a Flask bridge.",
    tags: [
      { name: "FastMCP", color: "blue-text-gradient" },
      { name: "Groq", color: "green-text-gradient" },
      { name: "cybersecurity", color: "pink-text-gradient" },
    ],
    image: null, // TODO: add screenshot for Quorix MCP
    source_code_link: "TODO", // TODO: add GitHub URL
  },
  {
    name: "AI Emergency Government Navigator",
    description:
      "Deterministic pseudo-RAG system with keyword trie routing, a stealth-mode UI, and a PWA offline layer, built in 13 days for Hack4Soc 3.0.",
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "PWA", color: "green-text-gradient" },
      { name: "hackathon", color: "pink-text-gradient" },
    ],
    image: null, // TODO: add screenshot for AI Emergency Government Navigator
    source_code_link: "TODO", // TODO: add GitHub URL
  },
  {
    name: "Hospital Appointment Platform",
    description:
      "Real-time appointment and triage platform with Socket.io live updates, QR check-in, and a LangChain RAG assistant, built for WEBATHON 2026.",
    tags: [
      { name: "Socket.io", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "RAG", color: "pink-text-gradient" },
    ],
    image: null, // TODO: add screenshot for Hospital Appointment Platform
    source_code_link: "TODO", // TODO: add GitHub URL
  },
  {
    name: "AI Coding Interview Simulator",
    description:
      "Next.js + FastAPI app with a Monaco-based live code editor, paired with a separate Node.js/Express + OpenAI backend generating LeetCode-style questions on demand.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
    ],
    image: null, // TODO: add screenshot for AI Coding Interview Simulator
    source_code_link: "TODO", // TODO: add GitHub URL
  },
  {
    name: "Drive2Thrive",
    description:
      "Freelance site for a career consultancy — vanilla HTML/CSS/JS with GSAP animations, Web3Forms contact routing, and a full DNS migration from GoDaddy to Vercel.",
    tags: [
      { name: "GSAP", color: "blue-text-gradient" },
      { name: "freelance", color: "pink-text-gradient" },
    ],
    image: null, // TODO: add screenshot for Drive2Thrive
    source_code_link: "TODO", // TODO: add GitHub URL or live link
  },
];

export { services, technologies, experiences, projects };
