
import React from 'react';
import { ChevronRight, MessageCircle, Phone, Star, ArrowRight, Truck, Fuel, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES, VALUE_PROPS, REVIEWS } from '../constants';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (p: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Overlay Decor */}
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1518101645466-7795885ff8f8?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Fuel Terminal Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-orange-600/10 border border-orange-600/30 px-3 py-1 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Now Serving All Lagos Districts
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Reliable Diesel Supply <span className="text-orange-500">When You Need It Most.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              From industrial bulk orders to residential generator refills, Oshiolega delivers premium diesel fuel with speed and integrity across Lagos.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate(Page.CONTACT)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-orange-900/20 transition-all flex items-center justify-center group"
              >
                Order Diesel Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center backdrop-blur-sm"
              >
                <MessageCircle className="mr-2 text-green-400" />
                WhatsApp Inquiry
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-slate-900" src={`https://picsum.photos/seed/${i+20}/40/40`} alt="Client" />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-orange-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" className="opacity-50" />
                  <span className="ml-2 text-white font-bold">{COMPANY_INFO.rating}</span>
                </div>
                <span className="text-slate-400 text-xs font-medium">Trusted by leading companies in Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Accent */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square bg-orange-600/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Why Oshiolega?</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">Experience Excellence in Fuel Delivery</h3>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALUE_PROPS.map((prop, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all group">
                <div className="w-16 h-16 bg-slate-900 text-orange-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-rotate-6 transition-transform">
                  {prop.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{prop.title}</h4>
                <p className="text-slate-600 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900">Tailored Diesel Solutions for Every Client</h3>
            </div>
            <button onClick={() => onNavigate(Page.SERVICES)} className="mt-6 md:mt-0 text-orange-600 font-bold flex items-center hover:translate-x-1 transition-transform">
              View All Services <ArrowRight size={18} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-orange-500/50 transition-colors group">
                <div className="mb-6 bg-orange-50 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{service.title}</h4>
                <p className="text-sm text-slate-600 mb-6">{service.description}</p>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">For: {service.audience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Client Reviews</h2>
            <h3 className="text-3xl font-black text-slate-900">What Our Partners Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-slate-50 p-8 rounded-2xl relative">
                <div className="flex text-orange-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                    {review.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{review.author}</div>
                    <div className="text-xs text-slate-500">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-600 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img src="https://images.unsplash.com/photo-1542382257-80dee8718172?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Diesel Truck" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to Fuel Your Performance?</h2>
          <p className="text-xl text-orange-50 mb-10 max-w-2xl mx-auto">
            Contact us today for competitive quotes and lightning-fast delivery across Lagos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => onNavigate(Page.CONTACT)}
              className="bg-slate-900 text-white px-10 py-5 rounded-xl font-black text-lg shadow-2xl hover:bg-slate-800 transition-all w-full sm:w-auto"
            >
              Place Your Order Today
            </button>
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-white text-orange-600 px-10 py-5 rounded-xl font-black text-lg shadow-xl hover:bg-slate-50 transition-all w-full sm:w-auto flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
