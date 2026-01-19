import React from 'react';

const mvConfig = {
  mision: {
    title: "Misión",
    tagline: "Compromiso Social",
    text: "FUNDETEC es una institución de naturaleza privada, sin ánimo de lucro, que ofrece programas de formación integral flexible a través del programa de bachillerato CLEI, impulsando el desarrollo asertivo de competencias ciudadanas e inclusión proactiva."
  },
  vision: {
    title: "Visión",
    tagline: "Excelencia Educativa",
    text: "Consolidarnos como una institución de excelencia reconocida nacionalmente como un centro educativo moderno y eficiente, buscando la excelencia académica a través del mejoramiento continuo de nuestras metodologías de enseñanza."
  }
};

const MisionVision = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-[40px] overflow-hidden">
          
          {/* Bloque Misión */}
          <div className="bg-white p-10 md:p-16 hover:bg-gray-50 transition-colors duration-500">
            <div className="flex flex-col h-full">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0993e2] mb-6">
                {mvConfig.mision.tagline}
              </span>
              <h3 className="text-5xl md:text-6xl font-[950] text-gray-900 tracking-tighter uppercase mb-8">
                {mvConfig.mision.title}
              </h3>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                {mvConfig.mision.text}
              </p>
              <div className="mt-auto pt-10">
                <div className="w-12 h-1 bg-[#0993e2] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bloque Visión */}
          <div className="bg-white p-10 md:p-16 hover:bg-gray-50 transition-colors duration-500">
            <div className="flex flex-col h-full">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4aa82c] mb-6">
                {mvConfig.vision.tagline}
              </span>
              <h3 className="text-5xl md:text-6xl font-[950] text-gray-900 tracking-tighter uppercase mb-8">
                {mvConfig.vision.title}
              </h3>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                {mvConfig.vision.text}
              </p>
              <div className="mt-auto pt-10">
                <div className="w-12 h-1 bg-[#4aa82c] rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MisionVision;