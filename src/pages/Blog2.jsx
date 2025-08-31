import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import third from '../assets/third.jpg';

const Blog2 = () => {
  return (
    <>
      <Navbar />

      <Hero
        images={[third]}
        heading="Avoid Delays! Here’s a Guide on Renewing Your Passport Without the Long Queues"
        showHighlight={false}
        showSubtitle={false}
        showDots={false}
        alignLeft={true} 
        alignRight={false}
      />

      {/* Section 1: Blog 1 */}
      <section className="bg-yellow-50 py-12 px-4 sm:px-6 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto text-gray-800 space-y-16">

          {/* Row 1: Plan Ahead */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/2179606/pexels-photo-2179606.jpeg?auto=format&fit"
                alt="Plan Ahead"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Plan Ahead</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Passport renewals can take weeks, and peak travel seasons often make waiting times even longer. Since many countries require at least six months’ validity left on your passport before you travel, it’s best to start early. Collecting documents like your old passport, recent photos, and proof of identity may take extra time. Planning ahead ensures you have everything ready without the stress of last-minute pressure, and a simple checklist will help you stay organized.
              </p>
            </div>
          </div>

          {/* Row 2: Know the Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Know the Rules</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Renewal requirements differ depending on your age, the condition of your passport, or whether it has been lost or stolen. In some cases, you may qualify to renew by mail, while in others, you must visit a passport office in person. If you need to travel urgently, expedited options are often available but usually cost more. Because these rules can change, it’s always best to confirm the latest information on the official government website rather than relying on secondhand advice.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg?auto=format&fit"
                alt="Know the Rules"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 3: Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Complete Forms Correctly"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Complete Forms Correctly</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                One of the main causes of renewal delays is incorrect or incomplete forms. Even small mistakes—such as spelling errors, missing signatures, or mismatched information—can cause applications to be returned. To avoid setbacks, fill in your forms carefully, checking every detail against your current passport and identity documents. Reviewing the application more than once and asking a trusted person to proofread can save you valuable time.
              </p>
            </div>
          </div>

          {/* Row 4: Prepare Your Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Prepare Your Documents</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Your documents play a vital role in the renewal process. Typically, you’ll need your most recent passport, updated passport photos that meet official guidelines, and valid identification. If your passport was lost or stolen, you may also be asked to provide a police report or a written explanation. Since photo requirements are strict, ensure your images match the correct size, lighting, and background. Submitting accurate and complete documents increases the chance of smooth approval.
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

          {/* Row 1: Secure Your Slot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.pexels.com/photos/2179606/pexels-photo-2179606.jpeg?auto=format&fit"
                alt="Secure Your Slot"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Secure Your Slot</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                If you must apply in person, securing an appointment early is essential. Passport offices often book out weeks ahead, especially before busy holiday periods. Some locations release new appointment slots at set times, so checking the booking system regularly can help you get an earlier date. On the day of your visit, bring printed confirmations and arrive on time to avoid any unnecessary delays.
              </p>
            </div>
          </div>

          {/* Row 2: Be Ready to Explain */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Be Ready to Explain</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Although many renewals are simple, certain cases—such as damaged or stolen passports—may require additional questions from officials. Being ready to explain your situation clearly and provide supporting evidence can help speed up the process. Practicing short and confident answers in advance, even with a friend, makes it easier to stay calm. Remember, officials mainly want to confirm your identity and ensure your documents are genuine.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg?auto=format&fit"
                alt="Be Ready to Explain"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 3: Stay Truthful */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Stay Truthful"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Truthful</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Some applicants try to hide information they think could complicate their renewal, but this usually creates bigger problems. Officials are trained to notice inconsistencies, and false details can lead to delays, rejection, or even long-term restrictions. Always be honest about your circumstances and let your documents support your explanation. Transparency builds trust and improves your chances of approval.
              </p>
            </div>
          </div>

          {/* Row 2: Keep a Positive Mindset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Keep a Positive Mindset</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                It’s natural to feel frustrated by waiting times, paperwork, or unexpected requests, but a calm and positive attitude makes the experience smoother. Remember that millions of passports are renewed successfully each year. By staying patient, polite, and professional, you’ll handle the process with more confidence and reduce stress, even if there are delays along the way.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg?auto=format&fit"
                alt="Keep a Positive Mindset"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* Row 3: Final Thought */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Final Thought"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Final Thought</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Although renewing a passport may seem complicated, it is much easier when approached step by step. Preparing documents early, following the latest rules, and submitting correct forms are the keys to a successful renewal. With honesty and patience, you’ll be ready to travel without the stress of last-minute surprises. Think of your renewed passport not as paperwork but as the key to new journeys, opportunities, and experiences waiting ahead.
              </p>
            </div>
          </div>

          {/* Row 2: Need Assistance? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Assistance?</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                At A1 Opportunities, we understand how stressful renewing a passport can feel. That’s why we provide step-by-step support to ensure your documents are in order and your application goes smoothly. With our expert guidance, you can avoid delays and focus on preparing for your travels.
                Contact us today and let us make your passport renewal quick, simple, and stress-free.  
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
        </div>
      </section>

      

    </>
  );
};

export default Blog2;


