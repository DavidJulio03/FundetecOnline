import React, { useState } from 'react';
import { Clock, ArrowUpRight, GraduationCap, Laptop, Users, ShieldCheck } from 'lucide-react';
import DiplomadoDrawer from './DiplomadoModal';
import diplomadosConfig from '../data/DiplomadosData';

const DiplomadosExplorer = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filtered = filter === "Todos" 
    ? diplomadosConfig.programs 
    : diplomadosConfig.programs.filter(p => p.category === filter);

  const getIcon = (cat) => {
    switch (cat) {
      case 'Salud': return <ShieldCheck size={20} />;
      case 'Gerencia': return <Users size={20} />;
      case 'Empresarial': return <Laptop size={20} />;
      default: return <GraduationCap size={20} />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Cabecera Adaptativa */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12 md:mb-20">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-[#0993e2]">
              <div className="h-[2px] w-8 md:w-12 bg-[#0993e2]"></div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                {diplomadosConfig.header.badge}
              </span>
            </div>
            <h2 className="text-[38px] md:text-[65px] font-[900] text-gray-900 tracking-tighter leading-[0.95] mb-6">
              IMPULSA TU <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">CARRERA</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-lg font-medium leading-relaxed max-w-md mx-auto md:mx-0">
              {diplomadosConfig.header.description}
            </p>
          </div>

          {/* Filtros: Ajustado el padding superior para evitar cortes en el hover */}
          <div className="w-full lg:w-auto">
            <div className="flex flex-nowrap md:flex-wrap gap-3 overflow-x-auto pt-4 pb-4 md:pt-2 no-scrollbar snap-x touch-pan-x">
              {diplomadosConfig.categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap snap-start ${
                    filter === cat 
                    ? "bg-[#0993e2] text-white shadow-[0_10px_20px_-5px_rgba(9,147,226,0.4)] -translate-y-1.5" 
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid: Scroll en Móvil / Grid en Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible gap-5 pb-10 md:pb-0 no-scrollbar snap-x snap-mandatory md:grid-cols-4 md:grid-rows-2 md:h-[750px]">
          {filtered.map((prog, index) => {
            const isLarge = index === 0;
            const isMedium = index === 1 || index === 2;

            return (
              <div 
                key={prog.id}
                onClick={() => setSelectedProgram(prog)}
                className={`
                  min-w-[85vw] sm:min-w-[50vw] h-[480px] snap-center
                  md:min-w-0 md:h-full group relative overflow-hidden rounded-[32px] md:rounded-[40px] cursor-pointer transition-all duration-500 hover:shadow-2xl md:hover:-translate-y-2
                  ${isLarge ? 'md:col-span-2 md:row-span-2 bg-gray-900' : 'bg-gray-50'}
                  ${isMedium ? 'md:col-span-1 md:row-span-1 border border-gray-100' : 'md:col-span-1 md:row-span-1'}
                `}
              >
                <img 
                  src={prog.image} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110
                    ${isLarge ? 'opacity-60' : 'opacity-20 grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100'}
                  `}
                  alt={prog.title}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isLarge ? 'from-black/80 via-black/20' : 'from-white/80 via-transparent'} to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`relative h-full p-8 md:p-10 flex flex-col justify-between z-10 
                  ${isLarge ? 'text-white' : 'text-gray-900'}
                `}>
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-2xl ${isLarge ? 'bg-white/10 backdrop-blur-md' : 'bg-white shadow-sm'}`}>
                      {getIcon(prog.category)}
                    </div>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-[900] uppercase tracking-tighter ${isLarge ? 'bg-[#4aa82c]' : 'bg-gray-900 text-white'}`}>
                      <Clock size={12} />
                      {prog.duration}
                    </div>
                  </div>

                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest mb-3 block ${isLarge ? 'text-[#4aa82c]' : 'text-[#0993e2]'}`}>
                      {prog.category}
                    </span>
                    <h3 className={`font-[900] leading-[1.1] tracking-tighter mb-5 transition-transform duration-500 group-hover:-translate-y-1
                      ${isLarge ? 'text-3xl md:text-5xl max-w-[90%]' : 'text-xl md:text-2xl'}
                    `}>
                      {prog.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] md:opacity-0 md:group-hover:opacity-100 transition-all translate-y-2 md:group-hover:translate-y-0">
                      Ver contenido <ArrowUpRight size={16} className="text-[#4aa82c]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedProgram && (
          <DiplomadoDrawer 
            program={selectedProgram} 
            onClose={() => setSelectedProgram(null)} 
          />
        )}
      </div>

      {/* CSS Inyectado para ocultar scrollbars */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />
    </section>
  );
};

export default DiplomadosExplorer;