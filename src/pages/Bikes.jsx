// bikes.jsx
import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import CarCard from "../components/CarCard";

export default function bikes() {
  const [bikes, setbikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/bikes")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setbikes(response.data);
        } else if (response.data.data && Array.isArray(response.data.data)) {
          setbikes(response.data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching bikes data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading bikes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {bikes.length > 0 ? (
        bikes.map((bike) => <CarCard key={bike._id} car={bike} />)
      ) : (
        <p>No bikes available</p>
      )}
    </div>
  );
}
