import projects from "../../data/projects.json";
import ProjectCard from "../UI/projectCard";
import "./projects.scss";

function Projects() {
  return (
    <div className="projects">
      <div className="itemsContainer">
        <h1 id="title">PROJECTS</h1>
        <div className="projectsCardsContainer">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
