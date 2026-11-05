import { ServiceItem, ProjectItem, ClientSegmentItem } from '../types';

export const AGENCY_CONFIG = {
  name: 'AL STUDIO TECH',
  legalName: 'AL Studio Tech Soluções Digitais',
  mainSlogan: 'Transformamos ideias em experiências digitais.',
  secondarySlogan: 'Design, tecnologia e criatividade para marcas que querem ir além.',
  location: 'Laranjeiras — Caieiras/SP',
  whatsappRaw: '5511987973086',
  whatsappFormatted: '(11) 98797-3086',
  email: 'contato@alstudiotech.com.br',
  instagram: '@alstudiotech',
  instagramUrl: 'https://instagram.com',
  workingHours: 'Segunda a Sexta, das 09h às 18h',
  colors: {
    navy: '#091426',
    deepBlue: '#101F38',
    electricBlue: '#2878FF',
    lightBlue: '#59A5FF',
    orange: '#FF7628',
    white: '#FFFFFF',
    lightGray: '#F2F5FA',
    secondaryGray: '#AAB4C4',
  }
};

export const generateWhatsAppUrl = (message: string, phone: string = AGENCY_CONFIG.whatsappRaw): string => {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'sites',
    number: '01',
    title: 'Criação de Sites',
    shortDescription: 'Sites institucionais modernos, responsivos e profissionais para apresentar sua empresa, conquistar clientes e fortalecer sua presença digital.',
    fullDescription: 'Desenvolvemos plataformas web de alto impacto, combinando arquitetura rápida, design responsivo de alto nível e foco absoluto em conversão e usabilidade para o seu negócio.',
    highlights: [
      'Sites institucionais completos',
      'Landing pages de alta conversão',
      'Sites comerciais & catálogos',
      'Portfólios para profissionais',
      'Páginas de vendas de infoprodutos'
    ],
    icon: 'Layout',
    whatsappMessage: 'Olá! Tenho interesse na criação de um site profissional para minha empresa. Gostaria de conhecer as opções e solicitar um orçamento.'
  },
  {
    id: 'videos',
    number: '02',
    title: 'Produção de Vídeos',
    shortDescription: 'Criamos conteúdos audiovisuais criativos para apresentar produtos, divulgar empresas e gerar conexão com seu público.',
    fullDescription: 'Do roteiro à edição final com efeitos, color grading e sound design, criamos narrativas em vídeo que prendem a atenção e valorizam a autoridade da sua marca.',
    highlights: [
      'Vídeos promocionais e comerciais',
      'Vídeos institucionais e manifesto',
      'Reels e TikTok dinâmicos',
      'Shorts de engajamento',
      'Vídeos potencializados com inteligência artificial',
      'Anúncios em vídeo para tráfego pago'
    ],
    icon: 'Video',
    whatsappMessage: 'Olá! Gostaria de um orçamento para produção de vídeos e conteúdos audiovisuais para minha marca com a AL Studio Tech.'
  },
  {
    id: 'redes',
    number: '03',
    title: 'Redes Sociais',
    shortDescription: 'Desenvolvemos conteúdos estratégicos e visuais profissionais para fortalecer sua marca nas redes sociais.',
    fullDescription: 'Transformamos seu feed em uma vitrine de alto valor. Criamos peças visuais que destacam seu posicionamento e constroem relacionamento sólido com potenciais clientes.',
    highlights: [
      'Criação de artes profissionais',
      'Posts estáticos estratégicos',
      'Carrosséis educativos e comerciais',
      'Stories interativos e criativos',
      'Planejamento editorial de conteúdo',
      'Identidade visual padronizada para redes sociais'
    ],
    icon: 'Share2',
    whatsappMessage: 'Olá! Gostaria de profissionalizar a gestão visual e de conteúdo das redes sociais da minha empresa. Poderiam me apresentar as propostas?'
  },
  {
    id: 'identidade',
    number: '04',
    title: 'Design e Identidade Visual',
    shortDescription: 'Construímos identidades visuais que representam a essência do seu negócio e criam uma comunicação profissional.',
    fullDescription: 'Marcas fortes não nascem por acaso. Criamos sistemas visuais memoráveis, desde o logotipo até aplicações físicas e digitais que transmitem credibilidade instantânea.',
    highlights: [
      'Logotipos exclusivos e manuais de marca',
      'Sistemas completos de identidade visual',
      'Banners físicos e digitais',
      'Materiais promocionais e impressos',
      'Artes publicitárias e apresentações comerciais'
    ],
    icon: 'Palette',
    whatsappMessage: 'Olá! Preciso criar ou modernizar a identidade visual e o logotipo da minha marca. Gostaria de entender como funciona o processo com a AL Studio Tech.'
  },
  {
    id: 'ia',
    number: '05',
    title: 'Soluções com IA',
    shortDescription: 'Utilizamos inteligência artificial e tecnologia para desenvolver experiências digitais inovadoras e acelerar a produção criativa.',
    fullDescription: 'Incorporamos o que há de mais avançado em IA generativa para automação de fluxos, geração de imagens conceituais ultrarrealistas e desenvolvimento de ferramentas customizadas.',
    highlights: [
      'Imagens publicitárias e conceituais com IA',
      'Vídeos sintéticos e avatares hiper-realistas',
      'Automação de processos e atendimento',
      'Projetos digitais interativos personalizados'
    ],
    icon: 'Sparkles',
    whatsappMessage: 'Olá! Tenho interesse em implementar soluções com inteligência artificial e tecnologia personalizada no meu negócio.'
  }
];

export const CLIENT_SEGMENTS: ClientSegmentItem[] = [
  {
    id: 'correspondente-bancario',
    name: 'Correspondente Bancário & Crédito',
    icon: 'Building2',
    description: 'Correspondentes bancários, promotoras de crédito e consultorias financeiras que necessitam de captação contínua de clientes.',
    recommendedSolutions: [
      'Plataformas web com simulação de empréstimos e crédito',
      'Landing pages para captação de clientes consignados e FGTS',
      'Produção de vídeos e Reels educativos para redes sociais',
      'Anúncios em vídeo e campanhas de tráfego pago'
    ],
    idealFor: 'FourCred, promotoras de crédito, correspondentes bancários e consultorias financeiras.',
    whatsappPrompt: 'Olá! Atuo como Correspondente Bancário / Crédito e gostaria de conhecer as soluções que a AL Studio Tech desenvolveu para o setor.'
  },
  {
    id: 'imobiliarias',
    name: 'Imobiliárias & Corretores',
    icon: 'Building2',
    description: 'Imobiliárias, incorporadoras e corretores independentes que necessitam de vitrine digital de alto padrão e vídeos de imóveis.',
    recommendedSolutions: [
      'Portais imobiliários rápidos com busca e filtros',
      'Landing pages exclusivas para lançamentos residenciais',
      'Vídeos dinâmicos em formato Reels para tour de imóveis',
      'Campanhas visuais para captação de compradores'
    ],
    idealFor: 'Imobiliárias, consultores de imóveis e empreendimentos.',
    whatsappPrompt: 'Olá! Atuo no mercado imobiliário e quero um site e vídeos de imóveis com o padrão AL Studio Tech.'
  },
  {
    id: 'sorveterias-acai',
    name: 'Sorveterias & Açaí',
    icon: 'UtensilsCrossed',
    description: 'Sorveterias artesanais, gelaterias e casas de açaí que querem atrair clientes pelo visual das taças e sobremesas.',
    recommendedSolutions: [
      'Cardápio digital interativo com fotos em altíssima definição',
      'Vídeos envolventes de montagem de taças para Reels e TikTok',
      'Artes para datas comemorativas e campanhas de verão',
      'QR Code nas mesas e integração com pedido via WhatsApp'
    ],
    idealFor: 'Sorveterias, gelaterias, açaíterias e lojas de sobremesas.',
    whatsappPrompt: 'Olá! Tenho uma sorveteria / açaíteria e quero um cardápio digital e vídeos para atratividade da minha loja.'
  },
  {
    id: 'lanchonetes-hamburguerias',
    name: 'Lanchonetes & Hamburguerias',
    icon: 'UtensilsCrossed',
    description: 'Hamburguerias artesanais, lanchonetes e fast foods que dependem do apetite visual nas redes sociais.',
    recommendedSolutions: [
      'Cardápio online ágil com separação por combos e adicionais',
      'Vídeos suculentos em slow-motion dos lanches e porções',
      'Gestão visual de Instagram e anúncios locais',
      'Sistema de pedido direto no WhatsApp sem taxas de aplicativos'
    ],
    idealFor: 'Hamburguerias gourmet, lanchonetes de bairro e pit stops.',
    whatsappPrompt: 'Olá! Tenho uma lanchonete / hamburgueria e quero criar um cardápio online e vídeos dos lanches com a AL Studio Tech.'
  },
  {
    id: 'pastelarias-gastronomia',
    name: 'Pastelarias & Gastronomia Local',
    icon: 'UtensilsCrossed',
    description: 'Pastelarias tradicionais, restaurantes e petiscarias que querem modernizar seu atendimento e presença digital.',
    recommendedSolutions: [
      'Cardápio QR Code de mesa rápido e fácil de navegar',
      'Vídeos de fritura crocante e recheios para redes sociais',
      'Banners e artes promocionais para dias da semana',
      'Presença otimizada no Google Meu Negócio'
    ],
    idealFor: 'Pastelarias, feirantes gourmet, petiscarias e restaurantes.',
    whatsappPrompt: 'Olá! Tenho uma pastelaria / restaurante e gostaria de modernizar meu cardápio e vídeos da minha casa.'
  },
  {
    id: 'saude-clinicas',
    name: 'Saúde, Clínicas & Dentistas',
    icon: 'Stethoscope',
    description: 'Médicos, dentistas, clínicas multidisciplinares e profissionais da saúde que buscam autoridade e agendamentos.',
    recommendedSolutions: [
      'Sites institucionais com integração a agendamentos',
      'Landing pages de tratamentos e especialidades',
      'Vídeos explicativos e institucionais humanizados',
      'Artes informativas e éticas para redes sociais'
    ],
    idealFor: 'Clínicas médicas, consultórios odontológicos e estética médica.',
    whatsappPrompt: 'Olá! Sou da área da Saúde/Clínica e gostaria de saber as soluções digitais da AL Studio Tech para meu segmento.'
  },
  {
    id: 'beleza-estetica',
    name: 'Beleza & Estética',
    icon: 'Sparkle',
    description: 'Salões de beleza, clínicas de estética, micropigmentação e spas focados em valorizar a autoestima.',
    recommendedSolutions: [
      'Páginas de apresentação de procedimentos com fotos antes/depois',
      'Feed harmônico e elegante para Instagram',
      'Vídeos curtos de demonstração de tratamentos',
      'Link na bio profissional com agendamento direto'
    ],
    idealFor: 'Esteticistas, cabeleireiros, micropigmentadoras e spas.',
    whatsappPrompt: 'Olá! Sou da área de beleza/estética e quero um site e identidade visual elegante para meu espaço.'
  },
  {
    id: 'advocacia-consultoria',
    name: 'Advocacia & Consultoria',
    icon: 'Scale',
    description: 'Escritórios jurídicos, consultorias empresariais e tributárias que exigem sobriedade e prestígio.',
    recommendedSolutions: [
      'Sites institucionais sóbrios e de alta autoridade',
      'Vídeos explicativos sobre direitos e novidades legislativas',
      'Apresentações corporativas em PDF e identidade executiva'
    ],
    idealFor: 'Advogados autônomos, bancas de advocacia e consultores.',
    whatsappPrompt: 'Olá! Sou do segmento jurídico/consultoria e busco um posicionamento digital com seriedade e autoridade.'
  },
  {
    id: 'comercio-varejo',
    name: 'Comércio & Lojas Físicas',
    icon: 'ShoppingBag',
    description: 'Lojas físicas, confecções, materiais de construção e comércio local que buscam ampliar vendas na internet.',
    recommendedSolutions: [
      'Catálogo online integrado ao WhatsApp para pedidos ágeis',
      'Vídeos demonstrativos de novidades e promoções',
      'Banners promocionais para datas sazonais e vitrine'
    ],
    idealFor: 'Lojas de roupas, calçados, autopeças e utilidades.',
    whatsappPrompt: 'Olá! Tenho um comércio / loja física e quero um catálogo e campanhas visuais para vender mais na internet.'
  },
  {
    id: 'tecnologia-servicos',
    name: 'Tecnologia & Serviços',
    icon: 'Cpu',
    description: 'Startups, empresas de TI, provedores de internet e prestadores de serviços B2B de suporte e infraestrutura.',
    recommendedSolutions: [
      'Landing pages de captação B2B de alta tecnologia',
      'Vídeos motion graphics explicando softwares e serviços',
      'Identidade futurista com estética tech refinada'
    ],
    idealFor: 'Provedores, empresas de software, cibersegurança e suporte.',
    whatsappPrompt: 'Olá! Somos uma empresa de tecnologia/serviços e queremos alinhar nossa presença digital com o padrão AL Studio Tech.'
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-fourcred-web',
    name: 'FourCred — Plataforma de Soluções Financeiras & Crédito',
    category: 'sites',
    categoryLabel: 'Correspondente Bancário',
    coverImage: '/src/assets/images/fourcred_website_mockup_1793896062810.jpg',
    gallery: [
      '/src/assets/images/fourcred_website_mockup_1793896062810.jpg',
      '/src/assets/images/fourcred_video_showcase_1793896062472.jpg'
    ],
    summary: 'Plataforma web profissional desenvolvida para a FourCred, combinando simulação de crédito, navegação intuitiva e captação direta de clientes.',
    serviceType: 'Criação de Site & Estrutura Comercial',
    objective: 'Desenvolver uma presença web moderna e rápida para a FourCred, facilitando a apresentação de soluções financeiras, modalidades de crédito e atendimento imediato.',
    solutions: [
      'Design responsivo focado na facilidade de navegação e credibilidade institucional',
      'Encaminhamento direto para atendimento via WhatsApp',
      'Arquitetura ultrarrápida otimizada para dispositivos móveis e desktop',
      'Estrutura visual moderna alinhada ao posicionamento de mercado'
    ],
    resultsOrDelivery: 'Projeto no ar e em operação no endereço oficial https://site-fourcred.vercel.app/',
    clientSegment: 'Correspondente Bancário & Crédito',
    isDemonstration: false,
    isRealClient: true,
    featured: true,
    externalUrl: 'https://site-fourcred.vercel.app/',
    instagramUrl: 'https://www.instagram.com/_fourcred/'
  },
  {
    id: 'proj-fourcred-video',
    name: 'FourCred — Produção Audiovisual & Conteúdos de Crédito',
    category: 'videos',
    categoryLabel: 'Correspondente Bancário',
    coverImage: '/src/assets/images/fourcred_video_showcase_1793896062472.jpg',
    gallery: [
      '/src/assets/images/fourcred_video_showcase_1793896062472.jpg',
      '/src/assets/images/fourcred_website_mockup_1793896062810.jpg'
    ],
    summary: 'Produção, edição e motion graphics de vídeos dinâmicos em formato vertical para o Instagram oficial da FourCred.',
    serviceType: 'Produção Audiovisual & Redes Sociais',
    objective: 'Criar conteúdos visuais e vídeos atrativos no Instagram @_fourcred para apresentar produtos de crédito e conectar a empresa aos clientes.',
    solutions: [
      'Edição dinâmica de vídeos para Reels com ritmo acelerado',
      'Identidade visual padronizada para capas e materiais promocionais',
      'Legendas estilizadas e elementos gráficos de destaque',
      'Formatos otimizados para consumo em redes sociais'
    ],
    resultsOrDelivery: 'Conteúdos em vídeo ativos e publicados no perfil oficial @_fourcred',
    clientSegment: 'Correspondente Bancário & Crédito',
    isDemonstration: false,
    isRealClient: true,
    featured: true,
    externalUrl: 'https://site-fourcred.vercel.app/',
    instagramUrl: 'https://www.instagram.com/_fourcred/'
  },
  {
    id: 'proj-imobiliaria',
    name: 'Luxura Imóveis — Portal Imobiliário & Tours em Reels',
    category: 'sites',
    categoryLabel: 'Imobiliárias',
    coverImage: '/src/assets/images/imobiliaria_showcase_1793899004049.jpg',
    gallery: [
      '/src/assets/images/imobiliaria_showcase_1793899004049.jpg'
    ],
    summary: 'Plataforma imobiliária com busca de lançamentos, fotos em alta definição e integração de vídeos Reels para tour de apartamentos e casas.',
    serviceType: 'Site Imobiliário & Vídeos de Imóveis',
    objective: 'Apresentar lançamentos residenciais com elegância, gerando leads qualificados para corretores através de agendamento de visita rápido.',
    solutions: [
      'Busca dinâmica por bairro, valor e número de quartos',
      'Apresentação de vídeos Reels com tour guiado de cada empreendimento',
      'Formulário de interesse integrado direto ao WhatsApp do corretor da vez',
      'Filtros de pesquisa instantâneos sem recarregar a página'
    ],
    resultsOrDelivery: 'Solução completa para imobiliárias e corretores que buscam destaque comercial no setor.',
    clientSegment: 'Imobiliárias & Corretores',
    isDemonstration: true,
    featured: true
  },
  {
    id: 'proj-sorveteria',
    name: 'Scoops & Swirls — Cardápio Digital & Vídeos de Açaí e Gelato',
    category: 'redes',
    categoryLabel: 'Sorveterias & Açaí',
    coverImage: '/src/assets/images/sorveteria_acai_showcase_1793899002894.jpg',
    gallery: [
      '/src/assets/images/sorveteria_acai_showcase_1793899002894.jpg'
    ],
    summary: 'Cardápio interativo via QR Code para mesas, vídeos hiper-atrativos de montagem de taças e promoção de acompanhos de açaí.',
    serviceType: 'Cardápio Digital & Mídias Sociais',
    objective: 'Elevar o apetite visual das taças de sorvete e bowls de açaí nas redes sociais e facilitar os pedidos dentro do estabelecimento.',
    solutions: [
      'Cardápio digital visual com fotos detalhadas dos acompanhamentos',
      'Vídeos curtos estilo Reels mostrando calda e textura das taças',
      'Painel de novidades e destaques de ofertas da semana',
      'Facilidade para montagem personalizada de copo de açaí pelo cliente'
    ],
    resultsOrDelivery: 'Modelo pronto de comunicação e cardápio para sorveterias, gelaterias e açaíterias.',
    clientSegment: 'Sorveterias & Açaí',
    isDemonstration: true,
    featured: true
  },
  {
    id: 'proj-lanchonete',
    name: 'Burger House — Cardápio Online & Reels Gastronômicos',
    category: 'sites',
    categoryLabel: 'Lanchonetes & Hamburguerias',
    coverImage: '/src/assets/images/lanchonete_burger_showcase_1793899003549.jpg',
    gallery: [
      '/src/assets/images/lanchonete_burger_showcase_1793899003549.jpg'
    ],
    summary: 'Cardápio de lanches e combos com pedido direto via WhatsApp, acompanhado de edição de vídeo em alta definição para tráfego local.',
    serviceType: 'Cardápio Web & Produção de Vídeos',
    objective: 'Aumentar o volume diário de pedidos de delivery e balcão sem pagar comissões para aplicativos de entrega.',
    solutions: [
      'Cardápio interativo com adicionais de hambúrguer, molhos e bebidas',
      'Vídeos gastronômicos em slow-motion para publicações de pico de fome',
      'Cálculo automático da taxa de entrega e envio estruturado no WhatsApp',
      'Design escuro com cores quentes de alto contraste'
    ],
    resultsOrDelivery: 'Solução estratégica para lanchonetes e hamburguerias artesanais de alto fluxo.',
    clientSegment: 'Lanchonetes & Hamburguerias',
    isDemonstration: true,
    featured: true
  },
  {
    id: 'proj-pastelaria',
    name: 'Pastelaria Crocante — Cardápio QR Code & Vídeos de Redes',
    category: 'redes',
    categoryLabel: 'Pastelarias & Gastronomia',
    coverImage: '/src/assets/images/pastelaria_gastronomia_showcase_1793899004385.jpg',
    gallery: [
      '/src/assets/images/pastelaria_gastronomia_showcase_1793899004385.jpg'
    ],
    summary: 'Cardápio digital para mesas, vídeos curtos mostrando a massa crocante e os recheios generosos para atrair clientes locais.',
    serviceType: 'Cardápio Digital & Conteúdo em Vídeo',
    objective: 'Agilizar o atendimento no salão e criar apelo visual no Instagram local para atração de novos clientes.',
    solutions: [
      'Cardápio adaptado para celulares com fotos dos pastéis doces e salgados',
      'QR Codes estilizados para colagem em mesas e balcões',
      'Vídeos curtos mostrando o momento do corte e o queijo derretendo',
      'Botão para chamar garçom ou pedir viagem'
    ],
    resultsOrDelivery: 'Estrutura desenvolvida para pastelarias, petiscarias e restaurantes de culinária regional.',
    clientSegment: 'Pastelarias & Gastronomia Local',
    isDemonstration: true,
    featured: true
  }
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'CONVERSA',
    description: 'Entendemos seu negócio, seus objetivos e suas necessidades através de uma escuta detalhada e estratégica.',
    details: 'Alinhamento inicial, análise de público-alvo, levantamento de referências e definição de prazos.'
  },
  {
    step: '02',
    title: 'PLANEJAMENTO',
    description: 'Definimos a estratégia, identidade visual e estrutura do projeto antes de qualquer linha de código ou produção.',
    details: 'Wireframes, roteiros de vídeo, mapas de conteúdo e planejamento técnico de execução.'
  },
  {
    step: '03',
    title: 'CRIAÇÃO',
    description: 'Desenvolvemos seu site, vídeos, conteúdos ou materiais digitais com alto rigor estético e tecnológico.',
    details: 'Design de interfaces, programação rápida, gravação, edição, pós-produção e revisões pontuais.'
  },
  {
    step: '04',
    title: 'ENTREGA',
    description: 'Apresentamos o projeto finalizado e orientamos os próximos passos para o crescimento contínuo da sua marca.',
    details: 'Publicação oficial em servidores, entrega de arquivos editáveis e orientações de uso para sua equipe.'
  }
];

export const DIFFERENTIALS = [
  {
    title: 'Design Moderno e Profissional',
    description: 'Criamos interfaces e materiais gráficos com estética contemporânea que colocam sua empresa em outro patamar de percepção.',
    icon: 'Sparkles'
  },
  {
    title: 'Soluções Personalizadas',
    description: 'Não utilizamos modelos prontos engessados. Cada projeto é concebido respeitando os objetivos únicos do seu negócio.',
    icon: 'Sliders'
  },
  {
    title: 'Criatividade e Inovação',
    description: 'Conectamos narrativas envolventes com linguagem visual que se destaca na linha do tempo saturada da internet.',
    icon: 'Lightbulb'
  },
  {
    title: 'Tecnologia e Inteligência Artificial',
    description: 'Utilizamos tecnologias de ponta e ferramentas avançadas de IA para acelerar prazos e entregar resultados superiores.',
    icon: 'Cpu'
  },
  {
    title: 'Atendimento Próximo',
    description: 'Você fala diretamente com quem planeja e executa seu projeto, com transparência total e retorno rápido.',
    icon: 'MessageCircle'
  },
  {
    title: 'Projetos Pensados para Cada Negócio',
    description: 'Estruturamos estratégias direcionadas para seu segmento específico, sejam clínicas, imobiliárias, serviços ou comércio.',
    icon: 'Target'
  }
];
