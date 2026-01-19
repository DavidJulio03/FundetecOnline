import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import TestimonialsData from '../data/TestimonialsData';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePlay = (id) => {
    setActiveId(id);
  };

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-gray-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-[#4aa82c] animate-pulse"></span>
              <span className="text-gray-500 font-black text-[10px] uppercase tracking-[0.3em]">
                {TestimonialsData.header.badge}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-[900] text-gray-900 tracking-tighter leading-none">
              {TestimonialsData.header.titleMain} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
                {TestimonialsData.header.titleHighlight}
              </span>
            </h2>
          </div>
          
          {/* Navegación Desktop */}
          <div className="hidden md:flex gap-3">
            <button 
              onClick={() => scroll('left')} 
              className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all shadow-sm active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white hover:bg-[#4aa82c] transition-all shadow-lg shadow-gray-200 active:scale-95"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL --- */}
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth px-4 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TestimonialsData.items.map((test, idx) => (
            <TestimonialCard 
              key={test.id}
              data={test}
              isActive={activeId === test.id}
              onPlay={handlePlay}
              isOffset={idx % 2 !== 0}
            />
          ))}
          
          {/* Card CTA Final con etiqueta <a> */}
          <div className="flex-shrink-0 w-[85vw] sm:w-[300px] h-[550px] rounded-[40px] border-2 border-dashed border-gray-300 flex items-center justify-center p-8 text-center flex-col group hover:border-[#4aa82c] hover:bg-white transition-all snap-center">
             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                <Heart className="text-gray-400 group-hover:text-[#4aa82c] transition-colors" size={32} />
             </div>
             <h4 className="text-xl font-black text-gray-900 mb-2 tracking-tighter">
               {TestimonialsData.ctaCard.title}
             </h4>
             <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">
               {TestimonialsData.ctaCard.description}
             </p>
             <a 
               href={TestimonialsData.ctaCard.href}
               className="text-[10px] font-black uppercase tracking-[0.2em] py-4 px-8 bg-gray-900 text-white rounded-2xl hover:bg-[#4aa82c] hover:-translate-y-1 transition-all shadow-xl"
             >
               {TestimonialsData.ctaCard.buttonLabel}
             </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;