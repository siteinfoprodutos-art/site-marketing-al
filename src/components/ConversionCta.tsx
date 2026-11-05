import React from 'react';
import { MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { AGENCY_CONFIG, generateWhatsAppUrl } from '../data/agencyData';

interface ConversionCtaProps {
  onScrollToContact: () => void;
}

export const ConversionCta: React.FC<ConversionCtaProps> = ({ onScrollToContact }) => {
  const defaultWhatsAppMsg = 'Olá! Conheci a AL Studio Tech pelo site e gostaria de conversar sobre o meu projeto.';

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#091426] via-[#101F38] to-[#091426] border-t border-[#59A5FF]/15">
      {/* Background ambient decorative shapes */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#2878FF]/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF7628]/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Visual Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF7628] bg-[#091426] border border-[#FF7628]/30 px-4 py-1.5 rounded-full mb-6">
          <span>Inicie seu projeto com quem entende de tecnologia</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
          Seu próximo projeto pode{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878FF] via-[#59A5FF] to-[#FF7628]">
            começar agora.
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#AAB4C4] max-w-2xl mx-auto mb-10 leading-relaxed">
          Conte para nós sua ideia. Vamos transformar seu negócio em uma experiência digital profissional.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={generateWhatsAppUrl(defaultWhatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#FF7628] to-[#E55F10] hover:from-[#E55F10] hover:to-[#FF7628] shadow-lg shadow-[#FF7628]/25 hover:shadow-xl hover:shadow-[#FF7628]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar com a AL Studio Tech</span>
          </a>

          <button
            onClick={onScrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-[#091426] hover:bg-[#152747] border border-[#59A5FF]/30 hover:border-[#59A5FF]/60 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-5 h-5 text-[#59A5FF]" />
            <span>Preencher briefing detalhado</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="mt-8 text-xs text-[#AAB4C4]">
          Atendimento no WhatsApp: <span className="font-semibold text-white">{AGENCY_CONFIG.whatsappFormatted}</span> · Resposta rápida em horário comercial.
        </div>

      </div>
    </section>
  );
};
