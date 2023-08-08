import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer>
    <menu>
      <li className="img-footer">
        <img src={logo} alt="Little Lemon logo"></img>
      </li>
      <li className="contact">
        <h1 className="footer-header">Navigation</h1>
        <ul className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/order">Order</Link>
          <Link to="/login">Login</Link>
        </ul>
      </li>

      <li>
        <h1 className="footer-header">Connect</h1>
        <ul className="footer-links">
          <a
            href="https://www.instagram.com/littlelemonmoon/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/thelittlelemonshop/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </ul>
      </li>
    </menu>
  </footer>
);

export default Footer;
