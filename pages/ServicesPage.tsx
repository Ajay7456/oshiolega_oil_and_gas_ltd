
import React from 'react';
import { SERVICES } from '../constants';
import { Fuel, Truck, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">Our Diesel <span className="text-orange-600">Services</span></h1>
            <p className="text-xl text-slate-400">
              Comprehensive fuel solutions designed for industrial bulk users, residential generator owners, and corporate partners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description} We leverage our specialized fleet to ensure that whether you need 500 liters or 33,000 liters, the fuel arrives pure and on schedule.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-xl mb-8 border-l-4 border-orange-600">
                    <h4 className="font-bold text-slate-900 mb-2">Ideal for:</h4>
                    <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-semibold text-orange-600">
                      {service.audience} Clients
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {["Verified Fuel Quality", "Real-time Delivery Tracking", "Competitive Volume Pricing"].map((item, i) => (
                      <li key={i} className="flex items-center text-slate-700 font-medium">
                        <ChevronRight className="text-orange-600 mr-2" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center text-orange-600 font-bold hover:underline">
                    Inquire about {service.title} <ChevronRight className="ml-1" size={16} />
                  </a>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
                     <img 
                      src="https://images.unsplash.com/photo-1512140134435-4309bc47c4d4?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover" 
                      alt={service.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Liters Delivered", value: "10M+" },
              { label: "Active Clients", value: "250+" },
              { label: "Service Radius", value: "50km" },
              { label: "Delivery Speed", value: "< 24h" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-black text-orange-500 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
