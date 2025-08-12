import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom"; 
import emailjs from "@emailjs/browser";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // from your .env file
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setStatus("Failed to send. Try again later.");
        }
      );
  };

  return (
    <>
      <footer className="bg-blue-1000 text-white px-4 sm:px-6 md:px-12 py-16 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pt-8 pb-15 text-center sm:text-center">
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-4 text-white/70">Send us a message</p>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full p-3 rounded bg-[#003366] text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full p-3 rounded bg-[#003366] text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="3"
                required
                className="w-full p-3 rounded bg-[#003366] text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 rounded transition duration-300"
              >
                Submit
              </button>
              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <p className="text-sm mb-4 text-white/70">Navigate the site</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400 transition">
                  Contact
                </Link>
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
                <FaPhone className="text-yellow-400" /> +233 24 757 8194
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <a
                  href="mailto:opportunities.a1africa@gmail.com"
                  className="flex items-center gap-2 text-yellow-400"
                >
                  <FaEnvelope />
                  <span className="text-white">opportunities.a1africa@gmail.com</span>
                </a>
              </p>
            </div>
            <p className="text-2xl mb-2 mt-5 font-bold">Follow Us:</p>
            <div className="flex space-x-5 text-3xl">
              <a
                href="https://facebook.com/groups/561947633211040/"
                className="hover:text-blue-900 text-blue-800 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-red-500 hover:text-red-700 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.tiktok.com/@a1.opportunities?_t=ZM-8yd8UONYglS&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-500 transition"
              >
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
