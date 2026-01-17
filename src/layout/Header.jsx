import React, { useState, useEffect } from 'react';

// Configuración de navegación fácilmente editable
const NAV_LINKS = [
  { name: "Bachillerato", href: "#validacion", desc: "Termina tus estudios rápido" },
  { name: "Técnicos", href: "#tecnicos", desc: "Programas laborales" },
  { name: "Diplomados", href: "#diplomados", desc: "Especializaciones cortas" },
  { name: "Sedes", href: "#sedes", desc: "Ubícanos en tu ciudad" },
];

const Header = ({ logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar scroll y añadir sombra extra
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll del cuerpo cuando el menú móvil esté abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <>
      {/* WRAPPER PRINCIPAL - Usamos sticky para que siga el scroll */}
      <div className={`fixed top-0 w-full z-[100] px-4 py-4 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <header className={`max-w-7xl mx-auto h-20 bg-white/90 backdrop-blur-md border border-white/40 rounded-[28px] flex items-center justify-between px-6 lg:px-10 transition-all duration-300 ${isScrolled ? 'shadow-2xl shadow-blue-900/10' : 'shadow-xl shadow-gray-200/50'}`}>
          
          {/* --- LOGO SECTION --- */}
          <div className="flex items-center gap-3 group cursor-pointer">
            {logo ? (
              <img src={logo} alt="Fundetec" className="h-10 w-auto" />
            ) : (
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-white shadow-lg transition-transform group-hover:rotate-12" 
                     style={{ backgroundColor: '#4aa82c' }}>
                  F
                </div>
                <div className="ml-3 flex flex-col">
                  <span className="text-xl font-black tracking-tighter text-gray-800 leading-none">FUNDETEC</span>
                  <span className="text-[10px] font-bold text-[#0993e2] uppercase tracking-widest mt-1">Educación Técnica</span>
                </div>
              </div>
            )}
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100">
            {NAV_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-gray-600 hover:text-[#0993e2] hover:bg-white transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* --- ACTIONS & MOBILE TOGGLE --- */}
          <div className="flex items-center gap-4">
            {/* Badge de estado (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-4 py-2 bg-[#4aa82c]/10 rounded-full border border-[#4aa82c]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4aa82c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4aa82c]"></span>
              </span>
              <span className="text-[10px] font-black text-[#4aa82c] tracking-wider uppercase">Matrículas Abiertas</span>
            </div>

            <button 
              className="hidden sm:block px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
              style={{ backgroundColor: '#4aa82c' }}
            >
              Inscribirse
            </button>

            {/* BOTÓN MENÚ MÓVIL (Grid Icon) */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center bg-gray-900 rounded-2xl gap-1 hover:bg-gray-800 transition-colors"
            >
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#4aa82c] rounded-full"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-[#0993e2] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </button>
          </div>
        </header>
      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      {/* Usamos fixed e inset-0 para que cubra todo y z-index máximo */}
      <div className={`fixed inset-0 z-[150] transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        
        {/* Fondo oscuro con blur */}
        <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Contenido del Panel Lateral */}
        <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col">
          <div className="p-8 flex justify-between items-center border-b border-gray-50">
            <span className="font-black text-xl text-[#4aa82c]">FUNDETEC</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-800 text-xl font-light hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 px-8 pt-12 flex flex-col gap-10">
            {NAV_LINKS.map((item, idx) => (
              <a 
                key={item.name} 
                href={item.href}
                className="group flex flex-col"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#0993e2] font-mono text-sm">0{idx + 1}</span>
                  <span className="text-3xl font-black text-gray-900 group-hover:text-[#4aa82c] transition-colors uppercase tracking-tighter">
                    {item.name}
                  </span>
                </div>
                <span className="text-gray-400 text-sm mt-1 ml-9 font-medium">{item.desc}</span>
              </a>
            ))}
          </nav>

          <div className="p-8 bg-gray-50 mt-auto">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Atención al estudiante</p>
            <div className="flex flex-col gap-4">
              <a href="tel:3000000000" className="text-xl font-black text-gray-800 hover:text-[#0993e2] transition-colors tracking-tight">
                +57 300 123 4567
              </a>
              <button 
                className="w-full py-5 rounded-2xl text-white font-black text-sm uppercase tracking-[0.15em] shadow-xl shadow-[#4aa82c]/20 transition-transform active:scale-95"
                style={{ backgroundColor: '#4aa82c' }}
              >
                Inscribirme Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;