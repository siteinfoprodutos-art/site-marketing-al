import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, ArrowUpRight, MessageCircle, Layers } from 'lucide-react';
import { ProjectItem } from '../types';
import { generateWhatsAppUrl } from '../data/agencyData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose,
  onRequestSimilar
}) => {
  if (!project) return null;

  const [activeImage, setActiveImage] = useState<string>(project.coverImage);

  const whatsappMessage = `Olá! Vi o projeto demonstrativo "${project.name}" no site da AL Studio Tech e gostaria de solicitar um projeto com estrutura semelhante para meu negócio.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-[#101F38] border border-[#59A5FF]/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#59A5FF]/15 bg-[#091426]/80">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#59A5FF]">
            <Layers className="w-4 h-4 text-[#FF7628]" />
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true" className="text-white/30">/</span>
            <span className="text-[#AAB4C4]">{project.clientSegment}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#AAB4C4] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Main Visual Display */}
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden bg-[#091426] border border-[#59A5FF]/20 h-72 sm:h-96">
              <img
                src={activeImage}
                alt={project.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {project.isRealClient ? (
                <div className="absolute top-3 left-3 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 px-3 py-1 rounded-md text-xs font-bold text-emerald-400 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Case de Sucesso — Cliente Real AL Studio Tech</span>
                </div>
              ) : (
                <div className="absolute top-3 left-3 bg-[#091426]/90 backdrop-blur-md border border-[#59A5FF]/30 px-3 py-1 rounded-md text-xs font-semibold text-[#59A5FF] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF7628]" />
                  <span>Projeto Conceitual Demonstrativo</span>
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {project.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative rounded-lg overflow-hidden w-20 h-14 border-2 transition-all shrink-0 cursor-pointer ${
                      activeImage === imgUrl 
                        ? 'border-[#2878FF] scale-105' 
                        : 'border-[#59A5FF]/20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="miniatura" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-sm sm:text-base text-[#AAB4C4] leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Objective & Methodology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#59A5FF]/15">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#59A5FF]">
                  Objetivo Estratégico
                </div>
                <p className="text-xs sm:text-sm text-[#F2F5FA] leading-relaxed">
                  {project.objective}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF7628]">
                  Resultado & Entrega
                </div>
                <p className="text-xs sm:text-sm text-[#F2F5FA] leading-relaxed">
                  {project.resultsOrDelivery}
                </p>
              </div>
            </div>

            {/* Solutions Developed */}
            <div className="space-y-3 pt-4 border-t border-[#59A5FF]/15">
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                Soluções e Recursos Implementados
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.solutions.map((solution, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#AAB4C4] bg-[#091426]/60 p-3 rounded-lg border border-[#59A5FF]/10">
                    <CheckCircle className="w-4 h-4 text-[#FF7628] shrink-0 mt-0.5" />
                    <span>{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Client vs Demonstration Transparency Notice */}
            {project.isRealClient ? (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed">
                <strong className="text-white block mb-0.5">Cliente Real AL Studio Tech:</strong>
                Este é um case de sucesso real desenvolvido para a <strong>FourCred</strong>. Você pode acessar o site oficial no ar em <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white">{project.externalUrl}</a> e conferir as produções de vídeos no Instagram <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold text-white">@_fourcred</a>.
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[#091426] border border-[#59A5FF]/20 text-xs text-[#AAB4C4] leading-relaxed">
                <strong className="text-white block mb-0.5">Nota de Transparência da Agência:</strong>
                Este projeto foi elaborado pela equipe da AL Studio Tech em formato de estudo conceitual para demonstrar metodologia criativa, direção de arte e capacidade técnica. Ao contratar a agência, seu projeto será desenvolvido com dados, identidade e estratégia 100% exclusivos para a sua marca.
              </div>
            )}

          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#59A5FF]/15 flex flex-col sm:flex-row items-center gap-3">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2878FF] to-[#1E60D0] hover:from-[#1E60D0] hover:to-[#59A5FF] shadow-lg shadow-[#2878FF]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Visitar Site da FourCred</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {project.instagramUrl && (
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF7628] to-[#E55F10] hover:from-[#E55F10] hover:to-[#FF7628] shadow-lg shadow-[#FF7628]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Ver Instagram @_fourcred</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl text-sm font-semibold text-[#F2F5FA] bg-[#091426] hover:bg-[#152747] border border-[#59A5FF]/30 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Solicitar projeto semelhante</span>
            </button>

            <a
              href={generateWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
