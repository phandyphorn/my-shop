import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-nav">
      <div className="logo">
        <NavLink className="nav-link" to="/">
          <img src="../../assets/bizlogo.png" alt="" />
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
