import React from 'react';
import { ChevronRight, Award } from 'lucide-react';
import FooterData from '../data/FooterData';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081b29] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- SECCIÓN SUPERIOR: BRANDING & CONTACTO RÁPIDO --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 border-b border-white/10 gap-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#4aa82c] flex items-center justify-center font-black text-white text-2xl shadow-lg">
              {FooterData.brand.letter}
            </div>
            <div>
              <h2 className="text-3xl font-[900] tracking-tighter leading-none">{FooterData.brand.name}</h2>
              <p className="text-[#0993e2] text-[10px] font-black uppercase tracking-[0.3em] mt-1">
                {FooterData.brand.tagline}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-auto">
            {FooterData.contact.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-black uppercase">{item.label}</p>
                  <p className="text-sm font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          
          {/* Columna 1: Nosotros & Socials */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white border-l-4 border-[#4aa82c] pl-4">Nuestra Misión</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              {FooterData.brand.mission}
            </p>
            <div className="flex gap-4 pt-2">
              {FooterData.socials.map(({ Icon, href }, i) => (
                <a key={i} href={href} className="text-gray-400 hover:text-white transition-colors border border-white/10 p-2 rounded-lg hover:bg-white/5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Columnas 2 y 3: Menús Dinámicos */}
          {FooterData.menus.map((menu, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className={`text-sm font-black uppercase tracking-widest text-white border-l-4 ${menu.accent} pl-4`}>
                {menu.title}
              </h4>
              <ul className="space-y-3">
                {menu.items.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm font-bold flex items-center gap-2 transition-all hover:translate-x-1">
                      <ChevronRight size={14} className="text-[#4aa82c]" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Columna 4: Certificaciones y Legal */}
          <div className="space-y-6">
            <h4 className={`text-sm font-black uppercase tracking-widest text-white border-l-4 ${FooterData.legalInfo.accent} pl-4`}>
              {FooterData.legalInfo.title}
            </h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#4aa82c]" size={24} />
                <span className="text-xs font-black leading-tight uppercase">
                  {FooterData.legalInfo.badgeText}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 leading-snug">
                {FooterData.legalInfo.description}
              </p>
            </div>
          </div>

        </div>

        {/* --- BARRA DE COPYRIGHT --- */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            © {currentYear} {FooterData.brand.name} — Todos los derechos reservados
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[11px] font-black text-gray-500 uppercase tracking-widest">
            {FooterData.bottomLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;