import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const advisors = [
  {
    name: "Dr. Andrew S.",
    role: "Professor, IIT Madras",
    specialization: "AI Research & Neural Networks",
    img: "https://i.pravatar.cc/150?u=a1"
  },
  {
    name: "Sarah Chen",
    role: "GenAI Strategy Lead, Google",
    specialization: "Multi-Agent Orchestration",
    img: "https://i.pravatar.cc/150?u=a2"
  },
  {
    name: "Michael Ross",
    role: "Director of Engineering, OpenAI",
    specialization: "Large Language Model Scaling",
    img: "https://i.pravatar.cc/150?u=a3"
  },
  {
    name: "Dr. Priya K.",
    role: "Faculty, IIT Madras",
    specialization: "Machine Learning & Ethics",
    img: "https://i.pravatar.cc/150?u=a4"
  }
];

const Advisors: React.FC = () => {
  return (
    <section id="advisors" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Learn From the Best</h2>
          <p className="text-gray-600 max-w-2xl font-medium">Our program is designed and delivered by industry pioneers and distinguished IIT Madras faculty.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((adj, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-brand-cream-light p-6 rounded-3xl border border-brand-cream transition-all group overflow-hidden"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={adj.img} 
                  alt={adj.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <a href="#" className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary scale-0 group-hover:scale-100 transition-transform delay-100 hover:bg-brand-accent hover:text-white">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-black text-brand-primary mb-1">{adj.name}</h3>
              <p className="text-brand-accent font-bold text-sm mb-3 uppercase tracking-wider">{adj.role}</p>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{adj.specialization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
