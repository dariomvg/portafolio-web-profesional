import { TypeWriter } from "type-writer-words";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGithub from "../assets/icons/github.svg";
import iconGmail from "../assets/icons/gmail.svg";
import iconCv from "../assets/icons/pdf.png";
import "@/styles/section-main.css";
import { ContainerViews } from "eff-anim";
import { useLanguage } from "@/contexts/ContextLanguages";

const SectionMain = ({
  theme,
  themeDark,
}: {
  theme: string;
  themeDark: string;
}) => {
  const { content } = useLanguage();

  return (
    <section className="section-main">
      <div className="container-info-main">
        <ContainerViews effect="eff-top">
          <p className="title-top-info-main">Dario Martinez</p>
        </ContainerViews>
        <ContainerViews effect="eff-zoom">
          <h1 className="title-info-main">{content?.title_main}</h1>
        </ContainerViews>
        {content?.words_typer && (
          <TypeWriter
            words={content.words_typer}
            cursor="line"
            color="var(--color-white)"
          />
        )}

        <p className="presentation-info-main">{content?.description_main}</p>
        <div className="contacts-info-main">
          <ContainerViews effect="eff-flip">
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
          </ContainerViews>

          <ContainerViews effect="eff-flip">
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
          </ContainerViews>

          <ContainerViews effect="eff-flip">
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
          </ContainerViews>

          <ContainerViews effect="eff-flip">
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
          </ContainerViews>
        </div>
      </div>
      {theme !== themeDark && <>
      <div className="box-gradient gr1"></div>
      
      <div className="box-gradient gr2"></div>
      <div className="box-gradient gr3"></div>
      </>}
    </section>
  );
};

export default SectionMain;
