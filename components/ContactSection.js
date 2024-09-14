import React from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="mb-20 px-4 sm:px-6">
      <SectionTitle icon={Mail} title="Contact Me" />
      <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Mail size={20} className="text-emerald-400 mr-3" />
            <a href="mailto:mohammedmawed2002@gmail.com" className="text-gray-300 hover:text-emerald-300 transition-colors text-sm sm:text-base">
              mohammedmawed2002@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <Linkedin size={20} className="text-emerald-400 mr-3" />
            <a href="https://www.linkedin.com/in/mohammad-mawed" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-300 transition-colors text-sm sm:text-base">
              Mohammad Mawed
            </a>
          </li>
          <li className="flex items-center">
            <Github size={20} className="text-emerald-400 mr-3" />
            <a href="https://github.com/MohammadMawed" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-300 transition-colors text-sm sm:text-base">
              MohammadMawed
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;