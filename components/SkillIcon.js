import React from 'react';

const SkillIcon = ({ icon: Icon, skill }) => (
  <div className="flex flex-col items-center group transition-all duration-300 transform hover:scale-110">
    <div className="bg-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 group-hover:bg-emerald-500 group-hover:shadow-emerald-500/50">
      <Icon className="text-emerald-400 group-hover:text-white" size={24} />
    </div>
    <span className="mt-2 text-xs font-medium text-gray-300 group-hover:text-emerald-300">{skill}</span>
  </div>
);

export default SkillIcon;
