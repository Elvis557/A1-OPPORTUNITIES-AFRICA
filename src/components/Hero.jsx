import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import first from '../assets/first.jpg';
import vid from '../assets/vid.mp4';

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
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (images.length <= 1 || !showDots || isHome) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, showDots, isHome]);

  const goToIndex = (index) => setCurrentIndex(index);
  if (images.length === 0) return null;

  let textAlignClass = 'text-center items-center';
  if (alignLeft) textAlignClass = 'text-left items-start';
  else if (alignRight) textAlignClass = 'text-right items-end';

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      {isHome ? (
       <video
        className="absolute inset-0 w-full h-full object-cover z-0 !max-h-screen sm:!h-full"
        src={vid}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload"
      />

      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 mt-16 sm:mt-24 flex flex-1 items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-20">
        <div
          className={`bg-black/50 backdrop-blur-md rounded-xl 
            w-full max-w-[90%] sm:max-w-4xl 
            px-4 sm:px-8 py-6 sm:py-10 
            shadow-xl ${textAlignClass} flex flex-col`}
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-snug drop-shadow-md">
            {heading}
            {showHighlight && (
              <span className="text-blue-400 font-extrabold"> {highlight}</span>
            )}
          </h1>

          {showSubtitle && (
            <p className={`mt-4 sm:mt-5 text-sm sm:text-base text-gray-200 max-w-2xl ${alignLeft || alignRight ? '' : 'mx-auto text-center'}`}>
              {subtitle}
            </p>
          )}

          {isHome && (
            <div className={`mt-6 ${alignLeft ? '' : 'text-center'}`}>
              <Link
                to="/services"
                className="inline-block px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-300 shadow-md"
              >
                Discover
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Dots */}
      {showDots && images.length > 1 && !isHome && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-3 z-30 px-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'bg-white scale-110'
                  : 'bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;


