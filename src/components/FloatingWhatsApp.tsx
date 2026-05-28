import React from "react";
import { WHATSAPP_LINK } from "../data";
import { WhatsAppIcon } from "./PlayIcon";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Absolute pulsating circular ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-pulse-ring" />
      
      {/* Primary anchor tag for communication */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full transition-transform hover:scale-110 active:scale-95 shadow-lg border-2 border-white"
      >
        <WhatsAppIcon className="w-7 h-7" size={28} />
      </a>
    </div>
  );
};
