import "./header.scss";
import { scrollToClass } from "../utility/scrollToElement";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1 className="title">Yeasmin Mumtahina.</h1>
      <div className="navigationBar">
        <a
          onClick={() => {
            navigate("/");
            scrollToClass("home");
          }}
        >
          Intro
        </a>
        <a
          onClick={() => {
            navigate("/");
            scrollToClass("skills");
          }}
        >
          Skills
        </a>
        <a
          onClick={() => {
            navigate("/");
            scrollToClass("projects");
          }}
        >
          Projects
        </a>
        <a
          onClick={() => {
            navigate("/");
            scrollToClass("aboutMe");
          }}
        >
          About
        </a>
        <a
          onClick={() => {
            navigate("/");
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
