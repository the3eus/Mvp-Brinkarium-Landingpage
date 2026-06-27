import React from "react";
import { WHATSAPP_LINK, trackWhatsAppClick } from "../data";
import { Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative py-12 md:py-20 px-4 overflow-hidden bg-gradient-to-b from-white to-[#f7f9f8]">
      {/* Soft background glow circles to match "Tonal Layers & Soft Ambient Blurs" */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-orange/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Playful Badge */}
        <div className="inline-flex items-center gap-2 bg-[#e8f3ee] text-primary-green font-display text-sm md:text-lg font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-sm">
          <span className="text-base md:text-lg">🌿</span> INFÂNCIA CONSCIENTE
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 tracking-wide line-clamp-none max-w-3xl leading-[1.05] mb-6">
          CONTRATURNO INFANTIL PARA <span className="text-primary-green">BRINCAR</span>, EXPLORAR E DESENVOLVER
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 px-2 font-medium">
          Brinkarium é o principal espaço de contraturno infantil em Jundiaí para experiências reais, onde o aprendizado acontece de forma livre, ativa e longe de telas.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-md sm:max-w-none px-4 sm:px-0 mb-14">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("hero-conhecer")}
            className="w-full sm:w-auto text-center bg-primary-green hover:bg-primary-green-dark text-white font-display text-xl md:text-2xl font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 tracking-wider"
          >
            QUERO CONHECER A BRINKARIUM
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("hero-whatsapp")}
            className="w-full sm:w-auto text-center bg-accent-orange hover:bg-accent-orange-dark text-white font-display text-xl md:text-2xl font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 tracking-wider"
          >
            FALAR PELO WHATSAPP
          </a>
        </div>

        {/* Main Playroom Image Container */}
        <div className="relative w-full max-w-3xl px-2 md:px-0">
          <div className="relative bg-white rounded-3xl p-3 md:p-4 shadow-xl border border-gray-100 flex justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1000&auto=format&fit=crop"
              alt="Espaço Brinkarium de desenvolvimento infantil e brinquedos montessorianos"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover rounded-2xl max-h-[380px] hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Floater overlay tag to match the mockup exactly */}
          <div className="absolute -bottom-6 left-4 md:left-10 bg-white border border-gray-100 p-5 rounded-2xl shadow-lg max-w-[280px] text-left rotate-[-2deg] transition-all hover:rotate-0 hover:scale-105 duration-300">
            <p className="font-display text-2xl font-bold text-gray-800 leading-tight">
              BRINCAR TAMBÉM É DESENVOLVER <span className="text-amber-400">💛</span>{" "}
              <span className="inline-block animate-bounce text-xl">🌈</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
