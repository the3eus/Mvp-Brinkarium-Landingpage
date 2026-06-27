import { ActivityItem, BenefitItem, PillarItem } from "./types";

export const ACTIVITIES: ActivityItem[] = [
  {
    id: "culinaria",
    title: "Culinária",
    description: "Explorando sabores e transformações químicas de forma lúdica.",
    iconName: "Utensils",
  },
  {
    id: "artes",
    title: "Artes",
    description: "Expressão livre através de diferentes suportes e materiais.",
    iconName: "Palette",
  },
  {
    id: "jardinagem",
    title: "Jardinagem",
    description: "Conexão direta com a terra e o ciclo da vida das plantas.",
    iconName: "Sprout",
  },
  {
    id: "esportes",
    title: "Esportes",
    description: "Movimento consciente e desenvolvimento da coordenação motora.",
    iconName: "FlameKindling", // standard playful sports representation or Activity
  },
  {
    id: "construcao",
    title: "Construção",
    description: "Engenharia brincante com blocos, madeira e criatividade.",
    iconName: "Wrench",
  },
  {
    id: "sensorial",
    title: "Sensorial",
    description: "Texturas, sons e aromas para despertar todos os sentidos.",
    iconName: "Sparkles",
  },
  {
    id: "pedagogico",
    title: "Pedagógico",
    description: "Acompanhamento atento para o desenvolvimento integral.",
    iconName: "BookOpen",
  },
  {
    id: "alfabetizacao",
    title: "Alfabetização",
    description: "Aprendizado da leitura e da escrita de forma acolhedora e estimulante.",
    iconName: "BookText",
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "criatividade",
    title: "Criatividade Exponencial",
    description: "Estímulo constante à resolução de problemas de forma inovadora.",
  },
  {
    id: "autonomia",
    title: "Autonomia e Confiança",
    description: "Ambiente que encoraja a tomada de decisões e independência.",
  },
  {
    id: "socializacao",
    title: "Socialização Saudável",
    description: "Interações reais que fortalecem a empatia e o trabalho em equipe.",
  },
];

export const PILLARS: PillarItem[] = [
  {
    id: "seguranca",
    title: "AMBIENTE SEGURO",
    iconName: "ShieldCheck",
  },
  {
    id: "cuidado",
    title: "AFETO E CUIDADO",
    iconName: "Heart",
  },
  {
    id: "pedagogia",
    title: "BASE PEDAGÓGICA",
    iconName: "GraduationCap",
  },
];

export const WHATSAPP_NUMBER = "5511926929302";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+Contraturno+da+Brinkarium+e+como+agendar+uma+visita%21`;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(source: string = "geral") {
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "conversao",
      event_label: source,
    });
    // Google Ads conversion — substitua AW-XXXXXXXXX/YYYYYYYY pelo seu ID real
    // window.gtag("event", "conversion", { send_to: "AW-XXXXXXXXX/YYYYYYYY" });
  }
}
