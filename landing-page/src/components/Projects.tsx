import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Crafting an AI powered HR Assistant',
    desc: "Develop a virtual assistant designed to answer queries related to Nestle's HR policy. Leverage Python libraries and OpenAI's GPT model for accurate and efficient query responses.",
    tags: ['Python', 'OpenAI', 'GPT']
  },
  {
    id: 2,
    title: 'Building a Creative Logo Designer',
    desc: "Use OpenAI's DALL-E and Gradio UI to develop an innovative logo builder. The app creates unique and stunning logos from text prompts, revolutionizing the logo design process.",
    tags: ['DALL-E', 'Gradio', 'UI/UX']
  },
  {
    id: 3,
    title: 'Chat GPT Based Storytelling',
    desc: "Create an interactive storytelling experience using ChatGPT to generate dynamic, engaging narratives without any coding or technical setup.",
    tags: ['ChatGPT', 'NLP', 'Storytelling']
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-brand-cream/10 relative">
      <div className="container-custom">
        <h3 className="text-3xl font-black text-brand-primary mb-12">Industry Projects</h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((proj, i) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col group"
            >
              <div className="bg-brand-cream/20 p-6 border-b border-gray-50 group-hover:bg-blue-50 transition-colors">
                <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-2 block">Project {proj.id}</span>
                <h4 className="text-xl font-black text-brand-primary leading-tight group-hover:text-blue-600 transition-colors">{proj.title}</h4>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-brand-tertiary/80 font-medium leading-relaxed mb-6">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-black text-brand-tertiary/60 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                 <button className="w-full py-3 border-2 border-brand-cream rounded-xl font-black text-sm text-brand-primary hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all">
                    View Case Study
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-brand-tertiary/40 font-bold italic text-center">
          Disclaimer - The projects have been built leveraging real publicly available datasets from organizations.
        </p>
      </div>
    </section>
  );
};

export default Projects;
