import React, { useState } from "react";

const ReservationForm = ({ updateTimes, availableTimes }) => {
  const [reservationData, setReservationData] = useState({
    fName: "",
    lName: "",
    email: "",
    tel: "",
    people: 1,
    date: "",
    occasion: "",
    preferences: "",
    comments: "",
    time: "",
  });

  const handleInputChange = (field, value) => {
    setReservationData({
      ...reservationData,
      [field]: value,
    });
  };

  const finalTimeOptions = availableTimes
    .filter((time) => time.available)
    .map((times) => <option key={times.time}>{times.time}</option>);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTimes({
      type: "confirm",
      payload: {
        time: reservationData.time,
        available: false,
      },
    });

    // reset form
    setReservationData({
      fName: "",
      lName: "",
      email: "",
      tel: "",
      people: 1,
      date: "",
      occasion: "",
      preferences: "",
      comments: "",
    });

    // redirect to confirmation page
    window.location.href = "/confirmation";
  };

  return (
    <form
      className="reservation-form"
      onSubmit={(e) => handleSubmit(e)}
      data-testid="reservation-form"
    >
      <div>
        <label htmlFor="fName">First Name</label> <br />
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          value={reservationData.fName}
          onChange={(e) => handleInputChange("fName", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lName">Last Name</label> <br />
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          required
          value={reservationData.lName}
          onChange={(e) => handleInputChange("lName", e.target.value)}
        />
      </div>
      {/* // create  all the other form fields */}
      <div>
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          value={reservationData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="tel">Phone Number</label> <br />
        <input
          type="tel"
          id="tel"
          placeholder="Phone Number"
          required
          value={reservationData.tel}
          onChange={(e) => handleInputChange("tel", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="people">Number of People</label> <br />
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          required
          value={reservationData.people}
          onChange={(e) => handleInputChange("people", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br />
        <input
          type="date"
          id="date"
          required
          value={reservationData.date}
          onChange={(e) => handleInputChange("date", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br />
        <select
          id="time"
          required
          onChange={(e) => handleInputChange("time", e.target.value)}
        >
          {finalTimeOptions}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br />
        <select
          id="occasion"
          value={reservationData.occasion}
          onChange={(e) => handleInputChange("occasion", e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <br />
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button className="action-button" type="submit">
          Book Table
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
