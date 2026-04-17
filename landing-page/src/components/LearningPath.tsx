import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: 'AGS AI: Program Induction',
    desc: 'Kickstart your journey with our Applied Generative Specialization Program, covering all essential concepts in the generative AI domain. This unique course is designed to elevate your career.',
    items: ['Program overview', 'LMS Orientation', 'Community guidelines']
  },
  { id: 2, title: 'AGS AI: Python Refresher with AI (Optional)', desc: 'Fundamental Python concepts tailored for AI development.', items: ['NumPy', 'Pandas', 'Basic OOP'] },
  { id: 3, title: 'AGS AI: AI Literacy', desc: 'Understanding the fundamentals of AI and its history.', items: ['AI vs ML vs DL', 'Neural Networks basics'] },
  { id: 4, title: 'AGS AI: Advanced Generative AI: Models and Architecture', desc: 'Deep dive into Transformer models and Attention mechanisms.', items: ['Transformers', 'BERT', 'GPT Architecture'] },
  { id: 5, title: 'AGS AI: Advanced Generative AI: Building LLM Applications', desc: 'Practical deployment of LLM-based solutions.', items: ['Prompt Engineering', 'Vector DBs', 'RAG implementation'] },
  {
    id: 6,
    title: 'AGS AI: Advanced Generative AI: Agentic frameworks with Model Context & Tooling Protocols',
    desc: 'Developing autonomous AI agents using the latest frameworks.',
    items: [
      'Introduction to Agentic AI and Key Characteristics',
      'LLM Agent Architecture: Perception, Cognitive Engine, and Action Modules',
      'Multi-agent systems using MCP'
    ]
  },
];

const LearningPath: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="details" className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-black text-brand-primary mb-12">Program Details</h2>

        <div className="mb-16">
          <p className="text-xl text-brand-tertiary/80 leading-relaxed font-medium max-w-4xl">
            Explore our advanced Applied Generative AI course to deploy cutting-edge techniques in real-world scenarios. Master GANs, VAEs, and Agentic frameworks while utilizing tools like ChatGPT, DALL-E 2, and Hugging Face. Develop LLM applications using MCP, Multi-agent systems, and RAG applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Timeline Left */}
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-black text-brand-primary mb-8 uppercase tracking-tight">Learning Path</h3>
            <div className="space-y-4">
              {modules.map((mod) => (
                <div key={mod.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpenId(openId === mod.id ? null : mod.id)}
                    className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openId === mod.id ? 'bg-brand-cream/10' : 'bg-white'}`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${openId === mod.id ? 'bg-brand-accent text-white' : 'bg-gray-100 text-brand-primary/40'}`}>
                        {mod.id}
                      </div>
                      <span className={`text-lg font-black transition-colors ${openId === mod.id ? 'text-brand-accent' : 'text-brand-primary'}`}>
                        {mod.title}
                      </span>
                    </div>
                    {openId === mod.id ? <ChevronUp className="text-brand-accent" /> : <ChevronDown className="text-gray-400" />}
                  </button>

                  <AnimatePresence>
                    {openId === mod.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 ml-14 border-t border-gray-50 bg-brand-cream/5">
                          <p className="text-brand-tertiary font-bold mb-6 pt-4 leading-relaxed">{mod.desc}</p>
                          <ul className="space-y-3">
                            {mod.items.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-brand-primary/80 font-bold">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Right */}
          <div className="lg:col-span-4 sticky top-32">
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white border-2 border-brand-cream shadow-2xl rounded-3xl p-8 flex items-center justify-between group overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-accent/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <div className="relative z-10">
                  <p className="text-xs font-black text-brand-tertiary/40 uppercase tracking-widest mb-1">Contact Us</p>
                  <div className="text-2xl font-black text-brand-primary">1800-212-7688</div>
                  <p className="text-[10px] font-bold text-brand-tertiary/60">(Toll Free)</p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
              </div>

              {/* Sidebar Form */}
              <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8">
                <h4 className="text-2xl font-black text-brand-primary mb-2 text-center">Request More Information</h4>
                <p className="text-sm font-bold text-brand-tertiary/40 text-center mb-8 uppercase tracking-widest">Get program details instantly</p>

                <form className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-brand-primary/40">Name*</label>
                    <input type="text" className="w-full border-b-2 border-gray-100 py-2 focus:border-brand-accent outline-none transition-colors font-bold" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-brand-primary/40">Email*</label>
                    <input type="email" className="w-full border-b-2 border-gray-100 py-2 focus:border-brand-accent outline-none transition-colors font-bold" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-brand-primary/40">Phone Number*</label>
                    <div className="flex gap-2">
                      <select className="border-b-2 border-gray-100 py-2 outline-none font-bold">
                        <option>IN +91</option>
                      </select>
                      <input type="tel" className="w-full border-b-2 border-gray-100 py-2 focus:border-brand-accent outline-none transition-colors font-bold" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase text-brand-primary/40">Inquiry for:</p>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 font-bold text-sm cursor-pointer">
                        <input type="radio" name="target" defaultChecked className="accent-brand-accent" /> Myself
                      </label>
                      <label className="flex items-center gap-2 font-bold text-sm cursor-pointer">
                        <input type="radio" name="target" className="accent-brand-accent" /> My Company
                      </label>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-brand-primary/40">Total Work Experience (in years)*</label>
                    <select className="w-full border-b-2 border-gray-100 py-3 outline-none font-bold appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjOWE5YTk5IiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_0px_center]">
                      <option>Choose Experience</option>
                      <option>0-2 Years</option>
                      <option>2-5 Years</option>
                      <option>5+ Years</option>
                    </select>
                  </div>

                  <button className="w-full bg-blue-600 text-white rounded-xl py-4 font-black text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                    Request Info
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
