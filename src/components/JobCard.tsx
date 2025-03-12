import React from 'react';

interface Job {
  id: number;
  title: string;
  budget: string;
  description: string;
  skills: string[];
  postedDate: string;
  company: string;
  location: string;
}

interface JobCardProps {
  job: Job;
  onApply: (job: Job) => void;
}

export function JobCard({ job, onApply }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h2>
          <span className="text-sky-600 font-semibold">{job.budget}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span>{job.company}</span>
          <span className="mx-2">•</span>
          <span>{job.location}</span>
          <span className="mx-2">•</span>
          <span>{job.postedDate}</span>
        </div>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill, index) => (
            <span key={index} className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-end">
          <button 
            className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
            onClick={() => onApply(job)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}