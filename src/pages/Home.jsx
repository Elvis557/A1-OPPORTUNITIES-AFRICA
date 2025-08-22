import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhatsAppButton from '../components/WhatsAppButton'; 

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />

      <WhatsAppButton /> 

    </>
  );
};

export default Home;
