import React from 'react';

const TechStackIcon = ({ icon: Icon, tech }) => (
  <div className="flex items-center mr-4">
    <Icon className="text-emerald-400 mr-1" size={20} />
    <span className="text-gray-300">{tech}</span>
  </div>
);

export default TechStackIcon;
