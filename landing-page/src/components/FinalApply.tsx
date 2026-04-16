import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Certificate from IITM Pravartak Technologies Foundation',
  'Attend a 2-day campus immersion at IIT Madras Research Park',
  '80+ hours of curriculum delivered in live online classes',
  'Build, optimize, and deploy custom AI Agents using MCP',
  'Exposure to ChatGPT, Azure AI Studio, Copilot, & more'
];

const FinalApply: React.FC = () => {
  return (
    <section id="final-apply" className="py-24 bg-white relative">
      <div className="container-custom">
        <h3 className="text-4xl font-black text-brand-primary mb-16">Apply Now</h3>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
           {/* Form Left */}
           <div className="bg-white border-2 border-brand-cream-light shadow-2xl rounded-[32px] p-10 lg:p-14">
              <h4 className="text-2xl font-black text-brand-primary mb-8 border-b-2 border-brand-cream/20 pb-4">Start Application</h4>
              
              <form className="space-y-8">
                 <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-brand-primary/40 tracking-widest">Name*</label>
                    <input type="text" className="w-full border-b-2 border-gray-100 py-3 focus:border-blue-600 outline-none transition-colors font-bold text-lg" />
                 </div>
                 <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-brand-primary/40 tracking-widest">Email*</label>
                    <input type="email" className="w-full border-b-2 border-gray-100 py-3 focus:border-blue-600 outline-none transition-colors font-bold text-lg" />
                 </div>
                 <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-brand-primary/40 tracking-widest">Phone Number*</label>
                    <div className="flex gap-4">
                       <select className="border-b-2 border-gray-100 py-3 cursor-pointer outline-none font-bold">
                          <option>IN +91</option>
                       </select>
                       <input type="tel" className="w-full border-b-2 border-gray-100 py-3 focus:border-blue-600 outline-none transition-colors font-bold text-lg" />
                    </div>
                 </div>
                 <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-brand-primary/40 tracking-widest">Total Work Experience (in years)*</label>
                    <select className="w-full border-b-2 border-gray-100 py-4 outline-none font-bold appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjOWE5YTk5IiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_0px_center]">
                       <option>Choose Experience</option>
                       <option>0-2 Years</option>
                       <option>2-5 Years</option>
                       <option>5+ Years</option>
                    </select>
                 </div>

                 <div className="flex items-start gap-3">
                    <input type="checkbox" id="consent" className="mt-1 accent-blue-600 w-4 h-4" defaultChecked />
                    <label htmlFor="consent" className="text-xs font-bold text-brand-tertiary/60 leading-relaxed cursor-pointer">
                       By providing your contact details, you agree to our <a href="#" className="text-blue-600 underline">Privacy Policy</a>
                    </label>
                 </div>

                 <button className="w-full btn-outline border-blue-600 text-blue-600 py-5 rounded-xl font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-blue-600/10">
                    Proceed
                 </button>
              </form>
           </div>

           {/* Benefits Right */}
           <div className="lg:pt-14">
              <h4 className="text-2xl font-black text-brand-primary mb-10 tracking-tight">Program Benefits</h4>
              <div className="space-y-8">
                 {benefits.map((benefit, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-center gap-6 group"
                    >
                       <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                          <CheckCircle2 className="text-blue-600 group-hover:text-white" size={24} />
                       </div>
                       <span className="text-lg font-black text-brand-primary/80 group-hover:text-brand-primary transition-colors leading-snug">
                          {benefit}
                       </span>
                    </motion.div>
                 ))}
              </div>

              <div className="mt-16 p-8 bg-brand-cream-light rounded-[32px] border border-brand-cream relative overflow-hidden group">
                 <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <p className="text-sm font-black text-brand-tertiary/40 uppercase tracking-widest mb-2">Need Help?</p>
                 <div className="text-2xl font-black text-brand-primary mb-4 italic">Request a callback from our experts</div>
                 <button className="text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Get a Call <span className="text-xl">➔</span>
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FinalApply;
