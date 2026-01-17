import React from 'react';
import { CheckCircle2, Send, ShieldCheck, Zap, ChevronRight } from 'lucide-react';

const Enrollment = () => {
  return (
    <section id="inscripcion" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Fondo Decorativo - Optimizado para no molestar en móvil */}
      <div className="absolute left-0 bottom-0 h-full w-[40%] hidden lg:block skew-x-[6deg] -translate-x-24 z-0 opacity-5"
           style={{ background: 'linear-gradient(135deg, #4aa82c 0%, #0993e2 100%)' }}>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* BLOQUE DE TEXTO - Centrado en móvil, Izquierda en Desktop */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-4 lg:mb-6 justify-center lg:justify-start">
              <span className="w-6 h-[2px] bg-[#0993e2]"></span>
              <span className="text-[#0993e2] text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase">
                Admisiones 2024
              </span>
            </div>

            <h2 className="text-[34px] sm:text-[48px] lg:text-[54px] font-[900] leading-[1.05] text-gray-900 mb-6">
              IMPULSA TU <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4aa82c] to-[#0993e2]">
                CARRERA HOY.
              </span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
              Únete a los más de <span className="text-gray-900 font-bold">10,000 graduados</span> que ya transformaron su realidad laboral.
            </p>

            {/* Beneficios - Grid de 2 columnas en tablets, 1 en móvil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 md:gap-4">
              {[
                { txt: "Sin permanencia", icon: <Zap size={16}/> },
                { txt: "Homologación rápida", icon: <CheckCircle2 size={16}/> },
                { txt: "Pago flexible", icon: <ShieldCheck size={16}/> },
                { txt: "Título Oficial", icon: <CheckCircle2 size={16}/> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gray-50/50 border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                  <span className="text-[#4aa82c] bg-[#4aa82c]/10 p-1.5 rounded-lg">{item.icon}</span>
                  <span className="text-[13px] md:text-sm font-bold text-gray-700">{item.txt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TARJETA DEL FORMULARIO - Ajustada para pantallas pequeñas */}
          <div className="w-full lg:w-1/2 relative mt-4 lg:mt-0">
            {/* Círculo decorativo solo visible en desktop */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0993e2]/5 rounded-full blur-3xl hidden lg:block"></div>
            
            <div className="bg-white p-6 sm:p-10 rounded-[32px] md:rounded-[48px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10">
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 flex items-center gap-2">
                  Inicia tu proceso
                  <ChevronRight size={20} className="text-[#4aa82c]" />
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1 font-medium">Un asesor te contactará en menos de 24h.</p>
              </div>

              <form className="space-y-4 md:space-y-5">
                <div className="group">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#0993e2]/20 focus:bg-white outline-none transition-all font-medium text-gray-900 text-sm md:text-base"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="300 123 4567"
                    className="w-full px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#0993e2]/20 focus:bg-white outline-none transition-all font-medium text-gray-900 text-sm md:text-base"
                  />
                </div>

                <div className="group relative">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">¿Qué quieres estudiar?</label>
                  <select className="w-full px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#0993e2]/20 focus:bg-white outline-none transition-all font-medium text-gray-700 text-sm md:text-base appearance-none cursor-pointer">
                    <option>Validación de Bachillerato</option>
                    <option>Técnicos Laborales</option>
                    <option>Diplomados</option>
                    <option>Otro / No estoy seguro</option>
                  </select>
                  {/* Icono de flecha para el select */}
                  <div className="absolute right-5 bottom-[14px] md:bottom-[18px] pointer-events-none text-gray-400">
                    <ChevronRight size={18} className="rotate-90" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl text-white font-black text-[13px] md:text-sm uppercase tracking-[0.15em] shadow-lg shadow-[#4aa82c]/20 hover:shadow-[#4aa82c]/30 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-3 mt-4"
                  style={{ backgroundColor: '#4aa82c' }}
                >
                  Enviar Solicitud
                  <Send size={16} className="md:w-[18px]" />
                </button>

                <div className="pt-4 border-t border-gray-50">
                  <p className="text-[10px] text-center text-gray-400 font-bold leading-tight uppercase tracking-tight">
                    Respetamos tu privacidad. <br className="xs:block md:hidden" /> Datos 100% protegidos.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Enrollment;