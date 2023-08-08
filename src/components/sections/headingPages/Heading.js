import { Link } from "react-router-dom";
import foodthree from "../../../assets/foodthree.jpeg";

export default function Heading() {
  return (
    <header>
      <article className="call-to-action">
        <section className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Caxias</h2>
          <p className="subsection">
            Our establishment stands as a family-operated Mediterranean eatery,
            situated on Maldove Street in Chicago, Illinois. Our emphasis lies
            in presenting conventional recipes with a contemporary flair.
          </p>
          <br></br>
          <Link className="action-button" to="/reservations">
            Secure a reservation.
          </Link>
        </section>

        <section className="hero-image">
          <img src={foodthree} alt="Little Lemon restaurant"></img>
        </section>
      </article>
    </header>
  );
}
