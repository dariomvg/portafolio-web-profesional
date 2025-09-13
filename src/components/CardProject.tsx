import { ProjectsTypes } from "@/types/types";
import "../styles/card-project.css";
import { url_videos } from "@/utils/options";

const CardProject = ({ project }: { project: ProjectsTypes }) => {
  const { description, icons, id, image, video, link, repository, name } =
    project;

  return (
    <li className="card-project">
      {image ? (
        <img src={image} alt={name} width={500} height={250} loading="lazy" className="image-project" />
      ) : (
        <video
          src={`${url_videos}/${video?.id}/${video?.name}`}
          width={500}
          height={250}
          autoPlay
          loop
          muted
          className="video-project"
          >
          Your browser does not support the video tag.
        </video>
      )}

      <div className="container-info-project">
        <h4 className="name-card-project">{name}</h4>
        <p className="description-card-project">{description}</p>
        <div className="container-icons-project">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.icon.src}
              alt={icon.name}
              title={icon.name}
              loading="lazy"
              width="24"
              height="24"
              className="icon-project"
            />
          ))}
        </div>
      </div>
      <div className="container-links-project">
        <a href={link} target="_blank" rel="noopener noreferrer" className="link-project">
          Visitar
        </a>
        <a href={repository} target="_blank" rel="noopener noreferrer" className="link-project">
          Github
        </a>
      </div>
    </li>
  );
};

export default CardProject;
