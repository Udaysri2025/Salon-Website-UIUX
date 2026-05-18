import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-[24px] mb-2">
              Serenity<span className="text-[#d4a574]">Glow</span>
            </h3>
            <p className="text-gray-400 text-[14px]">
              Your sanctuary for beauty, wellness, and self-care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[16px] mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-[14px]">
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[16px] mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-[14px]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#d4a574]" />
                <span>123 Wellness Ave<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#d4a574]" />
                <a href="tel:+1234567890" className="hover:text-[#d4a574] transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#d4a574]" />
                <a href="mailto:hello@serenityglow.com" className="hover:text-[#d4a574] transition-colors">
                  hello@serenityglow.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-[16px] mb-4 text-white">Hours</h4>
            <p className="text-gray-400 text-[14px] mb-4">
              Mon - Fri: 9:00 AM - 8:00 PM<br />
              Sat: 10:00 AM - 6:00 PM<br />
              Sun: 11:00 AM - 5:00 PM
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-[14px]">
          <p>&copy; 2026 SerenityGlow Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
