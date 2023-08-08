import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";

describe("About Component", () => {
  it("renders the component without errors", () => {
    render(<About />);
  });

  it("renders paragraphs with appropriate content", () => {
    const { getByText } = render(<About />);

    const paragraphs = [
      "Welcome to Little Lemon, your ultimate destination for exquisite Mediterranean cuisine in Chicago!",
      "At Little Lemon, we are passionate about delivering the authentic flavors of the Mediterranean region to your plate. Our journey began in 1995 when two Italian brothers, Adrian and Mario, recognized the need for genuine Mediterranean cuisine in the heart of Chicago.",
      "With a dedication to quality ingredients and traditional recipes, we have become a culinary haven for those seeking a memorable dining experience. Our dishes are carefully crafted to offer a modern twist on beloved classics, creating a harmonious blend of tradition and innovation.",
      "Whether you're a longtime lover of Mediterranean cuisine or a newcomer eager to explore new tastes, our diverse menu caters to all palates. From our refreshing salads to our savory mains, each dish reflects our commitment to culinary excellence.",
      "Thank you for joining us on this gastronomic journey. We invite you to savor the essence of the Mediterranean with every bite at Little Lemon.",
    ];

    paragraphs.forEach((content) => {
      const paragraphElement = getByText(content);
      expect(paragraphElement).toBeInTheDocument();
    });
  });
});
