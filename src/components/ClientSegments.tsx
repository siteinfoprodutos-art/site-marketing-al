import React from 'react';
import { 
  Stethoscope, 
  Building2, 
  UtensilsCrossed, 
  Sparkle, 
  Scale, 
  Compass, 
  GraduationCap, 
  Flame, 
  ShoppingBag, 
  UserCheck, 
  Cpu, 
  Layers,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { CLIENT_SEGMENTS } from '../data/agencyData';
import { ClientSegmentItem } from '../types';

interface ClientSegmentsProps {
  onSelectSegment: (segment: ClientSegmentItem) => void;
}

export const ClientSegments: React.FC<ClientSegmentsProps> = ({ onSelectSegment }) => {
  // Map icons
  const getSegmentIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#59A5FF]' };
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope {...props} className="w-6 h-6 text-[#2878FF]" />;
      case 'Building2': return <Building2 {...props} className="w-6 h-6 text-[#59A5FF]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed {...props} className="w-6 h-6 text-[#FF7628]" />;
      case 'Sparkle': return <Sparkle {...props} className="w-6 h-6 text-[#FF7628]" />;
      case 'Scale': return <Scale {...props} className="w-6 h-6 text-[#2878FF]" />;
      case 'Compass': return <Compass {...props} className="w-6 h-6 text-[#59A5FF]" />;
      case 'GraduationCap': return <GraduationCap {...props} className="w-6 h-6 text-[#2878FF]" />;
      case 'Flame': return <Flame {...props} className="w-6 h-6 text-[#FF7628]" />;
      case 'ShoppingBag': return <ShoppingBag {...props} className="w-6 h-6 text-[#59A5FF]" />;
      case 'UserCheck': return <UserCheck {...props} className="w-6 h-6 text-[#2878FF]" />;
      case 'Cpu': return <Cpu {...props} className="w-6 h-6 text-[#FF7628]" />;
      case 'Layers': return <Layers {...props} className="w-6 h-6 text-[#59A5FF]" />;
      default: return <Layers {...props} />;
    }
  };

  return (
    <section id="segmentos" className="py-24 bg-[#101F38]/30 relative border-t border-[#59A5FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold tracking-widest text-[#59A5FF] uppercase">
            Segmentos Atendidos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Atendemos diferentes segmentos.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59A5FF] to-[#FF7628]">
              Criamos soluções para cada negócio.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#AAB4C4]">
            Cada mercado possui particularidades, objeções e perfis de clientes específicos. Desenvolvemos estratégias sob medida para o seu setor.
          </p>
        </div>

        {/* 12 Segment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CLIENT_SEGMENTS.map((segment) => (
            <div
              key={segment.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#091426]/90 border border-[#59A5FF]/15 hover:border-[#2878FF]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Icon & Segment Name */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#101F38] border border-[#59A5FF]/20 group-hover:bg-[#2878FF]/10 transition-colors">
                    {getSegmentIcon(segment.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#59A5FF] transition-colors leading-snug">
                    {segment.name}
                  </h3>
                </div>

                <p className="text-xs text-[#AAB4C4] leading-relaxed mb-4">
                  {segment.description}
                </p>

                {/* Example Solutions preview */}
                <div className="space-y-1.5 pt-3 border-t border-[#59A5FF]/10 mb-6">
                  <div className="text-[11px] font-semibold text-[#F2F5FA] uppercase tracking-wider mb-1">
                    Soluções Indicadas:
                  </div>
                  {segment.recommendedSolutions.slice(0, 2).map((sol, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-1.5 text-xs text-[#AAB4C4]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF7628] shrink-0 mt-0.5" />
                      <span className="truncate">{sol}</span>
                    </div>
                  ))}
                  {segment.recommendedSolutions.length > 2 && (
                    <div className="text-[11px] text-[#59A5FF] font-medium pt-1">
                      + mais soluções personalizadas
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectSegment(segment)}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-[#101F38] hover:bg-[#2878FF] border border-[#59A5FF]/20 hover:border-transparent transition-all duration-200 cursor-pointer"
              >
                <span>Conhecer soluções</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
