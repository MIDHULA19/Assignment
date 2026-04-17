import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Globe2 } from 'lucide-react';

const MarketContext: React.FC = () => {
  return (
    <section id="overview" className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl font-black text-brand-primary mb-6">Industry Trends</h2>
          <p className="text-xl text-brand-tertiary/80 leading-relaxed font-medium">
            Generative AI, at the forefront of technological innovation, is witnessing exciting trends that shape its trajectory in diverse domains. The evolution of language models, like GPT-4, showcases advancements in natural language generation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              label: 'Expected Generative AI Market Size By 2030',
              val: '$667.9 Bn',
              icon: TrendingUp,
              source: 'Source: Fortune Business',
              color: 'text-blue-600',
              bg: 'bg-blue-50'
            },
            {
              label: "The Global Gen AI Market's Projected Annual Growth Rate From 2023-2030",
              val: '24.4%',
              icon: BarChart3,
              source: 'Source: Statista',
              color: 'text-brand-accent',
              bg: 'bg-brand-accent/5'
            },
            {
              label: 'Expected Value Added By Generative AI To The Global Economy Annually',
              val: '$4.4 Tn',
              icon: Globe2,
              source: 'Source: Mckinsey',
              color: 'text-green-600',
              bg: 'bg-green-50'
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-100/50 relative group"
            >
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-black text-brand-primary mb-3">{stat.val}</div>
              <p className="text-sm font-bold text-brand-tertiary/60 mb-6 leading-relaxed">{stat.label}</p>
              <div className="text-[10px] uppercase tracking-widest font-black text-brand-tertiary/40">{stat.source}</div>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-black text-brand-primary mb-12 uppercase tracking-tight">Companies Hiring</h3>
          <div className="grid grid-cols-2 lg:grid-cols-7 gap-y-16 gap-x-12 items-center">
            {[
              { name: 'NVIDIA', logo: 'https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg' },
              { name: 'OpenAI', logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
              { name: 'Netflix', logo: 'https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg' },
              { name: 'Google', logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg' },
              { name: 'Microsoft', logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' },
              { name: 'IBM', logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg' },
              { name: 'LinkedIn', logo: 'https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg' },
              { name: 'Apple', logo: 'https://www.vectorlogo.zone/logos/apple/apple-ar21.svg' },
              { name: 'Amazon', logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg' },
              { name: 'EY', logo: 'https://www.vectorlogo.zone/logos/ey/ey-ar21.svg' },
              { name: 'Deloitte', logo: 'https://cdn.worldvectorlogo.com/logos/deloitte-2.svg' },
              { name: 'Accenture', logo: 'https://www.vectorlogo.zone/logos/accenture/accenture-ar21.svg' },
              { name: 'BOSCH', logo: 'https://cdn.worldvectorlogo.com/logos/bosch.svg' },
              { name: 'SIEMENS', logo: 'https://www.vectorlogo.zone/logos/siemens/siemens-ar21.svg' },
            ].map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 relative group cursor-pointer"
              >
                <img src={company.logo} alt={company.name} className="h-8 md:h-10 w-auto object-contain pointer-events-none" />
                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none whitespace-nowrap z-10 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-brand-primary drop-shadow-md">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketContext;
