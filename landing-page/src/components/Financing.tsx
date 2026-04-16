import { ShieldCheck, ArrowRight } from 'lucide-react';

const Financing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-cream-light relative overflow-hidden">
      <div className="container-custom relative z-10">
        <h3 className="text-4xl font-black text-brand-primary mb-12">Admission Fee & Financing</h3>
        <p className="text-xl text-brand-tertiary/60 font-medium mb-16 max-w-3xl leading-relaxed">
           The admission fee for this program is ₹1,40,000 (Incl. taxes). We are dedicated to making our programs accessible and committed to helping you find a way to budget for this program.
        </p>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
           {/* Total Fee Card */}
           <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-[32px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500" />
              <div className="bg-white rounded-[32px] p-12 shadow-2xl border border-gray-100 flex flex-col items-center justify-center text-center">
                 <div className="text-[10px] font-black text-brand-tertiary/40 uppercase tracking-[0.2em] mb-4">Total Program Fee</div>
                 <div className="text-6xl font-black text-brand-primary mb-2">₹1,40,000</div>
                 <p className="text-xs font-bold text-brand-tertiary/60">(Incl. Taxes)</p>
                 <div className="mt-8 pt-8 border-t border-gray-50 w-full">
                    <div className="flex items-center justify-center gap-2 text-emerald-600 font-black uppercase text-xs tracking-widest">
                       <ShieldCheck size={16} /> 100% Secure Payment
                    </div>
                 </div>
              </div>
           </div>

           {/* Financing Options */}
           <div className="lg:col-span-7">
              <div className="bg-white/50 backdrop-blur-sm rounded-[32px] p-10 lg:p-14 border border-white">
                 <h4 className="text-2xl font-black text-brand-primary mb-8 underline decoration-blue-600 decoration-4 underline-offset-8">Financing Options</h4>
                 <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
                    <div>
                       <div className="text-[10px] font-black text-brand-tertiary/40 uppercase tracking-[0.2em] mb-2">Pay In Installments, as low as</div>
                       <div className="text-4xl font-black text-brand-primary">₹6,269<span className="text-lg text-brand-tertiary/60 font-bold">/month</span></div>
                    </div>
                    <div className="h-16 w-[1px] bg-gray-200 hidden md:block mx-8" />
                    <div className="flex gap-8 items-center grayscale opacity-80">
                       {['ShopSe', 'propelld', 'fibe'].map((partner, i) => (
                          <div key={i} className="text-2xl font-black text-brand-primary tracking-tighter italics">{partner}</div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="flex flex-wrap gap-6 items-center">
                    <button className="bg-blue-600 text-white rounded-xl px-10 py-5 font-black text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-3 group">
                       Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a href="#" className="text-sm font-black text-blue-600 underline decoration-2 underline-offset-4 uppercase tracking-widest hover:text-blue-800 transition-colors">
                       Learn More
                    </a>
                    <div className="ml-auto text-sm font-black text-brand-primary/40 uppercase tracking-widest">
                       Admission Closes on: <span className="text-brand-accent">21st April</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Financing;
