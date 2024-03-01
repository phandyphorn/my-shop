import "../App.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/bizlogo.png";

const Header = () => {
  return (
    <nav className="header-nav">
      <div>
        <NavLink className="nav-link" to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
      </div>
      <div className="main-nav">
        <NavLink className="nav-link each-nav" to="/vegetable">
          Vegetable
        </NavLink>
        <NavLink className="nav-link each-nav" to="/fruit">
          Fruit
        </NavLink>
      </div>
      <div className="contact">
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
