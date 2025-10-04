"use client";
import { Content, ContextLanguagesTypes } from "@/types/types";
import { useContext, createContext, useState, useEffect } from "react";
import globalContent from "@/utils/content.json";
import { projects as projectsES } from "@/utils/projects.es";
import { projects as projectsEN } from "@/utils/projects.en";
import { langs } from "@/utils/langs";

const ContextLanguages = createContext<ContextLanguagesTypes | null>(null);

export const useLanguage = (): ContextLanguagesTypes => {
  const context = useContext(ContextLanguages);
  if (!context) throw new Error("Error context wrapper");
  return context;
};

export default function ProviderLanguages({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [content, setcontent] = useState<Content | null>(null);

  const toggleLanguage = () => {
    lang === langs.es ? setLang("en") : setLang("es");
  };

  useEffect(() => {
    const global = globalContent[lang];
    const projects = lang === langs.es ? projectsES : projectsEN;
    setcontent({
      ...global,
      projects,
    });
  }, [lang]);

  return (
    <ContextLanguages.Provider value={{ content, lang, toggleLanguage }}>
      {children}
    </ContextLanguages.Provider>
  );
}
