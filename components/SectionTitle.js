import React from 'react';

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center mb-6">
    <Icon className="text-emerald-400 mr-2" size={24} />
    <h2 className="text-3xl font-bold text-white">{title}</h2>
  </div>
);

export default SectionTitle;
