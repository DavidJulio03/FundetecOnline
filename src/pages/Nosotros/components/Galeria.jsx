import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galeriaConfig = {
  title: "Casos de",
  highlight: "Exito",
  tagline: "Nuestros graduados son el reflejo de 19 años de excelencia.",
  fotos: [
    { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800", size: "col-span-2 row-span-2" },
    { url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800", size: "col-span-1 row-span-1" },
    { url: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=800", size: "col-span-1 row-span-1" },
    { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800", size: "col-span-1 row-span-2" },
    { url: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=800", size: "col-span-1 row-span-1" },
    { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800", size: "col-span-1 row-span-1" }
  ]
};

const GaleriaGraduados = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-6xl md:text-8xl font-[950] tracking-[-0.06em] text-gray-900 leading-[0.85] uppercase">
              {galeriaConfig.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
                {galeriaConfig.highlight}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[11px] leading-relaxed">
              {galeriaConfig.tagline}
            </p>
          </div>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-6">
          {galeriaConfig.fotos.map((foto, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImg(foto.url)}
              className={`relative overflow-hidden rounded-[30px] md:rounded-[50px] group bg-white shadow-sm hover:shadow-2xl transition-all duration-700 cursor-zoom-in ${foto.size}`}
            >
              <img 
                src={foto.url} 
                alt="Graduado Fundetec" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Overlay con icono de zoom */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn className="text-white" size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center gap-6">
            <div className="h-px w-full bg-gray-200"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">
                Orgullo Institucional
            </span>
        </div>
      </div>

      {/* LIGHTBOX / MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 transition-all animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} />
          </button>
          
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full rounded-2xl md:rounded-[40px] shadow-2xl object-contain animate-in zoom-in-95 duration-300" 
            alt="Vista ampliada"
          />
        </div>
      )}
    </section>
  );
};

export default GaleriaGraduados;