import React from 'react';
import Logo from '../assets/logo.png'; // Use the correct path to your logo

const OpeningScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      {/* Logo */}
      <img
        src={Logo}
        alt="Career Conquest"
        className="w-2/3 max-w-xs animate-fadeIn" // Fade-in animation for logo
      />
      {/* Get Started Button */}
      <button
        onClick={onStart}
        className="mt-16 px-6 py-3 bg-custom-pink text-white text-lg font-semibold rounded hover:bg-pink-700 transition-all duration-300 animate-bounce"
      >
        Get Started
      </button>
    </div>
  );
};

export default OpeningScreen;
