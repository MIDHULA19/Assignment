import { Calendar, Clock, Monitor, ArrowRight } from 'lucide-react';

const cohorts = [
  { id: 1, name: 'AG May 2026 cohort 12', induction: '21 Apr, 2026', time: '19:00 IST', classes: '16 May, 2026 - 11 Oct, 2026', classTime: '19:00 - 22:00 IST', type: 'Weekend Sa Su', seats: 'Limited Seats Left' }
];

const Cohorts: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <h3 className="text-4xl font-black text-brand-primary mb-12">Program Cohorts</h3>
        
        <div className="bg-brand-cream-light/30 border border-gray-100 rounded-[32px] overflow-hidden shadow-sm">
           <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <h4 className="text-xl font-black text-brand-primary">Next Cohort</h4>
              <div className="hidden md:flex gap-12 text-[10px] font-black uppercase text-brand-tertiary/40 tracking-[0.2em]">
                 <div className="flex items-center gap-2"><Calendar size={14} /> Date</div>
                 <div className="flex items-center gap-2"><Clock size={14} /> Time</div>
                 <div className="flex items-center gap-2"><Monitor size={14} /> Batch Type</div>
              </div>
           </div>

           {cohorts.map((c) => (
              <div key={c.id} className="p-8 lg:p-12 space-y-8">
                 <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div>
                       <div className="flex items-center gap-4 mb-2">
                          <h5 className="text-xl font-bold text-brand-primary/80">{c.name}</h5>
                          <span className="bg-yellow-400 text-[10px] font-black uppercase px-2 py-1 rounded italic">{c.seats}</span>
                       </div>
                    </div>
                    
                    <button className="bg-blue-600 text-white rounded-xl px-8 py-3 font-black text-sm shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2 self-start lg:self-center">
                       Apply Now <ArrowRight size={16} />
                    </button>
                 </div>

                 <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-6">
                       <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs uppercase tracking-tighter shrink-0">1</div>
                          <div>
                             <p className="text-[10px] font-black uppercase text-brand-tertiary/40 tracking-widest mb-1">Program Induction</p>
                             <p className="font-bold text-brand-primary">{c.induction}</p>
                          </div>
                          <div className="ml-auto text-sm font-bold text-brand-tertiary/60">{c.time}</div>
                       </div>
                    </div>
                    
                    <div className="md:col-span-2">
                       <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs uppercase tracking-tighter shrink-0">2</div>
                          <div className="flex-grow">
                             <p className="text-[10px] font-black uppercase text-brand-tertiary/40 tracking-widest mb-1">Regular Classes</p>
                             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <p className="font-bold text-brand-primary">{c.classes}</p>
                                <p className="font-bold text-brand-primary">{c.classTime}</p>
                                <p className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{c.type}</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        <div className="mt-8 bg-blue-600 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-600/20">
           <h4 className="text-xl font-black text-white italic">Got Questions Regarding Cohort Dates?</h4>
           <button className="bg-white text-blue-600 rounded-xl px-10 py-4 font-black text-sm hover:translate-x-1 transition-transform shadow-lg whitespace-nowrap">
              Talk to an Admissions Counselor
           </button>
        </div>
      </div>
    </section>
  );
};

export default Cohorts;
