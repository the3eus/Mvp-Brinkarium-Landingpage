import React from "react";
import { BENEFITS } from "../data";
import { PlayIcon } from "./PlayIcon";

export const HarvestFruits: React.FC = () => {
  // Styles for each checklist indicator to match mockup tones
  const checkIcons: Record<string, { bg: string; text: string }> = {
    criatividade: {
      bg: "bg-[#e8f3ee]",
      text: "text-primary-green",
    },
    autonomia: {
      bg: "bg-[#fef3c7]",
      text: "text-amber-600",
    },
    socializacao: {
      bg: "bg-[#e0f2fe]",
      text: "text-[#33618d]",
    },
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-[#fbfcfb] border-t border-gray-100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy and lists */}
        <div className="md:col-span-7 space-y-8">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-wide mb-8">
            COLHENDO OS FRUTOS DO BRINCAR CONSCIENTE
          </h2>

          <div className="space-y-6">
            {BENEFITS.map((benefit) => {
              const theme = checkIcons[benefit.id] || {
                bg: "bg-gray-100",
                text: "text-gray-600",
              };

              return (
                <div key={benefit.id} className="flex gap-4 items-start">
                  {/* Styled Check Indicator */}
                  <div className={`w-10 h-10 ${theme.bg} rounded-xl flex items-center justify-center flex-shrink-0 mt-1`}>
                    <PlayIcon name="CheckCircle2" className={`w-5 h-5 ${theme.text} stroke-[3]`} />
                  </div>

                  <div>
                    {/* Bold header - optimized for heading hierarchy (h3 instead of h4) */}
                    <h3 className="font-sans font-bold text-xl text-gray-900 mb-1 leading-snug">
                      {benefit.title}
                    </h3>
                    {/* Balanced paragraph */}
                    <p className="font-sans text-gray-600 text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Portrait Image Frame */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Soft backdrop glow to match Montessori mood */}
            <div className="absolute inset-0 bg-primary-green-light/10 rounded-3xl transform rotate-3" />
            
            {/* Visual Frame */}
            <div className="relative bg-white border border-gray-100 p-3 rounded-3xl shadow-xl transform -rotate-1 transition-transform duration-500 hover:rotate-0">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=700&auto=format&fit=crop"
                alt="Criança sorridente se divertindo e brincando na Brinkarium"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-auto object-cover rounded-2xl min-h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
