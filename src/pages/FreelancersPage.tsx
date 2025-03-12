import React, { useState } from 'react';
import { Rss } from 'lucide-react';
import { FreelancerCard } from '../components/FreelancerCard';

export function FreelancersPage() {
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);

  const freelancers = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Full Stack Developer",
      rating: 4.9,
      reviews: 127,
      hourlyRate: "$65",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 2,
      name: "Sophia Chen",
      title: "UI/UX Designer",
      rating: 5.0,
      reviews: 89,
      hourlyRate: "$75",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 3,
      name: "Marcus Williams",
      title: "Mobile App Developer",
      rating: 4.8,
      reviews: 56,
      hourlyRate: "$70",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      title: "Graphic Designer",
      rating: 4.7,
      reviews: 103,
      hourlyRate: "$55",
      skills: ["Illustrator", "Photoshop", "InDesign", "Branding"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 5,
      name: "David Kim",
      title: "Content Writer",
      rating: 4.9,
      reviews: 78,
      hourlyRate: "$45",
      skills: ["Copywriting", "SEO", "Blog Writing", "Technical Writing"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500"
      ]
    },
    {
      id: 6,
      name: "Olivia Taylor",
      title: "Video Editor",
      rating: 4.8,
      reviews: 62,
      hourlyRate: "$60",
      skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300",
      portfolio: [
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500"
      ]
    }
  ];

  const handleViewProfile = (freelancer) => {
    setSelectedFreelancer(freelancer);
    // In a real application, this would navigate to the freelancer's profile page
    alert(`Viewing profile of: ${freelancer.name}\n\nIn a production environment, this would navigate to the freelancer's detailed profile page.`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Browse Freelancers</h1>
          <div className="flex items-center space-x-2">
            <Rss className="text-sky-500" />
            <span className="text-gray-700">Freelancer Feed</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search freelancers..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
              <option>All Skills</option>
              <option>Development</option>
              <option>Design</option>
              <option>Writing</option>
              <option>Marketing</option>
            </select>
            <button className="bg-sky-500 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-sky-600">
              Search
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map(freelancer => (
            <FreelancerCard
              key={freelancer.id}
              freelancer={freelancer}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}