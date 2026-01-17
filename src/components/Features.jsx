import React from 'react';
import { Award, Laptop, CheckCircle, Users } from 'lucide-react';

const Features = () => {
  const features = [
    { 
      icon: <Award />, 
      title: "+25 Años", 
      fullTitle: "+25 Años de Experiencia",
      desc: "Trayectoria formando líderes.",
      color: "#0993e2",
      lightColor: "bg-blue-50"
    },
    { 
      icon: <Laptop />, 
      title: "100% Virtual", 
      fullTitle: "Flexibilidad Total",
      desc: "Estudia a tu propio ritmo.",
      color: "#4aa82c",
      lightColor: "bg-green-50"
    },
    { 
      icon: <CheckCircle />, 
      title: "Legalidad", 
      fullTitle: "Legalidad Vigente",
      desc: "Resolución oficial vigente.",
      color: "#0993e2",
      lightColor: "bg-blue-50"
    },
    { 
      icon: <Users />, 
      title: "Docentes", 
      fullTitle: "Docentes Reales",
      desc: "Mentoría personalizada.",
      color: "#4aa82c",
      lightColor: "bg-green-50"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-8 relative z-10">
        
        {/* --- CABECERA --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-4 md:gap-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-3 justify-center lg:justify-start">
              <span className="w-6 h-[3px] bg-[#4aa82c] rounded-full"></span>
              <span className="text-[#4aa82c] font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">Ventajas</span>
            </div>
            <h2 className="text-[28px] md:text-5xl font-[900] text-gray-900 leading-[1.1]">
              ¿POR QUÉ ELEGIR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0993e2] to-[#4aa82c]">
                FUNDETEC?
              </span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium text-sm md:text-lg max-w-sm text-center lg:text-right mx-auto lg:mx-0 opacity-80">
            Tecnología avanzada y calidez humana para tu éxito profesional.
          </p>
        </div>

        {/* --- GRID RESPONSIVO --- 
            grid-cols-2 en móvil (pequeños) 
            grid-cols-2 en tablet
            grid-cols-4 en desktop
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative p-5 md:p-8 rounded-[24px] md:rounded-[32px] bg-white border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Icono adaptable */}
              <div 
                className={`w-12 h-12 md:w-16 md:h-16 ${feature.lightColor} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110`}
                style={{ color: feature.color }}
              >
                {/* Ajuste de tamaño de icono según dispositivo */}
                <div className="scale-75 md:scale-100">
                  {React.cloneElement(feature.icon, { size: 32, strokeWidth: 2.5 })}
                </div>
              </div>

              {/* Título: Usa versión corta en móvil si es necesario */}
              <h3 className="text-sm md:text-xl font-black text-gray-900 mb-2 md:mb-4 leading-tight uppercase tracking-tight">
                <span className="md:hidden">{feature.title}</span>
                <span className="hidden md:inline">{feature.fullTitle}</span>
              </h3>

              {/* Descripción */}
              <p className="text-gray-500 font-medium leading-snug md:leading-relaxed text-[11px] md:text-sm">
                {feature.desc}
              </p>

              {/* Decoración Hover (Desktop only for performance) */}
              <div 
                className="absolute bottom-0 left-6 right-6 h-1 rounded-t-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 hidden lg:block"
                style={{ backgroundColor: feature.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* --- DECORACIÓN DE FONDO (Sutil para tablet/celular) --- */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-50/50 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default Features;