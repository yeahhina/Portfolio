import "./skillCard.scss";
function SkillCard({ skill }) {
  return (
    <div className="skillCard">
      <h2>{skill.title}</h2>
      <p>{skill.description}</p>
    </div>
  );
}
export default SkillCard;
