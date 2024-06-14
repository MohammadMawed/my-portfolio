import React from 'react';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="bg-slate-700 border border-teal-600 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-teal-400">{title}</h2>
        <p className="mt-2 text-gray-200">{description}</p>
        <a href={link} className="block mt-4 text-teal-400 hover:underline">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
