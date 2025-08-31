import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import third from '../assets/third.jpg';

const Blog1 = () => {
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
                Applications usually require several important documents such as financial statements, admission letters, proof of travel plans, and accommodation details. These papers can take time to collect, and in some cases, you may need to request them from schools, banks, or employers. Starting early gives you plenty of time to prepare, identify any missing documents, and avoid last-minute stress. A checklist can also help you track your progress, ensuring nothing is overlooked before submission.
              </p>
            </div>
          </div>

          {/* Row 2: Check Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Check Requirements</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Visa rules are not the same everywhere, and requirements often change depending on your destination or purpose of travel. For example, a student visa will require proof of enrollment and financial resources, while a tourist visa may ask for hotel bookings or a return ticket. Because these details vary, it is important to check the official embassy or consulate website regularly. Relying only on old advice or blogs can lead to mistakes, so always confirm the latest updates before applying.
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
                Mistakes on visa forms are one of the most common reasons for rejection or long delays in approval. Simple errors such as spelling names incorrectly, writing the wrong birth date, or mismatching details with your passport can create unnecessary complications. To avoid this, fill in the forms slowly and carefully, reviewing each section more than once. Before submitting, compare the details with your official documents to make sure everything matches. Asking a trusted friend or advisor to double-check your forms can also save you from errors.
              </p>
            </div>
          </div>

          {/* Row 4: Strong Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Strong Documents</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Your supporting documents are the backbone of your application and must clearly prove your eligibility to travel. For a student visa, this might include your official admission letter, proof of tuition payments, and evidence of financial support. For a tourist visa, you may need hotel bookings, a travel itinerary, and proof of ties to your home country such as employment or family responsibilities. Workers may need to include signed job contracts or employer letters. Ensuring that documents are accurate, complete, and easy to read greatly increases your chances of success.
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
                Some visa types require you to attend an interview, which can make applicants nervous if they are not prepared. Practicing common questions in advance can help you feel more confident and comfortable. Be ready to explain your reason for travel, how you will support yourself financially, and what ties you have to your home country. Practicing with a friend or even speaking in front of a mirror can help you refine your answers. On the actual day, dress neatly, speak clearly, and remember that officials are mainly checking for honesty and consistency.
              </p>
            </div>
          </div>

          {/* Row 2: Be Honest */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Be Honest</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                While it may be tempting to hide information you think could weaken your case, dishonesty almost always leads to problems. Visa officers are trained to detect false or incomplete details, and even small inconsistencies can cause rejection. Providing incorrect information can also hurt your chances for future applications and may even result in a long-term travel ban. Instead, always be transparent about your situation, explain things clearly, and let your true purpose for travel show through your documents and answers.
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
                Feeling nervous during the visa process is natural, especially when the outcome is important for your studies, career, or travel plans. However, maintaining a positive attitude helps you stay focused and professional. Remember that millions of people successfully obtain visas every year, often facing the same challenges you are going through. By keeping calm, polite, and confident, you show officials that you are responsible and prepared. Positivity also helps you handle any unexpected requests or delays with grace.
              </p>
            </div>
          </div>
        </div>
      </section>

      

    </>
  );
};

export default Blog1;

