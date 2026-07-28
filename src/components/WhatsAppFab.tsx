import React from 'react';
import { WhatsAppIcon } from './SocialLogos';

export const WhatsAppFab: React.FC = () => {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex items-center gap-3 group">
      {/* Tooltip badge */}
      <div className="hidden sm:flex items-center gap-2 bg-[#0F172A]/90 border border-[#C5A880]/40 text-[#F1F5F9] text-xs font-semibold px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Atención Inmediata WhatsApp VIP</span>
      </div>

      {/* Pulsing FAB Button */}
      <a
        id="whatsapp-floating-fab-btn"
        href="https://wa.me/593991952889?text=Hola,%20deseo%20recibir%20información%20sobre%20las%20propiedades"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-all duration-300 transform group-hover:scale-110 active:scale-95 border border-emerald-300/40"
      >
        <WhatsAppIcon className="w-7 h-7" />
        
        {/* Pulsing Outer Glow */}
        <span className="absolute -inset-1 rounded-2xl bg-emerald-500/40 animate-pulse -z-10" />
      </a>
    </div>
  );
};
