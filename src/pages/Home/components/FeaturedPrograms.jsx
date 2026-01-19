import React, { useState, useRef } from 'react';
import { ArrowRight, Clock, Star, GraduationCap, ChevronRight } from 'lucide-react';
import ProgramsData from '../data/FeaturedProgramsData';



const FeaturedPrograms = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  const scrollToProgram = (index) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * index;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="programas" className="py-16 md:py-32 bg-gray-200/50 relative overflow-hidden">
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-8 relative">
        
        {/* --- CABECERA --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#0993e2] rounded-full"></span>
              <span className="text-[#0993e2] font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">
                {ProgramsData.header.badge}
              </span>
            </div>
            <h2 className="text-[28px] md:text-5xl font-[900] text-gray-900 leading-tight">
              {ProgramsData.header.title.main} <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
                {ProgramsData.header.title.highlight}
              </span>
            </h2>
          </div>
          
          <a 
            href={ProgramsData.header.catalogLink.href} 
            className="hidden md:flex items-center gap-3 text-gray-900 font-black text-sm uppercase tracking-widest group bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            {ProgramsData.header.catalogLink.label}
            <ArrowRight size={18} className="text-[#4aa82c] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* --- GRID / CAROUSEL --- */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0"
        >
          {ProgramsData.items.map((prog) => (
            <div 
              key={prog.id} 
              className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center group bg-white rounded-[28px] md:rounded-[32px] overflow-hidden shadow-sm md:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100/50 flex flex-col transition-all duration-300"
            >
              <div className="relative aspect-[4/3] md:h-56 overflow-hidden">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-xl text-[9px] font-black uppercase tracking-widest text-[#0993e2] shadow-sm">
                    {prog.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                   <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[10px] font-bold">
                      <Clock size={12} className="text-[#4aa82c]" /> {prog.duration}
                   </div>
                   <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[10px] font-bold">
                      <Star size={12} className="fill-yellow-400 text-yellow-400 border-none" /> {prog.rating}
                   </div>
                </div>
              </div>

              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 md:mb-3 leading-tight group-hover:text-[#0993e2] transition-colors line-clamp-2 min-h-[3rem] md:min-h-0">
                  {prog.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 flex-1 font-medium line-clamp-2 md:line-clamp-3">
                  {prog.benefit}
                </p>
                
                <a 
                  href={prog.href}
                  className="w-full py-4 rounded-xl md:rounded-2xl bg-gray-50 text-[#0993e2] md:text-gray-900 font-black text-[11px] uppercase tracking-widest transition-all md:hover:bg-[#0993e2] md:hover:text-white active:scale-95 flex items-center justify-center gap-2 border border-gray-100 md:border-none"
                >
                  Explorar Programa
                  <ChevronRight size={16} className="md:hidden" />
                  <GraduationCap size={18} className="hidden md:block" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* --- DOTS INDICATOR --- */}
        <div className="flex justify-center items-center gap-3 mt-4 md:hidden">
          {ProgramsData.items.map((_, i) => (
            <button 
              key={i} 
              onClick={() => scrollToProgram(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-10 bg-[#0993e2]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* --- FOOTER BUTTON MOBILE --- */}
        <div className="mt-8 flex justify-center md:hidden">
          <a 
            href={ProgramsData.header.catalogLink.href}
            className="w-full flex items-center justify-center gap-3 text-gray-900 font-black text-[11px] uppercase tracking-widest bg-white py-5 rounded-2xl shadow-lg border border-gray-100 active:bg-gray-50"
          >
            {ProgramsData.header.catalogLink.label}
            <ArrowRight size={18} className="text-[#4aa82c]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;