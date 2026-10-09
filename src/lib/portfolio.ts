import caseOdonto from "@/assets/img-odonto.png";
import caseEstetica from "@/assets/img-espaco-estetica.png";
import casePetshop from "@/assets/img-p3ts.jpg";
import caseFisio from "@/assets/img-fisio.png";
import caseVet from "@/assets/img-clinica-vet.png";
import caseElite from "@/assets/img-elite.jpg";
import previewEstetica from "@/assets/preview-espaco-estetica.png";
import previewOdonto from "@/assets/case-odonto-preview-sharpened.jpg";
import previewPetshop from "@/assets/preview-p3ts.jpg";
import previewFisio from "@/assets/preview-fisio.png";
import previewVet from "@/assets/Preview-clinica-vet.png";
import previewElite from "@/assets/preview-elite.jpg";

export type Projeto = {
  slug: string;
  img: string;
  previewImg?: string;
  demoUrl?: string;
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
    slug: "p3ts-pet-shop",
    img: casePetshop,
    previewImg: previewPetshop,
    demoUrl: "https://p3ts-studiocriandoweb.pages.dev/",
    alt: "Site P3TS Pet Store, com três pets, identidade verde e laranja e catálogo de produtos",
    segmento: "P3TS — Pet shop",
    cliente: "Uma experiência acolhedora para quem cuida dos pets.",
    resultado:
      "Projeto demonstrativo com catálogo de produtos, apresentação de serviços e simulação de agendamento.",
    entregas: ["Landing page responsiva", "Catálogo de produtos", "Simulação de agendamento"],
    prazo: "Projeto demonstrativo",
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
    slug: "elite-aviacao-executiva",
    img: caseElite,
    previewImg: previewElite,
    demoUrl: "https://elite-studiocriandoweb.pages.dev/",
    alt: "Site Elite de aviação executiva, com jato particular e apresentação da frota",
    segmento: "Elite — Aviação executiva",
    cliente: "Uma experiência digital à altura de uma marca premium.",
    resultado:
      "Projeto demonstrativo com vídeo de abertura, catálogo de aeronaves e simulação de cotação de voos.",
    entregas: [
      "Landing page responsiva",
      "Apresentação interativa da frota",
      "Simulação de cotação",
    ],
    prazo: "Projeto demonstrativo",
  },
];
