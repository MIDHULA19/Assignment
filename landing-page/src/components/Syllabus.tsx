import React, { useState } from 'react';
import { Plus, CheckCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const modules = [
  {
    title: "Foundations of Generative AI",
    subtitle: "Understanding the core architecture and GPT models",
    lessons: ["The Transformer Revolution", "Attention Mechanisms", "RLHF & Prompting", "Tokens & Architectures"]
  },
  {
    title: "Advanced Retrieval Augmented Generation (RAG)",
    subtitle: "Building intelligent document recovery systems",
    lessons: ["Vector Databases (Pinecone/Milvus)", "Hybrid Search Strategies", "GraphRAG & Knowledge Graphs", "Production Deployment"]
  },
  {
    title: "Multi-Agent Systems & MCP",
    subtitle: "Designing autonomous agent networks",
    lessons: ["AutoGen & CrewAI Frameworks", "Standard MCP protocols", "Task Decomposition", "Error Correction Agents"]
  },
  {
    title: "Fine-tuning & Deployment",
    subtitle: "Customizing LLMs for specific domains",
    lessons: ["LoRA & QLoRA Techniques", "Dataset Curation", "Quantization", "vLLM & TGI Hosting"]
  }
];

const Syllabus: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="curriculum" className="section-padding bg-brand-cream-light">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Inside the Curriculum</h2>
          <p className="text-gray-600 max-w-2xl font-medium">A high-impact 4-month journey designed to take you from AI literate to Generative AI Expert.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Module List */}
          <div className="lg:col-span-12 space-y-4">
            {modules.map((m, i) => (
              <div 
                key={i} 
                className={`group cursor-pointer rounded-2xl border-2 transition-all duration-300 ${activeTab === i ? 'bg-white border-brand-accent shadow-xl' : 'bg-white/50 border-transparent hover:border-brand-sage'}`}
                onClick={() => setActiveTab(i)}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl transition-colors ${activeTab === i ? 'bg-brand-accent text-white' : 'bg-brand-sage text-white'}`}>
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold transition-colors ${activeTab === i ? 'text-brand-primary' : 'text-gray-500'}`}>{m.title}</h3>
                      <p className="text-gray-400 font-bold text-sm uppercase tracking-wider">{m.subtitle}</p>
                    </div>
                  </div>
                  <div className={`transition-transform duration-300 ${activeTab === i ? 'rotate-180 text-brand-accent' : 'text-gray-300'}`}>
                    <Plus size={24} />
                  </div>
                </div>

                <AnimatePresence>
                  {activeTab === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pt-2 ml-20 grid md:grid-cols-2 gap-4">
                        {m.lessons.map((lesson, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-gray-700 font-semibold group-hover:text-brand-primary transition-colors">
                            <CheckCircle size={18} className="text-brand-sage" />
                            {lesson}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button className="btn-outline border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white px-12 py-5 text-xl flex items-center gap-3">
            Download Full Program Details <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
