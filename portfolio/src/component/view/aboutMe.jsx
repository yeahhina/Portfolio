import "./aboutMe.scss";
import photo from "./../../assets/photo.png";
function AboutMe() {
  return (
    <div className="aboutMe">
      <h1 id="title">ABOUT ME</h1>

      <div className="itemsContainer">
        <img src={photo} />
        <div className="right">
          <h2 className="subtitle">FULL-STACK & UI DEVELOPER</h2>
          <hr class="line" />

          <p>
            Hi, I’m Yeasmin — a full-stack developer and UI designer based in
            London. I’m passionate about building responsive, user-friendly
            websites and applications that combine clean code with innovative
            design. Skilled in HTML, CSS, JavaScript, React, PHP, Python, and
            Java, I focus on creating seamless user experiences backed by robust
            functionality. <br />
          </p>
          <p>
            My coding journey began in sixth form, and since then I’ve worked on
            diverse projects that strengthened my expertise in both development
            and design. Beyond coding, I love exploring the latest design
            trends, reading tech blogs, and deepening my knowledge through my
            university studies. I’m always eager to learn new technologies and
            push my skills further to deliver the best possible solutions.
          </p>
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
