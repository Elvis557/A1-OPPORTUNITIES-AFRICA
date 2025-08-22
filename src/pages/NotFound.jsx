import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/first.jpg"; 

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f0f4f8] dark:bg-[#0f172a] px-4 py-12 transition-all duration-300 ease-in-out">
      <div className="text-center max-w-2xl animate-fadeInUp">
        <img
          src={img}
          alt="A1 Page Not Found"
          className="mx-auto w-72 sm:w-80 h-auto mb-10 rounded-xl shadow-lg border border-[#cbd5e1] dark:border-[#334155]"
        />

        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#1e3a8a] text-transparent bg-clip-text mb-2">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-[#1f2937] dark:text-white mb-4">
          Oops! Page not found.
        </h2>

        <p className="text-lg text-[#374151] dark:text-[#d1d5db] mb-8 px-4 sm:px-6">
          You’ve reached a missing page, but your journey doesn’t end here. <br />
          Let <span className="font-semibold text-[#2563eb] dark:text-[#60a5fa]">A1 Opportunities Africa</span> point you in the right direction.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-full border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#e0f2fe] dark:hover:bg-[#1e3a8a] dark:text-[#60a5fa] transition-all duration-200"
          >
            🏠 Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-block px-6 py-3 rounded-full bg-[#2563eb] text-white hover:bg-[#1e40af] transition-all duration-200"
          >
            🌍 Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
