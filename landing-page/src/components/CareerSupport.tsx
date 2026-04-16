import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, FileText, TrendingUp, Presentation } from 'lucide-react';

const benefits = [
  {
    title: 'Group Mentoring & Networking',
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=200&auto=format&fit=crop',
    icon: Users
  },
  {
    title: 'Interview Prep & Assessment',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=200&auto=format&fit=crop',
    icon: FileText
  },
  {
    title: 'AI-Powered Profile Optimization',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&auto=format&fit=crop',
    icon: TrendingUp
  },
  {
    title: 'Mock Interviews & Mentoring',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=200&auto=format&fit=crop',
    icon: Presentation
  }
];

const CareerSupport: React.FC = () => {
  return (
    <section id="career" className="py-24 bg-brand-cream/10 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <h3 className="text-4xl font-black text-brand-primary mb-16">Career Support</h3>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Large Card */}
          <div className="lg:col-span-5">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-blue-600 rounded-[32px] p-10 lg:p-14 text-white shadow-2xl shadow-blue-600/20 relative group"
            >
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
               <h4 className="text-3xl lg:text-4xl font-black mb-8 leading-tight relative z-10">
                  Power Up Your Professional Journey With <span className="text-blue-200">Job Assist Plus</span>
               </h4>
               <p className="text-lg text-white/80 font-medium mb-12 leading-relaxed relative z-10">
                  Designed for learners and alums of Simplilearn, JobAssist Plus provides certified learners with targeted job assistance and extended support, turning job searches into success stories.
               </p>
               <button className="w-full bg-white text-blue-600 rounded-xl py-5 font-black text-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-all shadow-lg relative z-10">
                  <Download size={24} /> Download Brochure
               </button>
            </motion.div>
          </div>

          {/* Right Checklist */}
          <div className="lg:col-span-7">
             <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((benefit, i) => (
                   <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-6 group"
                   >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-gray-100 shadow-xl group-hover:scale-105 transition-transform duration-500">
                         <img src={benefit.img} alt={benefit.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                         <h5 className="text-lg font-black text-brand-primary leading-tight group-hover:text-blue-600 transition-colors">
                            {benefit.title}
                         </h5>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSupport;
