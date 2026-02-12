
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Page } from '../types';
import { COMPANY_INFO } from '../constants';

interface NavbarProps {
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: Page.HOME },
    { name: 'About Us', path: Page.ABOUT },
    { name: 'Services', path: Page.SERVICES },
    { name: 'Why Us', path: Page.WHY_US },
    { name: 'Contact', path: Page.CONTACT },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 fixed w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href={`#${Page.HOME}`} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 font-bold text-xl">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-lg leading-tight uppercase tracking-tight">Oshiolega</span>
                <span className="text-orange-600 font-medium text-xs tracking-wider">OIL & GAS LTD</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                className={`text-sm font-semibold transition-colors hover:text-orange-600 ${
                  currentPage === item.path ? 'text-orange-600' : 'text-slate-600'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-semibold ${
                currentPage === item.path ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center justify-center space-x-2 bg-slate-900 text-white w-full py-4 rounded-lg font-bold mt-4"
          >
            <Phone size={18} />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
