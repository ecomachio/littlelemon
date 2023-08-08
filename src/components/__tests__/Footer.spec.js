import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter to wrap the component
import Footer from "../Footer"; 
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  it("renders the component without errors", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it("renders the Little Lemon logo", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const logoImage = screen.getByAltText("Little Lemon logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const reservationsLink = screen.getByText("Reservations");
    const orderLink = screen.getByText("Order");
    const loginLink = screen.getByText("Login");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    expect(orderLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const instagramLink = screen.getByText("Instagram");
    const facebookLink = screen.getByText("Facebook");

    expect(instagramLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();

    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/littlelemonmoon/"
    );
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/thelittlelemonshop/"
    );
  });
});
