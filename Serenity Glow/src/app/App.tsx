import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'contact'>('home');

  const handleNavigate = (page: 'home' | 'services' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}