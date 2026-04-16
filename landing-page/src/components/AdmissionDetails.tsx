import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ClipboardList, Wallet, Rocket } from 'lucide-react';

const steps = [
  { 
    id: 1, 
    title: 'Submit Application', 
    desc: 'Complete the application by providing the required details about yourself.',
    icon: ClipboardList,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  { 
    id: 2, 
    title: 'Reserve Your Seat', 
    desc: 'Complete the program fee payment via the Secure Your Seat option.',
    icon: Wallet,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  { 
    id: 3, 
    title: 'Start Learning', 
    desc: 'Start your program on the designated cohort start date.',
    icon: Rocket,
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
];

const criteria = [
  'Have a bachelor\'s degree with an average of 50 percent or higher marks',
  'Have a basic understanding of programming concepts and mathematics',
  'Preferably, have 2+ years of professional experience'
];

const AdmissionDetails: React.FC = () => {
  return (
    <section id="admission" className="py-24 bg-white relative">
      <div className="container-custom">
        <h3 className="text-4xl font-black text-brand-primary mb-12">Admission Details</h3>
        
        <div className="mb-20">
           <h4 className="text-2xl font-black text-brand-primary mb-2">Application Process</h4>
           <p className="text-xl text-brand-tertiary/60 font-medium mb-12 max-w-3xl leading-relaxed">
              The application process consists of three simple steps. Upon selection, candidates will receive an offer of admission, which they can secure by remitting the admission fee.
           </p>
           
           <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-100 rounded-[32px] p-10 hover:shadow-2xl hover:-translate-y-2 transition-all group"
                >
                   <div className={`w-14 h-14 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                      <step.icon size={28} />
                   </div>
                   <div className="text-[10px] font-black text-brand-tertiary/30 uppercase tracking-[0.2em] mb-4">Step {step.id}</div>
                   <h5 className="text-2xl font-black text-brand-primary mb-4 leading-tight">{step.title}</h5>
                   <p className="text-brand-tertiary font-bold leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>

        <div>
           <h4 className="text-2xl font-black text-brand-primary mb-8 underline decoration-brand-accent decoration-4 underline-offset-8">Eligibility Criteria</h4>
           <p className="text-lg text-brand-tertiary/60 font-medium mb-12">For admission to this Executive Program in Applied Generative AI, candidates should:</p>
           
           <div className="grid md:grid-cols-3 gap-8">
              {criteria.map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-cream/10 border border-brand-cream rounded-2xl p-8 flex items-start gap-4"
                >
                   <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={20} />
                   <p className="text-brand-primary font-black leading-relaxed">{text}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionDetails;
