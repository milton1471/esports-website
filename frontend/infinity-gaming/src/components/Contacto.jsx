import React from 'react';
import '../styles/Page.css';

const Contacto = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1>CONTACTO</h1>
        <p>Ponte en contacto con nosotros para más información.</p>
        <div className="contact-info">
          <p>📧 Email: info@infinitygaming.com</p>
          <p>📱 WhatsApp: +54 9 11 1234-5678</p>
          <p>📍 Dirección: Buenos Aires, Argentina</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;