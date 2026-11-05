import React from 'react';
import { Lightbulb, Cpu, TrendingUp } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

export const About: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Criatividade',
      icon: Lightbulb,
      color: 'text-[#FF7628]',
      borderColor: 'border-[#FF7628]/30',
      description: 'Direção de arte marcante, roteiros originais e conceitos visuais únicos que posicionam sua marca como líder do seu segmento.'
    },
    {
      number: '02',
      title: 'Tecnologia',
      icon: Cpu,
      color: 'text-[#2878FF]',
      borderColor: 'border-[#2878FF]/30',
      description: 'Código limpo, arquitetura web ultrarrápida, ferramentas modernas de automação e inteligência artificial aplicada à produção.'
    },
    {
      number: '03',
      title: 'Resultados',
      icon: TrendingUp,
      color: 'text-[#59A5FF]',
      borderColor: 'border-[#59A5FF]/30',
      description: 'Estratégias focadas em conversão real, geração de leads qualificados, fortalecimento de autoridade e valorização do seu negócio.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-[#101F38]/40 border-y border-[#59A5FF]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section kicker */}
        <div className="text-xs font-bold tracking-widest text-[#FF7628] uppercase mb-3">
          Sobre a Agência
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Institutional Text & 3 Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Somos a AL Studio Tech.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59A5FF] to-[#2878FF]">
                Criatividade com propósito e tecnologia.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#AAB4C4] leading-relaxed">
              <p>
                Somos um estúdio digital especializado em transformar ideias em projetos digitais profissionais. Unimos design, tecnologia e criatividade para ajudar empresas, profissionais e empreendedores a fortalecer sua presença na internet.
              </p>
              <p className="text-[#F2F5FA] font-medium border-l-2 border-[#FF7628] pl-4 italic">
                "{AGENCY_CONFIG.secondarySlogan}"
              </p>
            </div>

            {/* Three Pillars: 01 Criatividade, 02 Tecnologia, 03 Resultados */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={pillar.number}
                    className="p-5 rounded-xl bg-[#091426]/80 border border-[#59A5FF]/15 hover:border-[#59A5FF]/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#AAB4C4]">
                        {pillar.number}
                      </span>
                      <IconComponent className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#AAB4C4] leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Fidelity Studio Mockup Asset */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Subtle back gradient */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#2878FF]/20 via-transparent to-[#FF7628]/20 rounded-3xl blur-xl" />

              <div className="relative rounded-2xl overflow-hidden border border-[#59A5FF]/20 bg-[#091426] shadow-2xl">
                <img
                  src="/src/assets/images/agency_creativity_tech_1793894695236.jpg"
                  alt="Processo criativo e desenvolvimento tecnológico na AL Studio Tech"
                  className="w-full h-80 sm:h-96 md:h-[440px] object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#091426] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#101F38]/90 backdrop-blur-md border border-[#59A5FF]/20">
                  <div className="flex items-center justify-between text-xs text-[#59A5FF] font-mono mb-1">
                    <span>ESTÚDIO DE CRIAÇÃO</span>
                    <span>CAIEIRAS — SP</span>
                  </div>
                  <p className="text-xs font-medium text-white">
                    Equipamentos de alta performance, direção estética refinada e entrega com rigor técnico.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
