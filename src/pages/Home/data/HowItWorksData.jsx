import { UserPlus, Monitor, BookOpen, GraduationCap } from 'lucide-react';

const HowItWorksData = {
  header: {
    badge: "Proceso Simplificado",
    title: {
      main: "TU CAMINO AL ÉXITO",
      highlight: "EN 4 SIMPLES PASOS."
    },
    description: "Diseñamos una experiencia sin fricciones para que tu única preocupación sea aprender y crecer profesionalmente."
  },
  steps: [
    {
      id: "01",
      icon: <UserPlus />,
      title: "Inscripción Ágil",
      desc: "Completa el formulario y un asesor experto te guiará en tu proceso de matrícula.",
      color: "from-[#0993e2] to-[#056fb1]",
      shadow: "shadow-blue-200/50"
    },
    {
      id: "02",
      icon: <Monitor />,
      title: "Acceso al Campus",
      desc: "Recibe tus credenciales e ingresa a nuestra plataforma desde cualquier dispositivo.",
      color: "from-[#4aa82c] to-[#3a8622]",
      shadow: "shadow-green-200/50"
    },
    {
      id: "03",
      icon: <BookOpen />,
      title: "Clases en Vivo",
      desc: "Estudia con docentes reales y contenido multimedia diseñado para adultos.",
      color: "from-[#0993e2] to-[#056fb1]",
      shadow: "shadow-blue-200/50"
    },
    {
      id: "04",
      icon: <GraduationCap />,
      title: "Certificación",
      desc: "Culmina tus ciclos y recibe tu título oficial con validez legal completa.",
      color: "from-[#4aa82c] to-[#3a8622]",
      shadow: "shadow-green-200/50"
    }
  ],
  footer: {
    buttonLabel: "Empezar mi transformación",
    buttonHref: "#inscripcion",
    subtext: "Sin compromisos iniciales • Asesoría 100% gratuita"
  }
}

export default HowItWorksData