"use client";
import Link from "next/link";
import "./page.css";
import { projects } from "@/utils/projects.es";
import CardProject from "@/components/CardProject";
import { useState } from "react";
import { useLanguage } from "@/contexts/ContextLanguages";

const Proyectos = () => {
  const [index, setIndex] = useState<number>(4);
  const { content } = useLanguage();

  const handleProjects = () => {
    if (index >= projects.length) {
      setIndex(4);
      return;
    }
    setIndex((prevIndex) => prevIndex + 4);
  };

  return (
    <main className="main-page-projects">
      <Link href="/" className="link-project-return">
        {content?.link_page_projects}
      </Link>
      <ul className="list-page-projects">
        {projects.slice(0, index).map((project) => (
          <CardProject
            key={project.id}
            project={project}
            titleGithub={content?.github_card_project ?? ""}
            titleVisit={content?.link_card_project ?? ""}
          />
        ))}
      </ul>
      <button className="button-page-projects" onClick={handleProjects}>
        {index >= projects.length
          ? content?.button_page_project_1
          : content?.button_page_project_2}
      </button>
    </main>
  );
};

export default Proyectos;
