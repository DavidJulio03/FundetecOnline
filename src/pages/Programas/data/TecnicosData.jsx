const tecnicosData = {
  // Configuración de la cabecera
  id: 'tecnicos',
  header: {
    title: "NUESTROS",
    highlight: "PROGRAMAS.",
    description: "Selecciona una categoría para filtrar tu futuro profesional.",
    badge: "OFERTA ACADÉMICA"
  },

  // Categorías para los filtros
  categories: ["Todos", "Salud", "Administración", "Tecnología", "Educación", "Diseño"],

  // Base de datos de programas
  programs: [
    {
      id: 1,
      title: "Auxiliar de Enfermería",
      category: "Salud",
      duration: "3 Semestres",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
      description: "Capacitación de alto nivel en cuidado clínico, primeros auxilios y asistencia hospitalaria humanizada con enfoque en servicio social.",
      curriculum: ["Anatomía Básica", "Cuidado Integral", "Farmacología", "Práctica Clínica", "Ética Médica", "Salud Pública"],
      action_href: 'https://wa.me/123456789'
    },
    {
      id: 2,
      title: "Sistemas e Informática",
      category: "Tecnología",
      duration: "2 Semestres",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
      description: "Domina el desarrollo de software, mantenimiento de hardware y administración de redes locales para empresas tecnológicas.",
      curriculum: ["Programación Web", "Arquitectura de PC", "Redes Cisco", "Bases de Datos", "Soporte Técnico", "Ciberseguridad"],
      action_href: 'https://wa.me/123456789'
    },
    {
      id: 3,
      title: "Administración de Empresas",
      category: "Administración",
      duration: "2 Semestres",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800",
      description: "Aprende a gestionar procesos organizacionales, contables y de talento humano con una visión moderna y eficiente.",
      curriculum: ["Procesos Administrativos", "Contabilidad General", "Talento Humano", "Marketing Digital", "Finanzas Básicas", "Legislación Laboral"],
      action_href: 'https://wa.me/123456789'
    },
    {
      id: 4,
      title: "Atención a la Primera Infancia",
      category: "Educación",
      duration: "3 Semestres",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800",
      description: "Formación especializada en pedagogía, cuidado y desarrollo integral de niños y niñas en sus primeros años de vida.",
      curriculum: ["Psicología Infantil", "Lúdica y Recreación", "Nutrición Escolar", "Pedagogía", "Primeros Auxilios", "Derechos de la Infancia"],
      action_href: 'https://wa.me/123456789'
    },
    {
      id: 5,
      title: "Diseño Gráfico Digital",
      category: "Diseño",
      duration: "2 Semestres",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
      description: "Crea piezas visuales impactantes y gestiona la identidad de marca utilizando herramientas líderes de la industria como Adobe Creative Cloud.",
      curriculum: ["Adobe Photoshop", "Ilustración Digital", "Teoría del Color", "Branding", "Diseño Editorial", "Fotografía Digital"],
      action_href: 'https://wa.me/123456789'
    },
    {
      id: 6,
      title: "Contabilidad y Finanzas",
      category: "Administración",
      duration: "2 Semestres",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
      description: "Gestiona estados financieros, nóminas y declaraciones tributarias para PYMES y grandes organizaciones.",
      curriculum: ["Técnica Contable", "Nómina y Prestaciones", "Software Contable", "Tributaria", "Auditoría Básica", "Excel Financiero"],
      action_href: 'https://wa.me/123456789'
    }
  ]
};

export default tecnicosData;