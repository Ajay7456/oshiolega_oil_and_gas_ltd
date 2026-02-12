
import React from 'react';
import { ShieldCheck, Truck, BarChart3, Clock, Users, BadgeCheck } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: "Purity Guaranteed",
      desc: "Our diesel is tested for flashpoint, density, and viscosity to ensure your engines run smoothly without damage.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Optimized Logistics",
      desc: "With a modern fleet based in Surulere, we can navigate Lagos traffic efficiently to meet tight delivery windows.",
      icon: <Truck size={32} />
    },
    {
      title: "Market-Leading Rates",
      desc: "We monitor global oil prices to provide you with the most competitive rates in Nigeria without sacrificing quality.",
      icon: <BarChart3 size={32} />
    },
    {
      title: "24/7 Availability",
      desc: "Energy needs don't stop. Neither do we. Our emergency response team is always a call away.",
      icon: <Clock size={32} />
    },
    {
      title: "Client-Centric Support",
      desc: "Personalized account management for bulk buyers and friendly retail support via WhatsApp for residential users.",
      icon: <Users size={32} />
    },
    {
      title: "Accurate Metering",
      desc: "What you pay for is what you get. Our meters are regularly calibrated and transparently shared during delivery.",
      icon: <BadgeCheck size={32} />
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-orange-600 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic">The Oshiolega Advantage</h1>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto">
            Why leading Lagos businesses trust us for their mission-critical energy needs.
          </p>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((point, idx) => (
              <div key={idx} className="p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-orange-200 transition-all group">
                <div className="w-16 h-16 bg-white text-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">The Better Choice</h2>
            <p className="text-slate-400">Comparing Oshiolega with standard marketplace suppliers</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-6 px-4 font-bold text-slate-500 uppercase tracking-widest text-xs">Feature</th>
                  <th className="py-6 px-4 font-black text-orange-500 uppercase tracking-widest text-xs">Oshiolega Oil & Gas</th>
                  <th className="py-6 px-4 font-bold text-slate-500 uppercase tracking-widest text-xs">Typical Supplier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["Fuel Quality", "Verified Grade 1 Diesel", "Inconsistent / Adulterated"],
                  ["Delivery Speed", "Same Day (Lagoswide)", "2-3 Business Days"],
                  ["Metering", "Digital, Calibrated", "Manual / Estimated"],
                  ["B2B Pricing", "Dynamic Volume Discounts", "Fixed High Retail"],
                  ["Support", "Dedicated Manager", "Automated Voicemail"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-6 px-4 font-bold text-slate-400">{row[0]}</td>
                    <td className="py-6 px-4 font-black text-white">{row[1]}</td>
                    <td className="py-6 px-4 text-slate-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
