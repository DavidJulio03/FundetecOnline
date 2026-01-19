import { 
  CheckCircle2, 
  FileText, 
  Calendar, 
  UserCheck, 
  ArrowRight, 
  ShieldCheck,
  Info,
  Clock
} from 'lucide-react';

const bachiInfo = {
  header: {
    category: "Educación para Adultos",
    title: "VALIDACIÓN DE",
    highlight: "BACHILLERATO.",
    description: "Nuestro programa de validación está regido por el Decreto 3011, permitiendo a jóvenes y adultos terminar sus estudios mediante ciclos lectivos especiales integrados (CLEI)."
  },
  stats: [
    { label: "Duración", val: "3-6 Meses", icon: <Clock size={18} /> },
    { label: "Modalidad", val: "100% Virtual", icon: <Info size={18} /> },
    { label: "Edad mínima", val: "15+ Años", icon: <UserCheck size={18} /> }
  ],
  requirements: [
    "Copia del documento de identidad al 150%.",
    "Certificados de estudio de grados anteriores aprobados.",
    "Tener 15 años cumplidos para básica (hasta 9°).",
    "Tener 18 años cumplidos para media (10° y 11°).",
    "Foto digital reciente fondo blanco."
  ],
  cta: {
    label: "Empezar Matrícula",
    href: "/#inscripcion"
  }
};

export default bachiInfo