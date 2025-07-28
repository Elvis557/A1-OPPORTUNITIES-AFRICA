import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <Footer />
    </>
  )
}

export default Home