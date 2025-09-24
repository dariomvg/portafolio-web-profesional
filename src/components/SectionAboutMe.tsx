import "@/styles/section-aboutme.css";
import ContainerTitle from "./ContainerTitle";
import { ContainerViews } from "eff-anim";
import { useLanguage } from "@/contexts/ContextLanguages";

const SectionAboutMe = () => {
  const {content} = useLanguage(); 

  return (
    <section className="section-aboutme" id="sobre-mi">
      <ContainerTitle>{content?.title_sec_aboutme}</ContainerTitle>
      <section className="container-aboutme">
          <ContainerViews effect="eff-top">
        <div className="box-aboutme bx-1">
          <p className="title-box-aboutme">{content?.aboutme[0]}</p>
        </div>
          </ContainerViews>
          <div className="box-aboutme bx-2">
        <ContainerViews effect="eff-top">
            <p className="title-box-aboutme b2">{content?.aboutme[1]}</p>
        </ContainerViews>
          </div>
        <ContainerViews effect="eff-top">
          <div className="box-aboutme bx-3">
            <p className="title-box-aboutme">{content?.aboutme[2]}</p>
          </div>
        </ContainerViews>
        <div className="box-aboutme bx-4">
          <ContainerViews effect="eff-bottom">
            <p className="title-box-aboutme">{content?.aboutme[3]}</p>
        </ContainerViews>
        </div>
      </section>
    </section>
  );
};

export default SectionAboutMe;
