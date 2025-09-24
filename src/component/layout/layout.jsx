import Header from "../view/header";
import "./layout.scss";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
