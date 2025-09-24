import { SkillsTypes } from "@/types/types";
import astroDark from "@/assets/icons/astro_dark.svg";
import html5 from "@/assets/icons/html5.svg";
import css from "@/assets/icons/css.svg";
import javascript from "@/assets/icons/javascript.svg";
import nextjs from "@/assets/icons/nextjs.svg";
import typescript from "@/assets/icons/typescript.svg";
import reactDark from "@/assets/icons/react_dark.svg";

import expressjsDark from "@/assets/icons/expressjs_dark.svg";
import nodejs from "@/assets/icons/nodejs.svg";
import postgresql from "@/assets/icons/postgresql.svg";
import supabase from "@/assets/icons/supabase.svg";

import git from "@/assets/icons/git.svg";
import github from "@/assets/icons/github.svg";
import vercelDark from "@/assets/icons/vercel_dark.svg";
import jest from "@/assets/icons/jest.svg"
import vitest from "@/assets/icons/vitest.svg";


export const skills: SkillsTypes = {
  frontend: {
    skills: [
      { id: 101, name: "HTML5", icon: html5 },
      { id: 102, name: "CSS", icon: css },
      { id: 103, name: "JavaScript", icon: javascript },
      { id: 104, name: "TypeScript", icon: typescript },
      { id: 105, name: "ReactJS", icon: reactDark },
      { id: 106, name: "NextJS", icon: nextjs },
      { id: 107, name: "Astro", icon: astroDark }
    ],
  },
  backend: {
    skills: [
      { id: 201, name: "NodeJS", icon: nodejs },
      { id: 202, name: "ExpressJS", icon: expressjsDark },
      { id: 203, name: "PostgreSQL", icon: postgresql },
      { id: 204, name: "Supabase", icon: supabase }
    ],
  },
  tools: {
    skills: [
      { id: 301, name: "Git", icon: git },
      { id: 302, name: "GitHub", icon: github },
      { id: 303, name: "Vitest", icon: vitest },
      { id: 304, name: "Jest", icon: jest },
      { id: 305, name: "Vercel", icon: vercelDark },
    ],
  },
};
