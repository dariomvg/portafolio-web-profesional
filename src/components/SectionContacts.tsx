import iconGithub from "@/assets/icons/github.svg";
import iconLinkedin from "@/assets/icons/linkedin.svg";
import iconPdf from "@/assets/icons/pdf.png";
import iconGmail from "@/assets/icons/gmail.svg";
import "@/styles/section-contacts.css";
import ContainerTitle from "./ContainerTitle";
import { ContainerViews } from "eff-anim";
import { useLanguage } from "@/contexts/ContextLanguages";

const SectionContacts = () => {
  const {content} = useLanguage(); 
  return (
    <section className="section-contacts" id="contactos">
      <ContainerTitle>{content?.title_sec_contacts}</ContainerTitle>
      <div className="container-grid">
        <ContainerViews effect="eff-flip">
          <div className="box-grid">
            <h4 className="title-box-grid">Blog</h4>
            <a
              href="https://blog-bytes-kohl.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="link-box-grid">
              {content?.link_box_contacts}
            </a>
          </div>
        </ContainerViews>

        <div className="container-boxes-grid">
          <ContainerViews effect="eff-flip">
            <a
              href="https://github.com/dariomvg"
              rel="noopener noreferrer"
              target="_blank"
              className="link-box">
              <img
                src={iconGithub.src}
                width="30"
                height="30"
                alt="github icon"
                className="icon-grid"
                loading="lazy"
              />
              {content?.title_github}
            </a>
          </ContainerViews>
          <ContainerViews effect="eff-flip">
            <a href="mailto:contact.dario.info@gmail.com" className="link-box">
              <img
                src={iconGmail.src}
                width="30"
                height="30"
                alt="gamil icon"
                className="icon-grid"
                loading="lazy"
              />
              {content?.title_gmail}
            </a>
          </ContainerViews>

          <ContainerViews effect="eff-flip">
            <a
              href="https://www.linkedin.com/in/dariomvg"
              rel="noopener noreferrer"
              target="_blank"
              className="link-box">
              <img
                src={iconLinkedin.src}
                width="30"
                height="30"
                alt="linkedin icon"
                className="icon-grid"
                loading="lazy"
              />
              {content?.title_linkedin}
            </a>
          </ContainerViews>

          <ContainerViews effect="eff-flip">
            <a
              href="/cv-dario-martinez.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="link-box">
              <img
                src={iconPdf.src}
                width="30"
                height="30"
                alt="pdf icon"
                className="icon-grid"
                loading="lazy"
              />
              {content?.title_cv}
            </a>
          </ContainerViews>
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
