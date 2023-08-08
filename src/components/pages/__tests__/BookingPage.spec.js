import React from "react";
import { render } from "@testing-library/react";
import BookingPage from "../BookingPage"; // Adjust the path accordingly

describe("BookingPage Component", () => {
  it("renders the component without errors", () => {
    render(<BookingPage />);
  });

  it("renders the BookingTable component", () => {
    const { getByTestId } = render(<BookingPage />);
    const bookingTable = getByTestId("booking-table");
    expect(bookingTable).toBeInTheDocument();
  });

  it("renders the ReservationForm component", () => {
    const { getByTestId } = render(<BookingPage />);
    const reservationForm = getByTestId("reservation-form");
    expect(reservationForm).toBeInTheDocument();
  });

  // You can add more tests to cover interactions and behavior with BookingTable and ReservationForm components
});
