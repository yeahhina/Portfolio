import "./projectCard.scss";

function ProjectCard({ project }) {
  console.log(project);
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
        {project.links?.map((linkObj, index) => (
          <button>{linkObj.name}</button>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
