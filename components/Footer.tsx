
import React from 'react';
import { MapPin, Phone, Clock, Mail, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Page } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                <span className="text-orange-500 font-bold text-lg">O</span>
              </div>
              <span className="text-white font-bold text-lg uppercase">Oshiolega</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Nigeria's trusted diesel fuel partner. Providing reliable energy solutions for businesses and homes across Lagos since our inception.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholder */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold">In</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold">Fb</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Oshiolega', path: Page.ABOUT },
                { name: 'Our Services', path: Page.SERVICES },
                { name: 'Why Choose Us', path: Page.WHY_US },
                { name: 'Order Diesel', path: Page.CONTACT },
              ].map((link) => (
                <li key={link.path}>
                  <a href={`#${link.path}`} className="flex items-center group text-slate-400 hover:text-orange-500 transition-colors">
                    <ChevronRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-slate-400">Bulk Diesel Supply</li>
              <li className="text-slate-400">Residential Delivery</li>
              <li className="text-slate-400">Logistics & Distribution</li>
              <li className="text-slate-400">Emergency Fueling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm">{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Oshiolega Oil and Gas Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
