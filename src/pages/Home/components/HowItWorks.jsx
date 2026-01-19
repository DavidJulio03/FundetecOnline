import React from 'react';
import { ChevronRight } from 'lucide-react';
import HowItWorksData from '../data/HowItWorksData';

const HowItWorks = () => {
  return (
    <section id="virtual" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- ENCABEZADO --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-28">
          <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4aa82c] animate-pulse"></span>
            <span className="text-[#4aa82c] font-black text-[10px] uppercase tracking-[0.2em]">
              {HowItWorksData.header.badge}
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[42px] md:text-6xl font-[900] text-gray-900 leading-[1.1] tracking-tighter mb-6">
            {HowItWorksData.header.title.main} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
              {HowItWorksData.header.title.highlight}
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {HowItWorksData.header.description}
          </p>
        </div>

        {/* --- CONTENEDOR DE PASOS --- */}
        <div className="relative">
          
          {/* LÍNEA CONECTORA DESKTOP */}
          <div className="hidden lg:block absolute top-[48px] left-[12%] w-[76%] h-[3px] bg-gray-100 z-0">
            <div className="h-full bg-gradient-to-r from-[#0993e2] via-[#2d9e84] to-[#4aa82c] transition-all duration-1000 shadow-[0_0_15px_rgba(74,168,44,0.1)]"></div>
          </div>

          {/* LÍNEA CONECTORA MÓVIL */}
          <div className="lg:hidden absolute left-[40px] md:left-[48px] top-10 bottom-10 w-[3px] bg-gradient-to-b from-[#0993e2] via-[#2d9e84] to-[#4aa82c] z-0 opacity-20 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 gap-x-8 relative z-10">
            {HowItWorksData.steps.map((step, idx) => (
              <div key={idx} className="group flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-0">
                
                <div className="relative shrink-0 lg:mb-8">
                  {/* Número de paso */}
                  <span className="absolute -top-2 -right-2 bg-white shadow-md text-gray-900 text-[11px] font-[900] w-7 h-7 rounded-full flex items-center justify-center border border-gray-100 z-20 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                    {step.id}
                  </span>
                  
                  {/* Contenedor del Icono */}
                  <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${step.color} rounded-[28px] md:rounded-[35px] flex items-center justify-center text-white shadow-xl ${step.shadow} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 relative z-10 border-4 border-gray-50`}>
                    {React.cloneElement(step.icon, { size: 30, strokeWidth: 2.5 })}
                  </div>

                  {/* Chevron decorativo desktop */}
                  {idx !== HowItWorksData.steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 translate-x-1/2 -translate-y-1/2 text-gray-200 z-0">
                      <ChevronRight size={24} strokeWidth={4} />
                    </div>
                  )}
                </div>

                <div className="text-left lg:text-center mt-2 lg:mt-0 pt-1">
                  <h3 className="text-lg md:text-xl font-[900] text-gray-900 mb-2 md:mb-3 tracking-tight group-hover:text-[#0993e2] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-[260px] lg:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTÓN DE CIERRE (Corregido para no ocupar todo el ancho) --- */}
        <div className="mt-20 md:mt-28 text-center px-4 flex flex-col items-center">
          <a 
            href={HowItWorksData.footer.buttonHref}
            className="w-fit bg-gray-900 text-white px-10 py-5 rounded-[20px] font-black text-xs uppercase tracking-[0.2em] hover:bg-[#4aa82c] transition-all duration-300 shadow-2xl shadow-gray-200 flex items-center justify-center gap-3 mx-auto group"
          >
            {HowItWorksData.footer.buttonLabel}
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6">
            {HowItWorksData.footer.subtext}
          </p>
        </div>

      </div>
      
      {/* Decoraciones de fondo */}
      <div className="absolute -right-20 top-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      <div className="absolute -left-20 bottom-1/4 w-96 h-96 bg-green-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
    </section>
  );
};

export default HowItWorks;