import React from 'react';
import whatsappIcon from '../assets/whatsapp.PNG';

const WhatsAppButton = () => {
  const pulseStyle = {
    animation: 'pulse 1.5s infinite',
  };

  return (
    <>
      {/* Inline keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>

      <a
        href="https://wa.me/233247578194"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
        title="Chat with us on WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            ...pulseStyle,
          }}
        />
      </a>
    </>
  );
};

export default WhatsAppButton;
