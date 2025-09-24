"use client";
import ContainerTitle from "./ContainerTitle";
import "../styles/section-projects.css";
import { useState } from "react";
import { projects } from "@/utils/projects.es";
import CardProject from "./CardProject";
import Link from "next/link";
import { useLanguage } from "@/contexts/ContextLanguages";

const SectionProjects = () => {
  const { content } = useLanguage();
  const [index, setIndex] = useState(0);
  const indexNext = 4;

  const back = () => {
    setIndex((prevIndex) => prevIndex - indexNext);
  };

  const next = () => {
    setIndex((prevIndex) => prevIndex + indexNext);
  };

  return (
    <section className="section-projects" id="proyectos">
      <ContainerTitle>{content?.title_sec_projects}</ContainerTitle>
      <div className="container-pages-projects">
        <span className="title-total-projects">{index}</span>
        <span className="title-total-projects">{index + indexNext}</span>
      </div>
      <ul className="list-projects">
        {content?.projects.slice(index, index + indexNext).map((project) => (
          <CardProject
            key={project.id}
            project={project}
            titleGithub={content?.github_card_project}
            titleVisit={content?.link_card_project}
          />
        ))}
        <div className="container-button-more-project">
          <button
            type="button"
            className="button-more-project"
            disabled={index <= 0}
            onClick={back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="var(--color-white)"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            type="button"
            className="button-more-project"
            disabled={projects.length === index + indexNext}
            onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="var(--color-white)"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </ul>
      <Link href="/proyectos" className="link-last-projects">
        {content?.link_sec_projects}
      </Link>
    </section>
  );
};

export default SectionProjects;
