import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'services' | 'contact';
  onNavigate: (page: 'home' | 'services' | 'contact') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home' as const, label: 'Home' },
    { id: 'services' as const, label: 'Services' },
    { id: 'contact' as const, label: 'Book Now' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <h1 className="text-[28px] tracking-tight">
              Serenity<span className="text-[#d4a574]">Glow</span>
            </h1>
            <p className="text-[12px] text-muted-foreground -mt-1">Beauty & Wellness Spa</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-colors ${
                  currentPage === link.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-[#d4a574] text-white px-6 py-3 rounded-lg hover:bg-[#c49564] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors ${
                    currentPage === link.id
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 bg-[#d4a574] text-white px-6 py-3 rounded-lg hover:bg-[#c49564] transition-colors justify-center"
              >
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
