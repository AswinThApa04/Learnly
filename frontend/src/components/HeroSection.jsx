import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Unlock Your Potential with <span className="text-blue-600">Learnly</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A habit-based learning platform to help you stay consistent, track progress, and achieve your goals faster.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Start Learning for Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;