import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { 
  MessageCircle, 
  MapPin, 
  Mail, 
  Instagram, 
  ExternalLink, 
  ShieldCheck, 
  SlidersHorizontal,
  X
} from 'lucide-react';
import { AGENCY_CONFIG, SERVICES, CLIENT_SEGMENTS, generateWhatsAppUrl } from '../data/agencyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <footer className="bg-[#050C17] text-[#AAB4C4] border-t border-[#59A5FF]/15 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Agency Presentation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs sm:text-sm text-[#AAB4C4] leading-relaxed max-w-sm">
              AL Studio Tech — Criatividade, tecnologia e soluções digitais para transformar negócios.
            </p>
            <p className="text-xs text-[#AAB4C4]/80">
              Desenvolvemos experiências digitais de alto impacto que conectam empresas aos seus clientes com autoridade e alta taxa de conversão.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={generateWhatsAppUrl('Olá! Conheci a AL Studio Tech pelo site e gostaria de tirar dúvidas.')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#101F38] hover:bg-[#2878FF] text-white transition-colors"
                aria-label="WhatsApp AL Studio Tech"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#101F38] hover:bg-[#2878FF] text-white transition-colors"
                aria-label="Instagram AL Studio Tech"
              >
                <Instagram className="w-4 h-4 text-[#FF7628]" />
              </a>

              <button
                onClick={onOpenAdmin}
                className="p-2.5 rounded-lg bg-[#101F38] hover:bg-[#59A5FF]/20 text-[#59A5FF] border border-[#59A5FF]/20 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Acessar Gestão de Leads e CMS"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Painel de Gestão</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('hero')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('sobre')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre a Agência
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('servicos')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('portfolio')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('segmentos')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Segmentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contato')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contato & Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Serviços Oferecidos
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('servicos')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento Direto
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF7628] shrink-0 mt-0.5" />
                <span>{AGENCY_CONFIG.location}</span>
              </div>

              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a 
                  href={generateWhatsAppUrl('Olá! Gostaria de falar com a AL Studio Tech.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  {AGENCY_CONFIG.whatsappFormatted}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#59A5FF] shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {AGENCY_CONFIG.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#AAB4C4]/70">
                {AGENCY_CONFIG.workingHours}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & LGPD */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#AAB4C4]/70 gap-4">
          <div>
            © {new Date().getFullYear()} {AGENCY_CONFIG.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-white transition-colors underline flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Política de Privacidade & LGPD</span>
            </button>
            <span>{AGENCY_CONFIG.location}</span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-xl w-full bg-[#101F38] border border-[#59A5FF]/30 rounded-2xl p-6 sm:p-8 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#59A5FF]/15">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Política de Privacidade e Proteção de Dados</span>
              </h3>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="p-1 rounded text-[#AAB4C4] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#AAB4C4] leading-relaxed">
              <p>
                A <strong>AL Studio Tech</strong> preza pela segurança e confidencialidade dos dados de seus clientes e parceiros em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
              </p>
              <h4 className="font-bold text-white">1. Coleta de Informações</h4>
              <p>
                Os dados fornecidos no formulário de contato (nome, e-mail, telefone/WhatsApp e dados do negócio) são utilizados exclusivamente para responder às solicitações de orçamento e apresentação de propostas comerciais.
              </p>
              <h4 className="font-bold text-white">2. Não Compartilhamento</h4>
              <p>
                A AL Studio Tech não comercializa, aluga ou compartilha suas informações pessoais com terceiros não autorizados.
              </p>
              <h4 className="font-bold text-white">3. Seus Direitos</h4>
              <p>
                Você poderá a qualquer momento solicitar a alteração ou exclusão dos seus dados de nossa base de contatos comerciais entrando em contato pelo e-mail <strong>{AGENCY_CONFIG.email}</strong>.
              </p>
            </div>

            <div className="pt-3 border-t border-[#59A5FF]/15 text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#2878FF] rounded-lg hover:bg-[#1E60D0]"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
