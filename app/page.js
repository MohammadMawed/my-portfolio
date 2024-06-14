import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div id="home">
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-black text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-50">
          <div className="bg-gradient-to-r from-purple-500 via-teal-400 to-purple-500 w-48 h-48 rounded-full animate-spin-slow"></div>
        </div>
        <div className="relative z-20">
          <h2 className="text-5xl font-bold mb-6 animate-pulse">Welcome to My Portfolio</h2>
          <p className="text-xl mb-6">A showcase of my projects and skills in Data Science and AI</p>
          <a href="#projects" className="inline-block text-2xl text-teal-400 border border-teal-400 rounded-lg px-4 py-2 hover:bg-teal-400 hover:text-slate-900 transition">
            Explore Projects
          </a>
        </div>
        <div className="absolute bottom-10 left-10 z-10 text-sm text-gray-400">
          <p>Type `help` for commands</p>
        </div>
      </section>
      <section id="projects" className="py-12 bg-slate-800">
        <TerminalSection />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </section>
      <section id="about" className="py-12 bg-gradient-to-r from-teal-900 via-slate-900 to-purple-900 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-xl">I'm a computer science student focusing on data science and AI. I love creating cool projects and learning new technologies.</p>
      </section>
      <section id="contact" className="py-12 bg-slate-800 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-xl">You can reach me at <a href="mailto:your-email@example.com" className="text-teal-400 hover:text-teal-200">your-email@example.com</a></p>
      </section>
    </div>
  );
}

const projects = [
  {
    title: 'Cool Project 1',
    description: 'A brief description of Cool Project 1.',
    link: '#',
    image: '/project1.jpg',
  },
  {
    title: 'Cool Project 2',
    description: 'A brief description of Cool Project 2.',
    link: '#',
    image: '/project2.jpg',
  },
  {
    title: 'Cool Project 3',
    description: 'A brief description of Cool Project 3.',
    link: '#',
    image: '/project3.jpg',
  },
];

const TerminalSection = () => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg text-left">
      <div className="font-mono text-lg">
        <p>
          <span className="text-teal-400">guest@my-portfolio:~$</span> Welcome to my portfolio
        </p>
        <p className="mt-2">
          <span className="text-teal-400">guest@my-portfolio:~$</span> cd projects
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="mt-2">
            <a href="#" className="text-teal-400 hover:text-teal-200">Cool Project 1</a>
          </li>
          <li className="mt-2">
            <a href="#" className="text-teal-400 hover:text-teal-200">Cool Project 2</a>
          </li>
          <li className="mt-2">
            <a href="#" className="text-teal-400 hover:text-teal-200">Cool Project 3</a>
          </li>
        </ul>
        <p className="mt-2">
          <span className="text-teal-400">guest@my-portfolio:~/projects$</span> cd ..
        </p>
        <p className="mt-2">
          <span className="text-teal-400">guest@my-portfolio:~$</span> cd about
        </p>
        <p className="mt-2">
          <span className="text-teal-400">guest@my-portfolio:~/about$</span> I'm a computer science student focusing on data science and AI...
        </p>
        <p className="mt-2">
          <span className="text-teal-400">guest@my-portfolio:~$</span> cd contact
        </p>
        <p className="mt-2">
          <span className="text-teal-400">guest@my-portfolio:~/contact$</span> You can reach me at <a href="mailto:your-email@example.com" className="text-teal-400 hover:text-teal-200">your-email@example.com</a>
        </p>
      </div>
    </div>
  );
};
