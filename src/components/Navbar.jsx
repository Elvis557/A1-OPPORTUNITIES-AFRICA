import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
      if (menuOpen && mobileMenuRef.current) {
        const focusableElements = mobileMenuRef.current.querySelectorAll(
          'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements.length) return;
        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              e.preventDefault();
              lastEl.focus();
            }
          } else {
            if (document.activeElement === lastEl) {
              e.preventDefault();
              firstEl.focus();
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo and brand */}
        <Link
          to="/"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          <img
            src={logo}
            alt="A1 Opportunities Africa Logo"
            className="h-12 w-12 rounded-full object-cover shadow-md hover:shadow-blue-300 hover:scale-105 transition duration-300"
            loading="lazy"
          />
          <span className="text-lg md:text-2xl font-bold uppercase tracking-wide text-gray-800 hover:text-blue-1000 transition duration-300">
            A1 Opportunities Africa
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm lg:text-base font-semibold text-gray-800 tracking-wide">
          {navLinks.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`relative group px-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-500 transition-all duration-300 group-hover:w-full ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-gray-700 text-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-transform duration-300 hover:scale-110"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <aside
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white/95 backdrop-blur-xl shadow-2xl p-6 sm:p-8 transform transition-transform duration-500 ease-in-out z-40 flex flex-col`}
        style={{transform: menuOpen ? 'translateX(0)' : 'translateX(100%)'}}
        tabIndex={-1}
      >
        {/* Logo & Close Button Container */}
        <div className="flex items-center justify-between mb-10 border-b border-gray-300 pb-4">
          <img
            src={logo}
            alt="A1 Opportunities Africa Logo"
            className="h-16 w-16 rounded-full object-cover shadow-md"
            loading="lazy"
          />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-gray-600 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-3xl"
          >
            <FiX />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 text-lg font-medium text-gray-800">
          {navLinks.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`block py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

      </aside>
    </nav>
  );
};

export default Navbar;

