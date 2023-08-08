import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Navbar Component", () => {
  it("renders the component without errors", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  it("toggles the navigation menu when the button is clicked", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const burgerButton = screen.getByRole("button", { name: "Navigation Bar" });
    expect(screen.queryByText("Home")).toBeNull(); // Navigation should not be visible initially

    fireEvent.click(burgerButton);
    expect(screen.getByText("Home")).toBeInTheDocument(); // Navigation should be visible after click

    fireEvent.click(burgerButton);
    expect(screen.queryByText("Home")).toBeNull(); // Navigation should be hidden again after second click
  });
});
