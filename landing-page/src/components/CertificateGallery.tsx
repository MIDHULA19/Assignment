import React, { useState } from 'react';
import OttobonCertificate, { type CertificateData } from './OttobonCertificate';

const dummyData: CertificateData[] = [
  {
    id: '1',
    type: 'Completion',
    studentName: 'John Doe',
    programName: 'Applied Generative AI',
    date: '15 May 2026',
    instructor: 'Satya Nadella',
    certId: 'OB-2026-COMP-001'
  },
  {
    id: '2',
    type: 'Excellence',
    studentName: 'Sarah Smith',
    programName: 'Applied Generative AI',
    date: '15 May 2026',
    instructor: 'Dr. Andrew S.',
    certId: 'OB-2026-EXC-042'
  },
  {
    id: '3',
    type: 'Project',
    studentName: 'Alex Johnson',
    programName: 'Advanced Agentic Frameworks',
    projectName: 'Autonomous Support Agent using LangChain',
    date: '20 June 2026',
    instructor: 'Michael Ross',
    certId: 'OB-2026-PRJ-108'
  },
  {
    id: '4',
    type: 'Participation',
    studentName: 'Emma Watson',
    programName: 'GenAI Strategy Workshop',
    date: '05 April 2026',
    instructor: 'Sarah Chen',
    certId: 'OB-2026-PART-012'
  }
];

const CertificateGallery: React.FC = () => {
  const [activeCert, setActiveCert] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-2 gap-12 max-w-6xl mx-auto">
        {dummyData.map((data, idx) => (
          <div key={data.id} className="opacity-100 flex items-center justify-center">
            <OttobonCertificate data={data} />
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Carousel Layout */}
      <div className="lg:hidden w-full flex flex-col items-center">
         <div className="w-full max-w-lg mb-8">
            <OttobonCertificate data={dummyData[activeCert]} />
         </div>
         
         <div className="flex gap-3 overflow-x-auto w-full pb-4 px-4 justify-center">
            {dummyData.map((data, idx) => (
               <button 
                  key={data.id}
                  onClick={() => setActiveCert(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
                     activeCert === idx 
                        ? 'bg-brand-primary text-white' 
                        : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'
                  }`}
               >
                  {data.type}
               </button>
            ))}
         </div>
      </div>
    </div>
  );
};

export default CertificateGallery;
