import "./header.scss";
import { scrollToClass } from "../utility/scrollToElement";
function Header() {
  return (
    <div className="header">
      <h1 className="title">Yeasmin Mumtahina.</h1>
      <div className="navigationBar">
        <a
          onClick={() => {
            scrollToClass("home");
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            scrollToClass("skills");
          }}
        >
          Skills
        </a>
        <a
          onClick={() => {
            scrollToClass("projects");
          }}
        >
          Projects
        </a>
        <a
          onClick={() => {
            scrollToClass("aboutMe");
          }}
        >
          About
        </a>
        <a
          onClick={() => {
            scrollToClass("contactMe");
          }}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
export default Header;
