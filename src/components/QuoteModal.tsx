import React, { useState } from 'react';
import { X, Send, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { SERVICES, CLIENT_SEGMENTS, generateWhatsAppUrl } from '../data/agencyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToFullForm: (service?: string, segment?: string) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose,
  onGoToFullForm 
}) => {
  if (!isOpen) return null;

  const [selectedService, setSelectedService] = useState('Criação de Sites');
  const [selectedSegment, setSelectedSegment] = useState('');
  const [clientName, setClientName] = useState('');

  const handleLaunchWhatsApp = () => {
    const text = `Olá! Meu nome é ${clientName.trim() || 'um potencial cliente'}. Gostaria de solicitar um orçamento para ${selectedService}${selectedSegment ? ` no segmento de ${selectedSegment}` : ''} com a AL Studio Tech.`;
    window.open(generateWhatsAppUrl(text), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#101F38] border border-[#59A5FF]/30 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#59A5FF]/15">
          <div>
            <span className="text-xs font-bold text-[#FF7628] uppercase tracking-wider block mb-1">
              Atendimento Comercial
            </span>
            <h3 className="text-2xl font-bold text-white">
              Solicitar Orçamento
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#AAB4C4] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-white mb-1.5">
              Qual é o seu nome?
            </label>
            <input
              type="text"
              placeholder="Digite seu nome..."
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#091426] border border-[#59A5FF]/20 focus:border-[#2878FF] text-sm text-white placeholder-[#AAB4C4]/50 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white mb-1.5">
              Qual serviço você precisa?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.map((s) => {
                const isSelected = selectedService === s.title;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.title)}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all border flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#2878FF] text-white border-transparent'
                        : 'bg-[#091426] text-[#AAB4C4] border-[#59A5FF]/15 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{s.title}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white mb-1.5">
              Segmento da sua empresa (opcional)
            </label>
            <select
              value={selectedSegment}
              onChange={(e) => setSelectedSegment(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#091426] border border-[#59A5FF]/20 focus:border-[#2878FF] text-sm text-white focus:outline-none"
            >
              <option value="">Selecione seu segmento...</option>
              {CLIENT_SEGMENTS.map((seg) => (
                <option key={seg.id} value={seg.name} className="bg-[#091426] text-white">
                  {seg.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-[#59A5FF]/15 space-y-3">
          <button
            onClick={handleLaunchWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF7628] to-[#E55F10] hover:from-[#E55F10] hover:to-[#FF7628] shadow-lg shadow-[#FF7628]/25 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Diretor de Projetos no WhatsApp</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onGoToFullForm(selectedService, selectedSegment);
            }}
            className="w-full py-2 text-xs font-semibold text-[#59A5FF] hover:text-white transition-colors"
          >
            Ou prefiro preencher o briefing detalhado por formulário →
          </button>
        </div>

      </div>
    </div>
  );
};
