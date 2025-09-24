import skills from "../../data/skills.json";
import SkillCard from "../UI/skillCard";
import "./skills.scss";
function Skills() {
  return (
    <div className="skills">
      <div className="itemsContainer">
        <h1 id="title">
          MY SKILLS
          <hr className="line" />
        </h1>
        <div className="skillsCardsContainer">
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
