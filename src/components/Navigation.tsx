import React, { useState } from 'react';
import { Globe, Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <Sparkles className="text-sky-500" />
            <span className="text-2xl font-bold gradient-text">GigksHub</span>
          </div>
          
          <button 
            className="md:hidden p-2 rounded-md text-blue-600 hover:text-blue-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105"
              onClick={() => setCurrentPage('jobs')}
            >
              Find Work
            </button>
            <button 
              className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105"
              onClick={() => setCurrentPage('freelancers')}
            >
              Browse Freelancers
            </button>
            <div className="flex items-center space-x-2">
              <Globe size={18} className="text-gray-600" />
              <span className="text-gray-600">English</span>
            </div>
            <button 
              className="text-gray-600 hover:text-sky-600 transition-all hover:scale-105"
              onClick={() => setCurrentPage('signin')}
            >
              Sign in
            </button>
            <button 
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              onClick={() => setCurrentPage('signup')}
            >
              Join Now
            </button>
          </div>
        </div>

        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <button 
              className="text-gray-600 hover:text-sky-600 transition-colors py-2"
              onClick={() => {
                setCurrentPage('jobs');
                setMobileMenuOpen(false);
              }}
            >
              Find Work
            </button>
            <button 
              className="text-gray-600 hover:text-sky-600 transition-colors py-2"
              onClick={() => {
                setCurrentPage('freelancers');
                setMobileMenuOpen(false);
              }}
            >
              Browse Freelancers
            </button>
            <button 
              className="text-gray-600 hover:text-sky-600 transition-colors py-2"
              onClick={() => {
                setCurrentPage('signin');
                setMobileMenuOpen(false);
              }}
            >
              Sign in
            </button>
            <button 
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg"
              onClick={() => {
                setCurrentPage('signup');
                setMobileMenuOpen(false);
              }}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}