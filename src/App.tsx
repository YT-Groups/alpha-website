import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { FreelancersPage } from './pages/FreelancersPage';
import { SignInPage, SignUpPage } from './pages/AuthPages';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'jobs':
        return <JobsPage />;
      case 'freelancers':
        return <FreelancersPage />;
      case 'signin':
        return <SignInPage onSignUp={() => setCurrentPage('signup')} />;
      case 'signup':
        return <SignUpPage onSignIn={() => setCurrentPage('signin')} />;
      default:
        return <HomePage 
          onFindWorkClick={() => setCurrentPage('jobs')}
          onBrowseFreelancersClick={() => setCurrentPage('freelancers')}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;