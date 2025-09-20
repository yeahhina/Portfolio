import "./aboutMe.scss";
function AboutMe() {
  return (
    <div className="aboutMe">
      <h1 id="title">ABOUT ME</h1>

      <div className="itemsContainer">
        <h2 className="subtitle">FULL-STACK & IU DEVELOPER</h2>
        <hr class="line" />
        <p>
          Hi, I’m Yeasmin — a full-stack developer and UI designer based in
          London. I’m passionate about building responsive, user-friendly
          websites and applications that combine clean code with innovative
          design. Skilled in HTML, CSS, JavaScript, and React, I focus on
          crafting seamless user experiences with visually appealing interfaces.{" "}
          <br />
        </p>
        <p>
          My coding journey began in sixth form, and since then I’ve worked on
          diverse projects that strengthened my expertise in both development
          and design. Beyond coding, I love exploring the latest design trends,
          reading tech blogs, and deepening my knowledge through my university
          studies. I’m always eager to learn new technologies and push my skills
          further to deliver the best possible solutions.
        </p>
        <button>Download CV</button>
      </div>
    </div>
  );
}
export default AboutMe;
