import React from "react";
import { WHATSAPP_LINK, trackWhatsAppClick } from "../data";
import { WhatsAppIcon } from "./PlayIcon";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Playful Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-white rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 select-none">
            <img
              src="/images/b-brinka.jpg"
              alt="Logo Brinkarium"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold text-primary-green tracking-wider leading-none">
              BRINKARIUM
            </span>
            <span className="font-sans text-[9px] tracking-[0.2em] text-accent-orange font-bold uppercase leading-none mt-1">
              Brincar & Explorar
            </span>
          </div>
        </a>

        {/* Dynamic header CTA button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          aria-label="Fale conosco no WhatsApp"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("header")}
          className="flex items-center gap-2 bg-primary-green hover:bg-primary-green-dark text-white font-display text-[15px] md:text-lg font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
          <span className="tracking-wider">FALAR NO WHATSAPP</span>
        </a>
      </div>
    </header>
  );
};
