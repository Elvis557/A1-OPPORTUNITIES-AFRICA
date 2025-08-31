import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import third from '../assets/third.jpg';

const AboutUS = () => {
  return (
    <>
      <Navbar />

      <Hero
        images={[third]}
        heading="Stress-Free Visa Application Tips"
        showHighlight={false}
        showSubtitle={false}
        showDots={false}
        alignLeft={true} 
        alignRight={false}
      />

      {/* Section 1: Blog 1 */}
      <section className="bg-yellow-50 py-12 px-4 sm:px-6 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto text-gray-800 space-y-16">

          {/* Row 1: Start Early */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/2179606/pexels-photo-2179606.jpeg?auto=format&fit"
                alt="Start early"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start Early</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Applications need many documents, which take time to gather. Begin as soon as possible and use a checklist to stay on track.
              </p>
            </div>
          </div>

          {/* Row 2: Check Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Check Requirements</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Every country has different rules. Always confirm details on the official embassy website to avoid mistakes.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg?auto=format&fit"
                alt="Check Requirements"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 3: Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Fill Forms Carefully"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Fill Forms Carefully</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Errors on forms cause delays and rejections. Double-check spellings, dates, and that all details match your documents.
              </p>
            </div>
          </div>

          {/* Row 4: Strong Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Strong Documents</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Support your application with clear, complete papers—like proof of funds, admission letters, or travel plans.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80"
                alt="Strong Documents"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 1: Interview Prep */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/2179606/pexels-photo-2179606.jpeg?auto=format&fit"
                alt="Interview Prep"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interview Prep</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                If required, practice answering questions about your trip, finances, and ties to your home country. Be clear and confident.
              </p>
            </div>
          </div>

          {/* Row 2: Be Honest */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Be Honest</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Every country has different rules. Always confirm details on the official embassy website to avoid mistakes.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg?auto=format&fit"
                alt="Be Honest"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 3: Stay Positive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Stay Positive"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Positive</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                It’s normal to feel nervous. Stay calm, polite, and focused—millions of visas are approved every year.
              </p>
            </div>
          </div>
        </div>
      </section>

      

    </>
  );
};

export default AboutUS;

