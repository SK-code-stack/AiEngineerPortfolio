export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  type: "dashboard" | "ml" | "shop";
  category: "fullstack" | "ai" | "fullstack+ai";
}

export const projectsData: Project[] = [
  {
    id: "webease",
    tag: "01 / Product",
    title: "WebEase",
    description:
      "A one-stop utility platform — QR generator, PDF tools, typing-speed test, plagiarism checker — built as independent modules on one React front end.",
    stack: ["React.js", "Tailwind CSS", "Django", "PostgreSQL"],
    url: "webease.app",
    type: "dashboard",
    category: "fullstack",
  },
  {
    id: "documind",
    tag: "02 / AI Platform",
    title: "DocuMind Backend",
    description:
      "A Django backend that parses PDFs, embeds content with Sentence Transformers, and answers user queries through retrieval-augmented generation.",
    stack: ["Django", "ChromaDB", "Transformers", "ML"],
    url: "documind.dev",
    type: "ml",
    category: "ai",
  },
  {
    id: "shopit",
    tag: "03 / E-Commerce",
    title: "Shopit",
    description:
      "A full-featured e-commerce platform with product management, authentication, shopping cart, and a complete checkout flow.",
    stack: ["React.js", "Tailwind CSS", "Django", "PostgreSQL"],
    url: "shopit.store",
    type: "shop",
    category: "fullstack",
  },
];
