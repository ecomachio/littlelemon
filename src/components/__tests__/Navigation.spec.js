import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter to wrap the component
import Navigation from "../Navigation"; 
import "@testing-library/jest-dom";

describe("Navigation Component", () => {
  it("renders the component without errors", () => {
    render(
      <BrowserRouter>
        <Navigation device="desktop" />
      </BrowserRouter>
    );
  });

  it("renders navigation links", () => {
    render(
      <BrowserRouter>
        <Navigation device="desktop" />
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

  it("renders the Little Lemon logo for desktop", () => {
    render(
      <BrowserRouter>
        <Navigation device="desktop" />
      </BrowserRouter>
    );
    const logoImage = screen.getByAltText("Little Lemon logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("does not render the Little Lemon logo for mobile", () => {
    render(
      <BrowserRouter>
        <Navigation device="mobile" />
      </BrowserRouter>
    );
    const logoImage = screen.queryByAltText("Little Lemon logo");
    expect(logoImage).toBeNull();
  });
});
