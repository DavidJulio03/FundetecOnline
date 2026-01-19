import React, { useState } from 'react';
import { Clock, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';
import TecnicoModal from './TecnicoModal';
import tecnicosData from '../data/TecnicosData';

const TecnicosExplorer = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filtered = filter === "Todos" 
    ? tecnicosData.programs 
    : tecnicosData.programs.filter(p => p.category === filter);

  return (
    <section className="py-12 md:py-24 bg-gray-200/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Sección */}
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <h2 className="text-[32px] sm:text-[40px] md:text-[60px] font-[900] text-gray-900 tracking-tighter leading-[1.1] mb-4">
            {tecnicosData.header.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">{tecnicosData.header.highlight}</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto md:mx-0 text-sm md:text-base px-4 md:px-0">
            {tecnicosData.header.description}
          </p>
        </div>

        {/* Filtros - Scroll horizontal sin scrollbar */}
        <div className="relative mb-10 md:mb-16">
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory">
            {tecnicosData.categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-[900] uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 snap-start ${
                  filter === cat 
                  ? "bg-gray-900 text-white shadow-lg -translate-y-0.5" 
                  : "bg-white text-gray-400 border border-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Contenedor de Cards: Scroll en móvil, Grid en Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-x-visible gap-6 md:gap-10 pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(prog => (
            <div 
              key={prog.id} 
              className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center group relative bg-white rounded-[32px] md:rounded-[48px] p-3 md:p-4 border border-gray-100 transition-all duration-500 hover:shadow-xl"
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-56 sm:h-64 md:h-72 rounded-[24px] md:rounded-[36px] overflow-hidden mb-6 md:mb-8">
                <img 
                  src={prog.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt={prog.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm">
                    <p className="text-[8px] md:text-[9px] font-[900] uppercase tracking-widest text-gray-900">{prog.category}</p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-[#4aa82c] rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <GraduationCap size={18} />
                </div>
              </div>

              {/* Contenido de Texto */}
              <div className="px-3 md:px-6 pb-4 md:pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="flex items-center gap-1.5 py-1 px-2.5 bg-[#4aa82c]/5 rounded-full">
                    <Clock size={12} className="text-[#4aa82c]" />
                    <span className="text-[9px] font-bold uppercase text-[#4aa82c]">{prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-1 px-2.5 bg-[#0993e2]/5 rounded-full">
                    <Sparkles size={11} className="text-[#0993e2]" />
                    <span className="text-[9px] font-bold uppercase text-[#0993e2]">Oficial</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-[900] text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight min-h-0 md:min-h-[64px]">
                  {prog.title}
                </h3>
                
                <button 
                  onClick={() => setSelectedProgram(prog)}
                  className="w-full py-4 md:py-5 bg-gray-200/50 text-gray-900 rounded-[20px] md:rounded-[24px] font-[900] text-[10px] uppercase tracking-[0.2em] transition-all group-hover:bg-[#0993e2] group-hover:text-white flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  Explorar
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProgram && (
          <TecnicoModal 
            program={selectedProgram} 
            onClose={() => setSelectedProgram(null)} 
          />
        )}
      </div>

      {/* Estilos para ocultar scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default TecnicosExplorer;