import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Build Your Learning Habit?</h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          Join thousands of learners who are already making progress every single day.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="bg-white text-blue-600 text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
          >
            Sign Up Now - It's Free!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;