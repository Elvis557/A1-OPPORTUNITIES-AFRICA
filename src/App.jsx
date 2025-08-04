import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Servicespage from './pages/Servicespage';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/services' element={<Servicespage/>} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </Router>
  );
}

export default App;
