import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, Sparkles } from 'lucide-react';
import { AGENCY_CONFIG, generateWhatsAppUrl } from '../data/agencyData';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Conversa Geral',
      msg: 'Olá! Conheci a AL Studio Tech pelo site e gostaria de solicitar informações sobre os serviços.'
    },
    {
      title: 'Criação de Site ou Landing Page',
      msg: 'Olá! Tenho interesse na criação de um site profissional para minha empresa. Gostaria de conhecer as opções.'
    },
    {
      title: 'Produção de Vídeos e Reels',
      msg: 'Olá! Gostaria de um orçamento para produção de vídeos institucionais e criativos para minha marca.'
    },
    {
      title: 'Gestão de Redes Sociais',
      msg: 'Olá! Gostaria de elevar o padrão visual das redes sociais da minha empresa com a AL Studio Tech.'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick selection popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#101F38] border border-[#59A5FF]/30 p-4 shadow-2xl animate-in slide-in-from-bottom-3 duration-200 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-[#59A5FF]/15 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Atendimento Direto
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#AAB4C4] hover:text-white p-1 rounded transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#AAB4C4] mb-3">
            Escolha como prefere iniciar a conversa no WhatsApp da <strong>AL Studio Tech</strong>:
          </p>

          <div className="space-y-2">
            {quickOptions.map((opt, idx) => (
              <a
                key={idx}
                href={generateWhatsAppUrl(opt.msg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-2.5 rounded-xl bg-[#091426] hover:bg-[#2878FF]/15 border border-[#59A5FF]/10 hover:border-[#2878FF]/40 transition-colors text-xs text-white"
              >
                <span className="font-medium">{opt.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#59A5FF] group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-[#59A5FF]/10 text-[11px] text-[#AAB4C4] flex items-center justify-between">
            <span>Caieiras/SP e Todo o Brasil</span>
            <span className="font-mono text-[#59A5FF]">{AGENCY_CONFIG.whatsappFormatted}</span>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/35 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Conversar no WhatsApp da AL Studio Tech"
      >
        <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Falar no WhatsApp
        </span>
      </button>

    </div>
  );
};
