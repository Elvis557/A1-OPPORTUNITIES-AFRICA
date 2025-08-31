import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import sixth from '../assets/sixth.jpg';

const Blog3 = () => {
  return (
    <>
      <Navbar />

      <Hero
        images={[sixth]}
        heading="Why One-on-One Travel Advice Matters"
        showHighlight={false}
        showSubtitle={false}
        showDots={false}
        alignLeft={true} 
        alignRight={false}
      />

      {/* Section 1: Blog 1 */}
      <section className="bg-yellow-50 py-12 px-4 sm:px-6 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto text-gray-800 space-y-16">

          {/* Row 1: Start with Your Needs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/7176288/pexels-photo-7176288.jpeg?auto=format&center"
                alt="Start with Your Needs"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start with Your Needs</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Every traveler has unique goals, whether it’s studying abroad, taking a family vacation, or relocating for work. A one-on-one consultation allows an expert to understand your exact situation and recommend solutions tailored to you. Unlike generic online guides, this approach identifies your priorities—budget, timing, or destinations—and creates a plan that works specifically for your lifestyle and travel goals.
              </p>
            </div>
          </div>

          {/* Row 2: Navigate Complex Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Navigate Complex Rules</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Travel requirements often vary by country and can change quickly. Visa regulations, entry restrictions, and health guidelines may differ even for the same destination. Personalized advice ensures you have the latest information for your journey. Instead of wasting hours on outdated blogs, you receive clear and accurate guidance that reduces the risk of delays, mistakes, or denied entry.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg?auto=format&fit"
                alt="Navigate Complex Rules"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 3: Build a Clear Plan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit"
                alt="Build a Clear Plan"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Build a Clear Plan</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                A travel expert can help you organize your trip step by step, from required documents to booking timelines. They make sure nothing is overlooked—whether it’s checking passport validity, securing the right visa, or arranging accommodations. This structured guidance reduces stress and gives you confidence, knowing that your plans are realistic and aligned with official requirements.
              </p>
            </div>
          </div>

          {/* Row 4: Strong Support Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Strong Support Documents</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                When applications require proof of finances, accommodation, or return plans, the quality of your documents is crucial. During a consultation, you’ll learn exactly what paperwork is needed and how to prepare it correctly. Clear, complete, and well-organized documents not only speed up approval but also show officials that you are a responsible and credible traveler.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit"
                alt="Strong Documents"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 1: Prepare for Interviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/2179606/pexels-photo-2179606.jpeg?auto=format&fit"
                alt="Prepare for Interviews"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Prepare for Interviews</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Some travelers need to attend embassy or consulate interviews before approval. A one-on-one session gives you the chance to practice common questions and refine your answers. An advisor can point out areas where you might sound unclear and guide you to present yourself with confidence. This preparation helps you stay calm, professional, and focused on the day of the interview.
              </p>
            </div>
          </div>

          {/* Row 2: Honest Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Honest Guidance</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Travel consultants provide straightforward advice based on your real situation. While it may be tempting to leave out details you think could cause problems, honest discussions ensure that challenges are addressed early. This prevents mistakes and increases your chances of a smooth process. Transparency is the foundation of successful travel planning.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg?auto=format&fit"
                alt="Honest Guidance"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 3: Stress-Free Confidence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit"
                alt="Stress-Free Confidence"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stress-Free Confidence</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Traveling should be exciting, not overwhelming. One-on-one advice helps reduce anxiety by giving you clear direction, realistic expectations, and ongoing support. Knowing that a professional is guiding you through every step makes it easier to stay positive, even if unexpected changes arise. Confidence and calmness are key to a smoother journey.
              </p>
            </div>
          </div>

          {/* Row 2: Need Assistance? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Assistance?</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Personalized travel consultations are more than just advice—they are a roadmap to a stress-free journey. By understanding your needs, organizing documents, and preparing you for every stage, one-on-one guidance ensures your travel experience is smooth and successful. Whether your goal is education, work, or leisure, tailored advice gives you the clarity and confidence to move forward.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg?auto=format&fit"
                alt="Need Assistance?"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 3: Need Assistance? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit"
                alt="Need Assistance?"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Assistance?</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                At A1 Opportunities, we specialize in personalized travel guidance designed around your goals. From preparing documents to offering interview support, our one-on-one consultations give you the tools to succeed. With our expertise, you can plan your trip with peace of mind and avoid unnecessary setbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      

    </>
  );
};

export default Blog3;




