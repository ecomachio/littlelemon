import React from "react";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./CardInfo/TestimonialCard";

const TestimonialCarousel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      Interval={5000}
      showStatus={false}
    >
      <TestimonialCard
        name="Sophia Martinez"
        description="This is the most exquisite Mediterranean cuisine I've ever savored!"
      />
      <TestimonialCard
        name="Ethan Thompson"
        description="My Yorkshire Terrier, Luna, absolutely adored the cozy vibes and scrumptious food here."
      />
      <TestimonialCard
        name="Isabella Kim"
        description="I've enjoyed exceptional Mediterranean dishes before, but none surpasses Little Lemon's flavor and quality."
      />
      <TestimonialCard
        name="Aiden Patel"
        description="Exceptional food, welcoming staff, and a comforting atmosphere. An ideal place for family outings."
      />
      <TestimonialCard
        name="Olivia Clark"
        description="The food here rejuvenated me after a late shift at the local warehouse."
      />
      <TestimonialCard
        name="James Johnson"
        description="After a cross-country flight, the flavors at Little Lemon were an inviting delight."
      />
      <TestimonialCard
        name="Emma Davis"
        description="The culinary offerings here were fantastic!! A must-visit for all Chicago residents."
      />
      <TestimonialCard
        name="Liam Brown"
        description="Following a night of intensive studying, this eatery provided the perfect dinner. I'll definitely be back!"
      />
    </Carousel>
  );
};

export default TestimonialCarousel;
