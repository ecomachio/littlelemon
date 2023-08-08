import { Link } from "react-router-dom";

export default function SpecialCard({ name, price, description, image }) {
  return (
    <article className="menu-card">
      <img src={image} alt="Special Menu"></img>
      <section className="menu-card-content">
        <h1>{name}</h1>
        <h3>{price}</h3>
        <p>{description}</p>
        <Link className="special-button" to="/order">
          Order to go
        </Link>
      </section>
    </article>
  );
}
