import React from 'react';
import { Download, Award, BookOpen, Presentation } from 'lucide-react';

export type CertificateType = 'Completion' | 'Excellence' | 'Participation' | 'Project';

export type CertificateData = {
  id: string;
  type: CertificateType;
  studentName: string;
  programName: string;
  projectName?: string;
  date: string;
  instructor: string;
  certId: string;
};

interface Props {
  data: CertificateData;
}

const OttobonCertificate: React.FC<Props> = ({ data }) => {
  const getThemeVars = () => {
    const base = { headerBg: 'bg-blue-600', textHi: 'text-blue-600' };
    switch (data.type) {
      case 'Excellence':
        return { ...base, icon: <Award size={32} className="text-blue-600" /> };
      case 'Participation':
        return { ...base, icon: <BookOpen size={32} className="text-blue-600" /> };
      case 'Project':
        return { ...base, icon: <Presentation size={32} className="text-blue-600" /> };
      case 'Completion':
      default:
        return { ...base, icon: null };
    }
  };

  const tv = getThemeVars();

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className="group relative bg-white rounded-3xl p-2 pb-6 shadow-2xl transition-transform hover:-translate-y-2 max-w-xl mx-auto w-full h-full flex flex-col">
      <div className={`${tv.headerBg} rounded-t-2xl py-3 text-center text-white text-sm font-black uppercase tracking-widest mb-4 flex justify-between items-center px-6`}>
        <span>{data.type} Certificate</span>
        <button onClick={handleDownload} className="hover:scale-110 active:scale-95 transition-transform" title="Download as PDF">
          <Download size={18} />
        </button>
      </div>

      <div className="px-6 flex-grow flex flex-col">
        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center p-6 relative group-hover:scale-[1.02] transition-transform duration-500 flex-grow">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30 pointer-events-none" />

          <div className="w-full h-full border-4 border-double border-brand-tertiary/20 p-6 flex flex-col items-center justify-between text-center relative bg-white/80 backdrop-blur-sm z-10">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
              <span className="font-black text-9xl tracking-tighter text-brand-primary -rotate-12">OTTOBON</span>
            </div>

            {/* Header */}
            <div className="w-full flex justify-between items-start mb-2">
              <div className="w-24 h-8 opacity-80 flex items-center justify-start">
                <span className="font-black tracking-widest text-brand-primary text-xl">OTTOBON</span>
              </div>
              <div className="text-[10px] font-bold text-gray-400">ID: {data.certId}</div>
            </div>

            {/* Body */}
            <div className="flex flex-col items-center z-10 mt-2 mb-4">
              <h4 className="font-outfit text-2xl sm:text-3xl font-black text-brand-primary uppercase tracking-tight mb-2">Certificate of {data.type}</h4>
              <p className="text-xs text-brand-tertiary/70 italic mb-4">This is to certify that</p>

              <div className={`border-b-2 border-brand-primary/10 min-w-[240px] px-8 py-2 font-outfit text-3xl font-black ${tv.textHi} italic tracking-wide mb-4`}>
                {data.studentName}
              </div>

              {data.type === 'Project' && data.projectName ? (
                <>
                  <p className="text-xs text-brand-tertiary/70 mb-1">has successfully completed the capstone project</p>
                  <p className="text-sm font-black uppercase tracking-wider text-brand-primary mt-1 mb-2 px-4">"{data.projectName}"</p>
                  <p className="text-[10px] text-brand-tertiary/50">in {data.programName}</p>
                </>
              ) : data.type === 'Excellence' ? (
                <>
                  <p className="text-xs text-brand-tertiary/70 mb-1">has demonstrated outstanding performance in</p>
                  <p className="text-lg font-black uppercase tracking-wider text-brand-primary mt-1">{data.programName}</p>
                </>
              ) : data.type === 'Participation' ? (
                <>
                  <p className="text-xs text-brand-tertiary/70 mb-1">has actively participated in</p>
                  <p className="text-base font-bold uppercase tracking-wider text-brand-primary mt-1">{data.programName}</p>
                </>
              ) : (
                <>
                  <p className="text-xs text-brand-tertiary/70 mb-1">has successfully completed the program in</p>
                  <p className="text-lg font-black uppercase tracking-wider text-brand-primary mt-1">{data.programName}</p>
                </>
              )}
            </div>

            {/* Footer / Sigs */}
            <div className="w-full flex justify-between items-end mt-auto z-10">
              <div className="text-left flex flex-col items-start gap-1">
                <div className="font-outfit text-lg font-black text-brand-primary/50 italic leading-none">{data.instructor}</div>
                <div className="w-20 border-t border-brand-primary/30 my-1"></div>
                <div className="text-[8px] uppercase font-bold text-gray-500 tracking-widest">{data.instructor}<br />Instructor</div>
              </div>

              <div className="w-14 h-14 bg-gray-50 border border-gray-200 p-1 flex items-center justify-center shrink-0">
                {tv.icon ? tv.icon : <div className="w-full h-full bg-black/5 opacity-50 flex items-center justify-center text-[8px] tracking-widest font-black uppercase">QR</div>}
              </div>

              <div className="text-right flex flex-col items-end gap-1">
                <div className="text-sm font-bold text-gray-600 mb-1">{data.date}</div>
                <div className="w-20 border-t border-brand-primary/30 my-1"></div>
                <div className="text-[8px] uppercase font-bold text-gray-500 tracking-widest">Date of Issue</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Overlay Details on Hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900/90 text-white p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-2xl z-20 flex flex-col items-center">
        <span className="font-black text-sm uppercase tracking-widest text-[#E65C00] mb-1">View Certificate</span>
        <span className="text-xs font-medium text-gray-300">Click download to save PDF</span>
      </div>

    </div>
  );
};

export default OttobonCertificate;
