import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Importamos Link
import { 
  CheckCircle2, 
  FileText, 
  Calendar, 
  UserCheck, 
  ArrowRight, 
  ShieldCheck,
  Info,
  Clock
} from 'lucide-react';
import bachiInfo from '../data/BachilleratoData';

const BachilleratoDetail = () => {
  return (
    <section id="bachillerato-info" className="py-24 pt-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* --- CABECERA DE SECCIÓN --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-green-50 text-[#4aa82c] text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100">
                {bachiInfo.header.category}
              </span>
            </div>
            <h2 className="text-[42px] md:text-[72px] font-[900] text-gray-900 leading-[0.95] tracking-tighter mb-8">
              {bachiInfo.header.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
                {bachiInfo.header.highlight}
              </span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
              {bachiInfo.header.description}
            </p>
            
            {/* Stats Rápidas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
              {bachiInfo.stats.map((stat, i) => (
                <div key={i} className="p-5 rounded-[24px] bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="text-[#0993e2] mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-sm font-bold text-gray-900">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta de Requisitos */}
          <div className="bg-[#081b29] p-8 md:p-12 rounded-[40px] shadow-2xl relative">
            <div className="absolute top-0 right-10 w-20 h-20 bg-[#4aa82c] rounded-b-3xl flex items-center justify-center text-white shadow-lg">
              <FileText size={32} />
            </div>
            <h3 className="text-2xl font-black text-white mb-8 pr-16 tracking-tight">Requisitos de Matrícula</h3>
            <ul className="space-y-5">
              {bachiInfo.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 size={18} className="text-[#4aa82c]" />
                  </div>
                  <p className="text-gray-300 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                    {req}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-[#0993e2]">
                <ShieldCheck size={24} />
                <p className="text-[11px] font-black uppercase tracking-widest leading-tight">
                  Título otorgado: Bachiller Académico <br />
                  <span className="text-gray-500 text-[9px]">Legalizado ante secretaría de educación</span>
                </p>
              </div>
            </div>
          </div>
        </div>

       {/* --- CTA FINAL --- */}
        <div className="mt-24 p-8 md:p-16 rounded-[48px] bg-gradient-to-r from-[#0993e2] to-[#4aa82c] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 text-white max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
              ¿Listo para obtener tu título?
              </h3>
              <p className="text-white/80 font-medium text-lg">
              Inicia tu proceso hoy mismo y gradúate en tiempo récord con validez nacional.
              </p>
          </div>
          
          <div className="relative z-10">
              {/* Cambiado de <a> a <Link> para navegación fluida en SPA */}
              <Link 
                to={bachiInfo.cta?.href || "/"} 
                className="inline-flex px-10 py-5 bg-white text-gray-900 rounded-[22px] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all items-center gap-3 group whitespace-nowrap"
              >
                {bachiInfo.cta?.label || "Empezar Matrícula"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>

          {/* Círculos decorativos de fondo */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default BachilleratoDetail;