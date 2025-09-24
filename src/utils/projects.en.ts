import astro from "@/assets/icons/astro_dark.svg";
import css from "@/assets/icons/css.svg";
import expressjs from "@/assets/icons/expressjs_dark.svg";
import nextjs from "@/assets/icons/nextjs.svg";
import nodejs from "@/assets/icons/nodejs.svg";
import postgresql from "@/assets/icons/postgresql.svg";
import react from "@/assets/icons/react_dark.svg";
import supabase from "@/assets/icons/supabase.svg";
import typescript from "@/assets/icons/typescript.svg";
import { ProjectsTypes } from "@/types/types";
import { url_image } from "./options";

export const projects: ProjectsTypes[] = [
  {
    id: 1,
    name: "CMS - Article Manager",
    description:
      "CMS Blog is a content manager for a blog or portfolio. You can create, edit, read, delete, set them as public or private, all with a full text editor. In addition, you can display your articles in your own Apps with the provided APIs, all in a secure way.",
    link: "https://cms-your-blog.vercel.app",
    repository: "https://github.com/dariomvg/cms-your-blog",
    image: null,
    icons: [
      { id: 468467, name: "TypeScript", icon: typescript },
      { id: 569895, name: "NextJS", icon: nextjs },
      { id: 811221, name: "Supabase", icon: supabase },
    ],
    video: {
      id: "v1757017930",
      name: "cms-blog.mp4",
    },
  },
  {
    id: 2,
    name: "Authentication System",
    description:
      "Secure SignIn/SignUp system handling sensitive data on the server side with tokens, cookies, expiration dates, CORS, sanitization and data validation, etc. Plus a database with structured tables for scalability.",
    link: null,
    repository: "https://github.com/dariomvg/app-auth",
    image: `${url_image}/v1757017927/app-auth.png`,
    icons: [
      { id: 568934, name: "NextJS", icon: nextjs },
      { id: 459415, name: "ExpressJS", icon: expressjs },
      { id: 262475, name: "PostgreSQL", icon: postgresql },
    ],
    video: null,
  },
  {
    id: 3,
    name: "Project Manager",
    description:
      "Project manager with multiple integrated tools, such as a Kanban board, task list, customizable weekly planner, and a text editor for your notes or project ideas. It features a user-friendly UI to manage everything and access each project with a single click.",
    link: "https://gp-gestionar-proyectos.vercel.app",
    repository: "https://github.com/dariomvg/gestionar-proyectos",
    image: null,
    icons: [
      { id: 584865, name: "TypeScript", icon: typescript },
      { id: 684386, name: "NextJS", icon: nextjs },
      { id: 584823, name: "Supabase", icon: supabase },
    ],
    video: {
      id: "v1757017928",
      name: "gestion-proyectos.mp4",
    },
  },
  {
    id: 4,
    name: "Real-Time Chats",
    description:
      "Application to create chats and talk whenever you want in real time with everything integrated: token-based authentication, binary data like audio and stickers with Cloudinary, and the speed of socket.io for instant information. Combined with a simple UI.",
    link: null,
    repository: "https://github.com/dariomvg/chats-in-realtime",
    image: `${url_image}/v1757017926/chats-realtime.png`,
    icons: [
      { id: 45886, name: "ReactJS", icon: react },
      { id: 58584, name: "ExpressJS", icon: expressjs },
      { id: 458945, name: "PostgreSQL", icon: postgresql },
    ],
    video: null,
  },
  {
    id: 5,
    name: "Gestor Group - Collaborative",
    description:
      "Application to manage projects that require collaborators. Integrated with tools such as task lists, global chat, collaborator management, and sharing through secure passwords. You can navigate between different projects and access them with just one click.",
    link: "https://gestor-group-content.vercel.app",
    repository: "https://github.com/dariomvg/gestor-group",
    image: null,
    icons: [
      { id: 95965, name: "TypeScript", icon: typescript },
      { id: 6583, name: "NextJS", icon: nextjs },
      { id: 45858, name: "Supabase", icon: supabase },
    ],
    video: {
      id: "v1757017926",
      name: "gestor-group.mp4",
    },
  },
  {
    id: 6,
    name: "Resume Builder",
    description:
      "You can create your complete CV (Curriculum Vitae) with all the information you want to add, using an easy-to-read and widely used design. Also designed to pass ATS systems that process multiple resumes daily.",
    link: "https://create-your-cv-eight.vercel.app",
    repository: "https://github.com/dariomvg/create-your-cv",
    image: null,
    icons: [
      { id: 34785, name: "ReactJS", icon: react },
      { id: 48548, name: "TypeScript", icon: typescript },
      { id: 83458, name: "CSS", icon: css },
    ],
    video: {
      id: "v1757017937",
      name: "crear-cv.mp4",
    },
  },
  {
    id: 7,
    name: "Assistant Chat",
    description:
      "Personal chat that you can customize to add important information about your application, whether guiding users or visitors, explaining how your site is structured, highlighting its sections, etc. 100% customizable with direct navigation on your website.",
    link: "https://chat-assistent-docs.vercel.app",
    repository: "https://github.com/dariomvg/chat-assistent-docs",
    image: null,
    icons: [
      { id: 115623, name: "ReactJS", icon: react },
      { id: 437347, name: "TypeScript", icon: typescript },
      { id: 347347, name: "CSS", icon: css },
    ],
    video: {
      id: "v1757017931",
      name: "chat-asistente.mp4",
    },
  },
  {
    id: 8,
    name: "Kit Elements",
    description:
      "Set of tools available on NPM. Kit-components-ui with functional UI components, Type-writer-words with typewriter effect, Eff-anim with transitions and scroll effects, and format-all-dates providing time and dates in different formats.",
    link: "https://docs-kit-elements.vercel.app/",
    repository: "https://github.com/dariomvg/docs-kit-elements",
    image: null,
    icons: [
      { id: 801, name: "ReactJS", icon: react },
      { id: 802, name: "TypeScript", icon: typescript },
      { id: 803, name: "CSS", icon: css },
    ],
    video: {
      id: "v1757017931",
      name: "kit-elements.mp4",
    },
  },
  {
    id: 9,
    name: "Algorithm Visualizer",
    description:
      "You can visualize multiple algorithms and learn step by step how they work and their purpose. It includes a walkthrough with explanations and code in an integrated editor where you can also run your own tests and see the console output.",
    link: "https://visualizador-algoritmos.vercel.app",
    repository: "https://github.com/dariomvg/visualizador-algoritmos",
    image: null,
    icons: [
      { id: 901, name: "TypeScript", icon: typescript },
      { id: 902, name: "NextJS", icon: nextjs },
      { id: 903, name: "CSS", icon: css },
    ],
    video: {
      id: "v1757017927",
      name: "visualizador-algoritmos.mp4",
    },
  },
  {
    id: 10,
    name: "Text Lab - Text Editor + AI",
    description:
      "Text Lab is a task manager with an enriched text editor. It includes titles, code, images, links, etc. In addition, it comes with an AI chat where you can ask questions about your tasks, doubts, or get help with what you need.",
    link: "https://text-lab-notes.vercel.app",
    repository: "https://github.com/dariomvg/text-lab",
    image: null,
    icons: [
      { id: 1001, name: "TypeScript", icon: typescript },
      { id: 1002, name: "NextJS", icon: nextjs },
      { id: 1003, name: "CSS", icon: css },
    ],
    video: {
      id: "v1757017927",
      name: "text-lab.mp4",
    },
  },
  {
    id: 11,
    name: "Fast-stock - API - Ecommerce",
    description:
      "Public fake products API for an e-commerce. Structured objects created from scratch and images generated with AI. Available to paginate, filter, fetch a single product, etc.",
    link: "https://docs-fast-stock-api.vercel.app",
    repository: "https://github.com/dariomvg/docs-fast-stock-api",
    image: null,
    icons: [
      { id: 1101, name: "NodeJS", icon: nodejs },
      { id: 1102, name: "ExpressJS", icon: expressjs },
    ],
    video: {
      id: "v1757017926",
      name: "api-ecommerce.mp4",
    },
  },
  {
    id: 12,
    name: "Calendar UI",
    description:
      "Web calendar where you can organize your days by adding tasks and deleting them whenever you want. Organize your week, weeks, or whole month with a simple and intuitive UI.",
    link: "https://calendar-ui-rho.vercel.app/",
    repository: "https://github.com/dariomvg/calendarUI",
    image: null,
    icons: [
      { id: 1201, name: "TypeScript", icon: typescript },
      { id: 1202, name: "NextJS", icon: nextjs },
      { id: 1203, name: "CSS", icon: css },
    ],
    video: {
      id: "v1757017926",
      name: "calendarUI.mp4",
    },
  },
  {
    id: 13,
    name: "Fake Online E-commerce",
    description:
      "Complete e-commerce of various digital products. You can filter, add to cart, check available quantity of a product, purchase, delete, etc. It also includes a product preview before adding to cart or buying.",
    repository: "https://github.com/dariomvg/e-commerce-fast-stock",
    link: "https://e-commerce-fast-stock.vercel.app",
    image: null,
    icons: [
      { id: 1301, name: "TypeScript", icon: typescript },
      { id: 1302, name: "NextJS", icon: nextjs },
      { id: 1303, name: "CSS", icon: css },
    ],
    video: {
      id: "v1757017935",
      name: "ecommerce.mp4",
    },
  },
  {
    id: 14,
    name: "Payment Module - MercadoPago",
    description:
      "MercadoPago payment module ready to integrate into your projects or business to add payment methods with MercadoPago. You can customize it, handling the data in the way that benefits and suits you best.",
    repository: "https://github.com/dariomvg/pagos-mercadopago",
    link: null,
    image: `${url_image}/v1757017926/mercado-pago.png`,
    icons: [
      { id: 1401, name: "NodeJS", icon: nodejs },
      { id: 1402, name: "ExpressJS", icon: expressjs },
    ],
    video: null,
  },
  {
    id: 15,
    name: "Movies & TV Platform",
    description:
      "Platform for movies, series, and TV content. It features the latest films with full details such as trailers, actors, related movies, descriptions, and more. It also includes different sections, including genres, so you can easily find what you like best.",
    link: "https://platform-movies-tv.vercel.app",
    repository: "https://github.com/dariomvg/platform-movies-tv",
    image: null,
    icons: [
      { id: 1501, name: "TypeScript", icon: typescript },
      { id: 1502, name: "NextJS", icon: nextjs },
      { id: 1503, name: "CSS", icon: css },
    ],
    video: {
      id: "v1757017939",
      name: "platform-movies.mp4",
    },
  },
  {
    id: 16,
    name: "",
    description:
      "Technology blog with up-to-date content on programming, development, and more. You can find the most complete YouTube courses, educational articles, and topics of interest. A section with my own articles where I share recommendations or topics I have learned and applied.",
    link: "https://blog-bytes-kohl.vercel.app",
    repository: "https://github.com/dariomvg/blog-bytes",
    image: null,
    icons: [
      { id: 1601, name: "Astro", icon: astro },
      { id: 1602, name: "TypeScript", icon: typescript },
      { id: 1603, name: "CSS", icon: css },
    ],
    video: {
      id: "v1757017947",
      name: "blog.mp4",
    },
  },
];

