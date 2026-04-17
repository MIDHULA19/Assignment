import React from 'react';
import { Users, Star, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const stats = [
    { icon: <Users />, label: 'Learners Trained', value: '1.2M+' },
    { icon: <Star />, label: 'Avg Rating', value: '4.8/5' },
    { icon: <Globe />, label: 'Top Companies', value: '2500+' },
    { icon: <TrendingUp />, label: 'Salary Hike', value: '45% Avg' },
  ];

  const highlights = [
    {
      title: 'Ottobon Certification',
      desc: 'Earn a prestigious certificate from Ottobon.',
      color: 'bg-brand-sage'
    },
    {
      title: '70+ Hours of Live Learning',
      desc: 'Interactive sessions led by industry experts and Ottobon faculty specializing in Generative AI.',
      color: 'bg-brand-accent'
    },
    {
      title: '25+ Hands-on Projects',
      desc: 'Apply your learning to real-world scenarios including Multi-Agent systems and fine-tuning LLMs.',
      color: 'bg-brand-tertiary'
    },
    {
      title: 'Career Support Services',
      desc: 'Resume building, interview prep, and exclusive networking opportunities with top AI recruiters.',
      color: 'bg-brand-primary'
    }
  ];

  return (
    <section id="highlights" className="bg-white">
      {/* Stats Bar */}
      <div className="bg-brand-cream-light py-10 border-y border-brand-cream/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="text-brand-accent mb-1">{stat.icon}</div>
                <div className="text-3xl font-black text-brand-primary">{stat.value}</div>
                <div className="text-sm font-bold text-brand-primary/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="section-padding container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Why This Program?</h2>
          <div className="h-1.5 w-24 bg-brand-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative bg-brand-cream-light p-8 rounded-2xl border border-brand-cream transition-all duration-300 hover:shadow-2xl hover:border-brand-accent"
            >
              <div className={`w-12 h-12 ${h.color} rounded-xl mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight text-brand-primary">{h.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
