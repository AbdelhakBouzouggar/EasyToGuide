import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center">
            <svg className="w-10 h-10 mr-2" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="23" fill="#4CAF50" />
              <path d="M25 10C20.5 10 15 12 15 20C15 28 25 38 25 38C25 38 35 28 35 20C35 12 29.5 10 25 10Z" fill="#FFF" />
              <circle cx="25" cy="20" r="5" fill="#FF5722" />
              <path d="M15 32H35M15 36H35" stroke="#FFF" strokeWidth="2" />
            </svg>
            <span className="text-xl font-bold text-gray-800">EasyToGuide</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-green-500">Home</Link>
            <Link to="/guides" className="text-gray-600 hover:text-green-500">Guides</Link>
            <Link to="/about" className="text-gray-600 hover:text-green-500">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-500">Contact</Link>
          </nav>

          {/* User actions - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile" className="text-gray-600 hover:text-green-500">
              <i className="fas fa-user"></i> Profile
            </Link>
            <Link to="/settings" className="text-gray-600 hover:text-green-500">
              <i className="fas fa-cog"></i> Settings
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 hover:text-green-500 py-2">Home</Link>
              <Link to="/guides" className="text-gray-600 hover:text-green-500 py-2">Guides</Link>
              <Link to="/about" className="text-gray-600 hover:text-green-500 py-2">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-500 py-2">Contact</Link>
              <Link to="/profile" className="text-gray-600 hover:text-green-500 py-2">
                <i className="fas fa-user"></i> Profile
              </Link>
              <Link to="/settings" className="text-gray-600 hover:text-green-500 py-2">
                <i className="fas fa-cog"></i> Settings
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
