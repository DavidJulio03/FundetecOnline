import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';

const FooterData = {
  brand: {
    name: "FUNDETEC",
    letter: "F",
    tagline: "Institución de Educación Superior",
    mission: "Comprometidos con la formación integral y el desarrollo humano. Más de dos décadas liderando procesos educativos de calidad en todo el territorio nacional."
  },
  contact: [
    {
      label: "Línea Nacional",
      value: "+57 300 123 4567",
      icon: <Phone size={18} />,
      color: "text-[#4aa82c]"
    },
    {
      label: "Correo Oficial",
      value: "info@fundetec.edu.co",
      icon: <Mail size={18} />,
      color: "text-[#0993e2]"
    }
  ],
  socials: [
    { Icon: Facebook, href: "https://facebook.com" },
    { Icon: Instagram, href: "https://instagram.com" },
    { Icon: Linkedin, href: "https://linkedin.com" }
  ],
  menus: [
    {
      title: "Programas",
      accent: "border-[#0993e2]",
      items: [
        { label: "Validación de Bachillerato", href: "#" },
        { label: "Técnicos Laborales", href: "#" },
        { label: "Diplomados de Alta Gerencia", href: "#" },
        { label: "Cursos de Especialización", href: "#" }
      ]
    },
    {
      title: "Institucional",
      accent: "border-[#4aa82c]",
      items: [
        { label: "Preguntas Frecuentes", href: "#" },
        { label: "Portal del Estudiante", href: "#" },
        { label: "Sedes y Horarios", href: "#" },
        { label: "Trabaja con Nosotros", href: "#" }
      ]
    }
  ],
  legalInfo: {
    title: "Legalidad",
    accent: "border-[#0993e2]",
    badgeText: "Institución Certificada",
    description: "Resolución oficial de la Secretaría de Educación Nacional. Programas con registro calificado vigente."
  },
  bottomLinks: [
    { label: "Tratamiento de Datos", href: "#" },
    { label: "Términos de Uso", href: "#" },
    { label: "Mapa del Sitio", href: "#" }
  ]
}

export default FooterData