import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Visa Assistance",
    description:
      "Expert help with your visa applications to ensure a smooth travel process.",
  },
  {
    title: "Passport Assistance",
    description:
      "Guidance and support in acquiring or renewing your passport quickly.",
  },
  {
    title: "One-on-one Travel Advice",
    description:
      "Personalized travel consultations tailored to your destination and needs.",
  },
];

const clients = [
  {
    name: "Sarah Johnson",
    feedback:
      "Thanks to A1 Opportunity, my visa process was smooth and hassle-free. Highly recommend!",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Michael Lee",
    feedback:
      "Excellent passport assistance service — quick and professional.",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4,
  },
  {
    name: "Emma Davis",
    feedback:
      "The one-on-one travel advice helped me plan a perfect trip. Super friendly team!",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

// Helper to render stars based on rating
const Stars = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(totalStars)].map((_, i) =>
        i < rating ? (
          <span key={i} className="text-yellow-400 text-xl">
            ★
          </span>
        ) : (
          <span key={i} className="text-gray-300 text-xl">
            ☆
          </span>
        )
      )}
    </div>
  );
};

const Services = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Services Section */}
      <section className="bg-white py-20 px-6 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-800">
            Our Services
          </h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-base">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Discover More button */}
          < Link 
            to="/services"
            className="inline-block mt-12 px-8 py-3 bg-black text-white font-semibold rounded-lg transition duration-300"
          >
            Discover More
          </Link>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="w-full bg-yellow-50 py-20 px-6 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-gray-800">
            Our Happy Clients
          </h2>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition duration-300"
              >
                <img
                  src={client.photo}
                  alt={client.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                {/* Stars */}
                <Stars rating={client.rating} />
                <p className="text-gray-700 italic mb-4">"{client.feedback}"</p>
                <h4 className="text-lg font-semibold text-gray-900">
                  {client.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
