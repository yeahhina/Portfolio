import "./projectCard.scss";
function ProjectCard({ project }) {
  console.log(project);
  return (
    <div className="projectCard">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <div className="technologies">
        <h3>Technologies Used: </h3>
        {project.technologies_used.map((tech) => (
          <p>{tech}</p>
        ))}
      </div>
      <div className="links">
        {project.links?.github && <button>GitHub</button>}
        {project.links?.live_website && <button>Live Website</button>}
        {project.links?.learn_more && <button>Learn More</button>}
      </div>
    </div>
  );
}
export default ProjectCard;
