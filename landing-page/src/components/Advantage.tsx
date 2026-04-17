import React from 'react';
import { BadgeCheck } from 'lucide-react';
import CertificateGallery from './CertificateGallery';

const Advantage: React.FC = () => {
  return (
    <section id="advantage" className="py-24 bg-brand-cream-light relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-primary mb-6 text-center mx-auto uppercase tracking-tighter">Applied AI Course Advantage</h2>
          <p className="text-lg sm:text-xl text-brand-tertiary/80 text-center font-medium max-w-3xl mx-auto italic">
            Gain a competitive edge through practical learning in the dynamic field of Generative AI. Develop expertise in prompt engineering, LLMs, Agentic frameworks, and Multi Agent systems.
          </p>
        </div>

        {/* Dynamic Certificate Gallery Replaces Static Cards */}
        <div className="mb-24">
          <CertificateGallery />
        </div>

        <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-brand-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

          <h4 className="text-2xl font-black text-brand-primary mb-8 border-l-4 border-brand-accent pl-5 uppercase tracking-wider">
            Advantage Ottobon
          </h4>

          <div className="space-y-6 relative z-10">
            {[
              "Earn a program certificate directly from Ottobon within 90 days of program completion",
              "Attend masterclasses led by faculty and/or alumni from Ottobon",
              "Become eligible for a 2-Day campus immersion at Ottobon HQ"
            ].map((text, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-brand-accent">
                  <BadgeCheck className="text-blue-600 group-hover:text-white" size={16} />
                </div>
                <p className="font-bold text-brand-primary/80 leading-relaxed transition-colors group-hover:text-brand-primary text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
