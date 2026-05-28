import React from "react";
import { PILLARS } from "../data";
import { PlayIcon } from "./PlayIcon";

export const PillarsAndAges: React.FC = () => {
  // Theme colors for age group pillars
  const pillarStyles: Record<string, { text: string; bg: string }> = {
    seguranca: {
      text: "text-emerald-700",
      bg: "bg-[#e8f3ee]",
    },
    cuidado: {
      text: "text-[#924c0a]",
      bg: "bg-[#ffdcc5]",
    },
    pedagogia: {
      text: "text-blue-700",
      bg: "bg-[#d0e4ff]",
    },
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#fcdfcc]/20 to-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-wide">
          PARA CRIANÇAS A PARTIR DE 4 ANOS
        </h2>

        {/* Informative text */}
        <p className="font-sans text-gray-650 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium px-2">
          Nosso espaço foi desenhado milimetricamente para ser acolhedor e seguro,
          respeitando as necessidades específicas de cada fase da infância. Um lugar
          onde os pais podem deixar seus filhos com a tranquilidade de quem sabe que
          eles estão sendo nutridos com afeto e qualidade pedagógica de ponta.
        </p>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {PILLARS.map((pillar) => {
            const theme = pillarStyles[pillar.id] || {
              text: "text-gray-700",
              bg: "bg-gray-100",
            };

            return (
              <div
                key={pillar.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col items-center gap-4"
              >
                {/* Circular Icon and Text */}
                <div className={`w-14 h-14 ${theme.bg} ${theme.text} rounded-full flex items-center justify-center`}>
                  <PlayIcon name={pillar.iconName} size={30} className="stroke-[1.75]" />
                </div>

                <h3 className="font-display text-2xl font-bold text-gray-800 tracking-wider">
                  {pillar.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
