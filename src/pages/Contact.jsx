import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import second from '../assets/second.jpg';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa"; 

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero 
        images={[second]}
        heading="Contact Us"
        showHighlight={false}
        showSubtitle={false}
        showDots={false}
        alignLeft={false}
      />
      
      <div className="w-full bg-white py-16 pt-25">
        <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 bg-white">
          {/* Left Column */}
          <div className="space-y-10">
            <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
            <p className="text-gray-600 max-w-md">
              For enquiries, assistance or to start your travel abroad journey,
              connect with us below.
            </p>

            <div className="flex items-start gap-4">
              <FiPhone className="text-3xl text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Call Us</h3>
                <p className="text-gray-600">+233 247578194</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMail className="text-3xl text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Email Us</h3>
                <p className="text-gray-600">opportunities.a1africa@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin className="text-3xl text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Locate Us At</h3>
                <p className="text-gray-600">Spintex, Accra</p>
                <p className="text-gray-600">Carpenter's Junction, Kasoa</p>
                <div className="flex items-center gap-6 mt-4 text-blue-600 text-3xl">
                  <a
                    href="https://www.tiktok.com/@a1.opportunities?_t=ZM-8yd8UONYglS&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  > 
                    <FaTiktok className="cursor-pointer hover:text-blue-800" />
                  </a>

                  <a 
                    href="https://facebook.com/groups/561947633211040/"
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiFacebook className="cursor-pointer hover:text-blue-800" />
                  </a>

                  <a
                    href=""
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiInstagram className="cursor-pointer hover:text-blue-800" />
                  </a>

                  <a
                   href=""
                   target='_blank'
                   rel='noopener noreferrer'
                  >
                    <FiLinkedin className="cursor-pointer hover:text-blue-800" />

                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */} 
          <div className="bg-gray-100 p-10 rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">Leave a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-white text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  className="w-full bg-white text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="block mb-2 font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Your location"
                  className="w-full bg-white text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message"
                  className="w-full bg-white text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-full transition hover:bg-gray-900"
              >
                Submit
              </button>
            </form>
          </div>

        </section>
      </div>

      {/* Map Section */}
      <section className="w-full">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5697900733408!2d-0.1528216267114074!3d5.630339894350762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b4b3b2712e3%3A0x493a864e2514c946!2sA1%20Diesel%20Ltd.%20-%20Turbo%20%26%20injectors%20Specialists!5e0!3m2!1sen!2sgh!4v1753658824554!5m2!1sen!2sgh"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
