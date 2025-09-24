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
    name: "CMS - Gestor de artículos",
    description:
      "CMS Blog es un gestor de contenido para un blog o portfolio. Puedes crear, editar, leer, eliminar, colocarlos públicos o privados, todo con un editor de texto completo. Además, puedes mostrar tus artículos en tu propias Apps con las API's que ofrece, todo de forma segura.",
    link: "https://cms-your-blog.vercel.app",
    repository: "https://github.com/dariomvg/cms-your-blog",
    image: null,
    icons: [
      { id: 4684, name: "TypeScript", icon: typescript },
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
    name: "Sistema de autenticación",
    description:
      "Sistema de SignIn/SignUp seguro manejando datos sensibles del lado del servidor con tokens, cookies, fechas de expiración, CORS, sanitización y validación de datos, etc. Además de una base de datos con tablas estructuradas para la escalabilidad.",
    link: null,
    repository: "https://github.com/dariomvg/app-auth",
    image: `${url_image}/v1757017927/app-auth.png`,
    icons: [
      { id: 568934, name: "NextJS", icon: nextjs },
      { id: 45945, name: "ExpressJS", icon: expressjs },
      { id: 262475, name: "PostgreSQL", icon: postgresql },
    ],
    video: null,
  },
  {
    id: 3,
    name: "Gestor de proyectos",
    description:
      "Gestor de proyectos con múltiples herramientas integradas, como son tabla Kanban, lista de tareas, organizador de semana personalizable y un editor de texto para tus notas o ideas sobre el proyecto. Cuenta con una UI amigable para manejar todo e ingresando a cada proyecto con un solo click.",
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
    name: "Chats en tiempo real",
    description:
      "Aplicación para crear chats y hablar cuando quieras en tiempo real con todo integrado: autenticación con tokens, datos binarios como audios y stickers con cloudinary y la velocidad de socket.io para la información al instante. Sumado con una UI simple.",
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
    name: "Gestor Group - Colaborativo",
    description:
      "Aplicación para gestionar proyectos que necesiten colaboradores. Integrado con herramientas como lista de tareas, chat global, manejo de colaboradores y compartir por medio de contraseñas seguras. Puedes navegar entre distintos proyectos y con un solo click ingresar.",
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
    name: "Creador de curriculums",
    description:
      "Puedes crear tu cv(Curriculum Vitae) completo con toda la información que quieras agregar. usando un diseño fácil de leer y más usado actualmente. También pensado para pasar sistemas ATS que leen múltiples curriculums diariamente.",
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
    name: "Chat asistente",
    description:
      "Chat personal al que puedes personalizar para agregar información importante de tu aplicación, ya sea guíar los usuarios o visitantes, como está formada tu web, dar a conocer secciones de la misma, etc. 100% personalizable y con navegación directa en tu web.",
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
    name: "Kit elements",
    description:
      "Conjunto de herramientas disponibles en NPM. Kit-components-ui con componentes UI funcionales, Type-writer-words con efecto de máquina de escribir, Eff-anim con transiciones y efectos con el scroll y format-all-dates que proporciona hora y fechas en distintos formatos.",
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
    name: "Visualizador de algoritmos",
    description:
      "Puedes visualizar múltiples algoritmos aprendiendo paso a paso su funcionamiento y el fín del mismo. Contiene un paso a paso con su explicación, con el código en un editor de código integrado donde tambien puedes hacer tus propias pruebas y ver la salida por consola.",
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
    name: "Text Lab - Editor de texto + IA",
    description:
      "Text lab es un gestor de tareas con editor de texto enriquesido. Contiene títulos, código, imagenes, enlaces, etc. Además viene con un chat de IA donde puedes hacer consultas sobre tus tareas, dudas o ayuda con lo que necesites.",
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
      "API de productos falsos públicos para un e-commerce. Objetos estructurados creados desde cero e imagenes creadas con IA. Disponible para poder hacer paginación, filtrar, obtener un solo producto, etc.",
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
      "Calendario web con el que puedes organizar tu dias agregando tareas en día y eliminarlas cuando quieras. Organiza tu semana, semanas o mes completo incluso con una UI simple e intuitiva.",
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
    name: "Fake E-commerce online",
    description:
      "E-commerce completo de productos variados digitales. Puedes filtrar, agregar a tu carrito, la cantidad disponible de ese producto, comprar, eliminar, etc. Presenta una vista previa de cada producto antes de agregar al carrito o comprar.",
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
    name: "Módulo de pago - MercadoPago",
    description:
      "Módulo de mercado pago ya listo para integrar a tus proyectos o negocio para agregar métodos de pago con mercado pago. Puedes personalizarlo, manejando los datos de la forma que te beneficie y acomode a vos.",
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
    name: "PLataforma de peliculas y TV",
    description:
      "Plataforma de contenido de peliculas, series y TV. Contiene lo último del cine con toda la información completa como tráilers, actores y peliculas de esos actores, descripciónes y más. Además de las diferentes secciones, una con distintos géneros para que busques lo que más te gusta.",
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
      "Blog de tecnología con contenido actual sobre programación, desarrollo y más. Puedes encontrar los cursos más completos de youtube, artículos con enseñanzas y temas de interes. Una sección de artículos propios donde muestro algunas recomendaciones o temas aprendidos y aplicados por mí.",
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
