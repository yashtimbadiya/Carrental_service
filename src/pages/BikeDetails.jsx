// CarDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./axiosInstance";

export default function BikeDetails() {
  const { id } = useParams(); // Get the car ID from the URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCarImage = (model) => {
    model = model.trim();
    switch (model) {
      case "Passion Pro":
        return "https://m.media-amazon.com/images/I/71OdGRJefqL._AC_UF1000,1000_QL80_.jpg";
      case "Royal Enfield Bullet 350":
        return "https://imgd.aeplcdn.com/1280x720/n/cw/ec/1/versions/royalenfield-classic-350-heritage1725274941405.jpg";
      case "TVS Apache RTR 160":
        return "https://bd.gaadicdn.com/processedimages/tvs/apache-160/640X309/apache-1606694bde2b76eb.jpg";
      case "KTM 200 DUKE":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIY54Ojgy17OsWP8c5i4p5aWv8hTEKo6E1Q&s";
      case "Yamaha YZF-R3":
        return "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fi.ndtvimg.com%2Fi%2F2017-11%2F2018-yamaha-yzf-r3_827x510_51510649177.jpg&w=640&q=75";
      default:
        return "https://static3.toyotabharat.com/images/homepage/services/d27-whats-awesome-547x306.jpg";
    }
  };

  useEffect(() => {
    axiosInstance
      .get(`/bikes/${id}`) // Fetch car details using the ID
      .then((response) => {
        setCar(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching car details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading car details...</p>;
  }

  if (!car) {
    return <p>Bike not found</p>;
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 max-w-4xl mx-auto p-4">
      <div className="w-11/12 md:w-9/12 ">
        <img
          src={getCarImage(car.model)}
          alt={car.model}
          className=" object-cover mb-4"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">{car.model}</h2>

        <p>
          <strong className="text-gray-500">Owner:</strong> {car.ownerName}
        </p>
        <p>
          <strong className="text-gray-500">Location:</strong> {car.location}
        </p>

        <p className="mt-5">
          <strong>Charge: </strong> ₹{car.perHourCharge} / hour
        </p>

        {/* <p>
          <strong>Phone:</strong> {car.phoneNumber}
        </p> */}
        <p>
          <strong>Available:</strong> {car.isAvailable ? "Yes" : "No"}
        </p>

        <button
          onClick={() =>
            window.open(
              `https://wa.me/${car.phoneNumber}?text=${encodeURIComponent(
                `Hello, I am interested in renting your ${car.model} located in ${car.location}. Can you provide more details?`
              )}`,
              "_blank"
            )
          }
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mt-8"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
