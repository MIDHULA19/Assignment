import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe } from 'lucide-react';

const Advantage: React.FC = () => {
  return (
    <section id="advantage" className="py-24 bg-brand-cream-light relative">
      <div className="container-custom">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl font-black text-brand-primary mb-6 text-center mx-auto">Applied AI Course Advantage</h2>
          <p className="text-xl text-brand-tertiary/80 text-center font-medium max-w-3xl mx-auto">
            Gain a competitive edge through practical learning in the dynamic field of Generative AI. Develop expertise in prompt engineering, LLMs, Agentic frameworks, and Multi Agent systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-3xl p-2 pb-6 shadow-2xl transition-transform group-hover:-translate-y-2">
              <div className="bg-blue-600 rounded-t-2xl py-3 text-center text-white text-sm font-black uppercase tracking-widest mb-4">
                Program Certificate
              </div>
              <div className="px-6">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center p-8 relative">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 pointer-events-none" />
                  <div className="w-full h-full border-4 border-double border-brand-tertiary/20 p-4 flex flex-col items-center justify-between text-center">
                    <div className="w-16 h-16 opacity-40">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png" alt="Logo" className="grayscale" />
                    </div>
                    <div>
                      <h4 className="font-outfit text-2xl font-black text-brand-primary uppercase">Certificate of Completion</h4>
                      <p className="text-[10px] text-brand-tertiary/60 italic">This is to certify that</p>
                      <div className="my-2 border-b-2 border-brand-accent/20 w-48 mx-auto py-1 font-outfit text-xl font-black text-brand-accent italic">Student Name</div>
                      <p className="text-[10px] text-brand-tertiary/60">has successfully completed the program in</p>
                      <p className="text-xs font-black uppercase tracking-wider text-brand-primary mt-1">Applied Generative AI</p>
                    </div>
                    <div className="w-full flex justify-between items-end">
                      <div className="text-[8px] italic text-left">IITM Pravartak<br/>Technologies Foundation</div>
                      <div className="w-12 h-12 bg-black/5 rounded flex items-center justify-center">QR</div>
                      <div className="text-[8px] italic text-right">Director<br/>IIT Madras</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-3xl p-2 pb-6 shadow-2xl transition-transform group-hover:-translate-y-2">
              <div className="bg-gray-100 rounded-t-2xl py-3 text-center text-brand-primary/60 text-sm font-black uppercase tracking-widest mb-4">
                Microsoft Azure Certificate
              </div>
              <div className="px-6">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center p-12">
                   <div className="w-full h-full bg-white shadow-inner p-8 flex flex-col items-center justify-between text-center relative">
                      <div className="absolute top-4 left-4 text-blue-600 font-bold flex items-center gap-1">
                        <span className="text-lg">■</span> Microsoft
                      </div>
                      <div className="mt-8">
                        <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto flex items-center justify-center mb-4">
                           <Globe className="text-blue-600" size={32} />
                        </div>
                        <p className="text-sm font-bold text-gray-800">John Doe</p>
                        <p className="text-[10px] text-gray-500 mb-2">has successfully completed</p>
                        <p className="text-lg font-black text-brand-primary leading-tight">Microsoft Azure AI Fundamentals: Generative AI</p>
                      </div>
                      <div className="text-xs font-bold text-gray-400 mt-4">Satya Nadella</div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-xl font-black text-brand-primary mb-8 border-l-4 border-brand-accent pl-4 uppercase tracking-wider">Partnering With IITM Pravartak</h4>
            <div className="space-y-6">
              {[
                "Earn a program certificate directly from IITM Pravartak Technologies Foundation within 90 days of program completion",
                "Attend masterclasses led by faculty and/or alumni from premier institutes such as IITM and other IITs",
                "Become eligible for a 2-Day campus immersion at IIT Madras Research Park"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-brand-accent">
                    <CheckCircle2 className="text-blue-600 group-hover:text-white" size={14} />
                  </div>
                  <p className="font-bold text-brand-primary/70 leading-relaxed transition-colors group-hover:text-brand-primary">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black text-brand-primary mb-8 border-l-4 border-blue-600 pl-4 uppercase tracking-wider">Collaborating With Microsoft</h4>
            <div className="space-y-6">
              {[
                "Access course completion badges/certificates on the Microsoft Learn portal",
                "Learn Copilot fundamentals and Retrieval Augmented Generation (RAG)"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-blue-600">
                    <CheckCircle2 className="text-blue-600 group-hover:text-white" size={14} />
                  </div>
                  <p className="font-bold text-brand-primary/70 leading-relaxed transition-colors group-hover:text-brand-primary">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
