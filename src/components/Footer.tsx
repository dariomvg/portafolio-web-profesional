import { useLanguage } from "@/contexts/ContextLanguages";
import "@/styles/footer.css";

const Footer = () => {
  const {content} = useLanguage();
  return (
    <footer className="footer">
      <p className="title-footer">
        © <b>Dario Martinez</b> 2025
      </p>
      <p className="title-footer">{content?.title_sec_footer}</p>
    </footer>
  );
};

export default Footer;
