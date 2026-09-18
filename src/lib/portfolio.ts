import caseOdonto from "@/assets/img-odonto.png";
import caseEstetica from "@/assets/img-espaco-estetica.png";
import casePetshop from "@/assets/img-pet-shop.png";
import caseFisio from "@/assets/img-fisio.png";
import caseVet from "@/assets/img-clinica-vet.png";
import caseCustom from "@/assets/img-personalizado.jpg";
import previewEstetica from "@/assets/preview-espaco-estetica.png";
import previewOdonto from "@/assets/case-odonto-preview-sharpened.jpg";
import previewPetshop from "@/assets/preview-pet-shop.png";
import previewFisio from "@/assets/preview-fisio.png";
import previewVet from "@/assets/Preview-clinica-vet.png";
import previewCustom from "@/assets/preview-personalizado.png";

export type Projeto = {
  slug: string;
  img: string;
  previewImg?: string;
  alt: string;
  segmento: string;
  cliente: string;
  resultado: string;
  entregas: string[];
  prazo: string;
};

export const projetos: Projeto[] = [
  {
    slug: "clinica-odontologica",
    img: caseOdonto,
    previewImg: previewOdonto,
    alt: "Recepção de clínica odontológica em tons de azul e branco",
    segmento: "Clínica odontológica",
    cliente: "Uma presença digital para transformar dúvidas em confiança.",
    resultado:
      "Apresenta tratamentos, diferenciais e informações importantes antes do agendamento.",
    entregas: [
      "Copy completa da página",
      "Landing page responsiva",
      "Botão de WhatsApp em todas as seções",
    ],
    prazo: "6 dias",
  },
  {
    slug: "espaco-de-estetica",
    img: caseEstetica,
    previewImg: previewEstetica,
    alt: "Sala de atendimento de espaço de estética com decoração clara",
    segmento: "Espaço de estética",
    cliente: "Uma vitrine digital para valorizar seus serviços.",
    resultado: "Apresenta procedimentos, benefícios e informações de atendimento de forma clara.",
    entregas: ["Reescrita dos textos", "Tabela de pacotes", "Galeria de antes e depois"],
    prazo: "7 dias",
  },
  {
    slug: "pet-shop",
    img: casePetshop,
    previewImg: previewPetshop,
    alt: "Interior de pet shop com um cachorro no balcão de atendimento",
    segmento: "Pet shop",
    cliente: "Uma estrutura para apresentar serviços e facilitar o contato.",
    resultado: "Organiza banho, tosa e outros serviços para levar o cliente ao WhatsApp.",
    entregas: ["Copy de serviços", "Seção de planos mensais", "Mapa e horários"],
    prazo: "5 dias",
  },
  {
    slug: "clinica-de-fisioterapia",
    img: caseFisio,
    previewImg: previewFisio,
    alt: "Sala de clínica de fisioterapia com equipamentos de reabilitação",
    segmento: "Clínica de fisioterapia",
    cliente: "Profissionalismo para apresentar seus serviços com clareza.",
    resultado:
      "Destaca especialidades, diferenciais e informações importantes para quem busca atendimento.",
    entregas: ["Copy de convênios", "FAQ de objeções", "Mapa e horários"],
    prazo: "5 dias",
  },
  {
    slug: "clinica-veterinaria",
    img: caseVet,
    previewImg: previewVet,
    alt: "Recepção de clínica veterinária em tons de azul e branco",
    segmento: "Clínica veterinária",
    cliente: "Uma presença digital clara e acolhedora para sua clínica.",
    resultado:
      "Apresenta serviços, especialidades e informações importantes para facilitar o contato.",
    entregas: ["Copy de serviços", "Seção de planos mensais", "Mapa e horários"],
    prazo: "6 dias",
  },
  {
    slug: "escrito-personalizado",
    img: caseCustom,
    previewImg: previewCustom,
    alt: "Retrato de profissional em um ambiente de trabalho com plantas",
    segmento: "Projeto personalizado",
    cliente: "Quando o seu negócio precisa de uma estrutura única.",
    resultado:
      "Projeto desenvolvido sob medida para sua identidade, conteúdo e necessidades específicas.",
    entregas: ["Briefing aprofundado", "Copy 100% personalizada", "Design exclusivo"],
    prazo: "Sob consulta",
  },
];
