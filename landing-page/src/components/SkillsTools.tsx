import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  'Python Programming', 'Prompt Engineering', 'Variational Autoencoders',
  'Generative Adversarial Networks', 'LLM Architecture', 'Agentic Frameworks',
  'Developing and Optimizing AI Agents', 'Langchain for Workflow Design', 'GenAI Application Development',
  'MultiAgent systems using MCP', 'LLM Benchmarking', 'Stable Diffusion',
  'Generative AI Governance'
];

const tools = [
  { name: 'Microsoft Copilot', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg' },
  { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'LangChain', logo: 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png' },
  { name: 'Python', logo: 'https://www.vectorlogo.zone/logos/python/python-official.svg' },
  { name: 'Hugging Face', logo: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg' },
  { name: 'OpenAI', logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
  { name: 'Streamlit', logo: 'https://raw.githubusercontent.com/streamlit/streamlit/develop/lib/streamlit/static/favicon.png' },
  { name: 'Gradio', logo: 'https://raw.githubusercontent.com/gradio-app/gradio-app/main/guides/assets/logo.png' },
  { name: 'Gemini', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002.svg' },
  { name: 'DALL·E 2', logo: 'https://openai.com/favicon.ico' },
  { name: 'Chroma', logo: 'https://raw.githubusercontent.com/chroma-core/chroma/main/docs/static/img/chroma.png' },
  { name: 'PyTorch', logo: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg' },
  { name: 'Faiss', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Diffusers', logo: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg' },
  { name: 'ROUGE', isText: true },
  { name: 'PyPDF', isText: true },
  { name: 'PIL', isText: true },
  { name: 'Stable Diffusion', logo: 'https://raw.githubusercontent.com/Stability-AI/stablediffusion/main/assets/stable-diffusion-logo.png' },
  { name: 'Azure AI', logo: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg' }
];

const SkillsTools: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="mb-24">
          <h3 className="text-3xl font-black text-brand-primary mb-12 flex items-center gap-4">
            13+ Skills Covered
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-colors">
                  <CheckCircle2 className="text-blue-500 group-hover:text-white" size={16} />
                </div>
                <span className="font-bold text-brand-primary/80 group-hover:text-brand-accent transition-colors">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-black text-brand-primary mb-12 flex items-center gap-4">
            19+ Tools Covered
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center bg-gray-50/30 p-12 rounded-[40px] border border-gray-100">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center justify-center gap-4 group cursor-help w-full"
              >
                {tool.logo ? (
                  <div className="h-12 w-full flex items-center justify-center transition-all duration-500 hover:scale-110">
                    <img src={tool.logo} alt={tool.name} className="max-h-full max-w-full object-contain" />
                  </div>
                ) : (
                  <div className="h-12 flex items-center justify-center">
                    <span className="text-xl font-black text-brand-primary/40 uppercase tracking-tighter group-hover:text-brand-accent transition-colors">{tool.name}</span>
                  </div>
                )}
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  {tool.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTools;
