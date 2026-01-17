import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ChevronRight, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081b29] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- SECCIÓN SUPERIOR: BRANDING & CONTACTO RÁPIDO --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 border-b border-white/10 gap-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#4aa82c] flex items-center justify-center font-black text-white text-2xl shadow-lg">
              F
            </div>
            <div>
              <h2 className="text-3xl font-[900] tracking-tighter leading-none">FUNDETEC</h2>
              <p className="text-[#0993e2] text-[10px] font-black uppercase tracking-[0.3em] mt-1">Institución de Educación Superior</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#4aa82c]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase">Línea Nacional</p>
                <p className="text-sm font-bold">+57 300 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#0993e2]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase">Correo Oficial</p>
                <p className="text-sm font-bold">info@fundetec.edu.co</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- GRID PRINCIPAL: NAVEGACIÓN CLÁSICA --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          
          {/* Columna 1: Nosotros */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white border-l-4 border-[#4aa82c] pl-4">Nuestra Misión</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Comprometidos con la formación integral y el desarrollo humano. Más de dos décadas liderando procesos educativos de calidad en todo el territorio nacional.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors border border-white/10 p-2 rounded-lg hover:bg-white/5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Programas Académicos */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white border-l-4 border-[#0993e2] pl-4">Programas</h4>
            <ul className="space-y-3">
              {['Validación de Bachillerato', 'Técnicos Laborales', 'Diplomados de Alta Gerencia', 'Cursos de Especialización'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-1">
                    <ChevronRight size={14} className="text-[#4aa82c]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Enlaces de Interés */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white border-l-4 border-[#4aa82c] pl-4">Institucional</h4>
            <ul className="space-y-3">
              {['Preguntas Frecuentes', 'Portal del Estudiante', 'Sedes y Horarios', 'Trabaja con Nosotros'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Certificaciones y Legal */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white border-l-4 border-[#0993e2] pl-4">Legalidad</h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#4aa82c]" size={24} />
                <span className="text-xs font-black leading-tight uppercase">Institución Certificada</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-snug">
                Resolución oficial de la Secretaría de Educación Nacional. Programas con registro calificado vigente.
              </p>
            </div>
          </div>

        </div>

        {/* --- BARRA DE COPYRIGHT --- */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            © {currentYear} Fundetec — Todos los derechos reservados
          </p>
          <div className="flex gap-8 text-[11px] font-black text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Tratamiento de Datos</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;