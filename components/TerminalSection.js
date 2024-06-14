import React from 'react';

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

export default TerminalSection;
