// CarDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./axiosInstance";

export default function CarDetails() {
  const { id } = useParams(); // Get the car ID from the URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCarImage = (model) => {
    switch (model) {
      case "Maruti Brezza":
        return "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/107543/brezza-exterior-left-front-three-quarter.jpeg?isig=0&q=80";
      case "Hyundai Creta AT":
        return "https://imgd.aeplcdn.com/664x374/cw/specialVersions/6487.jpg?v=20190805025920&q=80";
      case "Mahindra Scorpio":
        return "https://spn-sta.spinny.com/blog/20220627145950/Mahindra-Scorpio-N-header.jpg?compress=true&quality=80&w=600&dpr=2.6";
      case "Mahindra Thar":
        return "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200916040623_2020-Mahindra-Thar-front-static.jpg&w=700&c=1";
      case "Wagenor":
        return "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Wagon-R-tour/9442/1675922710720/front-left-side-47.jpg?imwidth=420&impolicy=resize";
      default:
        return "https://static3.toyotabharat.com/images/homepage/services/d27-whats-awesome-547x306.jpg";
    }
  };

  useEffect(() => {
    axiosInstance
      .get(`/cars/${id}`) // Fetch car details using the ID
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
    return <p>Car not found</p>;
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
