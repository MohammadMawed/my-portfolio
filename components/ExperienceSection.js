import React from 'react';
import SectionTitle from './SectionTitle';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-20">
      <SectionTitle icon={Briefcase} title="Experience" />
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-emerald-500/20 hover:shadow-lg">
          <h3 className="text-xl font-bold text-emerald-400">Software Engineer - OrderOps</h3>
          <p className="text-gray-400">June 2023 - Present | Saarbrücken, Germany</p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Developed a SaaS ordering app for restaurants using ReactJS, NodeJS, Express, and Firebase.</li>
            <li>Increased sales forecasting accuracy by 25% using machine learning models.</li>
            <li>Reduced order processing time by 30% through optimized backend processes.</li>
            <li>Implemented QR-based menu systems to reduce order errors by 15%.</li>
            <li>Implemented real-time order tracking and management features, improving reservation efficiency by 20%.</li>
            <li>Delivered key insights through an admin dashboard, used by 10+ managers for decision-making.</li>
            <li>Implemented rigorous testing and CI/CD processes, reducing deployment errors by 40%.</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-emerald-500/20 hover:shadow-lg">
          <h3 className="text-xl font-bold text-emerald-400">Software Development Intern - IronShark GmbH</h3>
          <p className="text-gray-400">Aug 2022 - Dec 2022 | Jena, Germany</p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Developed and troubleshot API errors using Node.js, improving system reliability.</li>
            <li>Enhanced user interfaces using Angular, TypeScript, HTML, and SCSS.</li>
            <li>Managed IONIC framework deployment, reducing manual deployment time by 50%.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
          </ul>
        </div>

        {/* Add more experiences here if necessary */}
      </div>
    </section>
  );
};

export default ExperienceSection;
