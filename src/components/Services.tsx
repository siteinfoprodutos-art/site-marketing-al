import React from 'react';
import { 
  Monitor, 
  Video, 
  Share2, 
  Palette, 
  Sparkles, 
  Check, 
  ArrowUpRight, 
  MessageCircle 
} from 'lucide-react';
import { SERVICES, generateWhatsAppUrl } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForQuote: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  // Mapping icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Monitor className="w-6 h-6 text-[#2878FF]" />;
      case 'Video':
        return <Video className="w-6 h-6 text-[#FF7628]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#59A5FF]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#FF7628]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#2878FF]" />;
      default:
        return <Monitor className="w-6 h-6 text-[#2878FF]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#091426] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#101F38]/50 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-bold tracking-widest text-[#59A5FF] uppercase">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Soluções digitais para impulsionar sua marca.
          </h2>
          <p className="text-base sm:text-lg text-[#AAB4C4] leading-relaxed">
            Do primeiro conceito à presença digital completa, desenvolvemos soluções para destacar seu negócio no mercado atual.
          </p>
        </div>

        {/* 5 Premium Cards in Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            // First 2 cards take 1.5 col equivalent or prominent styling
            const isMarquee = idx === 0 || idx === 1;

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#101F38]/70 border border-[#59A5FF]/15 hover:border-[#2878FF]/45 transition-all duration-300 group hover:shadow-2xl hover:shadow-[#2878FF]/10 ${
                  isMarquee && idx === 0 ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Card top bar: Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#AAB4C4] tracking-widest">
                      SERVIÇO {service.number}
                    </span>
                    <div className="p-3 rounded-xl bg-[#091426] border border-[#59A5FF]/20 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(service.icon)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#59A5FF] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-[#AAB4C4] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 pt-4 border-t border-[#59A5FF]/10 mb-8">
                    <div className="text-xs font-semibold text-[#F2F5FA] uppercase tracking-wider mb-2">
                      Destaques & Entregas:
                    </div>
                    {service.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#AAB4C4]">
                        <Check className="w-4 h-4 text-[#FF7628] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="pt-4 border-t border-[#59A5FF]/10 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => onSelectServiceForQuote(service)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#2878FF] hover:bg-[#1E60D0] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Solicitar orçamento</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={generateWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors whitespace-nowrap"
                    title="Conversar direto no WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="sm:hidden lg:inline">WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
