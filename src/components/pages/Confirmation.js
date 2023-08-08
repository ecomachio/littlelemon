import HeroImage from "../../assets/food/food5.jpeg";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.webp";

export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Your Reservation Has Been Confirmed!</h1>
        <h4>We have sent a confirmation message to your email.</h4>
        <h4>Thank you for choosing to dine with us!</h4>
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          href={menu}
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
