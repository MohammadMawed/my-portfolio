import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Code, FileJson, Hash, Globe, Server, Database, Cpu, BrainCog, Cloud, Layers } from 'lucide-react';

const HeroSection = () => {
  const techStack = [
    { icon: Coffee, name: 'Java' },
    { icon: Code, name: 'Python' },
    { icon: FileJson, name: 'JavaScript' },
    { icon: Hash, name: 'C' },
    { icon: Globe, name: 'React' },
    { icon: Server, name: 'Node.js' },
    { icon: Database, name: 'SQL' },
    { icon: Cpu, name: 'Machine Learning' },
    { icon: BrainCog, name: 'Pytorch' },
    { icon: BrainCog, name: 'TensorFlow' },
    { icon: Cloud, name: 'AWS' },
    { icon: Layers, name: 'Git' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16 px-4"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-blue-300 to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mohammad Mawed
        </motion.h1>
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Innovating Through Code
        </motion.h2>
        <motion.div 
          className="text-lg sm:text-xl mb-10 sm:mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Computer Science virtuoso at Saarland University, harmonizing the realms of
          <motion.span className="text-teal-300 font-semibold"> Data Science</motion.span> and
          <motion.span className="text-blue-400 font-semibold"> AI</motion.span> to craft tomorrow's technological symphonies.
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full max-w-4xl px-4">
        {techStack.map((tech, index) => (
          <motion.div key={index} className="flex flex-col items-center" whileHover={{ scale: 1.05, y: -5 }}>
            <tech.icon size={32} className="text-gray-400 mb-2" />
            <span className="text-gray-300 text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};


export default HeroSection;
