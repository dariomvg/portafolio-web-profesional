import iconGithub from "@/assets/icons/github.svg";
import iconLinkedin from "@/assets/icons/linkedin.svg";
import iconPdf from "@/assets/icons/pdf.png";
import iconGmail from "@/assets/icons/gmail.svg";
import "@/styles/section-contacts.css";
import ContainerTitle from "./ContainerTitle";

const SectionContacts = () => {
  return (
    <section className="section-contacts" id="contactos">
      <ContainerTitle>Contactos</ContainerTitle>
      <div className="container-grid">
        <div className="box-grid">
          <h2 className="title-box-grid">Blog</h2>
          <a
            href="https://blog-bytes-kohl.vercel.app/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="link-box-grid">
            Visitar
          </a>
        </div>

        <div className="container-boxes-grid">
          <a
            href="https://github.com/dariomvg"
            rel="noopener noreferrer"
            target="_blank"
            className="link-box">
            <img
              src={iconGithub.src}
              width="40"
              height="40"
              alt="github icon"
              className="icon-grid"
              loading="lazy"
            />
            GitHub
          </a>
          <a href="mailto:contact.dario.info@gmail.com" className="link-box">
            <img
              src={iconGmail.src}
              width="40"
              height="40"
              alt="gamil icon"
              className="icon-grid"
              loading="lazy"
            />
            Correo
          </a>
          <a
            href="https://www.linkedin.com/in/dariomvg"
            rel="noopener noreferrer"
            target="_blank"
            className="link-box">
            <img
              src={iconLinkedin.src}
              width="40"
              height="40"
              alt="linkedin icon"
              className="icon-grid"
              loading="lazy"
            />
            Linkedin
          </a>
          <a
            href="/cv-dario-martinez.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="link-box">
            <img
              src={iconPdf.src}
              width="40"
              height="40"
              alt="pdf icon"
              className="icon-grid"
              loading="lazy"
            />
            Curriculum
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
