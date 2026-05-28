import React from "react";
import { WHATSAPP_LINK } from "../data";
import { MessageSquareText } from "lucide-react";

export const AgendeVisita: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-primary-green rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
          {/* Subtle playful graphic overlays inside container */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-12 -translate-y-12" />
          <div className="absolute bottom-0 right-0 w-44 h-44 bg-white/5 rounded-full translate-x-12 translate-y-12" />

          {/* Title */}
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-wider mb-6 relative z-10 leading-tight">
            QUER CONHECER A BRINKARIUM?
          </h2>

          {/* Description */}
          <p className="font-sans text-[#e4f0ea] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 relative z-10 font-medium">
            Agende uma visita personalizada e venha sentir a atmosfera acolhedora e a energia vibrante
            do nosso espaço de contraturno. Estamos prontos para receber sua família de braços abertos!
          </p>

          {/* Action CTA Button */}
          <div className="relative z-10 inline-block w-full sm:w-auto">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-accent-orange-light hover:bg-[#ffb372] text-[#301400] font-display text-2xl md:text-3xl font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 tracking-wider"
            >
              <MessageSquareText className="w-6 h-6 stroke-[2.5] text-[#301400] transition-transform group-hover:scale-110 duration-300" />
              CHAMAR NO WHATSAPP AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
