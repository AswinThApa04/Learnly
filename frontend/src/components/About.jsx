import React from 'react';
import missionIllustration from '../assets/about_logo.png'; 

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Learnly, we believe that consistency is the key to mastery. Traditional learning methods often lead to burnout and forgotten knowledge. Our mission is to transform learning into a sustainable, lifelong habit. We empower students and self-learners to not just learn, but to remember and apply what they've learned.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12 flex justify-center items-center">
            <img 
              src={missionIllustration} 
              alt="Illustration of Learnly's mission" 
              className="rounded-lg shadow-md w-full lg:w-4/5 xl:w-3/4 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;