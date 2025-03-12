import React, { useState } from 'react';
import { Search, Zap, Star, TrendingUp, Shield, Clock, PenTool as Tool, CreditCard, Users, Briefcase, Award, Heart } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

interface HomePageProps {
  onFindWorkClick: () => void;
  onBrowseFreelancersClick: () => void;
}

export function HomePage({ onFindWorkClick, onBrowseFreelancersClick }: HomePageProps) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: "💻",
      label: "Programming",
      color: "bg-blue-50",
      description: "Find expert developers for your tech projects",
      popularSkills: ["React", "Node.js", "Python", "JavaScript"],
      averageRate: "$45-85/hr"
    },
    {
      id: 2,
      icon: "🎨",
      label: "Design",
      color: "bg-purple-50",
      description: "Connect with creative designers for your brand",
      popularSkills: ["UI/UX", "Branding", "Illustration", "Web Design"],
      averageRate: "$35-75/hr"
    },
    {
      id: 3,
      icon: "📝",
      label: "Writing",
      color: "bg-green-50",
      description: "Hire professional writers for your content needs",
      popularSkills: ["Content Writing", "Copywriting", "Technical Writing", "SEO"],
      averageRate: "$25-60/hr"
    },
    {
      id: 4,
      icon: "🎥",
      label: "Video",
      color: "bg-red-50",
      description: "Get professional video production services",
      popularSkills: ["Video Editing", "Animation", "Motion Graphics", "VFX"],
      averageRate: "$40-90/hr"
    },
    {
      id: 5,
      icon: "📊",
      label: "Marketing",
      color: "bg-yellow-50",
      description: "Boost your business with expert marketers",
      popularSkills: ["Digital Marketing", "SEO", "Social Media", "PPC"],
      averageRate: "$35-80/hr"
    },
    {
      id: 6,
      icon: "📸",
      label: "Photography",
      color: "bg-pink-50",
      description: "Capture perfect moments with pro photographers",
      popularSkills: ["Product Photography", "Events", "Retouching", "Portraits"],
      averageRate: "$50-120/hr"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white flex items-center justify-center text-center">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container relative mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                Find <span className="gradient-text">amazing talent</span> for your next project
              </h1>
              <p className="text-base sm:text-lg text-gray-600">Connect with top freelancers and bring your ideas to life</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="w-full pl-12 pr-32 py-4 rounded-full border-2 border-sky-100 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center space-x-2">
                  <Search size={20} />
                  <span>Search</span>
                </button>
                <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onFindWorkClick}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <Briefcase size={20} />
                  <span>Find Work</span>
                </button>
                <button 
                  onClick={onBrowseFreelancersClick}
                  className="bg-white text-sky-600 border-2 border-sky-500 px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <Users size={20} />
                  <span>Browse Freelancers</span>
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
                alt="Work together"
                className="rounded-lg shadow-2xl animate-float"
              />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400"
                alt="Team collaboration"
                className="absolute -bottom-10 -left-10 w-64 rounded-lg shadow-2xl animate-float-delayed"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Popular Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Services</h2>
            <p className="text-gray-600 text-lg">Find the perfect match for your project</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                onSelect={() => setSelectedService(service)}
                onFindExperts={onBrowseFreelancersClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose GigsHub?</h2>
            <p className="text-gray-600 text-lg">Join thousands of satisfied clients and freelancers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="w-12 h-12 text-yellow-500" />,
                title: "Top Quality Talent",
                description: "Access pre-vetted professionals with proven track records"
              },
              {
                icon: <Heart className="w-12 h-12 text-red-500" />,
                title: "95% Satisfaction Rate",
                description: "Our clients love the results they get with our freelancers"
              },
              {
                icon: <Briefcase className="w-12 h-12 text-blue-500" />,
                title: "Global Reach",
                description: "Connect with experts from over 150 countries worldwide"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">The Premium Freelance Solution for Businesses</h2>
            <p className="text-base sm:text-lg text-gray-600">Everything you need to seamlessly integrate top talent into your team</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-sky-500" />,
                title: "Dedicated Hiring Experts",
                description: "Count on an account manager to find you the right talent and see to your project's every need."
              },
              {
                icon: <Shield className="w-8 h-8 text-green-500" />,
                title: "Satisfaction Guarantee",
                description: "Order confidently, with guaranteed refunds for less-than-satisfactory deliveries."
              },
              {
                icon: <Tool className="w-8 h-8 text-purple-500" />,
                title: "Advanced Management Tools",
                description: "Seamlessly integrate freelancers into your team and projects."
              },
              {
                icon: <CreditCard className="w-8 h-8 text-blue-500" />,
                title: "Flexible Payment Models",
                description: "Pay per project or opt for hourly rates to facilitate longer-term collaboration."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}