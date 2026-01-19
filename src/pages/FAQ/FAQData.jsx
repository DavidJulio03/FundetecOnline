import { HelpCircle, ChevronRight, MessageCircle, BookOpen, MapPin, GraduationCap } from 'lucide-react';

const faqConfig = {
  header: {
    badge: "Centro de Soporte",
    title: "Preguntas",
    highlight: "Frecuentes",
    description: "Todo lo que necesitas saber sobre tu proceso académico en FUNDETEC."
  },
  categories: [
    { id: 'general', name: 'General', icon: <HelpCircle size={18} /> },
    { id: 'academico', name: 'Académico', icon: <BookOpen size={18} /> },
    { id: 'sedes', name: 'Sedes y Registro', icon: <MapPin size={18} /> },
  ],
  questions: [
    {
      id: 1,
      cat: 'general',
      q: "¿Qué es el bachillerato por ciclos (CLEI)?",
      a: "Es una metodología aprobada por el Ministerio de Educación que permite a jóvenes y adultos terminar su bachillerato en menos tiempo, cursando dos grados en un solo año lectivo."
    },
    {
      id: 2,
      cat: 'academico',
      q: "¿Qué requisitos necesito para los programas técnicos?",
      a: "Generalmente requerimos fotocopia del documento de identidad, certificado de noveno grado aprobado y muchas ganas de aprender. Cada programa puede tener requisitos adicionales específicos."
    },
    {
      id: 3,
      cat: 'sedes',
      q: "¿Dónde están ubicadas las 9 sedes?",
      a: "Contamos con presencia nacional estratégica. Puedes encontrar nuestras sedes principales en ciudades clave para facilitar tu acceso a la educación técnica."
    },
    {
      id: 4,
      cat: 'general',
      q: "¿Los títulos son oficiales?",
      a: "Sí, todos nuestros programas de validación y técnicos cuentan con las resoluciones legales vigentes, asegurando que tu título sea válido para continuar estudios superiores o trabajar."
    }
  ]
};

export default faqConfig