import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const [status, setStatus] = useState("idle"); 
  // 'idle' | 'loading' | 'success' | 'error'

  const sendForm = async (formData) => {
    setStatus("loading");

    try {
      const data = Object.fromEntries(formData.entries());

      const payload = {
        name: "Nuevo Lead desde la Web", // título
        time: new Date().toLocaleString(), // fecha/hora
        message: data.nombre,
        number: data.telefono,
        interes: data.programa_interes,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      return true;
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      return false;
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return { sendForm, status };
};
