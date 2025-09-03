import Header from "../view/header";
import Home from "./home";
import "./layout.scss";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default Layout;
