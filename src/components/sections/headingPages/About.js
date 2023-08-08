import React from "react";
import foodone from "../../../assets/foodone.png";
import foodtwo from "../../../assets/foodtwo.jpeg";

const About = () => {
  return (
    <article className="about-us-home">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Caxias</h2>
        <p className="about-subtext">
          In 1995, Adrian and Mario, a pair of Italian siblings, launched Little
          Lemon. Even within the city's diverse culinary scene, these two
          brothers pinpointed a void in Mediterranean fare within Chicago. This
          observation fueled their determination to introduce the essence of
          their Italian hometown's cuisine to the Windy City's populace. As time
          has passed, these siblings remain at the helm of the establishment,
          diligently overseeing the operations of the Little Lemon restaurant,
          nearly three decades down the line.
        </p>
      </section>

      <section className="double-image">
        <img
          className="about-1"
          src={foodone}
          alt="Little Lemon restaurant cuisine 1"
        ></img>
        <img
          className="about-2"
          src={foodtwo}
          alt="Little Lemon restaurant cuisine 2"
        ></img>
      </section>
    </article>
  );
};

export default About;
