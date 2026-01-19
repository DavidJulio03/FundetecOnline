import React from 'react';

const filosofiaConfig = {
  lema: "EDUCAMOS PARA EL FUTURO",
  descripcion: "Nuestra filosofía se fundamenta en el desarrollo integral de la persona humana, formando estudiantes con una conciencia responsable, críticos y creativos.",
  pilares: ["Creyentes", "Honestos", "Críticos", "Investigativos"]
};

const MarcoFilosofico = () => {
  return (
    <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Sutil gradiente de luz en el centro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Lema con diseño tipográfico */}
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4aa82c] block mb-6">
            Filosofía Institucional
          </span>
          <h2 className="text-4xl md:text-7xl font-[950] tracking-tighter leading-none italic">
            "{filosofiaConfig.lema}"
          </h2>
        </div>

        {/* Descripción centralizada */}
        <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-2xl font-medium leading-relaxed mb-16">
          {filosofiaConfig.descripcion}
        </p>

        {/* Pilares con diseño minimalista */}
        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6 md:gap-x-12">
          {filosofiaConfig.pilares.map((pilar, index) => (
            <React.Fragment key={pilar}>
              <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.4em] text-white hover:text-[#0993e2] transition-colors cursor-default">
                {pilar}
              </span>
              {index < filosofiaConfig.pilares.length - 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#4aa82c] opacity-50 hidden md:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .bg-radial-gradient {
          background: radial-gradient(circle, rgba(9, 147, 226, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
        }
      `}} />
    </section>
  );
};

export default MarcoFilosofico;