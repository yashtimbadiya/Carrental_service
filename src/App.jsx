import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components/pages
import HomePage from "./pages/HomePage";
import VehicleListing from "./pages/VehicleListing";
import VehicleDetail from "./pages/VehicleDetail";
import PostVehicle from "./pages/PostVehicle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Cars from "./pages/Cars";
import BecomeRentee from "./pages/BecomeRentee";
import Bikes from "./pages/Bikes";
import CarDetails from "./pages/CarDetails";
import BikeDetails from "./pages/BikeDetails";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Common Navbar across all pages */}
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/becomerentee" element={<BecomeRentee />} />

          {/* Vehicle Listing Page */}
          <Route path="/bikes" element={<Bikes />} />

          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/bikes/:id" element={<BikeDetails />} />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Profile Page (for users to manage their profile and rentals) */}
          <Route path="/profile" element={<Profile />} />

          {/* Checkout Page (for renting a vehicle) */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
