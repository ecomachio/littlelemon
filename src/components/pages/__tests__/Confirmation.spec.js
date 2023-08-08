import React from "react";
import { render, screen } from "@testing-library/react";
import Confirmation from "../Confirmation"; // Adjust the path accordingly
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Confirmation Component", () => {
  it("renders the component without errors", () => {
    render(
      <BrowserRouter>
        <Confirmation />
      </BrowserRouter>
    );
  });

  it("displays the confirmation text", () => {
    render(
      <BrowserRouter>
        <Confirmation />
      </BrowserRouter>
    );
    const confirmationText = screen.getByText(
      "Your Reservation Has Been Confirmed!"
    );
    expect(confirmationText).toBeInTheDocument();
  });

  it("renders the browse menu link", () => {
    render(
      <BrowserRouter>
        <Confirmation />
      </BrowserRouter>
    );
    const browseMenuLink = screen.getByText("Browse Menu");
    expect(browseMenuLink).toBeInTheDocument();
  });

  it("renders the Order Online link", () => {
    render(
      <BrowserRouter>
        <Confirmation />
      </BrowserRouter>
    );
    const orderOnlineLink = screen.getByText("Order Online");
    expect(orderOnlineLink).toBeInTheDocument();
    expect(orderOnlineLink).toHaveAttribute("href", "/order");
  });

  it("renders the Home Page link", () => {
    render(
      <BrowserRouter>
        <Confirmation />
      </BrowserRouter>
    );
    const homePageLink = screen.getByText("Home Page");
    expect(homePageLink).toBeInTheDocument();
    expect(homePageLink).toHaveAttribute("href", "/");
  });
});
