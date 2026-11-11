import React, { useState } from 'react';
import { 
  Eye, 
  ArrowUpRight, 
  MessageCircle, 
  Sparkles, 
  Info,
  FolderOpen
} from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';
import { generateWhatsAppUrl } from '../data/agencyData';

interface PortfolioProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onRequestSimilarProject: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ 
  projects, 
  onSelectProject, 
  onRequestSimilarProject 
}) => {
  const [activeNiche, setActiveNiche] = useState<string>('todos');

  const nicheTabs = [
    { id: 'todos', label: 'Todos os Nichos' },
    { id: 'Adegas & Conveniência', label: 'Adegas & Conveniência (Adega Caieiras)' },
    { id: 'Correspondente Bancário & Crédito', label: 'Correspondente Bancário (FourCred)' },
    { id: 'Sorveterias & Açaí', label: 'Sorveterias & Açaí (AçaíVeg)' },
    { id: 'Imobiliárias & Corretores', label: 'Imobiliárias & Corretores (Adriana Monteiro)' },
    { id: 'Lanchonetes & Hamburguerias', label: 'Lanchonetes & Hamburguerias' },
    { id: 'Pastelarias & Gastronomia Local', label: 'Pastelarias & Gastronomia' },
  ];

  const filteredProjects = activeNiche === 'todos' 
    ? projects 
    : projects.filter(p => p.clientSegment === activeNiche || p.categoryLabel === activeNiche);

  return (
    <section id="portfolio" className="py-24 bg-[#091426] relative border-t border-[#59A5FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold tracking-widest text-[#FF7628] uppercase">
              Portfólio Profissional
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Projetos que transformam ideias em realidade.
            </h2>
            <p className="text-base sm:text-lg text-[#AAB4C4]">
              Conheça alguns dos projetos e soluções desenvolvidos pela AL Studio Tech.
            </p>
          </div>

          {/* Transparent Demonstration Disclaimer Card */}
          <div className="bg-[#101F38]/80 border border-[#59A5FF]/20 p-4 rounded-xl max-w-md text-xs text-[#AAB4C4] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#59A5FF] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">
                Projetos Conceituais Demonstrativos
              </span>
              Estes cases ilustram a direção de arte, stack tecnológica e padrão de acabamento oferecidos pela agência aos nossos clientes.
            </div>
          </div>
        </div>

        {/* Filter Tabs by Commercial Niche / Segment */}
        <div className="space-y-2 mb-10">
          <div className="text-xs font-semibold text-[#59A5FF] uppercase tracking-wider">
            Filtrar por Nicho Comercial:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {nicheTabs.map((tab) => {
              const isActive = activeNiche === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveNiche(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2878FF] to-[#1E60D0] text-white shadow-lg shadow-[#2878FF]/25 border border-[#59A5FF]/30'
                      : 'bg-[#101F38]/80 text-[#AAB4C4] hover:text-white hover:bg-[#101F38] border border-[#59A5FF]/15'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-[#101F38]/30 rounded-2xl border border-dashed border-[#59A5FF]/20">
            <FolderOpen className="w-12 h-12 text-[#59A5FF]/40 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Nenhum projeto encontrado nesta categoria</h3>
            <p className="text-sm text-[#AAB4C4] max-w-sm mx-auto mb-4">
              Nossa equipe está constantemente adicionando novas demonstrações de projetos.
            </p>
            <button
              onClick={() => setActiveNiche('todos')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#2878FF] rounded-lg hover:bg-[#1E60D0]"
            >
              Ver todos os nichos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#101F38]/80 border border-[#59A5FF]/15 hover:border-[#2878FF]/40 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-[#2878FF]/10"
              >
                <div>
                  {/* Cover Image Container */}
                  <div className="relative h-64 overflow-hidden bg-[#091426]">
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101F38] via-transparent to-black/30" />

                    {/* Demonstration or Real Client Tag */}
                    {project.isRealClient ? (
                      <div className="absolute top-3 left-3 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 px-2.5 py-1 rounded text-[11px] font-bold text-emerald-400 flex items-center gap-1.5 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Cliente Real AL Studio Tech</span>
                      </div>
                    ) : (
                      <div className="absolute top-3 left-3 bg-[#091426]/90 backdrop-blur-md border border-[#59A5FF]/20 px-2.5 py-1 rounded text-[11px] font-semibold text-[#59A5FF] flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#FF7628]" />
                        <span>Projeto Demonstrativo</span>
                      </div>
                    )}

                    {/* Quick view hover action button */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#2878FF] hover:bg-[#1E60D0] text-white p-2.5 rounded-lg shadow-lg cursor-pointer"
                      title="Ver detalhes completos"
                      aria-label="Ver detalhes do projeto"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Metadata line without pills */}
                    <div className="flex items-center gap-2 text-xs text-[#59A5FF] font-medium mb-2">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true" className="text-white/30">·</span>
                      <span className="text-[#AAB4C4]">{project.clientSegment}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#59A5FF] transition-colors leading-snug">
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#AAB4C4] leading-relaxed line-clamp-3 mb-4">
                      {project.summary}
                    </p>

                    <div className="text-xs text-[#AAB4C4] pt-3 border-t border-[#59A5FF]/10 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="text-white font-medium">Serviço: </span>
                        {project.serviceType}
                      </div>

                      {project.isRealClient && (
                        <div className="flex items-center gap-2 pt-1 sm:pt-0">
                          {project.externalUrl && (
                            <a
                              href={project.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300 underline flex items-center gap-1"
                              title="Acessar site ao vivo"
                            >
                              <span>Site Ao Vivo</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                          {project.instagramUrl && (
                            <a
                              href={project.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-bold text-[#FF7628] hover:text-[#FF8C45] underline flex items-center gap-1"
                              title="Ver Instagram do cliente"
                            >
                              <span>Instagram</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#091426] hover:bg-[#152747] border border-[#59A5FF]/25 hover:border-[#59A5FF]/50 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#59A5FF]" />
                    <span>Ver projeto</span>
                  </button>

                  <button
                    onClick={() => onRequestSimilarProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2878FF] to-[#1E60D0] hover:from-[#1E60D0] hover:to-[#FF7628] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Solicitar semelhante</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
