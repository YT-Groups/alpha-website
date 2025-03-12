import React, { useState } from 'react';
import { Rss } from 'lucide-react';
import { JobCard } from '../components/JobCard';

export function JobsPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer Needed for E-commerce Platform",
      budget: "$3,000 - $5,000",
      description: "Looking for an experienced developer to build a custom e-commerce platform with React, Node.js, and MongoDB.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      postedDate: "2 days ago",
      company: "TechSolutions Inc.",
      location: "Remote"
    },
    {
      id: 2,
      title: "WordPress Website Redesign",
      budget: "$1,500 - $2,500",
      description: "Need to redesign an existing WordPress website for a local restaurant. Must be mobile-friendly and SEO optimized.",
      skills: ["WordPress", "UI/UX", "PHP", "SEO"],
      postedDate: "1 day ago",
      company: "FoodieFinds",
      location: "Remote"
    },
    {
      id: 3,
      title: "Mobile App Developer for Fitness Tracking App",
      budget: "$4,000 - $6,000",
      description: "Seeking a mobile developer to create a fitness tracking app for iOS and Android using React Native.",
      skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
      postedDate: "3 days ago",
      company: "FitTech",
      location: "Remote"
    },
    {
      id: 4,
      title: "Logo and Brand Identity Design",
      budget: "$800 - $1,200",
      description: "Looking for a creative designer to develop a logo and brand identity for a new tech startup.",
      skills: ["Logo Design", "Branding", "Adobe Illustrator", "Typography"],
      postedDate: "5 hours ago",
      company: "InnovateTech",
      location: "Remote"
    },
    {
      id: 5,
      title: "Content Writer for SaaS Blog",
      budget: "$50 - $100 per article",
      description: "Need an experienced content writer to create engaging blog posts about SaaS products and industry trends.",
      skills: ["Content Writing", "SEO", "SaaS Knowledge", "Research"],
      postedDate: "1 week ago",
      company: "SaaSify",
      location: "Remote"
    },
    {
      id: 6,
      title: "Video Editor for YouTube Channel",
      budget: "$500 - $1,000 per video",
      description: "Seeking a skilled video editor to create engaging content for a growing YouTube channel focused on technology reviews.",
      skills: ["Video Editing", "Adobe Premiere", "After Effects", "Storytelling"],
      postedDate: "3 days ago",
      company: "TechTube",
      location: "Remote"
    }
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    // In a real application, this would open a modal or navigate to an application form
    alert(`Applying for: ${job.title}\n\nIn a production environment, this would open an application form where you can submit your proposal and portfolio.`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Find Work</h1>
          <div className="flex items-center space-x-2">
            <Rss className="text-sky-500" />
            <span className="text-gray-700">Job Feed</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
              <option>All Categories</option>
              <option>Web Development</option>
              <option>Design</option>
              <option>Writing</option>
              <option>Marketing</option>
            </select>
            <button className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600">
              Search
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {jobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onApply={handleApply}
            />
          ))}
        </div>
      </div>
    </div>
  );
}