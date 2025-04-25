import { NavLink } from "react-router";
import "./navbar.css";
import { useState } from "react";
import logo from "../../assets/images/Astralis-svg-Final.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`${showLinks ? "show-nav" : "hidden"}`}>
      <img className="logo" src={logo} alt="logo planete astralis" />
      <p className="astralis">Astralis</p>
      <ul className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/systeme-solaire"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Système Solaire
        </NavLink>
        <NavLink
          to="/Evenements"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Evénements
        </NavLink>
      </ul>
      <button type="button" className="burger" onClick={handleShowlinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
}
export default Navbar;
