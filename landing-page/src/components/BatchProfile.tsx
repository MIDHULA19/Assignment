import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
   { name: 'Information Technology', value: 43, color: '#3b82f6' },
   { name: 'Software Product', value: 13, color: '#06b6d4' },
   { name: 'Manufacturing', value: 20, color: '#a855f7' },
   { name: 'Pharma & Healthcare', value: 7, color: '#f59e0b' },
   { name: 'BFSI', value: 7, color: '#10b981' },
   { name: 'Others', value: 10, color: '#ec4899' },
];

const companies = [
   'NVIDIA', 'OpenAI', 'NETFLIX', 'Google',
   'Microsoft', 'IBM', 'LinkedIn', 'Apple',
   'Deloitte', 'BOSCH', 'accenture', 'SIEMENS'
];

const BatchProfile: React.FC = () => {
   return (
      <section className="py-24 bg-white relative">
         <div className="container-custom">
            <h3 className="text-4xl font-black text-brand-primary mb-2">Batch Profile</h3>
            <p className="text-xl text-brand-tertiary/60 font-medium mb-12 max-w-4xl leading-relaxed">
               The Executive Program in Applied Generative AI caters to working professionals across different industries. Learner diversity adds richness to class discussions and interactions.
            </p>

            <div className="bg-white border border-gray-100 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-16 shadow-2xl shadow-gray-200">
               <div className="flex items-center gap-4 mb-12 border-b border-gray-50 pb-6">
                  <span className="text-lg font-black text-brand-primary">Industry</span>
                  <div className="ml-auto w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                     <div className="w-4 h-1 bg-gray-300 rounded-full" />
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
                  {/* Chart */}
                  <div className="h-[300px] sm:h-[400px] w-full relative">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                           <Pie
                              data={data}
                              cx="50%"
                              cy="50%"
                              innerRadius={80}
                              outerRadius={140}
                              paddingAngle={5}
                              dataKey="value"
                           >
                              {data.map((entry, index) => (
                                 <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                           </Pie>
                           <Tooltip
                              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                           />
                        </PieChart>
                     </ResponsiveContainer>

                     {/* Legend Custom */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-4xl font-black text-brand-primary">100%</div>
                        <div className="text-[10px] font-black text-brand-tertiary/40 uppercase tracking-widest">Professionals</div>
                     </div>
                  </div>

                  {/* Company Grid & Text */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-12">
                     <div className="space-y-4">
                        <h5 className="text-xs font-black uppercase tracking-widest text-brand-accent border-b-2 border-brand-accent/20 pb-2 inline-block mb-4">Industry</h5>
                        {data.map((item, i) => (
                           <div key={i} className="flex items-center gap-4">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                              <span className="text-sm font-bold text-brand-primary/80">{item.name} - {item.value}%</span>
                           </div>
                        ))}
                     </div>

                     <div className="space-y-4">
                        <h5 className="text-xs font-black uppercase tracking-widest text-brand-accent border-b-2 border-brand-accent/20 pb-2 inline-block mb-4">Companies</h5>
                        <div className="grid grid-cols-2 gap-6 items-center">
                           {companies.map((company, i) => (
                              <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 h-8">
                                 <span className="text-xs font-black text-brand-primary truncate">{company}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default BatchProfile;
