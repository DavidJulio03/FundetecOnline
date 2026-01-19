import React, { useEffect } from 'react';
import { X, Target, Zap, BarChart3, ShieldCheck, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const DiplomadoDrawer = ({ program, onClose }) => {
  if (!program) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay con desenfoque suave */}
      <div 
        className="absolute inset-0 bg-[#081b29]/40 backdrop-blur-sm animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      {/* Contenedor Lateral (Drawer) */}
      <div className="relative w-full max-w-2xl bg-white h-screen shadow-[-20px_0_50px_rgba(0,0,0,0.1)] overflow-y-auto animate-in slide-in-from-right duration-500 ease-out">
        
        {/* Cabecera Flotante */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md p-6 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0993e2] rounded-xl flex items-center justify-center text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Detalle del Programa</span>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-gray-100 rounded-full transition-colors group">
            <X size={24} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Contenido Hero */}
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h3 className="text-4xl md:text-5xl font-[900] text-gray-900 leading-[0.95] tracking-tighter mb-6">
              {program.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest">
                {program.duration}
              </span>
              <span className="px-4 py-2 border border-gray-200 text-gray-500 rounded-lg text-[10px] font-black uppercase tracking-widest">
                {program.level || 'Especializado'}
              </span>
            </div>
          </div>

          {/* Sección 1: Impacto Profesional (Diferente a Técnicos) */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="p-6 bg-[#f0f9ff] rounded-[32px] border border-[#bae6fd]">
              <Target className="text-[#0993e2] mb-3" size={24} />
              <h5 className="font-black text-sm text-gray-900 mb-1">Propósito</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Actualización de alto nivel para el entorno competitivo actual.</p>
            </div>
            <div className="p-6 bg-[#f0fdf4] rounded-[32px] border border-[#bbf7d0]">
              <BarChart3 className="text-[#4aa82c] mb-3" size={24} />
              <h5 className="font-black text-sm text-gray-900 mb-1">Impacto</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Incrementa tu valor profesional y habilidades gerenciales.</p>
            </div>
          </div>

          {/* Sección 2: ¿Qué aprenderás? (Cronograma Visual) */}
          <div className="mb-12">
            <h4 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-8">
              <Calendar size={20} className="text-[#0993e2]" />
              Ruta de Aprendizaje
            </h4>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
              {(program.curriculum || ["Fase Inicial", "Fase Estratégica", "Fase Aplicada"]).map((fase, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-white border-4 border-[#0993e2] rounded-full z-10"></div>
                  <h5 className="font-black text-gray-900 mb-1">Módulo 0{i+1}</h5>
                  <p className="text-sm text-gray-500 font-medium">{fase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sección 3: Certificación y Aval */}
          <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 mb-12">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <ShieldCheck className="text-[#4aa82c]" size={28} />
              </div>
              <div>
                <h4 className="font-black text-gray-900 mb-1 uppercase text-xs tracking-widest">Certificación Premium</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Al completar el programa, recibirás un diploma digital y físico avalado por la institución, con validez para tu hoja de vida profesional.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Persuasivo */}
          <button className="w-full group bg-gray-900 hover:bg-[#0993e2] p-2 rounded-[24px] transition-all duration-500 shadow-xl shadow-gray-200">
            <div className="bg-white/10 group-hover:bg-[#4aa82c] rounded-[18px] p-6 flex items-center justify-between transition-colors">
              <div className="text-left text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Matrícula abierta</p>
                <p className="text-xl font-black">Iniciar Inscripción</p>
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 group-hover:rotate-[-45deg] transition-transform">
                <ArrowRight size={20} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiplomadoDrawer;