import { ServiceItem, ProjectItem, ClientSegmentItem } from '../types';
import fourCredVideoImage from '../assets/images/mockup-fourcred-video.jpeg';
import fourCredWebsiteImage from '../assets/images/mockup-fourcred.jpeg';
import imobiliariaImage from '../assets/images/imobiliaria_showcase_1793899004049.jpg';
import lanchoneteImage from '../assets/images/lanchonete_burger_showcase_1793899003549.jpg';
import pastelariaImage from '../assets/images/pastelaria_gastronomia_showcase_1793899004385.jpg';
import sorveteriaImage from '../assets/images/sorveteria_acai_showcase_1793899002894.jpg';

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
    id: 'adegas-conveniencia',
    name: 'Adegas & Conveniência',
    icon: 'Flame',
    description: 'Adegas, distribuidoras de bebidas e lojas de conveniência que desejam acelerar pedidos de vinhos, destilados e combos por delivery.',
    recommendedSolutions: [
      'Plataforma web de conveniência e vinhos com catálogo e combos',
      'Atendimento e pedido rápido direto via WhatsApp',
      'Cardápio digital de destilados, cervejas e aperitivos',
      'Campanhas de tráfego local e vídeos de promoções'
    ],
    idealFor: 'Adega Caieiras, adegas de bairro, empórios de vinhos e distribuidoras.',
    whatsappPrompt: 'Olá! Tenho uma adega / loja de conveniência e quero criar uma plataforma e cardápio digital para minhas vendas.'
  },
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
    id: 'proj-adega',
    name: 'Adega Caieiras — Conveniência & Delivery de Vinhos e Destilados',
    category: 'sites',
    categoryLabel: 'Adegas & Conveniência',
    coverImage: '/assets/aistudio/mockup_adega_916e6ccf.png',
    gallery: [
      '/assets/aistudio/mockup_adega_916e6ccf.png'
    ],
    summary: 'Plataforma web e landing page desenvolvida para a Adega Caieiras, apresentando vinhos, destilados, combos promocionais e pedidos via WhatsApp.',
    serviceType: 'Criação de Site & Cardápio Digital',
    objective: 'Desenvolver a presença digital e delivery da Adega Caieiras, destacando marcas premium de vinhos e destilados com conversão direta pelo WhatsApp.',
    solutions: [
      'Design responsivo sofisticado em tons bordo e marsala com alta percepção de valor',
      'Integração com botão de atendimento e pedido rápido via WhatsApp',
      'Exibição de combos, categorias de destilados e rótulos de vinhos',
      'Arquitetura ultrarrápida otimizada para celulares, tablets e computadores'
    ],
    resultsOrDelivery: 'Projeto no ar e em operação no endereço oficial https://landing-adega.vercel.app/',
    clientSegment: 'Adegas & Conveniência',
    isDemonstration: false,
    isRealClient: true,
    featured: true,
    externalUrl: 'https://landing-adega.vercel.app/'
  },
  {
    id: 'proj-fourcred-web',
    name: 'FourCred — Plataforma de Soluções Financeiras & Crédito',
    category: 'sites',
    categoryLabel: 'Correspondente Bancário',
    coverImage: fourCredWebsiteImage,
    gallery: [
      fourCredWebsiteImage,
      fourCredVideoImage
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
    coverImage: fourCredVideoImage,
    gallery: [
      fourCredVideoImage,
      fourCredWebsiteImage
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
    name: 'Adriana Monteiro — Corretora de Imóveis & Consultoria Imobiliária',
    category: 'sites',
    categoryLabel: 'Imobiliárias & Corretores',
    coverImage: '/assets/aistudio/file_00000000b754820e925972b0b402458d_858f4278.png',
    gallery: [
      '/assets/aistudio/file_00000000b754820e925972b0b402458d_858f4278.png'
    ],
    summary: 'Plataforma web completa desenvolvida para a corretora Adriana Monteiro (CRECI-SP), com filtro de imóveis por bairro, estatísticas de autoridade e atendimento rápido via WhatsApp.',
    serviceType: 'Criação de Site & Estrutura Comercial',
    objective: 'Desenvolver a autoridade digital e captação de clientes para a corretora Adriana Monteiro, facilitando a busca de imóveis para compra, aluguel ou investimento em SP.',
    solutions: [
      'Design responsivo de alto padrão com busca por tipo de imóvel, bairro e modalidade',
      'Atendimento e captação direta no WhatsApp com resposta rápida',
      'Estatísticas de autoridade imobiliária e depoimentos com avaliação média dos clientes',
      'Arquitetura ultrarrápida adaptada para computadores, tablets e dispositivos móveis'
    ],
    resultsOrDelivery: 'Projeto no ar e em operação no endereço oficial https://landing-corretor-phi.vercel.app/',
    clientSegment: 'Imobiliárias & Corretores',
    isDemonstration: false,
    isRealClient: true,
    featured: true,
    externalUrl: 'https://landing-corretor-phi.vercel.app/'
  },
  {
    id: 'proj-sorveteria',
    name: 'AçaíVeg — Plataforma de Açaí Artesanal & Muito Sabor',
    category: 'sites',
    categoryLabel: 'Sorveterias & Açaí',
    coverImage: '/assets/aistudio/mockup_acai_0c37f991.png',
    gallery: [
      '/assets/aistudio/mockup_acai_0c37f991.png'
    ],
    summary: 'Landing page completa e moderna desenvolvida para o AçaíVeg em Caieiras, com cardápio digital, pedido rápido pelo WhatsApp e responsividade total.',
    serviceType: 'Criação de Site & Cardápio Digital',
    objective: 'Desenvolver a presença digital do AçaíVeg com experiência fluida, destaque para copos e taças recheadas e conversão direta via WhatsApp.',
    solutions: [
      'Design responsivo gourmet com alta taxa de conversão e apetite visual',
      'Integração com pop-up de pedido rápido direto no WhatsApp',
      'Cardápio interativo organizado por categorias e acompanhamentos',
      'Arquitetura ultrarrápida otimizada para smartphones, tablets e computadores'
    ],
    resultsOrDelivery: 'Projeto no ar e em operação no endereço oficial https://landing-acaiveg.vercel.app/',
    clientSegment: 'Sorveterias & Açaí',
    isDemonstration: false,
    isRealClient: true,
    featured: true,
    externalUrl: 'https://landing-acaiveg.vercel.app/'
  },
  {
    id: 'proj-lanchonete',
    name: 'Brasa Burger — Hamburgueria Artesanal & Pedidos Online',
    category: 'sites',
    categoryLabel: 'Lanchonetes & Hamburguerias',
    coverImage: '/assets/aistudio/image_1e8b7114.png',
    gallery: [
      '/assets/aistudio/image_1e8b7114.png'
    ],
    summary: 'Landing page gastronômica desenvolvida para a Brasa Burger, com destaque visual em alta definição, botão direto de pedido e integração imediata via WhatsApp.',
    serviceType: 'Criação de Site & Cardápio Digital',
    objective: 'Criar uma presença digital irresistível para a Brasa Burger, convertendo visitantes em pedidos rápidos pelo WhatsApp em celulares, tablets e computadores.',
    solutions: [
      'Design responsivo escuro com foco em fotografia gastronômica de alto apetite visual',
      'Botão de ação imediata "PEDIR" e widget de atendimento rápido via WhatsApp',
      'Seções organizadas para destaques do cardápio, história da casa e contato',
      'Arquitetura ultrarrápida otimizada para pedidos pelo celular'
    ],
    resultsOrDelivery: 'Projeto no ar e em operação no endereço oficial https://landing-hamburgueria-ten.vercel.app/',
    clientSegment: 'Lanchonetes & Hamburguerias',
    isDemonstration: false,
    isRealClient: true,
    featured: true,
    externalUrl: 'https://landing-hamburgueria-ten.vercel.app/'
  },
  {
    id: 'proj-pastelaria',
    name: 'Pastelaria Crocante — Cardápio QR Code & Vídeos de Redes',
    category: 'redes',
    categoryLabel: 'Pastelarias & Gastronomia',
    coverImage: pastelariaImage,
    gallery: [
      pastelariaImage
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
