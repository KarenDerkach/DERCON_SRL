"use client";
import { useState, useEffect } from "react";
import "./whatsapp-floating.css";

export default function WhatsAppFloating() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "5493758542926";
  const defaultMessage = "Hola! He visto su web y me gustaría saber más información...";

  useEffect(() => {
    // Mostrar el botón después de 2 segundos para mejor UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleWhatsAppClick();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`whatsapp-floating ${isVisible ? 'show' : ''}`}
      onClick={handleWhatsAppClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Contactar por WhatsApp"
      title="Chatea con nosotros por WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
      <div className="whatsapp-tooltip">
        <span>¿Necesitas ayuda?</span>
        <small>Chatea con nosotros</small>
      </div>
    </div>
  );
}