"use client";
import ContainerTitle from "./ContainerTitle";
import "../styles/section-projects.css";
import { useState } from "react";
import { projects } from "@/utils/projects";
import CardProject from "./CardProject";
import { useRouter } from "next/navigation";

const SectionProjects = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const back = () => {
    setIndex((prevIndex) => prevIndex - 4);
    router.push("#proyectos");
  };

  const next = () => {
    setIndex((prevIndex) => prevIndex + 4);
    router.push("#proyectos");
  };

  return (
    <section className="section-projects" id="proyectos">
      <ContainerTitle>Proyectos</ContainerTitle>
      <ul className="list-projects">
        {projects.slice(index, index + 4).map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </ul>
      <div className="container-button-more-project">
        <button
          type="button"
          className="button-more-project"
          disabled={index <= 0}
          onClick={back}>
          Atrás
        </button>
        <button
          type="button"
          className="button-more-project"
          disabled={projects.length === index + 4}
          onClick={next}>
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default SectionProjects;
