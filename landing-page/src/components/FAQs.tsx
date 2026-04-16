import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { 
    q: 'How long does it take to complete the Advanced Executive Program in Applied Generative AI?', 
    a: 'The anticipated time to complete the Advanced Executive Program in Applied Generative AI is 4 months.' 
  },
  { 
    q: 'Who will be the faculty for this Applied Generative AI course?', 
    a: 'The program is led by distinguished faculty from IIT Madras (Pravartak Technologies Foundation) along with industry practitioners who are experts in GenAI architecture and multi-agent systems.' 
  },
  { 
    q: 'What certificate will I receive after completing this Applied Generative AI course?', 
    a: 'Upon successful completion, you will receive a prestigious "Certificate of Completion" from IIT Madras Pravartak Technologies Foundation and a Microsoft Azure AI Fundamentals certificate.' 
  },
  { 
    q: 'What are the eligibility requirements for this Applied Generative AI course?', 
    a: 'Candidates should have a Bachelor’s degree with at least 50% marks and a basic understanding of programming. 2+ years of professional experience is preferred.' 
  },
  { 
    q: 'What industries benefit the most from using Generative AI?', 
    a: 'While all industries are being transformed, key sectors already seeing massive impact include IT/Software, Finance, Healthcare, Manufacturing, and Creative Arts/Marketing.' 
  },
  { 
    q: 'What are the future trends and developments in RAG technology?', 
    a: 'Future trends include Long-context RAG, Multimodal RAG (processing images and video alongside text), and Agentic RAG where autonomous agents proactively retrieve and process information.' 
  }
];

const FAQs: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-brand-cream/5 relative">
      <div className="container-custom">
        <h3 className="text-4xl font-black text-brand-primary mb-16">Applied Gen AI Course FAQs</h3>
        
        <div className="max-w-4xl space-y-4">
           {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                 <button 
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left transition-colors"
                 >
                    <span className={`text-lg font-black transition-colors ${openIdx === i ? 'text-brand-accent' : 'text-brand-primary'}`}>
                       {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center shrink-0 transition-transform ${openIdx === i ? 'rotate-180 bg-brand-accent text-white border-brand-accent' : 'text-gray-400'}`}>
                       {openIdx === i ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                 </button>
                 
                 <AnimatePresence>
                    {openIdx === i && (
                       <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                       >
                          <div className="p-8 pt-0 border-t border-gray-50 text-brand-tertiary font-bold leading-relaxed">
                             {faq.a}
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           ))}
        </div>

        <div className="mt-12 text-center">
           <button className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] border-b-2 border-blue-600/20 hover:border-blue-600 transition-all pb-1">
              View More
           </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
