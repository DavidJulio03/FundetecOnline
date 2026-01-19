import { Award, Laptop, CheckCircle, Users } from 'lucide-react';

const FeaturesData = {
  header: {
    badge: "Ventajas",
    title: {
      main: "¿POR QUÉ ELEGIR",
      brand: "FUNDETEC?"
    },
    description: "Tecnología avanzada y calidez humana para tu éxito profesional."
  },
  items: [
    { 
      icon: Award, 
      title: "+25 Años", 
      fullTitle: "+25 Años de Experiencia",
      desc: "Trayectoria formando líderes.",
      color: "#0993e2",
      lightColor: "bg-blue-50",
      href: "/nosotros" // Enlace usando etiqueta <a>
    },
    { 
      icon: Laptop, 
      title: "100% Virtual", 
      fullTitle: "Flexibilidad Total",
      desc: "Estudia a tu propio ritmo.",
      color: "#4aa82c",
      lightColor: "bg-green-50",
      href: "/metodologia"
    },
    { 
      icon: CheckCircle, 
      title: "Legalidad", 
      fullTitle: "Legalidad Vigente",
      desc: "Resolución oficial vigente.",
      color: "#0993e2",
      lightColor: "bg-blue-50",
      href: "/legalidad"
    },
    { 
      icon: Users, 
      title: "Docentes", 
      fullTitle: "Docentes Reales",
      desc: "Mentoría personalizada.",
      color: "#4aa82c",
      lightColor: "bg-green-50",
      href: "/docentes"
    },
  ]
}

export default FeaturesData