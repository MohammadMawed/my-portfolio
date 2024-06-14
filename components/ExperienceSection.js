import React from 'react';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Klaviyo',
    duration: '2021 - Present',
    description: 'Building accessible user interfaces...',
    tags: ['JavaScript', 'React', 'Accessibility'],
  },
  // Add more experiences
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 bg-dark-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-dark-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-gray-400">{exp.duration}</p>
            <p className="mt-4">{exp.description}</p>
            <div className="flex flex-wrap mt-4 space-x-2">
              {exp.tags.map((tag, i) => (
                <span key={i} className="bg-green-700 text-black rounded-full px-3 py-1 text-sm">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
