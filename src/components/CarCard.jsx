// CarCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CarCard({ car }) {
  const navigate = useNavigate();

  const getCarImage = (model) => {
    model = model.trim(); // Remove whitespace
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

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white max-w-sm mx-auto">
      {/* Car Information */}
      <h2 className="text-xl font-bold mb-2">{car.model}</h2>
      <img
        src={getCarImage(car.model)}
        alt={car.model}
        className="w-full h-40 object-cover mb-4"
        loading="lazy"
      />

      <p className="text-gray-700">
        <span className="font-semibold">Charge: </span>₹{car.perHourCharge} /
        hour
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Location: </span>
        {car.location}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Available: </span>
        {car.isAvailable ? "Yes" : "No"}
      </p>

      {/* Rent Now Button */}
      <button
        onClick={() =>
          navigate(`/${car.type === "car" ? "cars" : "bikes"}/${car._id}`)
        }
        className={`mt-4 w-full p-2 rounded text-white ${
          car.isAvailable
            ? "bg-blue-500 hover:bg-blue-700"
            : "bg-gray-500 cursor-not-allowed"
        }`}
        disabled={!car.isAvailable}
      >
        {car.isAvailable ? "Rent Now" : "Not Available"}
      </button>
    </div>
  );
}
