import logo from "../assets/images/logo-bg.png";
import navStyle from "../styles/Nav.module.css";
import Account from "./Account";

function Nav() {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <a href="/" className={navStyle.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>

      <Account />
    </nav>
  );
}

export default Nav;
