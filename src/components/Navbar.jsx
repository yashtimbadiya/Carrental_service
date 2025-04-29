import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-5 mx-auto flex max-w-screen-lg items-center space-x-6 md:justify-between ">
        <div
          onClick={() => navigate("/")}
          className="text-black text-xl fontsix cursor-pointer font-extrabold"
        >
          AutoRentals
        </div>
        <div className="flex space-x-1 md:space-x-12">
          <div
            onClick={() => navigate("/")}
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
          >
            <i class="fi fi-sr-house-blank md:hidden"></i>
            <span className="hidden md:block">Home</span>
          </div>

          <div
            onClick={() => navigate("/cars")}
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
          >
            <i class="fi fi-bs-car-alt md:hidden"></i>
            <span className="hidden md:block">Cars</span>
          </div>

          <div
            onClick={() => navigate("/bikes")}
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
          >
            <i className="fi fi-sr-biking-mountain md:hidden"></i>
            <span className="hidden md:block">Bikes</span>
          </div>

          <div
            onClick={() => navigate("/becomerentee")}
            className="inline-flex h-9 items-center justify-center rounded-md bg-blue-200 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
          >
            <i class="fi fi-ss-employee-man-alt md:hidden"></i>
            <span className="hidden md:block">Become Rentee</span>
          </div>
        </div>
      </div>
      <hr className="shadow-lg	" />
    </>
  );
}
