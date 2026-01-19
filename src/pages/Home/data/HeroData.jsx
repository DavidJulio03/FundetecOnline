const HeroData = {
  badge: "Educación con Sentido Humano",
  title: {
    main: "ALCANZA TU",
    highlight: "TÍTULO",
    end: "PROFESIONAL."
  },
  description: (
    <>
      En <strong className="text-gray-900 font-bold">Fundetec</strong> facilitamos tu camino al éxito con programas diseñados para el mercado laboral actual.
    </>
  ),
  buttons: [
    {
      label: "Matricúlate Ahora",
      href: "#inscripcion",
      primary: true,
      icon: true
    },
    {
      label: "Ver Programas",
      href: "/programas",
      primary: false,
      icon: false
    }
  ],
  stats: [
    { value: "+25", label: "Años Exp.", color: "text-gray-900" },
    { value: "10k", label: "Graduados", color: "text-[#0993e2]" },
    { value: "100%", label: "Legalidad", color: "text-[#4aa82c]" }
  ],
  images: {
    main: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    students: [25, 26, 27],
    count: "+80"
  },
  labels: {
    certificate: "Avalado legalmente por instituciones oficiales.",
    socialProof: "Cientos de estudiantes ya están transformando su futuro."
  }
}

export default HeroData