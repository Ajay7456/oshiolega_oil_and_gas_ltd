
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronRight, Star, MapPin, Clock, Mail } from 'lucide-react';
import { Page } from './types';
import { COMPANY_INFO, SERVICES, VALUE_PROPS, REVIEWS } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage(Page.HOME);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home onNavigate={(p) => window.location.hash = p} />;
      case Page.ABOUT: return <About />;
      case Page.SERVICES: return <ServicesPage />;
      case Page.WHY_US: return <WhyChooseUs />;
      case Page.CONTACT: return <Contact />;
      default: return <Home onNavigate={(p) => window.location.hash = p} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} />
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
      
      {/* WhatsApp Sticky Button */}
      <a 
        href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 flex items-center justify-center animate-bounce"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <Footer />
    </div>
  );
};

export default App;
