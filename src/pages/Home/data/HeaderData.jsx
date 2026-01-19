const HeaderData = {
  brand: {
    name: "FUNDETEC",
    subtitle: "Educación Técnica",
    logoUrl: null,
    colors: {
      primary: '#4aa82c',
      secondary: '#0993e2'
    }
  },
  navLinks: [
    { name: "Programas", href: "./programas", desc: "Termina tus estudios rápido" },
    { name: "Nosotros", href: "./nosotros", desc: "Especializaciones cortas" },
    { name: "Preguntas Frecuentes", href: "./preguntas", desc: "Resolvemos tus dudas" },
    { name: "Blog", href: "./blog", desc: "Noticias y actualidad" },
  ],
  actionButton: {
    label: "Inscribirse",
    href: "./matriculas",
    color: '#4aa82c'
  },
  statusBadge: {
    text: "Matrículas Abiertas",
    active: true
  },
  contact: {
    phone: "+57 300 123 4567",
    phoneLink: "tel:3001234567"
  }
}

export default HeaderData