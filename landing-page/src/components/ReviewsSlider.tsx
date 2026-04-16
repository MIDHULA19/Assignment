import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: 'Malarvizhi C.',
    role: 'Assistant Professor, Bangalore',
    text: 'Gaining hands-on exposure to Generative AI through this program helped me understand real-world applications and bridge my knowledge gaps. It significantly boosted my confidence and made me feel more prepared to step into opportunities in the IT field.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Saumitra Mani Tiwari',
    role: 'SAP Manager, Noida',
    text: 'Honestly, the learning experience was amazing. The sessions were highly interactive, and the trainers made complex Generative AI concepts easy to understand. The hands-on practice labs were a game changer, giving real exposure to how things work.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
  }
];

const ReviewsSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % reviews.length);
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="container-custom">
        <h3 className="text-4xl font-black text-brand-primary mb-16">Learner Reviews</h3>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((rev, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white border-2 border-brand-cream/20 hover:border-brand-accent/30 transition-all rounded-[32px] p-8 shadow-xl shadow-gray-50 flex flex-col"
            >
               <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                     <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h4 className="text-xl font-black text-brand-primary">{rev.name}</h4>
                     <p className="text-sm font-bold text-brand-tertiary/40 mb-2">{rev.role}</p>
                     <div className="flex gap-2">
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors"><ExternalLink size={18} /></a>
                        <div className="flex text-yellow-400">
                           {[...Array(rev.stars)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                        </div>
                     </div>
                  </div>
               </div>
               
               <p className="text-brand-tertiary font-medium leading-relaxed italic">
                  "{rev.text}"
               </p>
               
               <div className="mt-8 pt-6 border-t border-gray-50 group flex items-center justify-between">
                  <span className="text-[10px] font-black text-brand-tertiary/20 uppercase tracking-widest">Verified Alumnus</span>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs">SL</div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Slider Controls (Mobile Only or additional indicator) */}
        <div className="flex justify-center mt-12 gap-4 lg:hidden">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-accent transition-all">
             <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2 items-center">
             <div className="h-1.5 w-8 bg-brand-accent rounded-full" />
             <div className="h-1.5 w-2 bg-gray-200 rounded-full" />
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-accent transition-all">
             <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
