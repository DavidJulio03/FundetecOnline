import React from 'react';

const objetivosData = {
  title: "Objetivo General",
  highlight: "Desarrollar programas educativos para jóvenes y adultos involucrando estrategias pedagógicas que propicien espacios de convivencia, armonía y paz.",
  points: [
    "Mejorar las condiciones humanas y la calidad de vida de quienes buscan superarse colectivamente.",
    "Formación integral basada en el respeto mutuo, la libertad y la coherencia con el desarrollo humano."
  ]
};

const Objetivos = () => {
  return (
    <section className="py-24 bg-white px-6 border-y border-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Etiqueta superior sutil */}
        <div className="flex justify-center lg:justify-start mb-8">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4aa82c]">
            Nuestro Propósito
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Título Principal */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-[950] text-gray-900 leading-none tracking-tighter uppercase">
              {objetivosData.title.split(' ')[0]} <br />
              <span className="text-gray-300">{objetivosData.title.split(' ')[1]}</span>
            </h2>
          </div>

          {/* Contenido */}
          <div className="lg:col-span-8">
            {/* Texto destacado con línea lateral */}
            <div className="border-l-[6px] border-[#0993e2] pl-8 mb-12">
              <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                {objetivosData.highlight}
              </p>
            </div>

            {/* Puntos secundarios en grid simple */}
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              {objetivosData.points.map((text, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-8 h-1 bg-gray-100"></div>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Objetivos;