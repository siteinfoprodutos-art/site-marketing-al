import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG, generateWhatsAppUrl } from '../data/agencyData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenQuoteModal, 
  onNavigate,
  activeSection 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Segmentos', id: 'segmentos' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#091426]/90 backdrop-blur-md border-b border-[#59A5FF]/15 py-3 shadow-2xl shadow-black/40' 
          : 'bg-[#091426]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single element brand mark */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center text-left hover:opacity-95 transition-opacity cursor-pointer shrink-0"
            aria-label="AL Studio Tech Início"
          >
            <BrandLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links (single line, clean whitespace) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#AAB4C4]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2878FF] to-[#FF7628] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#2878FF] to-[#1E60D0] hover:from-[#1E60D0] hover:to-[#FF7628] transition-all duration-300 shadow-md shadow-[#2878FF]/20 hover:shadow-lg hover:shadow-[#FF7628]/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>Solicitar orçamento</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="p-2 text-xs font-semibold text-white bg-[#2878FF] rounded-md hover:bg-[#1E60D0]"
              aria-label="Orçamento"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#AAB4C4] hover:text-white hover:bg-[#101F38] rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#091426] border-b border-[#59A5FF]/20 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'bg-[#101F38] text-[#59A5FF] font-semibold' 
                    : 'text-[#AAB4C4] hover:text-white hover:bg-[#101F38]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-3 mt-2 border-t border-[#101F38] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#2878FF] to-[#FF7628] shadow-md shadow-[#2878FF]/20 cursor-pointer"
              >
                <span>Solicitar orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={generateWhatsAppUrl('Olá! Gostaria de conversar com a equipe da AL Studio Tech.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-medium text-[#AAB4C4] hover:text-white bg-[#101F38] border border-[#59A5FF]/20"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {AGENCY_CONFIG.whatsappFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
