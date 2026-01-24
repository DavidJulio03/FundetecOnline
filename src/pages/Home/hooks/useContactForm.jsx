import { useState } from 'react';

export const useContactForm = (targetEmail) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const sendForm = async (formData) => {
    setStatus('loading');

    try {
      // Convertimos FormData a un objeto plano JSON
      const data = Object.fromEntries(formData.entries());

      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...data,
            _subject: "Nuevo Lead desde la Web (Inscripción)", // Asunto del correo
            _template: "table", // Formato bonito en el correo
            _captcha: "false"   // Desactiva captcha visual
        })
      });

      if (response.ok) {
        setStatus('success');
        return true;
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      return false;
    } finally {
      // Opcional: Volver a estado 'idle' después de unos segundos si quieres
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return { sendForm, status };
};