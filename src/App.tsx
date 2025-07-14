import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Products from './components/Sections/Products';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import AuthForm from './components/Auth/AuthForm';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services />
            <Products />
            <About />
            <Contact />
          </>
        );
      case 'services':
        return <Services />;
      case 'products':
        return <Products />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'auth':
        return <AuthForm onNavigate={handleNavigate} />;
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services />
            <Products />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        {currentSection !== 'auth' && (
          <Navbar onNavigate={handleNavigate} currentSection={currentSection} />
        )}
        <main>
          {renderSection()}
        </main>
      </div>
    </AuthProvider>
  );
};

export default App;
