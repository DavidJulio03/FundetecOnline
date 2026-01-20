import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HeaderData from '../data/HeaderData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <div className={`fixed top-0 w-full z-[100] px-4 transition-all duration-500 
        ${isScrolled 
          ? 'py-3 bg-white/40 backdrop-blur-md border-b border-white/20' 
          : 'py-6 bg-transparent'}`}
      >
        <header className={`max-w-7xl mx-auto h-20 flex items-center justify-between px-6 lg:px-10 transition-all duration-300 rounded-[28px]
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-2xl shadow-blue-900/10 border-white/50' 
            : 'bg-white shadow-xl shadow-gray-200/50 border-white/10'}`}
        >
          
          {/* Logo con Link */}
          <Link to="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative flex items-center justify-center">
              {HeaderData.brand.logoUrl ? (
                <img
                  src={HeaderData.brand.logoUrl}
                  alt={HeaderData.brand.name}
                  className="h-11 w-11 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-white shadow-lg transition-transform duration-300 group-hover:rotate-12"
                  style={{ backgroundColor: HeaderData.brand.colors.primary }}
                >
                  {HeaderData.brand.name.charAt(0)}
                </div>
              )}
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter text-gray-800 uppercase">
                {HeaderData.brand.name}
              </span>
              <span className="text-[9px] font-black text-[#0993e2] uppercase tracking-[0.2em] mt-1.5">
                {HeaderData.brand.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Nav con Link */}
          <nav className="hidden lg:flex items-center bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100">
            {HeaderData.navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-gray-600 hover:text-[#0993e2] hover:bg-white transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Botón Campus con Link */}
            <Link 
              to={HeaderData.campusButton?.href || "#"}
              className="hidden xl:flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-white rounded-full border border-gray-200 transition-all group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0993e2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0993e2]"></span>
              </span>
              <span className="text-[10px] font-black text-gray-600 group-hover:text-[#0993e2] tracking-wider uppercase transition-colors">
                {HeaderData.campusButton?.label || "Campus Virtual"}
              </span>
            </Link>

            {/* Botón Inscripción con Link */}
            <Link 
              to={HeaderData.actionButton.href}
              className="hidden sm:block px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest text-white shadow-lg hover:brightness-110 active:scale-95 transition-all text-center"
              style={{ backgroundColor: HeaderData.actionButton.color }}
            >
              {HeaderData.actionButton.label}
            </Link>

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

      {/* Menú Móvil */}
      <div className={`fixed inset-0 z-[150] transition-all duration-500 ease-in-out 
        ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col">
          <div className="p-8 flex justify-between items-center border-b border-gray-50">
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl text-gray-900">{HeaderData.brand.name}</span>
              <span className="text-[10px] font-bold text-[#4aa82c] uppercase tracking-widest mt-1">Navegación</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-800 text-xl hover:bg-gray-200">
              ✕
            </button>
          </div>

          <nav className="flex-1 px-8 pt-12 flex flex-col gap-8">
            {HeaderData.navLinks.map((item, idx) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="group flex flex-col" 
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#0993e2] font-mono text-sm">0{idx + 1}</span>
                  <span className="text-3xl font-black text-gray-900 group-hover:text-[#4aa82c] transition-colors uppercase tracking-tighter">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
            
            <Link 
              to={HeaderData.campusButton?.href || "#"}
              className="mt-4 flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-xs uppercase bg-gray-100 text-gray-600 border border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {HeaderData.campusButton?.label || "Acceder al Campus"}
            </Link>
          </nav>

          <div className="p-8 text-center bg-gray-50 border-t border-gray-100">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">© {new Date().getFullYear()} {HeaderData.brand.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;