import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-r from-purple-900 to-black">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-2xl mb-6">Showcasing my projects and skills in Data Science and AI</p>
      <a href="#projects" className="text-2xl text-green-400 hover:text-green-200">Explore Projects</a>
    </section>
  );
};

export default HeroSection;
