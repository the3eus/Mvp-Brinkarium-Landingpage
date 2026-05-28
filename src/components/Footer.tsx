import React from "react";
import { WHATSAPP_LINK } from "../data";
import { PlayIcon } from "./PlayIcon";
import logoImg from "../assets/images/b brinka.jpg";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-150 py-16 px-4 md:px-8 text-gray-650">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
        {/* Logo and Credits */}
        <div className="md:col-span-5 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-xl overflow-hidden shadow-sm select-none">
              <img
                src={logoImg}
                alt="Logo Brinkarium"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display text-2xl font-bold text-primary-green tracking-wider uppercase">
              BRINKARIUM
            </span>
          </div>
          <p className="font-sans text-sm leading-relaxed text-gray-500 max-w-sm">
            © {new Date().getFullYear()} Brinkarium Artesanal Child Development.
            Handcrafted with love. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-gray-400">
            Criado por Neotec.Inc
          </p>
        </div>

        {/* Useful Links Column */}
        <div className="md:col-span-3">
          <h3 className="font-display text-2xl font-bold text-gray-800 tracking-wider mb-4">
            LINKS ÚTEIS
          </h3>
          <ul className="space-y-2 font-sans text-sm font-semibold text-gray-500">
            <li>
              <a href="#atividades" className="hover:text-primary-green transition-colors">
                Nossas Oficinas
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary-green transition-colors">
                Agendar Visita
              </a>
            </li>
            <li>
              <a href="#inicio" className="hover:text-primary-green transition-colors">
                Voltar ao Topo
              </a>
            </li>
          </ul>
        </div>

        {/* Location & Support */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="font-display text-2xl font-bold text-gray-800 tracking-wider">
            ONDE ESTAMOS
          </h3>
          
          <div className="flex gap-3 items-start">
            <PlayIcon name="MapPin" size={18} className="text-primary-green flex-shrink-0 mt-0.5" />
            <div className="font-sans text-sm text-gray-500 font-medium">
              <p>São Paulo, SP</p>
              <p className="text-xs text-gray-400 mt-0.5">Atendimento sob agendamento prévio</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <PlayIcon name="Phone" size={18} className="text-primary-green flex-shrink-0 mt-0.5" />
            <a href="tel:11926929302" className="font-sans text-sm text-gray-500 font-semibold hover:text-primary-green transition-colors">
              (11) 92692-9302
            </a>
          </div>

          <div className="flex gap-3 items-start">
            <PlayIcon name="Mail" size={18} className="text-primary-green flex-shrink-0 mt-0.5" />
            <span className="font-sans text-sm text-gray-500 font-medium">
              contato@brinkarium.com
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-150 pt-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400 font-sans">
          Brincar consciente é respeitar a infância. Desenvolvido em harmonia de telas zero.
        </p>

        {/* Small Legal */}
        <div className="flex gap-6 text-xs text-gray-400 font-sans">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">Privacidade</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">Termos</a>
        </div>
      </div>
    </footer>
  );
};
