import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import first from '../assets/first.jpg';

const Hero = ({
  images = [first],
  heading = "Unlock Your Future with",
  highlight = "A1 Opportunity",
  subtitle = "Join a global network of changemakers and build solutions that matter.",
  showHighlight = true,
  showSubtitle = true,
  showDots = true,
  alignLeft = false,
  alignRight = false,
}) => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1 || !showDots) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, showDots]);

  const goToIndex = (index) => setCurrentIndex(index);

  if (images.length === 0) return null;

  let textAlignClass = 'text-center items-center';
  if (alignLeft) textAlignClass = 'text-left items-start';
  else if (alignRight) textAlignClass = 'text-right items-end';

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-12 py-16">
        <div
          className={`bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-8 md:p-12 shadow-xl mt-35 w-full max-w-5xl ${textAlignClass}`}
        >
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            {heading}
            {showHighlight && (
              <span className="text-blue-400 drop-shadow"> {highlight}</span>
            )}
          </h1>
          
          {showSubtitle && (
            <p className="mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-3xl mx-auto text-center">
              {subtitle}
            </p>
          )}

          {location.pathname === '/' && (
            <div className="mt-5">
              <Link
                to="/services"
                className="inline-block px-5 py-2 rounded-full bg-blue-700 hover:bg-blue-700 text-white font-semibold transition duration-300 text-sm sm:text-base"
              >
                Discover
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Dots Navigation */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'bg-white scale-110'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
