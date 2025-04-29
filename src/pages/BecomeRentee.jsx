import React, { useState } from "react";
import axiosInstance from "./axiosInstance";

export default function BecomeRentee() {
  // Form state
  const [formData, setFormData] = useState({
    ownerName: "",
    type: "car", // Default to car
    model: "",
    perHourCharge: "",
    location: "",
    phoneNumber: "",
    isAvailable: true, // Default to true
  });

  const [message, setMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post(formData.type == "car" ? "/cars" : "/bikes", formData)
      .then((response) => {
        setMessage("Car/Bike added successfully!");
        setFormData({
          ownerName: "",
          type: "car",
          model: "",
          perHourCharge: "",
          location: "",
          phoneNumber: "",
          isAvailable: true,
        });
      })
      .catch((error) => {
        console.error("There was an error adding the vehicle!", error);
        setMessage("Failed to add the car/bike.");
      });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Become a Rentee</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Owner Name */}
        <div>
          <label className="block text-sm font-medium">Owner Name</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>

        {/* Rent Car or Bike */}
        <div>
          <label className="block text-sm font-medium">Rent Car or Bike</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>

        {/* Car/Bike Model */}
        <div>
          <label className="block text-sm font-medium">Model</label>
          <select
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          >
            {/* Sample options, you can replace these with actual models */}
            {formData.type === "car" ? (
              <>
                <option value="">Select Model</option>
                <option value="Maruti Brezza"> Maruti Brezza</option>
                <option value="Hyundai Creta AT">Hyundai Creta AT</option>
                <option value="Mahindra Scorpio">Mahindra Scorpio</option>
                <option value="Mahindra Thar">Mahindra Thar</option>
                <option value="Wagenor">Wagenor</option>
                <option value="Other">Other</option>
              </>
            ) : (
              <>
                <option value="">Select Model</option>
                <option value="Passion Pro">Passion Pro</option>
                <option
                  value="
Royal Enfield Bullet 350"
                >
                  Royal Enfield Bullet 350
                </option>
                <option
                  value="
TVS Apache RTR 160"
                >
                  TVS Apache RTR 160
                </option>
                <option value="KTM 200 DUKE">KTM 200 DUKE</option>
                <option value="Yamaha YZF-R3">Yamaha YZF-R3</option>
                <option value="other">Other</option>
              </>
            )}
          </select>
        </div>

        {/* Per Hour Charge */}
        <div>
          <label className="block text-sm font-medium">Per Hour Charge</label>
          <input
            type="number"
            name="perHourCharge"
            value={formData.perHourCharge}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>

        {/* Available */}
        <div>
          <label className="block text-sm font-medium">Available</label>
          <select
            name="isAvailable"
            value={formData.isAvailable}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>

        {/* Feedback Message */}
        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </div>
  );
}
