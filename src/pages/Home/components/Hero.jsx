import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HeroData from '../data/HeroData';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-30 md:pt-36 lg:pt-4">
      
      {/* Fondo Geométrico */}
      <div 
        className="absolute right-0 top-0 h-[110%] w-[38%] hidden xl:block skew-x-[-6deg] translate-x-24 z-0"
        style={{ background: 'linear-gradient(135deg, #0993e2 0%, #077ab9 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: 'radial-gradient(white 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 xl:gap-12">
          
          {/* BLOQUE DE TEXTO */}
          <div className="w-full lg:w-[58%] xl:w-[50%] z-20 text-center lg:text-left pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="w-8 h-[2px] bg-[#4aa82c]"></span>
              <span className="text-[#4aa82c] text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase">
                {HeroData.badge}
              </span>
            </div>
            
            <h1 className="text-[42px] sm:text-[55px] md:text-[68px] lg:text-[62px] xl:text-[84px] font-[900] leading-[1] lg:leading-[0.92] text-gray-900 mb-6 tracking-tight">
              {HeroData.title.main} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
                {HeroData.title.highlight}
              </span> <br className="hidden sm:block" />
              {HeroData.title.end}
            </h1>
            
            <p className="text-gray-500 text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              {HeroData.description}
            </p>

            {/* BOTONES ACTUALIZADOS A LINK */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start items-center">
              {HeroData.buttons.map((btn, index) => (
                <Link
                  key={index}
                  to={btn.href}
                  className={`w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 ${
                    btn.primary 
                    ? "text-white shadow-xl shadow-[#4aa82c]/25 hover:shadow-[#4aa82c]/40 hover:-translate-y-1" 
                    : "bg-white border-2 border-gray-100 text-gray-700 hover:border-[#0993e2]/30 hover:bg-gray-50"
                  }`}
                  style={btn.primary ? { backgroundColor: '#4aa82c' } : {}}
                >
                  {btn.label}
                  {btn.icon && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* STATS BAR */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-12 border-t border-gray-100 pt-8 w-full sm:w-auto">
              {HeroData.stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div>
                    <p className={`text-2xl md:text-3xl font-black leading-none mb-1 ${stat.color}`}>{stat.value}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                  {index < HeroData.stats.length - 1 && (
                    <div className="hidden sm:block w-[1px] h-10 bg-gray-100"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* COMPOSICIÓN VISUAL */}
          <div className="w-full lg:w-[42%] flex justify-center relative mt-8 lg:mt-0 pb-12 lg:pb-0">
            <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-none aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] z-10 border-[10px] md:border-[16px] border-white">
              <img src={HeroData.images.main} alt="Estudiante" className="w-full h-full object-cover scale-105" />
            </div>

            {/* Tarjeta Certificado */}
            <div className="absolute -left-4 md:-left-8 lg:-left-12 top-12 z-20 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-[28px] shadow-2xl border border-white/50 max-w-[140px] md:max-w-[180px]">
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-[#4aa82c] flex items-center justify-center text-white mb-3 shadow-lg shadow-[#4aa82c]/30">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p className="font-black text-gray-900 text-[11px] md:text-xs uppercase italic mb-1">CERTIFICADO</p>
                <p className="text-[10px] text-gray-500 font-bold leading-tight">{HeroData.labels.certificate}</p>
            </div>

            {/* Tarjeta Estudiantes */}
            <div className="absolute -right-4 md:-right-8 lg:-right-4 bottom-16 md:bottom-20 z-20 bg-gray-900/95 backdrop-blur-md p-5 md:p-6 rounded-[32px] shadow-2xl max-w-[180px] md:max-w-[220px] border border-white/10">
              <div className="flex flex-col gap-4">
                <div className="flex -space-x-3">
                  {HeroData.images.students.map(id => (
                    <div key={id} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-900 bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${id}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-900 bg-[#0993e2] flex items-center justify-center text-[10px] font-black text-white">
                    {HeroData.images.count}
                  </div>
                </div>
                <p className="text-white text-[10px] md:text-[11px] font-bold leading-tight opacity-90 tracking-tight">
                  {HeroData.labels.socialProof}
                </p>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[120%] border-[1.5px] border-gray-100/80 rounded-full -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>

      {/* SVG Separador */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
        <svg className="relative block w-full h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.11,1200,0V120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
      
    </section>
  );
};

export default Hero;