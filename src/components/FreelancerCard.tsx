import React from 'react';
import { Star } from 'lucide-react';

interface Freelancer {
  id: number;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  hourlyRate: string;
  skills: string[];
  image: string;
  portfolio: string[];
}

interface FreelancerCardProps {
  freelancer: Freelancer;
  onViewProfile: (freelancer: Freelancer) => void;
}

export function FreelancerCard({ freelancer, onViewProfile }: FreelancerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={freelancer.image} 
            alt={freelancer.name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{freelancer.name}</h2>
            <p className="text-gray-600">{freelancer.title}</p>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center text-yellow-400 mr-2">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-gray-800">{freelancer.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({freelancer.reviews} reviews)</span>
          <span className="ml-auto font-semibold text-sky-600">{freelancer.hourlyRate}/hr</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {freelancer.skills.map((skill, index) => (
            <span key={index} className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {freelancer.portfolio.map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>
        
        <div className="flex justify-end">
          <button 
            className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
            onClick={() => onViewProfile(freelancer)}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}