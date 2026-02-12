
import React from 'react';
import { Target, Eye, Shield, Users, Award } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Our Story</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Building the energy infrastructure that powers Lagos' industrial and residential growth.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                About Oshiolega Oil and Gas Ltd
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
                Lagos' Premier Diesel Distribution Partner
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Oshiolega Oil and Gas Ltd was founded with a singular mission: to eliminate the energy reliability gaps faced by businesses and individuals in Lagos. We recognized that in a city that never sleeps, the need for high-quality diesel fuel is non-negotiable.
                </p>
                <p>
                  Based in Surulere, we have strategically positioned ourselves to serve all parts of Lagos, from the industrial zones of Apapa and Ikeja to the residential hubs of Lekki and Victoria Island.
                </p>
                <p>
                  Our commitment goes beyond just delivery; we provide peace of mind through stringent quality control, transparent meter readings, and a fleet that is maintained to the highest safety standards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Fuel Tanker" />
              <img src="https://images.unsplash.com/photo-1541888941259-79974df1964a?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" alt="Fuel Station" />
              <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Oil Refinery" />
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" alt="Quality Control" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide high-quality diesel fuel delivery services that are reliable, timely, and cost-effective, ensuring our clients can focus on their core objectives without power interruptions.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-black mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become the most trusted diesel fuel supplier in Lagos and surrounding regions, recognized for our commitment to quality assurance, safety, and superior customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">Our Core Values</h2>
            <p className="text-slate-500 mt-4">The principles that drive every delivery</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Safety First", icon: <Shield className="text-orange-600" />, desc: "Zero-compromise approach to transport and handling." },
              { title: "Timely Delivery", icon: <Award className="text-orange-600" />, desc: "Punctuality is the cornerstone of our operations." },
              { title: "Quality Assurance", icon: <Users className="text-orange-600" />, desc: "We only source from verified refinery streams." },
              { title: "Transparency", icon: <Award className="text-orange-600" />, desc: "Honest meter readings and competitive fair pricing." }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex w-16 h-16 bg-orange-50 rounded-full items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
