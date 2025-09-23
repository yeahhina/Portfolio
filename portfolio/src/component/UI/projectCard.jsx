import "./projectCard.scss";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const learnMoreLink = project.links?.find((l) => l.name === "Learn More");

  return (
    <div className="projectCard">
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <div className="technologies">
        <h3>Technologies Used: </h3>
        {project.technologies_used.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </div>

      <div className="links">
        {project.links
          ?.filter(
            (linkObj) =>
              linkObj.name === "GitHub" || linkObj.name === "Live Website"
          )
          .map((linkObj, index) => (
            <a
              key={index}
              href={linkObj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>{linkObj.name}</button>
            </a>
          ))}

        {learnMoreLink && (
          <button
            onClick={() =>
              navigate("/learnMore", { state: { mdFile: learnMoreLink.link } })
            }
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
