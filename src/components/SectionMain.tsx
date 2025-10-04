import { TypeWriter } from "type-writer-words";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGithub from "../assets/icons/github.svg";
import iconGmail from "../assets/icons/gmail.svg";
import iconCv from "../assets/icons/pdf.png";
import { useLanguage } from "@/contexts/ContextLanguages";
import "@/styles/section-main.css";

const SectionMain = () => {
  const { content } = useLanguage();

  return (
    <section className="section-main">
      <div className="container-info-main">
        <p className="title-top-info-main">Dario Martinez</p>
        <h1 className="title-info-main">{content?.title_main}</h1>
        {content?.words_typer && (
          <TypeWriter
            words={content.words_typer}
            cursor="line"
            color="var(--color-white)"
          />
        )}

        <p className="presentation-info-main">{content?.description_main}</p>
        <div className="contacts-info-main">
          <a
            href="https://www.linkedin.com/in/dariomvg/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-section-main">
            <img
              src={iconLinkedin.src}
              alt="icon linkedin"
              width={20}
              height={20}
              loading="lazy"
            />
            {content?.title_linkedin}
          </a>

          <a
            href="https://github.com/dariomvg"
            target="_blank"
            rel="noopener noreferrer"
            className="link-section-main">
            <img
              src={iconGithub.src}
              alt="icon github"
              width={20}
              height={20}
              loading="lazy"
            />
            {content?.title_github}
          </a>

          <a
            href="mailto:contact.dario.info@gmail.com"
            className="link-section-main">
            <img
              src={iconGmail.src}
              alt="icon gmail"
              width={20}
              height={20}
              loading="lazy"
            />
            {content?.title_gmail}
          </a>

          <a
            href="/cv-dario-martinez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-section-main">
            <img
              src={iconCv.src}
              alt="icon linkedin"
              width={20}
              height={20}
              loading="lazy"
            />
            {content?.title_cv}
          </a>
        </div>
      </div>

      <>
        <div className="box-gradient gr1"></div>
        <div className="box-gradient gr2"></div>
        <div className="box-gradient gr3"></div>
      </>
    </section>
  );
};

export default SectionMain;
