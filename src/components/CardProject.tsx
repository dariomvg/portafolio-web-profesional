import { ProjectsTypes } from "@/types/types";
import "../styles/card-project.css";
import { url_videos } from "@/utils/options";
import Image from "next/image";

const CardProject = ({ project, titleGithub, titleVisit }: { project: ProjectsTypes, titleGithub: string, titleVisit: string }) => {
  const { description, icons, image, video, link, repository, name } = project;

  return (
    <li className="card-project">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={300}
          height={150}
          sizes="(max-width: 768px) 100%"
          loading="lazy"
          className="image-project"
        />
      ) : (
        <video
          src={`${url_videos}/${video?.id}/${video?.name}`}
          width={300}
          height={150}
          autoPlay
          loop
          muted
          className="video-project">
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
              alt={`icon tech ${icon.name}`}
              title={icon.name}
              loading="lazy"
              width="26"
              height="26"
              className="icon-project"
            />
          ))}
        </div>
      </div>
      <div className="container-links-project">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-project">
            {titleVisit}
          </a>
        )}
        <a
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          className="link-project with-icon">
          {titleGithub}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="var(--color-white)"
            className="size-6"
            width={20}
            height={20}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </li>
  );
};

export default CardProject;
