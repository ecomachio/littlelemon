import React from "react";
import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm";
import { useReducer } from "react";
import { fetchDistinctTimeSlots } from "../../bookingsAPI";
import { arrayOfHours } from "../../constants";

const BookingSlot = ({ time, available }) => {
  console.log(time, available);
  return (
    <div
      className={`booking-slot ${available ? "available" : "not-available"}`}
    >
      <span>{time}</span>
      <span>{available ? "Available" : "Not Available"}</span>
    </div>
  );
};

const BookingTable = ({ availableTimes }) => {
  const timeSlots = availableTimes.map((time, index) => (
    <BookingSlot key={index} time={time.time} available={time.available} />
  ));

  return (
    <div className="booking-container">
      <div className="booking-table">
        <div className="booking-slot header">
          <span>Time</span>
          <span>Availability</span>
        </div>
        {timeSlots}
      </div>
    </div>
  );
};

const BookingPage = () => {
  const updateTimes = (state, action) => {
    console.log("ter  ", state, action);
    switch (action.type) {
      case "update":
        return action.payload;
      case "confirm":
        return state.map((time) =>
          time.time === action.payload.time ? action.payload : time
        );

      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    arrayOfHours.map((time) => ({ time, available: true }))
  );

  return (
    <>
      <Heading />
      <BookingTable availableTimes={availableTimes} />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
};

export default BookingPage;
