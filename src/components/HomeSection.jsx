import React, { useState, useEffect } from "react";

const HeroSection = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Frontend{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Assignment
          </span>
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          This project includes a responsive navigation bar, a signup form with
          validation, and a user card — built using React and Tailwind CSS.{" "}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById("signup")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition shadow-lg"
          >
            Signup
          </button>
          <button
            onClick={() =>
              document
                .getElementById("usercard")
                .scrollIntoView({ behavior: "smooth" })
            }
            className={`px-8 py-4 rounded-xl font-semibold border-2 transition hover:scale-105 ${
              darkMode
                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            User Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
