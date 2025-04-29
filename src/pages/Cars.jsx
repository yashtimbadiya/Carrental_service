// Cars.jsx
import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import CarCard from "../components/CarCard";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/cars")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCars(response.data);
        } else if (response.data.data && Array.isArray(response.data.data)) {
          setCars(response.data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching cars data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading cars...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cars.length > 0 ? (
        cars.map((car) => <CarCard key={car._id} car={car} />)
      ) : (
        <p>No cars available</p>
      )}
    </div>
  );
}
