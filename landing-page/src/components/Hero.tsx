import React, { useState } from 'react';
import { Download, Calendar, Award, Briefcase, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-brand-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-sage rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-white">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 flex items-center gap-3">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png" alt="IIT Madras" className="h-10 brightness-0 invert" />
                <div className="h-8 w-[1px] bg-white/30" />
                <span className="font-bold tracking-wider text-sm text-brand-sage uppercase">IIT Madras Pravartak</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]"
            >
              Advanced Executive Program in <span className="text-brand-accent italic">Applied GenAI</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed italic"
            >
              "Master the art of building multi-agent systems and production-grade RAG applications with the pioneers from IIT Madras."
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            >
              {[
                { label: 'Duration', val: '4 Months', icon: Calendar },
                { label: 'Certificate', val: 'IIT Madras', icon: Award },
                { label: 'Cohort', val: 'May 2026', icon: Briefcase },
                { label: 'Format', val: 'Online', icon: Download },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 border-l-2 border-brand-accent/30 pl-4">
                  <div className="flex items-center gap-2 text-brand-sage">
                    <item.icon size={16} />
                    <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                  <span className="text-lg font-black">{item.val}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                Reserve Seat <span className="text-xl">➔</span>
              </button>
              <button className="bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/20 text-lg px-8 py-4 rounded-md font-semibold transition-all flex items-center gap-2">
                <Download size={20} /> Syllabus
              </button>
            </motion.div>
          </div>

          {/* Right Video Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div 
              onClick={() => setIsVideoOpen(true)}
              className="group relative cursor-pointer aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                alt="GenAI Program Preview" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 relative">
                  <span className="absolute inset-0 bg-brand-accent rounded-full animate-ping opacity-20" />
                  <Play className="text-white ml-1 fill-current" size={32} />
                </div>
              </div>

              {/* Tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-xs font-black text-brand-accent uppercase tracking-widest mb-1">Preview</p>
                  <p className="text-sm font-bold text-white">Advanced Applied GenAI Curriculum Walkthrough</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-brand-accent transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder for Video Embed */}
              <div className="w-full h-full flex items-center justify-center bg-brand-primary/40 relative">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-50 blur-xl" />
                <div className="relative text-center p-8">
                  <Play size={80} className="text-brand-accent mx-auto mb-6 opacity-80" />
                  <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Program Overview</h3>
                  <p className="text-white/60 font-medium">Video player integration ready for your YouTube/Vimeo embed source.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
