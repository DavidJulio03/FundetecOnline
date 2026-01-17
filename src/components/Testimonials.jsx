import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import TestimonialCard from './TestimonialCard'; // Importamos el subcomponente

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [activeId, setActiveId] = useState(null); // ID del video que se está reproduciendo

  // Datos de ejemplo
  const testimonials = [
    {
      id: 1,
      name: "Juan David",
      role: "Bachiller 2024",
      quote: "No creí que fuera tan fácil y rápido.",
      videoImg: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", 
      tag: "Meta cumplida"
    },
    {
      id: 2,
      name: "Marta Lucía",
      role: "Egresada Salud",
      quote: "Mis hijos están orgullosos de mí.",
      videoImg: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tag: "Superación"
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      role: "Técnico Laboral",
      quote: "Conseguí empleo en solo un mes.",
      videoImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tag: "Éxito Laboral"
    },
    {
      id: 4,
      name: "Ana María",
      role: "Ciclo VI",
      quote: "Estudiar online cambió mi vida.",
      videoImg: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tag: "Tecnología"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -380 : 380;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Función para manejar el Play único
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
              <span className="text-gray-500 font-black text-[10px] uppercase tracking-[0.3em]">Experiencias Reales</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-[900] text-gray-900 tracking-tighter leading-none">
              NUESTROS ALUMNOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">SON LA PRUEBA.</span>
            </h2>
          </div>
          
          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all shadow-sm active:scale-95">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white hover:bg-[#4aa82c] transition-all shadow-lg shadow-gray-200 active:scale-95">
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
          {testimonials.map((test, idx) => (
            <TestimonialCard 
              key={test.id}
              data={test}
              isActive={activeId === test.id}
              onPlay={handlePlay}
              isOffset={idx % 2 !== 0} // Alternar altura en desktop
            />
          ))}
          
          {/* Card CTA */}
          <div className="flex-shrink-0 w-[85vw] sm:w-[300px] h-[550px] rounded-[40px] border-2 border-dashed border-gray-300 flex items-center justify-center p-8 text-center flex-col group hover:border-[#4aa82c] hover:bg-white transition-all snap-center">
             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                <Heart className="text-gray-400 group-hover:text-[#4aa82c] transition-colors" size={32} />
             </div>
             <h4 className="text-xl font-black text-gray-900 mb-2 tracking-tighter">¿Tu historia aquí?</h4>
             <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">Únete a los miles que ya cambiaron su futuro con nosotros.</p>
             <button className="text-[10px] font-black uppercase tracking-[0.2em] py-4 px-8 bg-gray-900 text-white rounded-2xl hover:bg-[#4aa82c] hover:-translate-y-1 transition-all shadow-xl">
                Inscribirme Ahora
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;