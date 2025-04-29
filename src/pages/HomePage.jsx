import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Rent Your Perfect Ride
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Choose from our wide selection of bikes and cars. Book your
                vehicle today and start your adventure.
              </p>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => navigate("/cars")}
                type="button"
                className="font-bold px-5 py-3 text-base  text-center text-black bg-white rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Rent Car
              </button>

              <button
                onClick={() => navigate("/bikes")}
                type="button"
                className="px-5 py-3 text-base font-bold text-center text-black bg-white rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Rent Bike
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
