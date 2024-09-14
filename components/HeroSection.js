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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64...')] opacity-5"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10 px-4"
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-blue-300 to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mohammad Mawed
        </motion.h1>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Innovating Through Code
        </motion.h2>
        {/* Use <div> instead of <p> */}
        <motion.div 
          className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Computer Science virtuoso at Saarland University, harmonizing the realms of
          <motion.span 
            className="text-teal-300 font-semibold"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          > Data Science</motion.span> and
          <motion.span 
            className="text-blue-400 font-semibold"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          > AI</motion.span> to craft tomorrow's technological symphonies.
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto mb-16 px-4"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <tech.icon size={32} className="text-gray-400 mb-2" />
              <span className="text-gray-300 text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center max-w-2xl mx-auto px-4"
      >
        <div className="text-gray-400 mb-8 leading-relaxed">
          Dedicated to pushing the boundaries of technology through innovative projects and collaborative hackathons. 
          Transforming complex challenges into elegant, efficient solutions.
        </div>
        <motion.a
          href="#projects"
          className="inline-block text-lg text-gray-900 bg-gradient-to-r from-teal-300 to-blue-400 rounded-md px-8 py-3 hover:from-teal-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Projects
        </motion.a>
      </motion.div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
