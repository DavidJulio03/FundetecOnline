import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const EnrollmentData = {
  email: 'contactodavid03@gmail.com',
  id: "inscripcion",
  badge: "Admisiones 2024",
  title: {
    main: "IMPULSA TU",
    highlight: "CARRERA HOY."
  },
  description: (
    <>
      Únete a los más de <span className="text-gray-900 font-bold">10,000 graduados</span> que ya transformaron su realidad laboral.
    </>
  ),
  benefits: [
    { txt: "Sin permanencia", icon: <Zap size={16}/> },
    { txt: "Homologación rápida", icon: <CheckCircle2 size={16}/> },
    { txt: "Pago flexible", icon: <ShieldCheck size={16}/> },
    { txt: "Título Oficial", icon: <CheckCircle2 size={16}/> }
  ],
  form: {
    title: "Inicia tu proceso",
    subtitle: "Un asesor te contactará en menos de 24h.",
    options: [
      "Validación de Bachillerato",
      "Técnicos Laborales",
      "Diplomados",
      "Otro / No estoy seguro"
    ],
    buttonText: "Enviar Solicitud",
    privacyText: "Respetamos tu privacidad. Datos 100% protegidos."
  },
//   termsLink: "/politica-privacidad"
};

export default EnrollmentData