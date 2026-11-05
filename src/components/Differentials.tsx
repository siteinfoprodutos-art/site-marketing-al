import React from 'react';
import { 
  Sparkles, 
  Sliders, 
  Lightbulb, 
  Cpu, 
  MessageCircle, 
  Target 
} from 'lucide-react';
import { DIFFERENTIALS } from '../data/agencyData';

export const Differentials: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#2878FF]" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-[#FF7628]" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#59A5FF]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#2878FF]" />;
      case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-[#FF7628]" />;
      case 'Target': return <Target className="w-5 h-5 text-[#59A5FF]" />;
      default: return <Sparkles className="w-5 h-5 text-[#2878FF]" />;
    }
  };

  return (
    <section className="py-24 bg-[#101F38]/20 border-t border-[#59A5FF]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold tracking-widest text-[#59A5FF] uppercase">
            Nossos Diferenciais
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Por que escolher a AL Studio Tech?
          </h2>
          <p className="text-base sm:text-lg text-[#AAB4C4]">
            Unimos o dinamismo de um estúdio criativo com o rigor e a tecnologia de uma consultoria digital avançada.
          </p>
        </div>

        {/* 6 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#091426]/90 border border-[#59A5FF]/15 hover:border-[#2878FF]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              <div className="p-3 w-fit rounded-xl bg-[#101F38] border border-[#59A5FF]/20 mb-5 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#59A5FF] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#AAB4C4] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
