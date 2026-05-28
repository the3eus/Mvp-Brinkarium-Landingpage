import React from "react";
import { ACTIVITIES } from "../data";
import { PlayIcon } from "./PlayIcon";

export const UniverseOfPossibilities: React.FC = () => {
  // Pastel subtle backgrounds for each workshop type to keep it playful yet premium
  const cardStyles: Record<string, { bg: string; iconColor: string; border: string }> = {
    culinaria: {
      bg: "bg-[#fff7ed]", // soft orange
      iconColor: "text-amber-600",
      border: "border-amber-100",
    },
    artes: {
      bg: "bg-[#faf5ff]", // soft purple
      iconColor: "text-purple-600",
      border: "border-purple-100",
    },
    jardinagem: {
      bg: "bg-[#f0fdf4]", // soft green
      iconColor: "text-emerald-600",
      border: "border-emerald-100",
    },
    esportes: {
      bg: "bg-[#f0f9ff]", // soft blue
      iconColor: "text-sky-600",
      border: "border-sky-100",
    },
    construcao: {
      bg: "bg-[#fef2f2]", // soft red
      iconColor: "text-rose-600",
      border: "border-rose-150",
    },
    sensorial: {
      bg: "bg-[#fff1f2]", // soft pink
      iconColor: "text-pink-600",
      border: "border-pink-100",
    },
    pedagogico: {
      bg: "bg-[#fbfbfe]", // very soft lavender
      iconColor: "text-[#33618d]",
      border: "border-blue-50",
    },
    reforco: {
      bg: "bg-[#fdfbf7]", // warm vanilla
      iconColor: "text-accent-orange",
      border: "border-orange-100",
    },
  };

  return (
    <section id="atividades" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 leading-none mb-4 tracking-wide">
            UM UNIVERSO DE POSSIBILIDADES
          </h2>
          <p className="font-sans text-gray-600 text-lg md:text-xl font-medium">
            Atividades de contraturno criadas e pensadas para cada etapa única do crescimento.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES.map((activity) => {
            const style = cardStyles[activity.id] || {
              bg: "bg-gray-50",
              iconColor: "text-gray-600",
              border: "border-transparent",
            };

            return (
              <div
                key={activity.id}
                id={`activity-${activity.id}`}
                className={`relative p-8 rounded-3xl border-2 ${style.border} ${style.bg} transition-all duration-300 hover:scale-[1.03] hover:shadow-lg flex flex-col justify-between`}
              >
                <div>
                  {/* Playful Circle for Icon */}
                  <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs mb-6 ${style.iconColor}`}>
                    <PlayIcon name={activity.iconName} size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl font-bold text-gray-900 mb-3 tracking-wide">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-gray-600 text-[15px] leading-relaxed font-medium">
                    {activity.description}
                  </p>
                </div>

                {/* Aesthetic decorative accent element */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-35 bg-current" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
