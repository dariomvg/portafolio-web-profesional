import "@/styles/section-aboutme.css";
import { aboutme } from "@/utils/aboutme";
import ContainerTitle from "./ContainerTitle";

const SectionAboutMe = () => {
  return (
    <section className="section-aboutme" id="sobre-mi">
      <ContainerTitle>Sobre Mí</ContainerTitle>
      <section className="container-aboutme">
        <div className="box-aboutme bx-1">
          <p className="title-box-aboutme">{aboutme[0]}</p>
        </div>
        <div className="box-aboutme bx-2">
          <p className="title-box-aboutme">{aboutme[1]}</p>
        </div>
        <div className="box-aboutme bx-3">
          <p className="title-box-aboutme">{aboutme[2]}</p>
        </div>
        <div className="box-aboutme bx-4">
          <p className="title-box-aboutme">{aboutme[3]}</p>
        </div>
      </section>
    </section>
  );
};

export default SectionAboutMe;
