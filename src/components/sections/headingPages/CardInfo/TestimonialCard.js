import Star from "../../../../assets/star.png";

export default function TestimonialCard({ name, description }) {
  return (
    <article className="testimonial-card">
      <img src={Star} alt="delivery Icon"></img>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}
