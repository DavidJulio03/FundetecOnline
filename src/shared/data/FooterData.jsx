import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';

const FooterData = {
  brand: {
    name: "FUNDETEC",
    letter: "F",
    tagline: "Institución de Educación Superior",
    logoUrl: "https://lirp.cdn-website.com/d3af38d7/dms3rep/multi/opt/logo-640w.png",
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
        { label: "Validación de Bachillerato", href: "/programas" },
        { label: "Técnicos Laborales", href: "/programas" },
        { label: "Cursos de Especialización", href: "/programas" },
        { label: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Institucional",
      accent: "border-[#4aa82c]",
      items: [
        { label: "Preguntas Frecuentes", href: "/preguntas" },
        { label: "Portal del Estudiante", href: "#" },
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