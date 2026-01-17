import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Star, Quote, ShieldCheck, Volume2, VolumeX } from 'lucide-react';

const TestimonialCard = ({ data, isActive, onPlay, isOffset }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // Efecto: Controla Play/Pause basado en si esta tarjeta es la "activa"
  useEffect(() => {
    if (isActive) {
      videoRef.current.play().catch(e => console.log("Interacción requerida", e));
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Opcional: Reiniciar video al pausar
    }
  }, [isActive]);

  const togglePlay = () => {
    onPlay(isActive ? null : data.id); // Si ya suena, lo apaga; si no, lo prende
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  return (
    <div 
      className={`relative flex-shrink-0 w-[85vw] sm:w-[350px] h-[550px] rounded-[40px] overflow-hidden shadow-xl transition-all duration-500 snap-center cursor-pointer border border-gray-100 ${isOffset ? 'md:mt-12' : ''}`}
      onClick={togglePlay}
    >
      {/* --- CAPA DE VIDEO (FONDO) --- */}
      <video
        ref={videoRef}
        src={data.videoUrl}
        className="absolute inset-0 w-full h-full object-cover bg-black"
        loop
        playsInline
        crossOrigin="anonymous"
      />

      {/* --- CAPA DE PORTADA (IMAGEN) --- 
          Se desvanece cuando el video está activo (isActive = true)
      */}
      <div className={`absolute inset-0 transition-opacity duration-700 z-10 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <img 
          src={data.videoImg} 
          className="w-full h-full object-cover" 
          alt={data.name}
        />
        {/* Gradiente oscuro para leer texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[#0993e2]/20 mix-blend-overlay"></div>
      </div>

      {/* --- CONTROLES Y UI --- */}
      
      {/* Botón Play Central (Solo visible si NO está reproduciendo) */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${isActive ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white shadow-lg group-hover:bg-[#4aa82c] group-hover:scale-110 transition-all">
          <Play size={28} fill="currentColor" className="ml-1" />
        </div>
      </div>

      {/* Controles en Reproducción (Mute / Pause) */}
      <div className={`absolute top-6 right-6 z-30 transition-opacity duration-300 flex gap-2 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={toggleMute}
          className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

      {/* --- INFORMACIÓN DE TEXTO --- 
          Se mueve hacia abajo (translate-y) y se desvanece ligeramente 
          cuando el video reproduce para no estorbar, pero sigue visible.
      */}
      <div className={`absolute bottom-0 left-0 w-full p-8 text-white z-20 transition-all duration-500 ${isActive ? 'translate-y-4 opacity-0 hover:opacity-100 hover:translate-y-0' : 'translate-y-0 opacity-100'}`}>
        <div className="mb-3 inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
          <span className="text-[9px] font-black uppercase tracking-widest">{data.tag}</span>
        </div>
        
        <Quote className="text-[#4aa82c] mb-2 opacity-80" size={28} />
        <h3 className="text-2xl font-black mb-1 leading-tight text-shadow-sm">{data.quote}</h3>
        <p className="text-white/80 text-sm font-medium mb-6">{data.name} — {data.role}</p>
        
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex text-yellow-400">
            {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
          </div>
          <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-tighter opacity-90 text-[#4aa82c]">
            <ShieldCheck size={14} /> Verificado
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;