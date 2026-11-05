import React from 'react';
import { X, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { ClientSegmentItem } from '../types';
import { generateWhatsAppUrl } from '../data/agencyData';

interface SegmentModalProps {
  segment: ClientSegmentItem | null;
  onClose: () => void;
  onApplySegmentToForm: (segmentName: string) => void;
}

export const SegmentModal: React.FC<SegmentModalProps> = ({ 
  segment, 
  onClose,
  onApplySegmentToForm 
}) => {
  if (!segment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#101F38] border border-[#59A5FF]/30 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#59A5FF]/15">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#59A5FF] uppercase block mb-1">
              Soluções Especializadas
            </span>
            <h3 className="text-2xl font-bold text-white">
              {segment.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#AAB4C4] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm text-[#AAB4C4]">
          <p className="text-base text-[#F2F5FA] leading-relaxed">
            {segment.description}
          </p>

          <div className="p-3.5 rounded-xl bg-[#091426] border border-[#59A5FF]/15 text-xs text-[#AAB4C4]">
            <strong className="text-white block mb-0.5">Público Ideal:</strong>
            {segment.idealFor}
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Estratégias e Soluções Recomendadas para seu Segmento:
            </span>
            <div className="space-y-2">
              {segment.recommendedSolutions.map((sol, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#091426]/70 border border-[#59A5FF]/10 text-xs sm:text-sm text-[#F2F5FA]">
                  <CheckCircle className="w-4 h-4 text-[#FF7628] shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#59A5FF]/15 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onApplySegmentToForm(segment.name);
            }}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2878FF] to-[#1E60D0] hover:from-[#1E60D0] hover:to-[#FF7628] shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Preencher proposta para meu segmento</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={generateWhatsAppUrl(segment.whatsappPrompt)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
