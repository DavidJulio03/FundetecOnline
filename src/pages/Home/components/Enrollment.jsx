import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Send, ChevronRight, Loader2, CheckCircle2, X } from 'lucide-react';
import EnrollmentData from '../data/EnrollmentData';
import { useContactForm } from '../hooks/useContactForm';

const Enrollment = () => {
  const { sendForm, status } = useContactForm(EnrollmentData.email);
  const [showModal, setShowModal] = useState(false); // Estado para el Pop-up

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const success = await sendForm(formData);

    if (success) {
      e.target.reset(); // Limpia el formulario
      setShowModal(true); // Muestra el Pop-up
    } else {
      alert("Hubo un error al conectar con el servidor. Por favor intenta de nuevo.");
    }
  };

  return (
    <section id={EnrollmentData.id} className="relative py-16 md:py-24 bg-white overflow-hidden">
      
      {/* Fondo Decorativo */}
      <div className="absolute left-0 bottom-0 h-full w-[40%] hidden lg:block skew-x-[6deg] -translate-x-24 z-0 opacity-5"
           style={{ background: 'linear-gradient(135deg, #4aa82c 0%, #0993e2 100%)' }}>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* BLOQUE DE TEXTO */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-4 lg:mb-6 justify-center lg:justify-start">
              <span className="w-6 h-[2px] bg-[#0993e2]"></span>
              <span className="text-[#0993e2] text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase">
                {EnrollmentData.badge}
              </span>
            </div>

            <h2 className="text-[34px] sm:text-[48px] lg:text-[54px] font-[900] leading-[1.05] text-gray-900 mb-6">
              {EnrollmentData.title.main} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4aa82c] to-[#0993e2]">
                {EnrollmentData.title.highlight}
              </span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
              {EnrollmentData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 md:gap-4">
              {EnrollmentData.benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gray-50/50 border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                  <span className="text-[#4aa82c] bg-[#4aa82c]/10 p-1.5 rounded-lg">{item.icon}</span>
                  <span className="text-[13px] md:text-sm font-bold text-gray-700">{item.txt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TARJETA DEL FORMULARIO */}
          <div className="w-full lg:w-1/2 relative mt-4 lg:mt-0">
            <div className="bg-white p-6 sm:p-10 rounded-[32px] md:rounded-[48px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10">
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 flex items-center gap-2">
                  {EnrollmentData.form.title}
                  <ChevronRight size={20} className="text-[#4aa82c]" />
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1 font-medium">{EnrollmentData.form.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="group">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Nombre Completo</label>
                  <input type="text" name="nombre" required placeholder="Ej. Juan Pérez" className="w-full px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#0993e2]/20 focus:bg-white outline-none transition-all font-medium text-gray-900 text-sm md:text-base" />
                </div>

                <div className="group">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">WhatsApp</label>
                  <input type="tel" name="telefono" required placeholder="300 123 4567" className="w-full px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#0993e2]/20 focus:bg-white outline-none transition-all font-medium text-gray-900 text-sm md:text-base" />
                </div>

                <div className="group relative">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">¿Qué quieres estudiar?</label>
                  <select name="programa_interes" className="w-full px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#0993e2]/20 focus:bg-white outline-none transition-all font-medium text-gray-700 text-sm md:text-base appearance-none cursor-pointer">
                    {EnrollmentData.form.options.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 bottom-[14px] md:bottom-[18px] pointer-events-none text-gray-400">
                    <ChevronRight size={18} className="rotate-90" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl text-white font-black text-[13px] md:text-sm uppercase tracking-[0.15em] shadow-lg shadow-[#4aa82c]/20 transition-all flex items-center justify-center gap-3 mt-4
                    ${status === 'loading' ? 'bg-gray-400 cursor-wait' : 'bg-[#4aa82c] hover:shadow-[#4aa82c]/30 hover:-translate-y-0.5 active:scale-95'}
                    ${status === 'success' ? 'bg-[#4aa82c] cursor-default' : ''}
                  `}
                >
                  {status === 'loading' ? (
                    <>Enviando... <Loader2 size={18} className="animate-spin" /></>
                  ) : status === 'success' ? (
                    <>¡Enviado! <CheckCircle2 size={18} /></>
                  ) : (
                    <>{EnrollmentData.form.buttonText} <Send size={16} className="md:w-[18px]" /></>
                  )}
                </button>

                <div className="pt-4 border-t border-gray-50">
                  <Link to={EnrollmentData.termsLink || "#"} className="block text-[10px] text-center text-gray-400 font-bold leading-tight uppercase tracking-tight hover:text-[#0993e2] transition-colors">
                    {EnrollmentData.form.privacyText}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- POP UP MODAL DE ÉXITO --- */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop oscuro con blur */}
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>
          
          {/* Contenido del Modal */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all scale-100 animate-in fade-in zoom-in duration-300">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Icono animado */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-[#4aa82c] animate-bounce" />
            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-2">¡Solicitud Recibida!</h3>
            
            <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
              Gracias por tu interés en <strong>Fundetec</strong>. Hemos recibido tus datos correctamente y uno de nuestros asesores te escribirá al WhatsApp.
            </p>

            <button 
              onClick={() => setShowModal(false)}
              className="w-full py-3.5 rounded-xl bg-[#4aa82c] text-white font-bold uppercase tracking-widest text-xs shadow-lg shadow-green-200 hover:bg-green-600 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Enrollment;