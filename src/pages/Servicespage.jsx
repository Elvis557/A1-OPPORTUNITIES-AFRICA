import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import first from '../assets/first.jpg';

const column1 = [
  {
    title: "Visa Assistance",
    text: "Are you having challenges with your visa application? A1 Opportunities Africa provides you quality assistance in securing your VISA's (tour, visit, study, vacation, business, conferences)."
  },
  {
    title: "Passport Application",
    text: "Are you having challenges with your VISA application? A1 Opportunities Africa provides you quality assistance in securing your passport."
  },
  {
    title: "One-On-One Advice",
    text: "Are you having challenges with your VISA application? A1 Opportunities Africa provides you quality assistance in securing your Passport.  "
  },
  {
    title: "Interview Preparation",
    text: "We prepare you for embassy interviews with expert tips and mock sessions tailored to your destination."
  }
];

const column2 = [
  {
    title: "Birth Certificate",
    text: "We assist with obtaining birth certificates for visa applications, ensuring all documents are in order."
  },
  {
    title: "Flight Ticketing",
    text: "We help you book and manage your flight tickets, ensuring the best routes and prices for your journey."
  },
  {
    title: "Driving License",
    text: "Need a driving license for your travels? We assist with the application process to ensure you meet all requirements."
  },
  {
    title: "Travel Insurance",
    text: "Protect your journey with our travel insurance services, covering health, trip cancellations, and more."
  }
];

const Servicepages = () => {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfd7LLPyAq_HqNBu0LBYMwZoiVjOwn5VCgTdJK21I2Qpkrv1g/viewform?usp=sharing&ouid=107794680162917214993";
;

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
          {[...column1, ...column2].map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col h-full min-h-[200px]"
            >
              <h3 className="text-xl font-semibold text-center mt-4 mb-4 text-gray-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center mb-6 flex-1">
                {item.text}
              </p>
            </div>
          ))}
          
          </div>
             <div className="mt-11 flex justify-center">
                <a
                  href={formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-lg text-white px-10 py-6 rounded hover:bg-blue-700 transition duration-200"
                >
                  Apply Now
                </a>
          </div>
      </section>

      <Footer />
    </>
  );
};

export default Servicepages;
