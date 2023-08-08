import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import OrderPage from "./pages/Order";
import Confirmation from "./pages/Confirmation";
import LoginPage from "./pages/Login";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/reservations" element={<Reservation />} />
    <Route path="/order" element={<OrderPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/confirmation" element={<Confirmation />} />
  </Routes>
);

export default Routing;
