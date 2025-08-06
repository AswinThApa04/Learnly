import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FiTrendingUp, FiRepeat, FiTarget, FiCheckCircle } from 'react-icons/fi';

// Mock data for the dashboard
const mockHabits = [
  { id: 1, title: 'Review JavaScript Flashcards', streak: 12, icon: <FiRepeat/> },
  { id: 2, title: 'Practice Python Algorithms', streak: 5, icon: <FiTarget/> },
  { id: 3, title: 'Read a chapter of "Clean Code"', streak: 27, icon: <FiCheckCircle/> },
];

const StatCard = ({ icon, label, value, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div className={`mr-4 p-3 rounded-full ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);


const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    // This can be a loading spinner or a redirect in a real app
    return <p className="text-center pt-40">Loading user data...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="mt-2 text-lg text-gray-600">Let's make today a productive day.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard icon={<FiTrendingUp size={24} className="text-green-600"/>} label="Longest Streak" value="27 Days" color="bg-green-100" />
            <StatCard icon={<FiRepeat size={24} className="text-blue-600"/>} label="Habits Mastered" value="3" color="bg-blue-100" />
            <StatCard icon={<FiTarget size={24} className="text-yellow-600"/>} label="Daily Goal" value="80%" color="bg-yellow-100" />
        </div>

        {/* Habits List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Habits</h2>
          <div className="space-y-4">
            {mockHabits.map(habit => (
              <div key={habit.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <div className="text-blue-600 mr-4">{React.cloneElement(habit.icon, { size: 24 })}</div>
                  <p className="font-semibold text-gray-800">{habit.title}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-bold text-gray-600">{habit.streak} day streak</span>
                  <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all">
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;