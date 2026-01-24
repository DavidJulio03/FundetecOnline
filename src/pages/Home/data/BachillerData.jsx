import { ArrowUpRight, Play } from 'lucide-react';

const BachillerData = {
  badge: "Validación Oficial CLEI",
  title: {
    upper: "TERMINA TU",
    highlight: "BACHILLERATO."
  },
  description: (
    <>
      Validación legal por ciclos diseñada para <strong className="text-gray-900 font-bold">adultos</strong>. Estudia a tu ritmo y obtén tu título oficial de Bachiller Académico.
    </>
  ),
  actions: [
    { 
      label: "Iniciar Ahora", 
      href: "#inscripcion", 
      primary: true, 
      icon: <ArrowUpRight size={18} strokeWidth={3} /> 
    },
    // { 
    //   label: "Cómo funciona", 
    //   href: "/metodologia", 
    //   primary: false, 
    //   icon: <Play size={16} fill="currentColor" /> 
    // }
  ],
  stats: [
    { label: "Graduados", val: "5k+", color: "text-[#0993e2]" },
    { label: "Duración", val: "4 Meses", color: "text-[#4aa82c]" },
    { label: "Legalidad", val: "100%", color: "text-gray-900" },
    { label: "Modalidad", val: "Virtual", color: "text-gray-900" }
  ],
  visual: {
    mainImage: "https://ual-media-res.cloudinary.com/image/fetch/c_fill,f_auto,fl_lossy,q_auto,w_2000,g_auto,g_auto/https://www.arts.ac.uk/__data/assets/image/0027/446724/R6AC3315.jpg",
    floatingBadge: "Inscripciones Abiertas",
    progress: {
      currentCycle: "Ciclo VI (11°)",
      target: "Título de Bachiller",
      percentage: "85%"
    }
  }
}

export default BachillerData