const blogConfig = {
  categories: ["Todos", "Academia", "Institucional", "Bienestar", "Tecnología"],
  posts: [
    {
      id: 1,
      title: "El futuro de la formación técnica en Colombia: Retos y Oportunidades",
      excerpt: "Analizamos cómo la educación técnica está transformando la empleabilidad en el país y por qué las empresas buscan hoy perfiles prácticos.",
      author: "Dirección Académica",
      authorRole: "Investigación Educativa", // Nuevo campo
      date: "Oct 12, 2025",
      readTime: "5 min",
      category: "Academia",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      featured: true,
      tags: ["Educación", "Empleabilidad", "Colombia", "Futuro"], // Nuevo campo
      // Nuevo campo: Contenido estructurado para renderizado dinámico
      content: [
        {
          type: "paragraph",
          text: "En la última década, la percepción sobre la educación técnica y tecnológica en Colombia ha dado un giro de 180 grados. Lo que antes se consideraba una 'segunda opción', hoy se posiciona como la ruta más eficiente hacia la inserción laboral exitosa."
        },
        {
          type: "heading",
          text: "¿Por qué las empresas prefieren técnicos?"
        },
        {
          type: "paragraph",
          text: "Las estadísticas son claras: el sector productivo requiere agilidad. Los egresados de programas técnicos poseen habilidades específicas ('hard skills') que les permiten operar desde el día uno. A diferencia de la formación teórica tradicional, el modelo técnico se centra en el 'saber hacer'."
        },
        {
          type: "quote",
          text: "La brecha de talento en tecnología y servicios no se cierra con títulos, se cierra con competencias reales y demostrables.",
          author: "Estudio de Mercado Laboral 2025"
        },
        {
          type: "paragraph",
          text: "Además, la adaptabilidad de los currículos técnicos permite que las instituciones actualicen sus programas en tiempo real, respondiendo a tecnologías emergentes como la IA y la automatización industrial."
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
          caption: "Estudiantes aplicando conocimientos en entornos reales."
        },
        {
          type: "heading",
          text: "El camino a seguir"
        },
        {
          type: "paragraph",
          text: "Para capitalizar estas oportunidades, es vital que los estudiantes complementen su formación técnica con habilidades blandas: inglés, liderazgo y trabajo en equipo. En Fundetec, este enfoque integral es el pilar de nuestra metodología."
        }
      ]
    },
    // ... (Puedes expandir los otros posts con la misma estructura)
    {
      id: 2,
      title: "Nueva sede en Bucaramanga: Más cerca de tus metas",
      excerpt: "Abrimos las puertas de nuestro nuevo campus con laboratorios de última generación.",
      author: "Comunicaciones",
      authorRole: "Prensa Institucional",
      date: "Sep 28, 2025",
      readTime: "3 min",
      category: "Institucional",
      image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=800",
      featured: false,
      tags: ["Infraestructura", "Crecimiento", "Bucaramanga"],
      content: [
        { type: "paragraph", text: "Estamos orgullosos de anunciar la apertura de nuestra nueva sede..." }
      ]
    },
    {
      id: 3,
      title: "Tips para organizar tu tiempo de estudio si trabajas",
      excerpt: "La flexibilidad es clave. Te damos 5 consejos prácticos para equilibrar tu vida laboral y académica.",
      author: "Bienestar Estudiantil",
      authorRole: "Psicología",
      date: "Sep 15, 2025",
      readTime: "4 min",
      category: "Bienestar",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
      featured: false,
      tags: ["Productividad", "Consejos", "Estilo de Vida"],
      content: [
        { type: "paragraph", text: "Trabajar y estudiar es un reto que forja el carácter..." }
      ]
    },
    {
      id: 4,
      title: "Cómo la IA está cambiando la programación técnica",
      excerpt: "Descubre cómo integramos herramientas de Inteligencia Artificial en nuestros programas de formación.",
      author: "Facultad de Sistemas",
      authorRole: "Innovación Tecnológica",
      date: "Ago 30, 2025",
      readTime: "6 min",
      category: "Tecnología",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      featured: false,
      tags: ["Inteligencia Artificial", "Programación", "Innovación"],
      content: [
        { type: "paragraph", text: "La inteligencia artificial ha dejado de ser ciencia ficción..." }
      ]
    }
  ]
};

export default blogConfig;