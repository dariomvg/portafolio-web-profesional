"use client";
import Header from "@/components/Header";
import SectionMain from "@/components/SectionMain";
import SectionProjects from "@/components/SectionProjects";
import SectionSkills from "@/components/SectionSkills";
import SectionAboutMe from "@/components/SectionAboutMe";
import SectionArticles from "@/components/SectionArticles";
import SectionContacts from "@/components/SectionContacts";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ContextTheme";
import "./page.css";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className={`main ${theme === "light" ? "main-light" : ""}`}>
      <Header />
      <SectionMain />
      <SectionProjects />
      <SectionSkills />
      <SectionAboutMe />
      <SectionArticles />
      <SectionContacts /> 
      <Footer />
    </main>
  );
}
