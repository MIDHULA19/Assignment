import React from 'react';
import { motion } from 'framer-motion';

const Registration: React.FC = () => {
  return (
    <section id="registration" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6 leading-tight">
                  Take the Next Step in Your <span className="text-brand-accent">AI Journey</span>
                </h2>
                <p className="text-xl text-brand-tertiary font-medium mb-8 leading-relaxed">
                  Join a cohort of pioneering professionals and master the most transformative technology of our time. Limited seats available for the upcoming May 2026 intake.
                </p>

                <div className="space-y-6">
                  {[
                    "Direct mentorship from Ottobon experts",
                    "Hands-on projects with production-grade RAG",
                    "Exclusive access to GenAI Pro community",
                    "Career support and networking opportunities"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-lg font-bold text-brand-primary/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-brand-primary/5">
                <h3 className="text-3xl font-black text-brand-primary mb-2">Reserve Your Seat</h3>
                <p className="text-brand-tertiary/60 mb-8 font-bold">Fill in your details to start the application.</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-brand-primary/40">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-brand-cream/30 border border-brand-sage/20 rounded-xl py-4 px-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-brand-primary/40">Work Email</label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-brand-cream/30 border border-brand-sage/20 rounded-xl py-4 px-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all font-bold" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-brand-primary/40">Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" className="w-full bg-brand-cream/30 border border-brand-sage/20 rounded-xl py-4 px-5 focus:ring-2 focus:ring-brand-accent outline-none transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-brand-primary/40">Experience</label>
                      <select className="w-full bg-brand-cream/30 border border-brand-sage/20 rounded-xl py-4 px-5 focus:ring-2 focus:ring-brand-accent outline-none appearance-none cursor-pointer font-bold">
                        <option>2-5 Years</option>
                        <option>5-10 Years</option>
                        <option>10-15 Years</option>
                        <option>15+ Years</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full btn-primary py-5 text-xl font-black shadow-xl group">
                    Submit Interest
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">➔</span>
                  </button>

                  <p className="text-xs text-center text-brand-tertiary/40 font-bold">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
