import "./introduction.scss";
import { scrollToClass } from "../utility/scrollToElement";
import { downloadCV } from "../utility/downloadCV";
function Introduction() {
  return (
    <div className="introduction">
      <div className="itemsContainer">
        <h1>Hello! I am Yeasmin!👋🏽</h1>
        <h2>~ Full-Stack Developer</h2>
        <p>
          I am a full-stack developer with a strong foundation in Python, Java,
          and React. I enjoy building responsive, scalable applications and
          working across both front-end and back-end technologies. From
          designing clean user interfaces to developing robust backend logic,
          I’m continuously learning and exploring new tools and frameworks to
          improve my skills and deliver better solutions.
        </p>
        <div className="socialLinks">
          <button
            onClick={() => {
              scrollToClass("contactMe");
            }}
          >
            Contact Me
          </button>
          <button
            onClick={() => {
              downloadCV();
            }}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
export default Introduction;
