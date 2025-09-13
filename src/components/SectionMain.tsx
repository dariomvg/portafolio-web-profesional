import { words } from "@/utils/words_typer";
import { TypeWriter } from "type-writer-words";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGithub from "../assets/icons/github.svg";
import iconGithubLight from "../assets/icons/github_light.svg";
import iconGmail from "../assets/icons/gmail.svg";
import iconCv from "../assets/icons/pdf.png";
import "@/styles/section-main.css";

const SectionMain = () => {
  return (
    <section className="section-main">
      <div className="container-info-main">
        <p className="title-top-info-main">Dario Martinez</p>
        <h1 className="title-info-main">Desarrollador Web Frontend</h1>
        <TypeWriter words={words} cursor="line" color="#fff" />
        <p className="presentation-info-main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          quibusdam odit dignissimos laborum aliquam incidunt iusto libero
          accusantium ea et itaque quis aliquid alias, facere porro sint
          explicabo in culpa.
        </p>
        <div className="contacts-info-main">
          <a
            href="https://www.linkedin.com/in/dariomvg/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-section-main blue">
            <img
              src={iconLinkedin.src}
              alt="icon linkedin"
              width={20}
              height={20}
            />
            Linkedin
          </a>
          <a
            href="https://github.com/dariomvg"
            target="_blank"
            rel="noopener noreferrer"
            className="link-section-main gray">
            <img
              src={iconGithub.src}
              alt="icon github"
              width={20}
              height={20}
            />
            Github
          </a>
          <a
            href="mailto:contact.dario.info@gmail.com"
            className="link-section-main green">
            <img src={iconGmail.src} alt="icon gmail" width={20} height={20} />
            Correo
          </a>
          <a
            href="/cv-dario-martinez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-section-main orange">
            <img src={iconCv.src} alt="icon linkedin" width={20} height={20} />
            Curriculum
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionMain;
