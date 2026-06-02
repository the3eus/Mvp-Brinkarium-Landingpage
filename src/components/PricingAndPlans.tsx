import React from "react";
import { WHATSAPP_LINK } from "../data";
import { Clock, Calendar, Check, Sparkles, PhoneCall, Gift } from "lucide-react";

export const PricingAndPlans: React.FC = () => {
  return (
    <section id="valores" className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#f7f9f8] border-t border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-2xl tracking-[0.2em] text-accent-orange font-bold uppercase mb-4 inline-block">
            📌 FORMATOS E VALORES
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-wide uppercase">
            Flexibilidade Total Para a Rotina da Sua Família
          </h2>
          <p className="font-sans text-gray-600 text-lg md:text-xl font-medium">
            Na Brinkarium, entendemos que cada lar possui uma dinâmica única. Por isso, oferecemos formatos sob medida com acompanhamento constante de equipe pedagógica qualificada.
          </p>
        </div>

        {/* Operating Hours Alert Card Area */}
        <div className="bg-[#e8f3ee] border border-primary-green/10 rounded-3xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 bg-primary-green text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl text-primary-green-dark">
                Funcionamento Estendido
              </h3>
              <p className="font-sans text-sm text-gray-600 font-medium">
                Segunda a sexta-feira, das <span className="font-bold text-primary-green">7h às 23h</span>. Formatos super flexíveis!
              </p>
            </div>
          </div>
          <div className="w-full md:w-auto text-left md:text-right bg-white/60 hover:bg-white transition-colors duration-200 px-5 py-3 rounded-2xl border border-gray-150">
            <span className="block text-xs font-bold text-accent-orange font-sans tracking-wider uppercase mb-1">PROPOSTA PEDAGÓGICA</span>
            <span className="font-sans text-sm text-gray-700 font-bold">Atividades ativas, criativas e zero telas!</span>
          </div>
        </div>

        {/* Pricing Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Format 1: Hora Avulsa */}
          <div className="bg-white rounded-3xl p-8 border border-gray-150 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-accent-orange font-semibold rounded-full text-xs font-sans mb-6">
                <Clock className="w-3.5 h-3.5" /> Hora Avulsa
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-2 tracking-wide">
                HORA AVULSA
              </h3>
              <p className="font-sans text-gray-500 text-sm mb-6 leading-relaxed">
                Excelente para compromissos pontuais, reuniões de última hora ou necessidades sazonais.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center bg-gray-50 p-3.5 rounded-2xl">
                  <span className="font-sans font-semibold text-gray-700 text-[15px]">Diurna</span>
                  <span className="font-sans font-bold text-primary-green text-lg">R$ 60 <span className="text-xs text-gray-400 font-medium">/hora</span></span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3.5 rounded-2xl">
                  <span className="font-sans font-semibold text-gray-700 text-[15px]">Noturna</span>
                  <span className="font-sans font-bold text-accent-orange text-lg">R$ 70 <span className="text-xs text-gray-400 font-medium">/hora</span></span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <span className="text-xs font-sans text-gray-400 font-semibold flex items-center gap-1.5 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Inclui acesso aos ambientes de brincar e oficinas diárias.
              </span>
            </div>
          </div>

          {/* Format 2: Turnos de 4 Horas */}
          <div className="bg-white rounded-3xl p-8 border-2 border-primary-green/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Best Value Badge top-right */}
            <div className="absolute top-0 right-0 bg-primary-green text-white text-[10px] font-sans font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
              Mais Procurado
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-primary-green font-semibold rounded-full text-xs font-sans mb-6">
                <Calendar className="w-3.5 h-3.5" /> Turnos de 4 Horas
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-2 tracking-wide">
                TURNOS DE 4H
              </h3>
              <p className="font-sans text-gray-500 text-sm mb-6 leading-relaxed">
                Ideal para cobrir o período de contraturno regular do seu filho para socialização e estímulo completo.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center bg-emerald-50/40 p-3.5 rounded-2xl border border-primary-green/10">
                  <span className="font-sans font-semibold text-gray-700 text-[15px]">Turno Diurno (4h)</span>
                  <span className="font-sans font-bold text-primary-green text-lg">R$ 160 <span className="text-xs text-gray-400 font-medium">/período</span></span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-3.5 rounded-2xl">
                  <span className="font-sans font-semibold text-gray-700 text-[15px]">Turno Noturno (4h)</span>
                  <span className="font-sans font-bold text-accent-orange text-lg">R$ 190 <span className="text-xs text-gray-400 font-medium">/período</span></span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <span className="text-xs font-sans text-gray-400 font-semibold flex items-center gap-1.5 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Monitoria inclusa e planos de atividades inclusos.
              </span>
            </div>
          </div>

          {/* Format 3: Diária Integral & Planos */}
          <div className="bg-white rounded-3xl p-8 border border-gray-150 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-accent-blue-dark font-semibold rounded-full text-xs font-sans mb-6">
                <Gift className="w-3.5 h-3.5" /> Diária & Planos
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-2 tracking-wide">
                DIÁRIA / RECORRENTES
              </h3>
              <p className="font-sans text-gray-500 text-sm mb-6 leading-relaxed">
                Excelente custo-benefício para famílias com frequência constante ou para o dia inteiro de imersão.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center bg-gray-50 p-3.5 rounded-2xl">
                  <span className="font-sans font-semibold text-gray-700 text-[15px]">Diária Integral</span>
                  <span className="font-sans font-bold text-primary-green text-lg">R$ 290 <span className="text-xs text-gray-400 font-medium">/dia</span></span>
                </div>
                <div className="bg-gradient-to-r from-blue-50/50 to-emerald-50/50 p-3.5 rounded-2xl border border-dashed border-primary-green/20 text-center">
                  <p className="font-sans font-bold text-[13px] text-primary-green-dark mb-0.5">Planos Semanais e Mensais</p>
                  <p className="font-sans text-xs text-gray-500 font-semibold">Temos opções de planos recorrentes com valores reduzidos! 😊</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <span className="text-xs font-sans text-gray-400 font-semibold flex items-center gap-1.5 justify-center text-center">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Valores decrescentes para frequência programada.
              </span>
            </div>
          </div>

        </div>

        {/* Highlight details checklist box */}
        <div className="bg-white rounded-3xl border border-gray-150 p-8 shadow-sm flex flex-col lg:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="space-y-4 text-left flex-1">
            <h4 className="font-display text-3xl font-bold text-gray-900 flex items-center gap-2 tracking-wide">
              ✨ O QUE ESTÁ INCLUSO EM TODOS OS FORMATOS?
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 font-semibold font-sans">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary-green stroke-[3] mt-0.5" />
                <span>Acompanhamento caloroso de equipe pedagógica</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary-green stroke-[3] mt-0.5" />
                <span>Lazer ativo e 100% livre do excesso de telas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary-green stroke-[3] mt-0.5" />
                <span>Acesso completo aos ambientes temáticos e seguros</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary-green stroke-[3] mt-0.5" />
                <span>Oficinas e dinâmicas da rotina do dia Brinkarium</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent-orange hover:bg-accent-orange-dark text-white font-display text-xl md:text-2xl font-bold px-8 py-4.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 tracking-wider text-center"
            >
              <PhoneCall className="w-5 h-5 text-white" />
              CONSULTAR VALOR DOS PLANOS
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
