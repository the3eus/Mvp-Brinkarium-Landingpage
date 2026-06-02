import React from "react";
import { PlayIcon } from "./PlayIcon";

export const LessScreens: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#f7f9f8] to-[#f4f6f5]">
      <div className="max-w-4xl mx-auto">
        {/* Main section statement */}
        <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8 text-center max-w-2xl mx-auto tracking-wide">
          PORQUE CRIANÇA PRECISA BRINCAR COM O CORPO...
        </h2>

        {/* Highlighted Quote Box */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border-l-8 border-accent-orange shadow-sm mb-12 max-w-3xl mx-auto">
          <p className="font-sans text-gray-700 italic text-lg md:text-xl leading-relaxed font-semibold">
            &ldquo;... E SENTIR A TEXTURA DA TERRA, A FLUIDEZ DA TINTA E A RESISTÊNCIA
            DA MADEIRA. O DESENVOLVIMENTO MOTOR E COGNITIVO NÃO ACONTECE SENTADO EM
            FRENTE A UM TABLET.&rdquo;
          </p>
        </div>

        {/* Feature blocks (Less Screens vs More Presence) with delightful icon placements */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-150 shadow-md max-w-3xl mx-auto flex flex-col gap-8">
          {/* Item 1: Menos Telas */}
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="p-4 bg-red-50 text-red-500 rounded-2xl flex-shrink-0">
              <PlayIcon name="MonitorOff" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-2 tracking-wide flex items-center gap-2">
                🚫 MENOS TELAS
              </h3>
              <p className="font-sans text-gray-600 text-base md:text-lg leading-relaxed">
                Substituímos o brilho artificial dos aparelhos pelo brilho nos olhos
                de quem descobre algo novo a cada instante.
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-gray-100 w-full" />

          {/* Item 2: Mais Presença */}
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="p-4 bg-emerald-50 text-primary-green rounded-2xl flex-shrink-0">
              <PlayIcon name="Compass" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-2 tracking-wide flex items-center gap-2">
                🏕️ MAIS PRESENÇA
              </h3>
              <p className="font-sans text-gray-600 text-base md:text-lg leading-relaxed">
                Presença, movimento e criatividade viva são os pilares indispensáveis
                que sustentam todos os nossos dias de aventura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
