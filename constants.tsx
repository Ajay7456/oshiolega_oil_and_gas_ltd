
import React from 'react';
import { Truck, ShieldCheck, Clock, DollarSign, Fuel, Users, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Service, Review } from './types';

export const COMPANY_INFO = {
  name: "Oshiolega Oil and Gas Ltd",
  tagline: "Fueling Businesses, Empowering Lagos",
  address: "12/14 Babs Animashaun Rd, Bode Thomas St, Surulere, 101283, Lagos",
  phone: "0813 966 4775",
  whatsapp: "2348139664775",
  hours: "Daily: 8:00 AM - 5:00 PM",
  rating: 4.5,
  reviewCount: 2,
};

export const SERVICES: Service[] = [
  {
    id: 'bulk-supply',
    title: 'Bulk Diesel Supply',
    description: 'High-volume diesel delivery for factories, construction sites, and logistics hubs. We ensure your operations never stop.',
    icon: <Fuel className="w-8 h-8 text-orange-600" />,
    audience: 'Business'
  },
  {
    id: 'retail-delivery',
    title: 'Retail Fuel Delivery',
    description: 'Timely diesel delivery for residential generators and small businesses across Lagos. Quality fuel, right to your doorstep.',
    icon: <Truck className="w-8 h-8 text-orange-600" />,
    audience: 'Both'
  },
  {
    id: 'emergency-services',
    title: 'Emergency Refueling',
    description: 'Urgent fuel needs? Our rapid response team is equipped to handle emergency fuel deliveries to keep your power on.',
    icon: <Clock className="w-8 h-8 text-orange-600" />,
    audience: 'Both'
  },
  {
    id: 'custom-plans',
    title: 'Custom Fuel Plans',
    description: 'Tailored supply schedules and pricing models designed specifically for industrial clients and contractors.',
    icon: <Users className="w-8 h-8 text-orange-600" />,
    audience: 'Business'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Emeka Okafor",
    rating: 5,
    comment: "Best diesel supplier in Surulere. Always on time and the fuel quality is top-notch. Highly recommend for business operations.",
    date: "2 months ago"
  },
  {
    id: 2,
    author: "Tunde Bakare",
    rating: 4,
    comment: "Reliable service. They delivered even during the heavy rains. Good communication via WhatsApp.",
    date: "1 month ago"
  }
];

export const VALUE_PROPS = [
  {
    title: "Fast Delivery",
    desc: "Speed is our priority. We understand that downtime costs money.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Quality Assurance",
    desc: "We supply only high-grade, pure diesel fuel to protect your machinery.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees. Competitive market rates with clear invoicing.",
    icon: <DollarSign className="w-6 h-6" />
  }
];
