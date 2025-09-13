"use client";
import { useState } from "react";
import ContainerTitle from "./ContainerTitle";
import { skills } from "@/utils/skills";
import "../styles/section-skills.css";

type SkillCategory = keyof typeof skills;

const SectionSkills = () => {
  const [filterSkill, setFilterSkill] = useState<SkillCategory>("frontend");

  return (
    <section className="section-skills" id="habilidades">
      <ContainerTitle>Habilidades</ContainerTitle>
      <div className="content-section-skills">
         <aside className="aside-section-skills">
        <button
          className="button-aside-skills"
          onClick={() => setFilterSkill("frontend")}>
          Front-end
        </button>
        <button
          className="button-aside-skills"
          onClick={() => setFilterSkill("backend")}>
          Back-end
        </button>
        <button
          className="button-aside-skills"
          onClick={() => setFilterSkill("tools")}>
          Herramientas
        </button>
      </aside>
      <section className="container-skills">
        <h4 className="title-skills">{skills[filterSkill].title}</h4>
        <ul className="list-skills">
          {skills[filterSkill].skills.map((skill) => (
            <li key={skill.id} className="item-skill">
              <img
                src={skill.icon.src}
                alt={skill.name}
                width={40}
                height={40}
                title={skill.name}
              />
            </li>
          ))}
        </ul>
      </section>
      </div>

     
    </section>
  );
};

export default SectionSkills;
