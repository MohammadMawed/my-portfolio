import React from 'react';
import SectionTitle from './SectionTitle';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="mb-20">
        {/* Removed nested <section> */}
        <SectionTitle icon={Mail} title="Contact Me" />
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <p className="text-gray-300 mb-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            {/* Ensure no block elements are inside <p> */}
            {/* No block-level elements like <div> or components */}
          </p>
          <ul className="space-y-2">
            <li>
              <span className="text-emerald-400">Email:</span>
              <a href="mailto:mohammedmawed2002@gmail.com" className="text-gray-300 hover:text-emerald-300 transition-colors ml-2">mohammedmawed2002@gmail.com</a>
            </li>
            <li>
              <span className="text-emerald-400">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/mohammad-mawed" className="text-gray-300 hover:text-emerald-300 transition-colors ml-2">Mohammad Mawed</a>
            </li>
            <li>
              <span className="text-emerald-400">GitHub:</span>
              <a href="https://github.com/MohammadMawed" className="text-gray-300 hover:text-emerald-300 transition-colors ml-2">MohammadMawed</a>
            </li>
          </ul>
        </div>
    </section>
  );
};


export default ContactSection;
