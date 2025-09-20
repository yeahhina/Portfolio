import Introduction from "../view/introduction";
import Skills from "../view/skills";
import Projects from "../view/projects";
import AboutMe from "../view/aboutMe";
import ContactMe from "../view/contactMe";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <Introduction />
      <Skills />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}
export default Home;
