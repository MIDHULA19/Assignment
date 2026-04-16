import React from 'react';
import { Mail, Phone, Link, Globe, Share2, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-5">
            <div className="text-3xl font-black tracking-tighter mb-8 italic">
              GEN<span className="text-brand-accent">AI</span> PRO
            </div>
            <p className="text-white/60 text-lg font-medium max-w-md mb-8 leading-relaxed">
              Empowering global professionals with industry-leading Generative AI education in collaboration with IIT Madras.
            </p>
            <div className="flex gap-4">
              {[Link, Globe, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-brand-sage">Program</h4>
            <ul className="space-y-4 text-white/70 font-bold">
              <li><a href="#highlights" className="hover:text-brand-accent flex items-center gap-1 group">Highlights <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#curriculum" className="hover:text-brand-accent flex items-center gap-1 group">Curriculum <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#advisors" className="hover:text-brand-accent flex items-center gap-1 group">Advisors <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#" className="hover:text-brand-accent flex items-center gap-1 group">Admissions <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-brand-sage">Company</h4>
            <ul className="space-y-4 text-white/70 font-bold">
              <li><a href="#" className="hover:text-brand-accent">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent">Careers</a></li>
              <li><a href="#" className="hover:text-brand-accent">Partnerships</a></li>
              <li><a href="#" className="hover:text-brand-accent">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-brand-sage">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-brand-accent" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Email Us</div>
                  <div className="font-bold">admissions@genaipro.edu</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-brand-accent" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Call Us</div>
                  <div className="font-bold">+91 1800 123 4567</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-widest">
          <p>© 2026 GENAI PRO EXECUTIVE EDUCATION. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
