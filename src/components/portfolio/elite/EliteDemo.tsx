import React, { useState, useRef } from "react";
import {
  Menu,
  X,
  Plane,
  Clock,
  ShieldCheck,
  Sparkles,
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  Check,
  ChevronDown,
  Volume2,
  VolumeX,
  Luggage,
  Coffee,
  Wifi,
} from "lucide-react";

interface FleetJet {
  id: string;
  name: string;
  category: string;
  passengers: string;
  range: string;
  speed: string;
  hourlyRate: string;
  description: string;
  features: string[];
}

const FLEET_JETS: [FleetJet, ...FleetJet[]] = [
  {
    id: "phenom-300e",
    name: "Embraer Phenom 300E",
    category: "Jato Leve (Light Jet)",
    passengers: "6 a 7 Passageiros",
    range: "3.723 km (2.010 nm)",
    speed: "839 km/h (Mach 0.80)",
    hourlyRate: "Sob Consulta",
    description:
      "O jato leve mais vendido do mundo por mais de uma década consecutiva. Velocidade incomparável, cabine excepcionalmente silenciosa e performance líder em pistas curtas.",
    features: [
      "Maior capacidade de bagagem da categoria",
      "Conexão Wi-Fi via satélite de alta velocidade",
      "Centro de hospitalidade e bebidas completo",
      "Acesso direto a aeródromos regionais e pistas exclusivas",
    ],
  },
  {
    id: "challenger-3500",
    name: "Bombardier Challenger 3500",
    category: "Super Médio (Super Midsize)",
    passengers: "9 a 10 Passageiros",
    range: "6.297 km (3.400 nm)",
    speed: "882 km/h (Mach 0.82)",
    hourlyRate: "Sob Consulta",
    description:
      "Redefine a experiência com os assentos ergonômicos patenteados Nuage e a menor altitude de cabine da classe, garantindo viagens continentais sem fadiga.",
    features: [
      "Assentos com postura de gravidade zero Nuage",
      "Isolamento acústico de cabine de padrão whisper-quiet",
      "Controles de cabine integrados e iluminação circadiana",
      "Alcance transcontinental direto",
    ],
  },
  {
    id: "gulfstream-g650er",
    name: "Gulfstream G650ER",
    category: "Ultra Longo Alcance",
    passengers: "14 a 18 Passageiros",
    range: "13.890 km (7.500 nm)",
    speed: "982 km/h (Mach 0.90)",
    hourlyRate: "Sob Consulta",
    description:
      "O ápice da aviação executiva mundial. Voe sem escalas de São Paulo para Nova York, Londres ou Paris com quatro ambientes privativos e suíte de repouso.",
    features: [
      "Quatro zonas de convivência distintas",
      "Suíte master com opção de toalete com chuveiro",
      "Renovação total de 100% do ar a cada 2 minutos",
      "16 icônicas janelas ovais panorâmicas",
    ],
  },
];

const FAQS = [
  {
    q: "Com quanto tempo de antecedência posso decolar com a Elite?",
    a: "Com nosso serviço sob demanda, os voos podem decolar em apenas 2 horas após a confirmação. Basta chegar ao hangar executivo (FBO) 15 minutos antes do horário programado para o embarque imediato.",
  },
  {
    q: "Existem taxas de associação antecipadas ou contratos de permanência?",
    a: "Não. A Elite foi criada sob o princípio de que a verdadeira exclusividade é a liberdade. Você paga apenas pelas horas e rotas que voar, sem taxas milionárias de aquisição de cotas, desvalorização de aeronaves ou mensalidades fixas.",
  },
  {
    q: "Quais são os padrões de segurança e certificação da frota?",
    a: "Todas as aeronaves e tripulações de nossa rede operam sob rigorosas certificações RBAC 135 / FAA Part 135 e possuem auditorias de excelência internacional como ARGUS Platinum e Wyvern Wingman — reservadas aos 4% mais bem avaliados no mundo.",
  },
  {
    q: "Posso levar animais de estimação na cabine?",
    a: "Sim, com todo o conforto. Seus pets viajam ao seu lado na cabine, livres das restrições e do estresse das companhias aéreas comerciais. Disponibilizamos também amenidades exclusivas para pets mediante solicitação.",
  },
  {
    q: "Como funcionam os voos Empty Leg (pernas vazias)?",
    a: "Quando uma aeronave precisa ser reposicionada sem passageiros a bordo, disponibilizamos esses trechos pontuais com até 75% de economia em relação à tarifa padrão de fretamento. Você pode solicitar alertas de oportunidades em tempo real com nossa equipe.",
  },
];

export default function EliteDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDiscoverModalOpen, setIsDiscoverModalOpen] = useState(false);
  const [selectedJet, setSelectedJet] = useState<FleetJet>(FLEET_JETS[0]);
  const [isMuted, setIsMuted] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Booking Form State
  const [tripType, setTripType] = useState<"oneway" | "roundtrip">("oneway");
  const [departureCity, setDepartureCity] = useState("São Paulo - Catarina (SBJH)");
  const [arrivalCity, setArrivalCity] = useState("Rio de Janeiro - Santos Dumont (SBRJ)");
  const [departureDate, setDepartureDate] = useState("2026-10-15");
  const [passengers, setPassengers] = useState("4");
  const [aircraftPreference, setAircraftPreference] = useState("Jato Leve (Light Jet)");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div
      style={{ fontFamily: "Inter, Arial, sans-serif" }}
      className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased selection:bg-[#202A36] selection:text-white"
    >
      {/* ===================== HERO SECTION ===================== */}
      <section id="inicio" className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
        </video>

        {/* Content wrapper */}
        <div className="relative h-full flex flex-col z-10">
          {/* Navigation Bar */}
          <nav className="w-full max-w-7xl mx-auto px-8 py-6 flex items-center justify-between relative">
            {/* Brand */}
            <a
              href="#inicio"
              className="text-2xl font-semibold text-gray-900 tracking-tight transition-colors hover:text-gray-700"
            >
              Elite
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("inicio");
                }}
                className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-sm"
              >
                Início
              </a>
              <a
                href="#historia"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("historia");
                }}
                className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-sm"
              >
                História
              </a>
              <a
                href="#tarifas"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("tarifas");
                }}
                className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-sm"
              >
                Tarifas
              </a>
              <a
                href="#beneficios"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("beneficios");
                }}
                className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-sm"
              >
                Benefícios
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("faq");
                }}
                className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-sm"
              >
                FAQ
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-900 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#202A36] transition-colors"
                aria-label="Alternar menu de navegação"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-full left-6 right-6 mt-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col space-y-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("inicio");
                  }}
                  className="text-gray-900 hover:text-gray-700 font-medium text-base transition-colors py-1"
                >
                  Início
                </a>
                <a
                  href="#historia"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("historia");
                  }}
                  className="text-gray-900 hover:text-gray-700 font-medium text-base transition-colors py-1"
                >
                  História
                </a>
                <a
                  href="#tarifas"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("tarifas");
                  }}
                  className="text-gray-900 hover:text-gray-700 font-medium text-base transition-colors py-1"
                >
                  Tarifas
                </a>
                <a
                  href="#beneficios"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("beneficios");
                  }}
                  className="text-gray-900 hover:text-gray-700 font-medium text-base transition-colors py-1"
                >
                  Benefícios
                </a>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("faq");
                  }}
                  className="text-gray-900 hover:text-gray-700 font-medium text-base transition-colors py-1"
                >
                  FAQ
                </a>

                <div className="pt-3 border-t border-gray-200 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsBookingModalOpen(true);
                    }}
                    className="w-full px-4 py-2.5 rounded-full text-white bg-[#202A36] hover:bg-[#1a2229] transition-colors font-medium text-sm text-center shadow-sm"
                  >
                    Reservar
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDiscoverModalOpen(true);
                    }}
                    className="w-full px-4 py-2.5 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors text-sm text-center"
                  >
                    Conhecer
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-center">
            {/* Hero Content (centered, -mt-80 to pull up) */}
            <div className="text-center flex flex-col items-center -mt-80 px-4">
              {/* Small uppercase label */}
              <span className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">
                JATOS PARTICULARES
              </span>

              {/* Large two-line heading with overlapping effect */}
              <div className="flex flex-col items-center">
                <span className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                  Premium.
                </span>
                <span className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter text-[#202A36] -mt-[12px]">
                  Acessível.
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mt-4">
                Sua dedicação merece reconhecimento.
              </p>

              {/* Two call-to-action buttons */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsDiscoverModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors text-sm md:text-base cursor-pointer"
                >
                  Conhecer
                </button>
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="px-4 py-2 rounded-full text-white bg-[#202A36] hover:bg-[#1a2229] transition-colors font-medium text-sm md:text-base cursor-pointer shadow-md"
                >
                  Reservar
                </button>
              </div>
            </div>
          </div>

          {/* Audio toggle control */}
          <div className="absolute bottom-6 right-8 flex items-center gap-3">
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 text-xs px-3 py-1.5 rounded-full shadow-sm transition-colors cursor-pointer border border-gray-200/50"
              title={isMuted ? "Ativar áudio ambiente" : "Silenciar áudio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-gray-600" />
                  <span>Ativar Áudio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#202A36]" />
                  <span>Áudio Ambiente Ativo</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ===================== HISTÓRIA / STORY ===================== */}
      <section
        id="historia"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3 block">
              O Padrão Elite
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#202A36] leading-tight mb-6">
              Aviação executiva, livre de modelos ultrapassados.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Por décadas, o voo privado esteve atrelado a cotas fracionadas com aportes
              milionários, contratos burocráticos de longo prazo e taxas imprevistas de hangar e
              manutenção.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              A Elite elimina esses obstáculos. Conectamos executivos, famílias e equipes de alta
              performance diretamente a aeronaves verificadas e prontas para decolagem em mais de
              5.000 aeródromos globais.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl font-semibold text-[#202A36]">5.000+</div>
                <div className="text-xs text-gray-500 mt-1">Aeroportos Globais</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#202A36]">15 Min</div>
                <div className="text-xs text-gray-500 mt-1">Embarque em Pista</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#202A36]">99,8%</div>
                <div className="text-xs text-gray-500 mt-1">Pontualidade</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-8 h-8 text-[#202A36] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recupere Seu Tempo</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sem filas de segurança, conexões em hubs lotados ou esteiras de bagagem. Estacione
                ao lado da escada da aeronave e decole em minutos.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[#202A36] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Segurança Absoluta</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Auditorias globais com certificação máxima Wyvern Wingman e ARGUS Platinum. Cabines
                com comando duplo e milhares de horas de voo por piloto.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="w-8 h-8 text-[#202A36] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Experiência Sob Medida</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gastronomia de alta cozinha, carta selecionada de vinhos, internet via satélite
                ultra-rápida e recepção exclusiva para seus animais de estimação.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Plane className="w-8 h-8 text-[#202A36] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Acesso a Pistas Dedicadas
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pouse exatamente onde precisa: aeroportos executivos, fazendas, resorts e pistas
                litorâneas sem a saturação dos grandes terminais comerciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TARIFAS & FROTA ===================== */}
      <section id="tarifas" className="py-24 bg-gray-100/60 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3 block">
                Tarifas Transparentes
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#202A36]">
                Precificação clara e sem surpresas.
              </h2>
            </div>
            <p className="text-sm text-gray-600 max-w-md mt-4 md:mt-0">
              Sem mensalidades de retenção, custos operacionais ocultos ou burocracia de franquias.
            </p>
          </div>

          {/* Fleet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {FLEET_JETS.map((jet) => (
              <div
                key={jet.id}
                className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-gray-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {jet.category}
                    </span>
                    <span className="text-sm font-semibold text-[#202A36]">{jet.hourlyRate}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{jet.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{jet.description}</p>

                  <div className="space-y-2.5 py-4 border-t border-b border-gray-100 mb-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> Capacidade
                      </span>
                      <span className="font-medium text-gray-800">{jet.passengers}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> Alcance Máximo
                      </span>
                      <span className="font-medium text-gray-800">{jet.range}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> Velocidade de Cruzeiro
                      </span>
                      <span className="font-medium text-gray-800">{jet.speed}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {jet.features.map((feat, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setSelectedJet(jet);
                      setIsDiscoverModalOpen(true);
                    }}
                    className="flex-1 py-2 rounded-full bg-gray-200 text-gray-800 text-xs font-medium hover:bg-gray-300 transition-colors text-center cursor-pointer"
                  >
                    Especificações
                  </button>
                  <button
                    onClick={() => {
                      setAircraftPreference(jet.category);
                      setIsBookingModalOpen(true);
                    }}
                    className="flex-1 py-2 rounded-full bg-[#202A36] text-white text-xs font-medium hover:bg-[#1a2229] transition-colors text-center cursor-pointer"
                  >
                    Selecionar Jato
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Legs Banner */}
          <div className="bg-[#202A36] rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest text-gray-300 font-semibold mb-2">
                Oportunidades Empty Leg
              </span>
              <h3 className="text-2xl md:text-3xl font-light">
                Voos de reposicionamento com até 75% de economia.
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xl">
                Rotas frequentes em destaque: São Paulo (Catarina) → Rio de Janeiro, Brasília → São
                Paulo, Miami → Nova York, Lisboa → Nice.
              </p>
            </div>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-6 py-3 rounded-full bg-white text-[#202A36] font-medium text-sm hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer shadow"
            >
              Consultar Oportunidades
            </button>
          </div>
        </div>
      </section>

      {/* ===================== BENEFÍCIOS ===================== */}
      <section
        id="beneficios"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-200"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3 block">
            Diferenciais de Excelência
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#202A36]">
            Cada detalhe calibrado ao seu estilo de vida.
          </h2>
          <p className="text-gray-600 mt-4 text-base">
            Da chegada discreta ao hangar até o pouso no seu destino final, viva uma experiência de
            mobilidade aérea refinada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-[#202A36] mb-6">
              <Luggage className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bagagem Sem Restrições</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Viaje com tudo o que precisa. Bolsas de golfe, equipamentos esportivos, coleções e
              itens delicados são acomodados com cuidado direto da equipe de pista.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-[#202A36] mb-6">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gastronomia Personalizada</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cardápios exclusivos preparados pelos melhores restaurantes parceiros, acompanhados de
              rótulos selecionados e atendimento discreto a bordo.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-[#202A36] mb-6">
              <Wifi className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Escritório nas Nuvens</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Conexão estável e veloz via satélite para videoconferências em alta definição, tomada
              de decisões estratégicas e comunicação ininterrupta a 45.000 pés.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="py-24 bg-gray-100/50 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3 block">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#202A36]">
              Perguntas e Respostas
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200/70 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-gray-900 font-medium hover:text-gray-700 transition-colors cursor-pointer"
                  >
                    <span className="text-base md:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#202A36]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== RODAPÉ / FOOTER ===================== */}
      <footer className="bg-[#202A36] text-white py-16 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-2xl font-semibold tracking-tight text-white block mb-2">
              Elite
            </span>
            <p className="text-xs text-gray-400 max-w-sm">
              Sua dedicação merece reconhecimento. Fretamento aéreo executivo de alta precisão com
              operação regulamentada pelos principais órgãos de aviação civil.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("inicio");
              }}
              className="hover:text-white transition-colors"
            >
              Início
            </a>
            <a
              href="#historia"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("historia");
              }}
              className="hover:text-white transition-colors"
            >
              História
            </a>
            <a
              href="#tarifas"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("tarifas");
              }}
              className="hover:text-white transition-colors"
            >
              Tarifas
            </a>
            <a
              href="#beneficios"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("beneficios");
              }}
              className="hover:text-white transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("faq");
              }}
              className="hover:text-white transition-colors"
            >
              FAQ
            </a>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-[#202A36] hover:bg-gray-100 transition-colors ml-2 cursor-pointer"
            >
              Cotar Voo
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Elite Aviação Executiva. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-400 cursor-pointer">Privacidade e Sigilo</span>
            <span>·</span>
            <span className="hover:text-gray-400 cursor-pointer">Auditorias de Segurança</span>
            <span>·</span>
            <span className="hover:text-gray-400 cursor-pointer">Termos de Transporte</span>
          </div>
        </div>
      </footer>

      {/* ===================== MODAL DE RESERVA / COTAÇÃO ===================== */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsBookingModalOpen(false);
                setBookingConfirmed(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingConfirmed ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-[#202A36] mb-2">Simulação de Cotação</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Esta é uma demonstração do formulário para o trecho{" "}
                  <span className="font-semibold text-gray-900">
                    {departureCity} → {arrivalCity}
                  </span>{" "}
                  na data {departureDate}. Nenhuma solicitação foi enviada ou reserva realizada.
                </p>
                <div className="p-4 bg-gray-50 rounded-2xl text-left text-xs space-y-2 mb-6 border border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Rota:</span>
                    <span className="font-medium text-gray-800">
                      {departureCity} até {arrivalCity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Data:</span>
                    <span className="font-medium text-gray-800">{departureDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Passageiros:</span>
                    <span className="font-medium text-gray-800">{passengers} Pessoas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Categoria:</span>
                    <span className="font-medium text-gray-800">{aircraftPreference}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsBookingModalOpen(false);
                    setBookingConfirmed(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#202A36] text-white text-sm font-medium hover:bg-[#1a2229] transition-colors cursor-pointer"
                >
                  Fechar e Concluir
                </button>
              </div>
            ) : (
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 block">
                  Elite Sob Demanda
                </span>
                <h3 className="text-2xl font-light tracking-tight text-[#202A36] mb-1">
                  Solicitar Cotação de Voo
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Embarque direto em pista privada. Tripulação dupla. Sem custos ocultos.
                </p>

                {/* Tipo de Viagem */}
                <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
                  <button
                    type="button"
                    onClick={() => setTripType("oneway")}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      tripType === "oneway"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    Somente Ida
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType("roundtrip")}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      tripType === "roundtrip"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    Ida e Volta
                  </button>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Origem / Aeroporto
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={departureCity}
                          onChange={(e) => setDepartureCity(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#202A36]"
                          placeholder="Ex: São Paulo - Catarina (SBJH)"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Destino / Aeroporto
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={arrivalCity}
                          onChange={(e) => setArrivalCity(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#202A36]"
                          placeholder="Ex: Rio de Janeiro - SDU"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Data da Decolagem
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="date"
                          required
                          value={departureDate}
                          onChange={(e) => setDepartureDate(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#202A36]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Passageiros
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <select
                          value={passengers}
                          onChange={(e) => setPassengers(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#202A36]"
                        >
                          <option value="1 a 2">1 a 2 Passageiros</option>
                          <option value="4">4 Passageiros</option>
                          <option value="6 a 8">6 a 8 Passageiros</option>
                          <option value="10+">10+ Passageiros</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Categoria de Aeronave Preferida
                    </label>
                    <select
                      value={aircraftPreference}
                      onChange={(e) => setAircraftPreference(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#202A36]"
                    >
                      <option value="Jato Leve (Light Jet)">
                        Jato Leve (Phenom 300 / Citation CJ4)
                      </option>
                      <option value="Médio (Midsize Jet)">
                        Jato Médio (Citation Latitude / Hawker 900XP)
                      </option>
                      <option value="Super Médio (Super Midsize)">
                        Super Médio (Challenger 3500 / Citation Sovereign)
                      </option>
                      <option value="Ultra Longo Alcance">
                        Ultra Longo Alcance (Gulfstream G650ER / Global 7500)
                      </option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full text-white bg-[#202A36] hover:bg-[#1a2229] transition-colors font-medium text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Receber Opções de Aeronaves</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-gray-400 text-center mt-2">
                      Cancelamento sem custo até 24 horas antes do horário de decolagem.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===================== MODAL DE ESPECIFICAÇÕES DA FROTA ===================== */}
      {isDiscoverModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsDiscoverModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 block">
              Frota Elite
            </span>
            <h3 className="text-2xl font-light tracking-tight text-[#202A36] mb-4">
              Especificações e Ficha Técnica
            </h3>

            {/* Jet Selector Tabs */}
            <div className="flex space-x-2 border-b border-gray-200 pb-3 mb-6 overflow-x-auto">
              {FLEET_JETS.map((jet) => (
                <button
                  key={jet.id}
                  onClick={() => setSelectedJet(jet)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    selectedJet.id === jet.id
                      ? "bg-[#202A36] text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {jet.name}
                </button>
              ))}
            </div>

            {/* Jet Detail View */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">{selectedJet.name}</h4>
                  <span className="text-sm font-semibold text-[#202A36]">
                    {selectedJet.hourlyRate}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{selectedJet.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Capacidade</div>
                  <div className="text-sm font-semibold text-[#202A36]">
                    {selectedJet.passengers}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Alcance Máx.</div>
                  <div className="text-sm font-semibold text-[#202A36]">{selectedJet.range}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Velocidade</div>
                  <div className="text-sm font-semibold text-[#202A36]">{selectedJet.speed}</div>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Destaques da Cabine & Conforto a Bordo
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedJet.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setIsDiscoverModalOpen(false)}
                  className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-xs font-medium hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setIsDiscoverModalOpen(false);
                    setAircraftPreference(selectedJet.category);
                    setIsBookingModalOpen(true);
                  }}
                  className="px-5 py-2 rounded-full bg-[#202A36] text-white text-xs font-medium hover:bg-[#1a2229] transition-colors cursor-pointer"
                >
                  Solicitar Este Modelo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
