import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Importamos Link por si necesitas navegación interna
import { X, CheckCircle2, Clock, Award, BookOpen, ArrowRight } from 'lucide-react';

const TecnicoModal = ({ program, onClose }) => {
  if (!program) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-[#081b29]/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] md:rounded-[48px] shadow-2xl flex flex-col lg:flex-row animate-in zoom-in-95 duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-2xl transition-all active:scale-90"
        >
          <X size={24} strokeWidth={3} />
        </button>

        {/* COLUMNA IZQUIERDA: Info dinámica */}
        <div className="lg:w-2/5 bg-gray-50 p-8 md:p-12">
          <div className="relative h-64 rounded-[32px] overflow-hidden mb-8 shadow-lg">
            <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[10px] font-black uppercase tracking-widest bg-[#4aa82c] px-3 py-1 rounded-lg">Oficial</span>
              <h3 className="text-xl font-black mt-2 leading-tight tracking-tighter">{program.title}</h3>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
              <Clock className="text-[#0993e2]" size={24} />
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Duración</p>
                <p className="text-sm font-bold text-gray-900">{program.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
              <Award className="text-[#4aa82c]" size={24} />
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Título</p>
                <p className="text-sm font-bold text-gray-900">Técnico Laboral</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Pensum dinámico */}
        <div className="lg:w-3/5 p-8 md:p-12">
          <div className="mb-10">
            <h4 className="text-[10px] font-black text-[#0993e2] uppercase tracking-[0.3em] mb-3">Descripción del Perfil</h4>
            <p className="text-gray-500 font-medium leading-relaxed">
              {program.description}
            </p>
          </div>

          <div className="mb-10">
            <h4 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-[#4aa82c]" />
              Módulos del Pensum
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.curriculum?.map((modulo, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                  <CheckCircle2 size={16} className="text-[#4aa82c]" />
                  <span className="text-sm font-bold text-gray-700">{modulo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA SECCIÓN */}
          <div className="bg-[#081b29] rounded-[32px] p-8 text-white relative overflow-hidden">
            <div className="relative z-10 text-center sm:text-left">
              <h4 className="text-xl font-black mb-2">Inicia tu inscripción</h4>
              <p className="text-gray-400 text-sm mb-6">Pregunta por nuestras opciones de financiación y becas disponibles para <strong>{program.title}</strong>.</p>
              
              {/* IMPORTANTE: 
                  Si 'action_href' es un link externo (WhatsApp), usa <a>.
                  Si es una página de tu propia web, usa <Link to={program.action_href}>.
              */}
              <a 
                href={program.action_href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto px-8 py-4 bg-[#4aa82c] hover:bg-white hover:text-gray-900 text-white rounded-[18px] font-black text-[10px] uppercase tracking-widest transition-all items-center justify-center gap-3 active:scale-95"
              >
                Hablar con un asesor
                <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4aa82c]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TecnicoModal;