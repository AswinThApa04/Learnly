import React from 'react';
import { FiTarget, FiTrendingUp, FiRepeat } from 'react-icons/fi'; // Example icons

const featuresData = [
  {
    icon: <FiRepeat size={40} className="text-blue-600" />,
    title: 'Spaced Repetition',
    description: 'Master any subject with our smart algorithm that schedules reviews at optimal intervals.',
  },
  {
    icon: <FiTrendingUp size={40} className="text-blue-600" />,
    title: 'Progress Streaks',
    description: 'Build powerful learning habits by maintaining your daily streak and visualizing your consistency.',
  },
  {
    icon: <FiTarget size={40} className="text-blue-600" />,
    title: 'Habit Insights',
    description: 'Get detailed analytics on your study patterns to understand and improve your learning process.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Learnly Works</h2>
          <p className="mt-2 text-gray-600">The science-backed way to build lasting knowledge.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;