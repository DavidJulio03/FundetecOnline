import React from 'react';
import { Home, ArrowLeft, Search, GraduationCap, Sparkles } from 'lucide-react';

// 1. Configuración de contenido
const notFoundData = {
  badge: "Error 404",
  title: {
    main: "PÁGINA NO",
    highlight: "ENCONTRADA."
  },
  description: "Parece que el camino que buscabas ha cambiado de rumbo. No te preocupes, tu formación sigue adelante.",
  actions: [
    { label: "Volver al Inicio", href: "/", primary: true, icon: <Home size={18} /> },
    { label: "Ir atrás", href: "#", onClick: () => window.history.back(), primary: false, icon: <ArrowLeft size={18} /> }
  ],
  suggestions: [
    { label: "Bachillerato", href: "/bachillerato" },
    { label: "Técnicos", href: "/tecnicos" },
    { label: "Contacto", href: "/contacto" }
  ]
};

const NotFound = () => {
  return (
    <main className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden py-20 px-6">
      
      {/* --- DECORACIONES DE FONDO (Estética Fundetec) --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-green-50 rounded-full blur-[120px] opacity-60"></div>
        {/* Líneas de cuadrícula sutiles */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute top-0 w-[1px] h-full bg-gray-50" style={{ left: `${(i + 1) * 20}%` }}></div>
        ))}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* --- ELEMENTO VISUAL CENTRAL --- */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0993e2] to-[#4aa82c] blur-3xl opacity-10 animate-pulse"></div>
            <div className="relative bg-white border border-gray-100 p-8 md:p-12 rounded-[40px] shadow-2xl">
              <span className="text-[80px] md:text-[120px] font-[900] leading-none tracking-tighter text-gray-900 flex items-center gap-4">
                4
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#0993e2] to-[#4aa82c] rounded-[24px] md:rounded-[32px] flex items-center justify-center text-white rotate-12 shadow-xl">
                   <Search size={48} className="md:size-64" strokeWidth={3} />
                </div>
                4
              </span>
            </div>
            
            {/* Badge Flotante */}
            <div className="absolute -top-4 -right-4 bg-[#4aa82c] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce-subtle">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{notFoundData.badge}</span>
            </div>
          </div>

          {/* --- TEXTOS --- */}
          <div className="max-w-2xl">
            <h1 className="text-[42px] md:text-[72px] font-[900] text-gray-900 leading-[0.95] tracking-tighter mb-6">
              {notFoundData.title.main} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
                {notFoundData.title.highlight}
              </span>
            </h1>
            <p className="text-gray-500 text-base md:text-xl font-medium leading-relaxed mb-12 max-w-lg mx-auto">
              {notFoundData.description}
            </p>
          </div>

          {/* --- ACCIONES --- */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
            {notFoundData.actions.map((action, idx) => (
              <a
                key={idx}
                href={action.href}
                onClick={action.onClick}
                className={`flex items-center justify-center gap-3 px-10 py-5 rounded-[22px] font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                  action.primary
                    ? "bg-gray-900 text-white shadow-2xl shadow-gray-200 hover:bg-[#4aa82c] hover:-translate-y-1"
                    : "bg-white text-gray-600 border border-gray-100 hover:border-[#0993e2] hover:text-[#0993e2]"
                }`}
              >
                {action.icon}
                {action.label}
              </a>
            ))}
          </div>

          {/* --- SUGERENCIAS RÁPIDAS --- */}
          <div className="pt-10 border-t border-gray-100 w-full max-w-md">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">¿Buscabas alguno de estos?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {notFoundData.suggestions.map((sug, i) => (
                <a 
                  key={i} 
                  href={sug.href}
                  className="px-5 py-2.5 bg-gray-50 rounded-xl text-[11px] font-bold text-gray-500 hover:bg-[#0993e2]/5 hover:text-[#0993e2] transition-colors border border-transparent hover:border-[#0993e2]/20"
                >
                  {sug.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle { animation: bounce-subtle 4s ease-in-out infinite; }
      `}} />
    </main>
  );
};

export default NotFound;