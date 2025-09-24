"use client";
import { useState } from "react";
import ContainerTitle from "./ContainerTitle";
import { skills } from "@/utils/skills";
import "../styles/section-skills.css";
import { useLanguage } from "@/contexts/ContextLanguages";
type SkillCategory = keyof typeof skills;

const SectionSkills = () => {
  const { content } = useLanguage();
  const [filterSkill, setFilterSkill] = useState<SkillCategory>("frontend");

  return (
    <section className="section-skills" id="habilidades">
      <ContainerTitle>{content?.title_sec_skills}</ContainerTitle>
      <div className="content-section-skills">
        <aside className="aside-section-skills">
          <button
            className={`button-aside-skills ${
              filterSkill === "frontend" ? "active-button" : ""
            }`}
            onClick={() => setFilterSkill("frontend")}>
            {content?.button_skill_1}
          </button>
          <button
            className={`button-aside-skills ${
              filterSkill === "backend" ? "active-button" : ""
            }`}
            onClick={() => setFilterSkill("backend")}>
            {content?.button_skill_2}
          </button>
          <button
            className={`button-aside-skills ${
              filterSkill === "tools" ? "active-button" : ""
            }`}
            onClick={() => setFilterSkill("tools")}>
            {content?.button_skill_3}
          </button>
        </aside>

        <section className="container-skills">
          <ul className="list-skills">
            {skills[filterSkill].skills.map((skill) => (
              <li className="item-skill" key={skill.id}>
                <img
                  src={skill.icon.src}
                  alt={skill.name}
                  width={40}
                  height={40}
                  title={skill.name}
                  className="icon-skill"
                  loading="lazy"
                />
                <strong className="name-item-skill">{skill.name}</strong>
              </li>
            ))}
          </ul>
        </section>

        <div
          className={`circle-gradient ${
            (filterSkill == "backend" && "gradient-1") ||
            (filterSkill == "tools" && "gradient-2")
          }`}></div>
      </div>
    </section>
  );
};

export default SectionSkills;
