import React from 'react';
import nosotrosConfig from '../data/NosotrosHeroData';

const NosotrosHero = () => {
  const { header, content, visuals } = nosotrosConfig;

  return (
    <section className="relative pt-20 md:pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header - Centrado en móvil, Izquierda en Desktop */}
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 md:mb-12">
          <div className="h-px w-8 md:w-12 bg-gray-200"></div>
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-400">
            {header.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LADO IMÁGENES: Primero en móvil para impacto visual */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 md:gap-4 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Imagen 1 */}
            <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden group">
              <img 
                src={visuals.images[0].url} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={visuals.images[0].alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Columna con Imagen 2 y Bloque de Años */}
            <div className="grid grid-rows-2 gap-3 md:gap-4">
              <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden group">
                <img 
                  src={visuals.images[1].url} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={visuals.images[1].alt}
                />
              </div>
              <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#4aa82c] flex flex-col items-center justify-center text-white p-4 text-center">
                 <h3 className="text-4xl md:text-5xl font-black mb-1">{visuals.experienceYears}</h3>
                 <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-tight">
                    {visuals.experienceLabel}
                 </p>
                 <div className="absolute -bottom-6 -right-6 w-20 h-20 border-4 border-white/20 rounded-full hidden sm:block"></div>
              </div>
            </div>
            
            {/* Imagen 3 (Ancha) */}
            <div className="col-span-2 relative h-[150px] sm:h-[200px] md:h-[250px] rounded-[30px] md:rounded-[40px] overflow-hidden group">
              <img 
                src={visuals.images[2].url} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={visuals.images[2].alt}
              />
              <div className="absolute inset-0 bg-[#0993e2]/10 mix-blend-multiply"></div>
            </div>
          </div>

          {/* LADO TEXTO: Segundo en móvil */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-[38px] sm:text-[50px] md:text-[65px] lg:text-[75px] font-[950] text-gray-900 tracking-[-0.05em] leading-[1.1] lg:leading-[0.9] mb-8 md:mb-10">
              {header.title.main} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
                {header.title.highlight}
              </span>
            </h1>

            <div className="space-y-6 md:space-y-8 text-gray-500 text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              {content.paragraphs.map((p, index) => (
                <p key={index}>
                  {p.text}
                  {p.bold && <span className="text-gray-900 font-black">{p.bold}</span>}
                  {p.suffix}
                </p>
              ))}

              <div className="relative p-6 md:p-8 bg-gray-50 rounded-[24px] md:rounded-[32px] overflow-hidden text-left">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#4aa82c]"></div>
                <p className="text-gray-800 font-bold italic text-sm md:text-base leading-relaxed">
                  "{content.quote}"
                </p>
              </div>

              {/* Firma - Ajustada para centrar en móvil */}
              <div className="pt-6 md:pt-8 flex items-center justify-center lg:justify-start gap-4">
                <div className="h-10 md:h-12 w-px bg-gray-200"></div>
                <div className="text-left">
                  <p className="text-gray-900 font-black text-lg md:text-xl uppercase tracking-tighter leading-none">
                    {content.signature.name}
                  </p>
                  <p className="text-[#0993e2] text-[9px] md:text-[10px] font-black uppercase tracking-widest mt-1">
                    {content.signature.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NosotrosHero;