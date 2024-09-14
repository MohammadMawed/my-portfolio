import React, { useState } from 'react';
import { Globe, Code } from 'lucide-react';
import TechStackIcon from './TechStackIcon';

const ProjectCard = ({ title, description, link, previewComponent: PreviewComponent, techStack, codePreview }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-emerald-500/20 hover:shadow-lg">
      <div className="h-48 bg-gray-700 flex items-center justify-center overflow-hidden">
        <PreviewComponent />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-emerald-400 mb-2">{title}</h3>
        <div className="text-gray-300 mb-4">{description}</div>
        <div className="flex flex-wrap mb-4">
          {techStack.map((tech, index) => (
            <TechStackIcon key={index} icon={tech.icon} tech={tech.name} />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a href={link} className="text-emerald-400 hover:text-emerald-300 inline-flex items-center">
            View Project <Globe className="ml-2" size={16} />
          </a>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="text-emerald-400 hover:text-emerald-300 inline-flex items-center"
          >
            {showPreview ? 'Hide' : 'Show'} Code <Code className="ml-2" size={16} />
          </button>
        </div>
      </div>
      {showPreview && (
        <div className="bg-gray-900 p-4 border-t border-gray-700">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{codePreview}</code>
          </pre>
        </div>
      )}
    </div>
  );
};


export default ProjectCard;
