import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-dark-800 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">My Portfolio</a>
        <div className="space-x-4">
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#experience" className="hover:text-green-400">Experience</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
