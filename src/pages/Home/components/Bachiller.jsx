import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Sparkles, GraduationCap, Check } from 'lucide-react';
import BachillerData from '../data/BachillerData';

const BachilleratoHero = () => {
  return (
    <section className="relative bg-white py-8 md:py-24 overflow-hidden min-h-screen md:min-h-[850px] flex items-center">
      
      {/* FONDO GEOMÉTRICO */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="absolute top-0 w-[1px] h-full bg-gray-100/50" style={{ left: `${(i + 1) * 25}%` }}></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10 w-full">
        <div className="flex flex-col lg:block relative">
          
          {/* BLOQUE DE TEXTO */}
          <div className="relative z-30 max-w-2xl bg-white/95 backdrop-blur-xl p-6 md:p-16 rounded-[32px] md:rounded-[48px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-100 order-2 lg:order-1 mt-[-40px] lg:mt-0 mx-2 md:mx-0">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-[2px] w-6 md:w-8 bg-[#4aa82c]"></div>
              <span className="text-[#4aa82c] text-[9px] md:text-[12px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
                {BachillerData.badge}
              </span>
            </div>

            <h1 className="text-[36px] sm:text-[50px] md:text-[72px] font-[900] leading-[0.95] text-gray-900 mb-6 md:mb-8 tracking-tighter">
              {BachillerData.title.upper} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
                {BachillerData.title.highlight}
              </span>
            </h1>

            <p className="text-gray-500 text-base md:text-xl mb-8 md:mb-10 leading-relaxed font-medium max-w-md">
              {BachillerData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {BachillerData.actions.map((action, idx) => {
                const isExternal = action.href.startsWith('http') || action.href.startsWith('wa.me');
                const styles = `w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 ${
                  action.primary 
                  ? "bg-[#4aa82c] hover:bg-gray-900 text-white shadow-xl shadow-[#4aa82c]/20 hover:-translate-y-1"
                  : "text-gray-700 bg-gray-50 border border-transparent hover:border-[#0993e2]/20 hover:text-[#0993e2]"
                }`;

                return isExternal ? (
                  <a key={idx} href={action.href} target="_blank" rel="noopener noreferrer" className={styles}>
                    {action.icon && action.icon}
                    {action.label}
                  </a>
                ) : (
                  <Link key={idx} to={action.href} className={styles}>
                    {action.icon && action.icon}
                    {action.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* COMPOSICIÓN VISUAL */}
          <div className="relative lg:absolute lg:-top-12 lg:-right-4 md:right-0 w-full lg:w-[60%] h-[350px] sm:h-[450px] md:h-[650px] z-10 order-1 lg:order-2">
            <div className="relative w-full h-full p-2 md:p-0">
              <img 
                src={BachillerData.visual.mainImage} 
                className="w-full h-full object-cover rounded-[32px] md:rounded-[60px] shadow-2xl transition-all duration-700 border-[8px] md:border-[12px] border-white"
                alt="Bachillerato"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0993e2]/20 to-transparent rounded-[32px] md:rounded-[60px] m-2 md:m-0"></div>
              
              <div className="absolute top-6 right-6 lg:top-0 lg:right-[70%] z-40 bg-white border border-gray-100 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-xl flex items-center gap-2 md:gap-3 animate-pulse">
                <Sparkles size={14} className="text-[#0993e2]" />
                <span className="text-[8px] md:text-[10px] font-black text-gray-900 tracking-[0.1em] md:tracking-[0.2em] uppercase">
                  {BachillerData.visual.floatingBadge}
                </span>
              </div>
            </div>
          </div>

          {/* UI DE PROGRESO */}
          <div className="absolute -bottom-10 right-0 md:right-24 z-40 hidden xl:block animate-float-slow transform scale-75 md:scale-100">
            <div className="bg-gray-900/95 backdrop-blur-md text-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl w-64 md:w-80 border border-white/10">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="bg-[#4aa82c] p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg shadow-[#4aa82c]/30">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter">
                  {BachillerData.visual.progress.currentCycle}
                </div>
              </div>
              
              <p className="text-[9px] font-black text-gray-400 mb-1 tracking-[0.2em] uppercase">Tu Progreso Académico</p>
              <p className="text-lg md:text-xl font-black mb-4 md:mb-6 tracking-tight">{BachillerData.visual.progress.target}</p>
              
              <div className="space-y-4">
                <div className="w-full bg-white/10 h-2 md:h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#0993e2] to-[#4aa82c] h-full rounded-full animate-progress-grow"
                    style={{ width: BachillerData.visual.progress.percentage }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[11, 12, 13].map(i => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-gray-900 bg-gray-700 overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?img=${i}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-[#4aa82c] uppercase">
                    {BachillerData.visual.progress.percentage} Completado
                  </span>
                </div>
              </div>

              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-4 rounded-[20px] shadow-2xl flex items-center justify-center border border-gray-50 animate-bounce-subtle">
                <Check size={20} className="text-[#4aa82c] stroke-[4px]" />
              </div>
            </div>
          </div>
        </div>

        {/* STATS FOOTER */}
        <div className="mt-12 md:mt-32 grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center lg:justify-start gap-y-8 gap-x-4 md:gap-16 border-t border-gray-100 pt-8 md:pt-12 relative z-30">
          {BachillerData.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className={`text-xl md:text-3xl font-black ${stat.color} leading-none mb-1`}>{stat.val}</p>
              <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes progress-grow {
          from { width: 0; }
          to { width: ${BachillerData.visual.progress.percentage}; }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 4s ease-in-out infinite; }
        .animate-progress-grow { animation: progress-grow 2s cubic-bezier(0.65, 0, 0.35, 1) forwards; }
      `}} />
    </section>
  );
};

export default BachilleratoHero;