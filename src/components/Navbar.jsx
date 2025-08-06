import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  // Your useEffect for scrolling remains the same
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Use regular Link for the logo to go to the top of the homepage */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Learnly
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {/* 👇 THESE ARE THE KEY CHANGES 👇 */}
          {/* Use HashLink with the 'smooth' prop for a nice scrolling effect */}
          <HashLink smooth to="/#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            Features
          </HashLink>
          <HashLink smooth to="/#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            About
          </HashLink>

          {user ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
              <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Also update mobile links to use HashLink and close the menu on click */}
      <div
        className={`md:hidden ${ isOpen ? 'block' : 'hidden'} bg-white w-full absolute top-16 left-0 shadow-md`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <HashLink smooth to="/#features" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>
            Features
          </HashLink>
          <HashLink smooth to="/#about" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>
            About
          </HashLink>
          {/* Add the rest of your mobile links here, using the same pattern */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;