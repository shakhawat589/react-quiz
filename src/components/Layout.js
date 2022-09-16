import layoutStyles from "../styles/Layout.module.css";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className={layoutStyles.main}>
        <div className={layoutStyles.container}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
