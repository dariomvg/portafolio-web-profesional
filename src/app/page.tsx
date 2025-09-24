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
import { themes } from "@/utils/themes";
import { useLanguage } from "@/contexts/ContextLanguages";
import "./page.css";

export default function Main() {
  const { lang, toggleLanguage } = useLanguage();
  const { theme, themeDark } = useTheme();

  if (!lang) return;
  return (
    <main className={`main ${theme === themes.light ? "light" : ""}`}>
      <Header lang={lang} toggleLanguage={toggleLanguage} />
      <SectionMain theme={theme} themeDark={themeDark} />
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
