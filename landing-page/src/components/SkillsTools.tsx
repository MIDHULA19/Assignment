import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const skills = [
  'Python Programming', 'Prompt Engineering', 'Variational Autoencoders',
  'Generative Adversarial Networks', 'LLM Architecture', 'Agentic Frameworks',
  'Developing and Optimizing AI Agents', 'Langchain for Workflow Design', 'GenAI Application Development',
  'MultiAgent systems using MCP', 'LLM Benchmarking', 'Stable Diffusion',
  'Generative AI Governance'
];

type Tool = {
  name: string;
  logo?: string;
  text?: string;
  textStyle?: string;
  imageStyle?: string;
  textOnly?: boolean;
  style?: string;
  isWordmark?: boolean;
  stackText?: boolean;
};

const tools: Tool[] = [
  // Row 1 (6 items)
  { name: 'Azure AI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', imageStyle: 'h-8' },
  { name: 'Microsoft Copilot', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg', imageStyle: 'h-8' },
  { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', text: 'ChatGPT', textStyle: 'font-bold text-gray-900 text-xl tracking-tight ml-2', imageStyle: 'h-8' },
  { name: 'LangChain', logo: 'https://avatars.githubusercontent.com/u/126733250?v=4', text: 'LangChain', textStyle: 'font-bold text-gray-800 text-xl ml-2', imageStyle: 'h-8' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', text: 'python', textStyle: 'text-gray-500 font-medium text-2xl tracking-tighter ml-2', imageStyle: 'h-8' },
  { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', text: 'Hugging Face', textStyle: 'font-bold text-gray-900 text-lg ml-2', imageStyle: 'h-8' },
  
  // Row 2 (6 items)
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', text: 'OpenAI', textStyle: 'font-bold text-black text-2xl tracking-tight ml-2', imageStyle: 'h-9' },
  { name: 'Streamlit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg', text: 'Streamlit', textStyle: 'text-gray-700 font-semibold text-lg ml-2', imageStyle: 'h-6' },
  { name: 'Gradio', logo: 'https://avatars.githubusercontent.com/u/51063788?v=4', text: 'gradio', textStyle: 'text-[#E65C00] font-bold text-2xl ml-2 tracking-tight', imageStyle: 'h-8' },
  { name: 'Gemini', logo: 'https://cdn.worldvectorlogo.com/logos/gemini-1.svg', isWordmark: true, imageStyle: 'h-8' },
  { name: 'DALL·E 2', textOnly: true, text: 'DALL·E 2', style: 'bg-black text-white px-3 py-1 font-bold text-sm tracking-widest' },
  { name: 'Chroma', logo: 'https://avatars.githubusercontent.com/u/108638661?v=4', text: 'Chroma', stackText: true, textStyle: 'text-[10px] font-black text-black tracking-wider mt-1 block', imageStyle: 'h-6' },

  // Row 3 (7 items)
  { name: 'ROUGE', textOnly: true, text: 'ROUGE', style: 'text-gray-600 font-semibold text-2xl uppercase tracking-widest' },
  { name: 'PyPDF', textOnly: true, text: 'PyPDF', style: 'text-[#0B5C2D] font-black text-2xl tracking-tighter' },
  { name: 'Python Imaging Library', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', text: 'Python\nImaging\nLibrary', textStyle: 'text-[9px] font-bold text-gray-700 leading-tight ml-2 whitespace-pre-wrap text-left', imageStyle: 'h-6' },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', text: 'PyTorch', textStyle: 'text-gray-700 font-normal text-xl ml-2', imageStyle: 'h-8' },
  { name: 'Faiss', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', text: 'Faiss', stackText: true, textStyle: 'text-[12px] font-bold text-gray-800 mt-1 block', imageStyle: 'h-5' },
  { name: 'Stable Diffusion', logo: 'https://avatars.githubusercontent.com/u/100555041?v=4', imageStyle: 'h-8' },
  { name: 'Diffusers', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', text: 'Diffusers', textStyle: 'font-bold text-black text-lg ml-2', imageStyle: 'h-8' }
];

const ToolItem = ({ tool }: { tool: Tool }) => {
  if (tool.textOnly) {
    return <div className={`flex items-center justify-center ${tool.style}`}>{tool.text}</div>;
  }

  if (tool.isWordmark && tool.logo) {
    return <img src={tool.logo} alt={tool.name} className={tool.imageStyle} referrerPolicy="no-referrer" />;
  }

  if (tool.stackText && tool.logo) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <img src={tool.logo} alt={tool.name} className={tool.imageStyle} referrerPolicy="no-referrer" />
        {tool.text && <span className={tool.textStyle}>{tool.text}</span>}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {tool.logo && <img src={tool.logo} alt={tool.name} className={tool.imageStyle} referrerPolicy="no-referrer" />}
      {tool.text && <span className={tool.textStyle}>{tool.text}</span>}
    </div>
  );
};

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
                  <BadgeCheck className="text-blue-500 group-hover:text-white" size={16} />
                </div>
                <span className="font-bold text-brand-primary/80 group-hover:text-brand-accent transition-colors">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 w-full max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-16 text-left">
            19+ Tools Covered
          </h2>
          <div className="flex flex-col gap-16 w-full items-center px-2">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-between items-center w-full">
              {tools.slice(0, 6).map((tool, i) => (
                <motion.div key={`r1-${i}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center justify-center shrink-0">
                  <ToolItem tool={tool} />
                </motion.div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex flex-wrap justify-between items-center w-full">
              {tools.slice(6, 12).map((tool, i) => (
                <motion.div key={`r2-${i}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center justify-center shrink-0">
                  <ToolItem tool={tool} />
                </motion.div>
              ))}
            </div>
            {/* Row 3 */}
            <div className="flex flex-wrap justify-between items-center w-full">
              {tools.slice(12, 19).map((tool, i) => (
                <motion.div key={`r3-${i}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center justify-center shrink-0">
                  <ToolItem tool={tool} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTools;
