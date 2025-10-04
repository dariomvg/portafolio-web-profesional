"use client";
import Header from "@/components/Header";
import SectionMain from "@/components/SectionMain";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ContextTheme";
import { themes } from "@/utils/themes";
import dynamic from "next/dynamic";
import "./page.css";

const SectionProjects = dynamic(() => import("@/components/SectionProjects"), {
  ssr: false,
});
const SectionAboutMe = dynamic(() => import("@/components/SectionAboutMe"), {
  ssr: false,
});
const SectionArticles = dynamic(() => import("@/components/SectionArticles"), {
  ssr: false,
});
const SectionSkills = dynamic(() => import("@/components/SectionSkills"), {
  ssr: false,
});
const SectionContacts = dynamic(() => import("@/components/SectionContacts"), {
  ssr: false,
});

export default function Main() {
  const { theme } = useTheme();

  return (
    <main className={`main ${theme === themes.light ? "light" : ""}`}>
      <Header />
      <SectionMain />
      <div className="wrapper">
        <SectionProjects />
        <SectionSkills />
        <SectionAboutMe />
        <SectionArticles />
        <SectionContacts />
        <Footer />
      </div>
    </main>
  );
}
