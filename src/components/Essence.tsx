import React from "react";

export const Essence: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Organic wavy element or small subtitle */}
        <span className="font-display text-2xl tracking-[0.25em] text-accent-orange font-bold uppercase mb-4">
          NOSSA ESSÊNCIA
        </span>

        {/* Section Heading */}
        <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-2xl mb-8 tracking-wider">
          UM ESPAÇO ONDE A INFÂNCIA ACONTECE DE FORMA MAIS NATURAL
        </h2>

        {/* Divider line style */}
        <div className="w-16 h-1 bg-primary-green-light rounded-full mb-8" />

        {/* Copy */}
        <p className="font-sans text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl font-medium px-2">
          Na Brinkarium, acreditamos que cada criança é uma exploradora nata.
          Proporcionamos um ambiente preparado para que elas possam descobrir o mundo
          através do tato, do movimento e da imaginação pura.
        </p>
      </div>
    </section>
  );
};
