import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Send, ExternalLink } from 'lucide-react';

const advisors = [
  {
    name: 'Armando Galeana',
    title: 'Founder and CEO at Ubhuru Technologies',
    bio: 'A seasoned data science leader, with extensive experience in digital transformation. Throughout his career, Armando has leveraged his vast expertise in AI & ML to build infrastructure, create new lines of business and drive global implementations.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'Lead AI Researcher at DeepMind',
    bio: 'Pioneering researcher in Large Language Models and multi-agent systems. Dr. Chen has published over 50 papers on transformer architectures and autonomous agent reasoning frameworks.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    name: 'Marcus Thorne',
    title: 'Chief Data Officer at Global Finance Corp',
    bio: 'Leading the transformation of traditional banking through Generative AI. Marcus specializes in implementing production-grade RAG systems for regulated financial environments.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    socials: { twitter: '#', linkedin: '#' }
  }
];

const FacultySlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % advisors.length);
  const prev = () => setIndex((index - 1 + advisors.length) % advisors.length);

  return (
    <section id="advisors" className="py-24 bg-brand-cream/5">
      <div className="container-custom">
        <h3 className="text-4xl font-black text-brand-primary mb-16">Program Advisors</h3>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden p-4">
             <AnimatePresence mode="wait">
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white rounded-[32px] p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center lg:items-start"
                >
                   <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-[24px] overflow-hidden shadow-xl shrink-0 border-4 border-gray-50">
                      <img src={advisors[index].img} alt={advisors[index].name} className="w-full h-full object-cover" />
                   </div>
                   
                   <div className="flex-grow">
                      <h4 className="text-3xl font-black text-brand-primary mb-2">{advisors[index].name}</h4>
                      <p className="text-lg font-bold text-blue-600 mb-6">{advisors[index].title}</p>
                      <p className="text-brand-tertiary/70 font-medium leading-[1.8] mb-8 lg:max-w-xl">
                         {advisors[index].bio}
                      </p>
                      
                      <div className="flex gap-4">
                         <a href={advisors[index].socials.twitter} className="text-blue-400 hover:text-blue-600 transition-colors"><Send size={24} /></a>
                         <a href={advisors[index].socials.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors"><ExternalLink size={24} /></a>
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>

          <div className="flex justify-center mt-12 gap-8 items-center">
             <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent transition-all">
                <ChevronLeft size={24} />
             </button>
             
             <div className="flex gap-2">
                {advisors.map((_, i) => (
                   <div key={i} className={`h-1.5 transition-all duration-300 rounded-full ${index === i ? 'w-12 bg-blue-600' : 'w-4 bg-gray-200'}`} />
                ))}
             </div>

             <button onClick={next} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent transition-all">
                <ChevronRight size={24} />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySlider;
