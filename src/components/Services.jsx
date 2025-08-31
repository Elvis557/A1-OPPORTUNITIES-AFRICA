import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "../assets/slide2.webp";
import img2 from "../assets/slide3.webp";
import img3 from "../assets/SLIDE4.avif";

// Services List
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

// Clients List
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

// Blogs/News Data
const blogPosts = [
  {
  title: (
    <Link to="/blog1">
      Top 5 Visa Tips You Should Know
    </Link>
  ),
  excerpt:
    "Get essential tips to make your visa application process stress-free and successful.",
  image: img2,
  date: "August 1, 2025",
},
  {
    title: (
    <Link to="/blog2">
      "How to Renew Your Passport Fast"
      </Link>
  ),
    excerpt:
      "Avoid delays! Here's a guide on renewing your passport without the long queues.",
    image: img3,
    date: "July 28, 2025",
  },
  {
    title: "Why One-on-One Travel Advice Matters",
    excerpt:
      "Discover how personalized travel consultations can make your journey smoother.",
    image: img,
    date: "July 25, 2025",
  },
];

// Star Rating Renderer
const Stars = ({ rating }) => {
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ) : (
          <span key={i} className="text-gray-300 text-xl">☆</span>
        )
      )}
    </div>
  );
};

// Main Component
const Services = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Services Section */}
      <section className="bg-white py-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800">
            Our Services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-yellow-400 text-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-base">{service.description}</p>
              </div>
            ))}
          </div>
          <Link
            to="/services"
            className="inline-block mt-10 px-6 py-2.5 bg-black text-white font-semibold rounded-md transition duration-300"
          >
            Discover More
          </Link>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-yellow-50 py-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-gray-800">
            Our Happy Clients
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition duration-300"
              >
                <img
                  src={client.photo}
                  alt={client.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4"
                />
                <Stars rating={client.rating} />
                <p className="text-gray-700 italic mb-3 text-sm sm:text-base px-2">
                  "{client.feedback}"
                </p>
                <h4 className="text-md font-semibold text-gray-900">
                  {client.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="bg-white py-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
            Latest News & Blogs
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="bg-yellow-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-44 sm:h-52 w-full object-cover"
                  />
                  <div className="p-5 text-left">
                    <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default Services;

