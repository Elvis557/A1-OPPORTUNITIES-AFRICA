import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-1000 text-white px-4 sm:px-6  md:px-12 py-16 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pt-8 pb-15 text-center sm:text-center">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 ">Contact Us</h3>
            <p className="text-sm mb-4 text-white/70">Send us a message</p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded bg-[#003366] text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded bg-[#003366] text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="w-full p-3 rounded bg-[#003366] text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white  text-black font-semibold py-2 rounded transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <p className="text-sm mb-4 text-white/70">Navigate the site</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Logo + Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src={logo}
              alt="A1 Opportunities Logo"
              className="h-24 w-24 mb-4 rounded-full object-cover border-4 border-yellow-400"
            />
            <div className="text-sm space-y-2 mb-6">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaPhone className="text-yellow-400" /> +233 55 123 4567
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaEnvelope className="text-yellow-400" /> info@yourcompany.com
              </p>
            </div>
            <p className="text-2xl mb-2 mt-5 font-bold">Follow Us:</p>
            <div className="flex space-x-5 text-3xl">
              <a href="#" className="hover:text-blue-900 text-blue-800 transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-red-500 hover:text-red-700 color- transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-gray-600 p-4 text-xs text-white/60 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div>© 2025 A1 Opportunities Africa Limited. All Rights Reserved.</div>
        <div>
          Designed with ❤️ by{" "}
          <span className="font-semibold text-yellow-400">Innovative Minds</span>.
        </div>
      </div>
    </>
  );
};

export default Footer;
