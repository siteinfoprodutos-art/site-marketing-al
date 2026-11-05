import React from 'react';
import { MessageSquare, Compass, Code2, Rocket } from 'lucide-react';
import { WORK_PROCESS } from '../data/agencyData';

export const Process: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01': return <MessageSquare className="w-5 h-5 text-[#59A5FF]" />;
      case '02': return <Compass className="w-5 h-5 text-[#2878FF]" />;
      case '03': return <Code2 className="w-5 h-5 text-[#FF7628]" />;
      case '04': return <Rocket className="w-5 h-5 text-emerald-400" />;
      default: return <MessageSquare className="w-5 h-5 text-[#59A5FF]" />;
    }
  };

  return (
    <section className="py-24 bg-[#091426] relative overflow-hidden border-t border-[#59A5FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="text-xs font-bold tracking-widest text-[#FF7628] uppercase">
            Nosso Método de Trabalho
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Do planejamento à entrega, tudo começa com uma boa ideia.
          </h2>
          <p className="text-base sm:text-lg text-[#AAB4C4]">
            Um fluxo transparente e estruturado para garantir que seu projeto saia do papel com máxima fidelidade e pontualidade.
          </p>
        </div>

        {/* 4 Steps with Connecting Tech Line */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2878FF]/30 via-[#59A5FF]/50 to-[#FF7628]/40 -translate-y-12 z-0" 
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {WORK_PROCESS.map((item) => (
              <div 
                key={item.step} 
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#101F38]/80 border border-[#59A5FF]/15 hover:border-[#2878FF]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Step node & badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xl font-extrabold text-[#59A5FF] bg-[#091426] px-3 py-1 rounded-lg border border-[#59A5FF]/20">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-full bg-[#091426] border border-[#59A5FF]/20 group-hover:scale-110 transition-transform">
                      {getStepIcon(item.step)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#59A5FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#AAB4C4] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#59A5FF]/10 text-xs text-[#AAB4C4] font-medium">
                  {item.details}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
