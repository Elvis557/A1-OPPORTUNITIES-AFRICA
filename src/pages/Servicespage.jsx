import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import first from '../assets/first.jpg';

const column1 = [
  {
    title: "Visa Assistance",
    text: "Are you having challenges with your visa application? A1 Opportunities Africa provides you quality assistance in securing your visit (tour, visit, study, vacation, business, conferences)."
  },
  {
    title: "Passport Application",
    text: "We guide you through the entire passport application or renewal process with ease and clarity."
  },
  {
    title: "University Admission Help",
    text: "Get help selecting schools, preparing documents, and submitting university applications globally."
  },
  {
    title: "Interview Preparation",
    text: "We prepare you for embassy interviews with expert tips and mock sessions tailored to your destination."
  }
];

const column2 = [
  {
    title: "Travel Planning",
    text: "From flights to accommodation, we help you plan and organize your travel itinerary smoothly."
  },
  {
    title: "Tour Packages",
    text: "Enjoy curated tour packages to breathtaking destinations across the globe with professional guidance."
  },
  {
    title: "Study Abroad Guidance",
    text: "We help students discover, apply, and transition to top universities around the world."
  },
  {
    title: "Business Travel",
    text: "Organizing conferences or business trips abroad? Let us handle the logistics for a hassle-free journey."
  }
];

const Servicepages = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <Hero 
        images={[first]}
        heading="Our Services"
        showHighlight={false}
        showSubtitle={false}
        showDots={false}
        alignLeft={true}
      />

      {/* Services Section */}
      <section className="bg-yellow-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1 */}
          <div className="space-y-6">
            {column1.map((item, index) => (
              <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-700">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center mb-4">{item.text}</p>
                <div className="flex justify-center">
                  <button className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-200">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {column2.map((item, index) => (
              <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-700">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center mb-4">{item.text}</p>
                <div className="flex justify-center">
                  <button className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-200">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Servicepages;
