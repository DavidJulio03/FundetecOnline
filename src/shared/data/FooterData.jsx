import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';

const FooterData = {
  brand: {
    name: "FUNDETEC",
    letter: "F",
    tagline: "Con visión universitaria",
    logoUrl: "https://lirp.cdn-website.com/d3af38d7/dms3rep/multi/opt/logo-640w.png",
    mission: "Comprometidos con la formación integral y el desarrollo humano. Más de dos décadas liderando procesos educativos de calidad en todo el territorio nacional."
  },
  contact: [
    {
      label: "WhatsApp",
      value: "+57 305 3819779",
      icon: <Phone size={18} />,
      color: "text-[#4aa82c]"
    },
    {
      label: "Correo Oficial",
      value: "info@fundetec.co",
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
        { label: "Validación de Bachillerato", href: "/#bachillerato" },
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