import React from 'react';
import { ArrowRight, Sparkles, Monitor, Video, Share2, Palette, CheckCircle2 } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface HeroProps {
  onStartProject: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onStartProject, 
  onExplorePortfolio 
}) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#091426]">
      {/* Ambient gradient lights */}
      <div 
        className="absolute top-1/4 -left-40 w-96 h-96 bg-[#2878FF]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-32 w-80 h-80 bg-[#FF7628]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column asymmetric hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Studio position statement */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#59A5FF] bg-[#101F38] border border-[#2878FF]/30 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF7628]" />
              <span>Estúdio Digital & Marketing Tecnológico</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] [text-wrap:balance]">
              Sua marca merece uma{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2878FF] via-[#59A5FF] to-[#FF7628]">
                presença digital extraordinária.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#AAB4C4] font-normal leading-relaxed max-w-2xl">
              Desenvolvemos sites, vídeos e estratégias digitais que transformam negócios, fortalecem marcas e conectam empresas aos seus clientes.
            </p>

            {/* Pillars summary: Web, Audiovisual, Social, Design */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-[#F2F5FA]">
              <div className="flex items-center gap-1.5 bg-[#101F38]/60 border border-[#59A5FF]/15 px-3 py-1.5 rounded-lg">
                <Monitor className="w-4 h-4 text-[#2878FF]" />
                <span>Desenvolvimento Web</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#101F38]/60 border border-[#59A5FF]/15 px-3 py-1.5 rounded-lg">
                <Video className="w-4 h-4 text-[#FF7628]" />
                <span>Produção Audiovisual</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#101F38]/60 border border-[#59A5FF]/15 px-3 py-1.5 rounded-lg">
                <Share2 className="w-4 h-4 text-[#59A5FF]" />
                <span>Redes Sociais</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#101F38]/60 border border-[#59A5FF]/15 px-3 py-1.5 rounded-lg">
                <Sparkles className="w-4 h-4 text-[#FF7628]" />
                <span>Soluções com IA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartProject}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#FF7628] to-[#E55F10] hover:from-[#E55F10] hover:to-[#FF7628] shadow-lg shadow-[#FF7628]/25 hover:shadow-xl hover:shadow-[#FF7628]/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
              >
                <span>Vamos criar seu projeto</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExplorePortfolio}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-[#101F38] hover:bg-[#152747] border border-[#59A5FF]/25 hover:border-[#59A5FF]/50 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Explorar portfólio</span>
              </button>
            </div>

            {/* Trust statement */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#AAB4C4]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Atendimento direto em {AGENCY_CONFIG.location} e projetos remotos para todo o Brasil.</span>
            </div>

          </div>

          {/* Right Column: Visual Focal Asset Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glowing border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2878FF] via-[#59A5FF]/50 to-[#FF7628] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000" />
              
              <div className="relative rounded-2xl overflow-hidden border border-[#59A5FF]/30 bg-[#101F38] shadow-2xl shadow-black/80">
                <img
                  src="/src/assets/images/hero_digital_studio_tech_1793894694018.jpg"
                  alt="Estúdio AL Studio Tech em produção digital e tecnológica"
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091426] via-[#091426]/30 to-transparent" />

                {/* Floating bottom studio card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#091426]/90 backdrop-blur-md border border-[#59A5FF]/25">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-[#59A5FF]">AL STUDIO TECH</span>
                    <span className="text-[#FF7628]">Soluções 360°</span>
                  </div>
                  <p className="text-xs text-white/90 font-medium">
                    "Transformamos ideias em experiências digitais."
                  </p>
                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#AAB4C4] pt-2 border-t border-white/10">
                    <span>Performance Web & Audiovisual</span>
                    <span className="font-mono text-[#59A5FF]">100% Personalizado</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quantitative Metrics Strip below Hero */}
        <div className="mt-16 pt-10 border-t border-[#59A5FF]/15 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm text-[#AAB4C4]">
              Projetos exclusivos sem fórmulas prontas
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#59A5FF] font-mono tabular-nums">
              5 Áreas
            </div>
            <div className="text-xs sm:text-sm text-[#AAB4C4]">
              Sites, Vídeos, Redes, Branding e IA
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF7628] font-mono tabular-nums">
              +10 Nichos
            </div>
            <div className="text-xs sm:text-sm text-[#AAB4C4]">
              Soluções especializadas por segmento
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              Agilidade
            </div>
            <div className="text-xs sm:text-sm text-[#AAB4C4]">
              Atendimento direto e suporte humanizado
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
