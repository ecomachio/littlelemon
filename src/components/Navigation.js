import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavLink = ({ to, title }) => {
  return (
    <Link className="hover-effect" to={to}>
      <h1>{title}</h1>
    </Link>
  );
};

const Navigation = ({ device }) => {
  return (
    <menu className={`navbar ${device}`}>
      {device !== "mobile" && (
        <Link to="/">
          <img src={logo} alt="Little Lemon logo" className="nav-image"></img>
        </Link>
      )}
      <NavLink to="/" title="Home" />
      <NavLink to="/about" title="About" />
      <NavLink to="/reservations" title="Reservations" />
      <NavLink to="/order" title="Order" />
      <NavLink to="/login" title="Login" />
    </menu>
  );
};

export default Navigation;
