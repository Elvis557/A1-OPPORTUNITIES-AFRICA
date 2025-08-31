import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import third from '../assets/third.jpg';

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <Hero
        images={[third]}
        heading="About Us"
        showHighlight={false}
        showSubtitle={false}
        showDots={false}
        alignLeft={true} 
        alignRight={false}
      />

      {/* Section 1: History, Mission, Vision */}
      <section className="bg-yellow-50 py-12 px-4 sm:px-6 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto text-gray-800 space-y-16">

          {/* Row 1: History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/2179606/pexels-photo-2179606.jpeg?auto=format&fit"
                alt="A brief history of the company"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">A Brief History</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Our story began with a vision to create lasting global impact through travel, education, and innovation. Since then, we’ve helped thousands achieve their dreams.
              </p>
            </div>
          </div>

          {/* Row 2: What We Offer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">What We Offer</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We provide expert visa assistance, educational consultancy, and personalized travel guidance tailored to your unique journey.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg?auto=format&fit"
                alt="What we offer"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 3: Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit"
                alt="Our Mission"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                To empower individuals through access to international opportunities that enhance lives and strengthen communities globally.
              </p>
            </div>
          </div>

          {/* Row 4: Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                To be the most trusted and innovative travel consultancy, inspiring people to explore, learn, and grow without borders.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit"
                alt="Our Vision"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-900 py-14 sm:py-16 px-4 sm:px-8 md:px-12 w-full">
        <div className="max-w-7xl mx-auto text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 md:px-12">
            {/* CEO Profile */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:ml-6">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQGW2F7wWwnYzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708212874808?e=1759363200&v=beta&t=8XB8B5aAj8UuY4UGehobjkS6-TUv7VGAtfR_1LjJXM8?auto=format&fit"
                alt="Mrs. Joyce Opoku, CEO"
                className="rounded-full w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 object-cover shadow-lg"
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-left">
                Jane Doe
              </h3>
              <p className="text-lg md:text-xl font-medium text-yellow-400 text-center md:text-left">
                Chief Executive Officer
              </p>
            </div>

            {/* Our Team */}
            <div className="rounded-lg overflow-hidden shadow-lg w-full">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQGnLjstXxTYyA/feedshare-shrink_2048_1536/B4DZiekjh6HsAs-/0/1755007054736?e=1759363200&v=beta&t=jzZBHm8wRrYc4z8u-EodZaKxVWI20YjPMTgfkx4jeJk?auto=format&fit"
                alt="Our team working together"
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
              />
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default AboutUs;


