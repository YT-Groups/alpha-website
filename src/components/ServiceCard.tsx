import React from 'react';

interface Skill {
  name: string;
  level?: string;
}

interface ServiceCardProps {
  icon: string;
  label: string;
  color: string;
  description: string;
  popularSkills: string[];
  averageRate: string;
  onSelect: () => void;
  onFindExperts: () => void;
}

export function ServiceCard({
  icon,
  label,
  color,
  description,
  popularSkills,
  averageRate,
  onSelect,
  onFindExperts
}: ServiceCardProps) {
  return (
    <div
      className={`${color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <span className="text-sm font-medium text-gray-600">{averageRate}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{label}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">Popular skills:</p>
        <div className="flex flex-wrap gap-2">
          {popularSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-white/50 px-3 py-1 rounded-full text-sm text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <button 
        className="mt-4 w-full bg-white text-sky-600 border-2 border-sky-500 px-4 py-2 rounded-lg hover:bg-sky-50 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onFindExperts();
        }}
      >
        Find {label} Experts
      </button>
    </div>
  );
}