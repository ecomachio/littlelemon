import Carousel from "./TestimonialCarousel";
import TestimonialCard from "./CardInfo/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-cards">
        <TestimonialCard
          name="Sophia Martinez"
          description="Absolutely the finest Mediterranean cuisine I've ever tasted!"
        />
        <TestimonialCard
          name="Ethan Thompson"
          description="My Pomeranian, Bella, absolutely adored the cozy atmosphere and mouthwatering food here."
        />
        <TestimonialCard
          name="Isabella Kim"
          description="I've savored exceptional Mediterranean dishes before, but none surpasses Little Lemon in taste and texture."
        />
        <TestimonialCard
          name="Aiden Patel"
          description="Exceptional food, friendly staff, and a warm ambiance. An ideal spot for family outings."
        />
        <TestimonialCard
          name="Olivia Clark"
          description="The food here re-energized me after a late night shift at the nearby warehouse."
        />
        <TestimonialCard
          name="James Johnson"
          description="After a lengthy flight from the East Coast, the flavors at Little Lemon were an invigorating delight."
        />
        <TestimonialCard
          name="Emma Davis"
          description="The culinary experience here was outstanding!! Everyone should try this place at least once if they live in Chicago."
        />
        <TestimonialCard
          name="Liam Brown"
          description="This restaurant provided a perfect dinner for me after a night of intense studying. I would definitely order from here again!"
        />
      </section>

      <section className="testimonials-carousel">
        <Carousel />
      </section>
    </section>
  );
};

export default Testimonials;
