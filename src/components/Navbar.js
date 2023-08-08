import { useState } from "react";
import Navigation from "./Navigation";
import hamburger from "../assets/hamburger.png";
import close from "../assets/close.png";
import logo from "../assets/logo.png";
import { devices } from "../constants";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="burger">
        <img src={logo} alt="Little Lemon logo" className="nav-image" />
        <button
          className="burger-icon"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <img src={navbarOpen ? close : hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device={devices.desktop} />
      {navbarOpen ? <Navigation device={devices.mobile} /> : ""}
    </>
  );
};

export default Navbar;
