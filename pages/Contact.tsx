
import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', company: '', phone: '', quantity: '', message: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50">
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic">Get Fuel <span className="text-orange-600">Now</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to place an order or have questions? Contact our Lagos operations team today.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Order Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
            {formState === 'success' ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">Order Inquiry Sent!</h3>
                <p className="text-slate-600 mb-8">
                  Thank you for contacting Oshiolega Oil and Gas Ltd. Our sales team will call you within 30 minutes.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center">
                  <span className="w-8 h-8 bg-orange-600 rounded-lg mr-3"></span>
                  Quick Order Inquiry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name *</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Company (Optional)</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                        placeholder="e.g. Lagos Logistics Ltd"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number *</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                        placeholder="e.g. 0813 966 4775"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Est. Quantity (Liters)</label>
                      <input 
                        required
                        type="text" 
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                        placeholder="e.g. 5000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message / Specific Requirements</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all min-h-[120px]"
                      placeholder="Tell us about your delivery location or special needs..."
                    ></textarea>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit" 
                    className="w-full bg-orange-600 text-white font-black py-4 rounded-xl shadow-xl shadow-orange-900/10 hover:bg-orange-700 transition-all flex items-center justify-center disabled:opacity-50"
                  >
                    {formState === 'submitting' ? (
                      <Loader2 className="animate-spin mr-2" />
                    ) : (
                      <Send className="mr-2" size={20} />
                    )}
                    {formState === 'submitting' ? 'Processing...' : 'Place Order Inquiry'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start group cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-orange-600 mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us Directly</div>
                      <div className="text-lg font-bold text-slate-900">{COMPANY_INFO.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start group cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-green-500 mr-4 group-hover:bg-green-500 group-hover:text-white transition-all">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">WhatsApp Instant Order</div>
                      <div className="text-lg font-bold text-slate-900">Click to Chat</div>
                      <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="text-sm text-green-600 font-bold hover:underline">Chat on WhatsApp</a>
                    </div>
                  </div>
                  <div className="flex items-start group cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-orange-600 mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Our Location</div>
                      <div className="text-lg font-bold text-slate-900">Surulere, Lagos</div>
                      <div className="text-sm text-slate-500 max-w-xs">{COMPANY_INFO.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-6">Operating Hours</h3>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center">
                  <Clock className="text-orange-600 mr-4" size={32} />
                  <div>
                    <div className="font-bold text-slate-900">{COMPANY_INFO.hours}</div>
                    <div className="text-sm text-slate-500">Available for emergency delivery 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 bg-slate-200 rounded-3xl h-64 w-full overflow-hidden shadow-inner relative flex items-center justify-center">
               <div className="absolute inset-0 grayscale opacity-50 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover"></div>
               <div className="relative z-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-slate-200 shadow-xl flex items-center">
                  <MapPin className="text-orange-600 mr-3" />
                  <span className="font-bold text-slate-900">Find Us in Surulere</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
