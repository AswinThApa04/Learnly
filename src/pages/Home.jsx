import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import About from '../components/About';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <About />
      <CTA />
    </>
  );
};

export default Home;