import React, { useState } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Mail, 
  Instagram, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { AGENCY_CONFIG, CLIENT_SEGMENTS, SERVICES, generateWhatsAppUrl } from '../data/agencyData';
import { LeadSubmission } from '../types';

interface ContactProps {
  onLeadAdded?: (lead: LeadSubmission) => void;
  initialService?: string;
  initialSegment?: string;
}

export const Contact: React.FC<ContactProps> = ({ 
  onLeadAdded,
  initialService = '',
  initialSegment = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    whatsapp: '',
    email: '',
    segment: initialSegment || '',
    service: initialService || '',
    projectDescription: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedLead, setSubmittedLead] = useState<LeadSubmission | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const serviceOptions = [
    'Criação de site institucional',
    'Landing page de alta conversão',
    'Produção de vídeos e Reels',
    'Gestão visual de redes sociais',
    'Design e identidade visual',
    'Soluções com Inteligência Artificial',
    'Projeto completo 360°',
    'Outros serviços digitais'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor, informe seu nome completo.';
    }
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Informe seu número de WhatsApp com DDD.';
    } else if (formData.whatsapp.replace(/\D/g, '').length < 10) {
      errs.whatsapp = 'Digite um número válido com DDD (mínimo 10 dígitos).';
    }
    if (!formData.email.trim()) {
      errs.email = 'Informe seu endereço de e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Por favor, digite um e-mail válido.';
    }
    if (!formData.service) {
      errs.service = 'Selecione o serviço de maior interesse.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const newLead: LeadSubmission = {
      id: 'lead-' + Date.now(),
      name: formData.name.trim(),
      companyName: formData.companyName.trim() || 'Não informada',
      whatsapp: formData.whatsapp.trim(),
      email: formData.email.trim(),
      segment: formData.segment || 'Geral',
      service: formData.service,
      projectDescription: formData.projectDescription.trim() || 'Sem observações adicionais',
      createdAt: new Date().toISOString()
    };

    // Save lead to local storage for agency administration
    try {
      const existingRaw = localStorage.getItem('al_studio_leads');
      const leads: LeadSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
      leads.unshift(newLead);
      localStorage.setItem('al_studio_leads', JSON.stringify(leads));
    } catch {
      // ignore storage errors
    }

    if (onLeadAdded) {
      onLeadAdded(newLead);
    }

    setSubmittedLead(newLead);
    setShowSuccessModal(true);

    // Prepare WhatsApp redirection
    const waText = 
`*Solicitação de Orçamento — AL STUDIO TECH*
👤 *Nome:* ${newLead.name}
🏢 *Empresa:* ${newLead.companyName}
📱 *WhatsApp:* ${newLead.whatsapp}
✉️ *E-mail:* ${newLead.email}
🎯 *Segmento:* ${newLead.segment}
🚀 *Serviço de Interesse:* ${newLead.service}
📝 *Detalhes do Projeto:*
${newLead.projectDescription}`;

    const waUrl = generateWhatsAppUrl(waText);
    
    // Automatically trigger WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[#091426] relative border-t border-[#59A5FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-bold tracking-widest text-[#FF7628] uppercase">
            Canal Direto
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="text-base sm:text-lg text-[#AAB4C4] leading-relaxed">
            Preencha os campos abaixo com as necessidades do seu projeto ou entre em contato diretamente pelo WhatsApp para um atendimento imediato.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-2xl bg-[#101F38]/80 border border-[#59A5FF]/15 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Informações da Agência
              </h3>

              {/* WhatsApp direct card */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#091426] border border-[#59A5FF]/20 text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#AAB4C4]">WhatsApp Direto</div>
                  <a 
                    href={generateWhatsAppUrl('Olá! Gostaria de conversar com a equipe da AL Studio Tech.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{AGENCY_CONFIG.whatsappFormatted}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#59A5FF]" />
                  </a>
                  <span className="text-xs text-[#AAB4C4] block mt-0.5">Atendimento rápido e personalizado</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#091426] border border-[#59A5FF]/20 text-[#2878FF] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#AAB4C4]">Localização</div>
                  <div className="text-base font-semibold text-white">
                    {AGENCY_CONFIG.location}
                  </div>
                  <span className="text-xs text-[#AAB4C4] block mt-0.5">
                    São Paulo / Região Metropolitana e Atendimento Nacional
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#091426] border border-[#59A5FF]/20 text-[#FF7628] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#AAB4C4]">E-mail Oficial</div>
                  <a 
                    href={`mailto:${AGENCY_CONFIG.email}`}
                    className="text-base font-semibold text-white hover:text-[#59A5FF] transition-colors"
                  >
                    {AGENCY_CONFIG.email}
                  </a>
                  <span className="text-xs text-[#AAB4C4] block mt-0.5">Envio de propostas e briefings</span>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#091426] border border-[#59A5FF]/20 text-[#59A5FF] shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#AAB4C4]">Rede Social</div>
                  <a 
                    href={AGENCY_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-white hover:text-[#59A5FF] transition-colors flex items-center gap-1.5"
                  >
                    <span>{AGENCY_CONFIG.instagram}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#59A5FF]" />
                  </a>
                  <span className="text-xs text-[#AAB4C4] block mt-0.5">Portfólio em tempo real e bastidores</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#59A5FF]/10">
                <div className="p-3 rounded-xl bg-[#091426] border border-[#59A5FF]/20 text-[#AAB4C4] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#AAB4C4]">Horário de Atendimento</div>
                  <div className="text-sm font-medium text-[#F2F5FA]">
                    {AGENCY_CONFIG.workingHours}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Lead Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#101F38]/90 border border-[#59A5FF]/20 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Solicite uma proposta personalizada
              </h3>
              <p className="text-sm text-[#AAB4C4] mb-8">
                Após preencher, os dados serão organizados para envio direto ao nosso time via WhatsApp para agilidade.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row: Name and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Carlos Eduardo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#091426] border text-sm text-white placeholder-[#AAB4C4]/50 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-[#59A5FF]/20 focus:border-[#2878FF]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Nome da Empresa ou Negócio
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Clínica Sorrir / Imóveis Alpha"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#091426] border border-[#59A5FF]/20 focus:border-[#2878FF] text-sm text-white placeholder-[#AAB4C4]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row: WhatsApp and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#091426] border text-sm text-white placeholder-[#AAB4C4]/50 focus:outline-none transition-colors ${
                        errors.whatsapp ? 'border-rose-500' : 'border-[#59A5FF]/20 focus:border-[#2878FF]'
                      }`}
                    />
                    {errors.whatsapp && (
                      <span className="text-xs text-rose-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.whatsapp}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Seu E-mail Profissional *
                    </label>
                    <input
                      type="email"
                      placeholder="contato@seunegocio.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#091426] border text-sm text-white placeholder-[#AAB4C4]/50 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#59A5FF]/20 focus:border-[#2878FF]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row: Segment and Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Segmento da Empresa
                    </label>
                    <select
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#091426] border border-[#59A5FF]/20 focus:border-[#2878FF] text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="">Selecione seu segmento...</option>
                      {CLIENT_SEGMENTS.map((seg) => (
                        <option key={seg.id} value={seg.name} className="bg-[#091426] text-white">
                          {seg.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Serviço Desejado *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#091426] border text-sm text-white focus:outline-none transition-colors ${
                        errors.service ? 'border-rose-500' : 'border-[#59A5FF]/20 focus:border-[#2878FF]'
                      }`}
                    >
                      <option value="">Selecione o serviço...</option>
                      {serviceOptions.map((serv, sIdx) => (
                        <option key={sIdx} value={serv} className="bg-[#091426] text-white">
                          {serv}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="text-xs text-rose-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.service}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Descrição do Projeto ou Ideia
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte brevemente sobre o seu objetivo, referências que gosta ou prazo estimado..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#091426] border border-[#59A5FF]/20 focus:border-[#2878FF] text-sm text-white placeholder-[#AAB4C4]/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#FF7628] to-[#E55F10] hover:from-[#E55F10] hover:to-[#FF7628] shadow-lg shadow-[#FF7628]/25 hover:shadow-xl hover:shadow-[#FF7628]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar solicitação de orçamento</span>
                </button>

                <p className="text-[11px] text-[#AAB4C4] text-center">
                  🔒 Seus dados são confidenciais e utilizados estritamente para o orçamento do seu projeto.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Real Submission Feedback Modal */}
      {showSuccessModal && submittedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#101F38] border border-[#59A5FF]/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Solicitação Preparada com Sucesso!
              </h3>
              <p className="text-sm text-[#AAB4C4]">
                Obrigado, <strong className="text-white">{submittedLead.name}</strong>! Seus dados foram estruturados para contato imediato via WhatsApp.
              </p>
            </div>

            <div className="bg-[#091426] p-4 rounded-xl border border-[#59A5FF]/15 text-xs text-[#AAB4C4] space-y-1.5 font-mono">
              <div><strong>Serviço:</strong> {submittedLead.service}</div>
              <div><strong>Segmento:</strong> {submittedLead.segment}</div>
              <div><strong>WhatsApp:</strong> {submittedLead.whatsapp}</div>
            </div>

            <div className="space-y-3">
              <a
                href={generateWhatsAppUrl(
`*Solicitação de Orçamento — AL STUDIO TECH*
👤 *Nome:* ${submittedLead.name}
🏢 *Empresa:* ${submittedLead.companyName}
📱 *WhatsApp:* ${submittedLead.whatsapp}
✉️ *E-mail:* ${submittedLead.email}
🎯 *Segmento:* ${submittedLead.segment}
🚀 *Serviço de Interesse:* ${submittedLead.service}
📝 *Detalhes do Projeto:*
${submittedLead.projectDescription}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Continuar no WhatsApp Agora</span>
              </a>

              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  setFormData({
                    name: '',
                    companyName: '',
                    whatsapp: '',
                    email: '',
                    segment: '',
                    service: '',
                    projectDescription: ''
                  });
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#AAB4C4] hover:text-white transition-colors"
              >
                Fechar janela
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
