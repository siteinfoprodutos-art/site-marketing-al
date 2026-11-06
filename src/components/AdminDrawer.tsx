import React, { useState, useEffect } from 'react';
import { 
  X, 
  Database, 
  Users, 
  Plus, 
  Trash2, 
  Download, 
  FileCode, 
  CheckCircle,
  ExternalLink,
  MessageCircle,
  FolderPlus
} from 'lucide-react';
import { ProjectItem, LeadSubmission, ProjectCategory } from '../types';
import { SERVICES, CLIENT_SEGMENTS, AGENCY_CONFIG } from '../data/agencyData';
import portfolioWebImage from '../assets/images/portfolio_web_showcase_1793894694831.jpg';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
  onAddProject: (project: ProjectItem) => void;
  onDeleteProject: (projectId: string) => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({ 
  isOpen, 
  onClose,
  projects,
  onAddProject,
  onDeleteProject
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'projects' | 'schema'>('leads');
  const [leads, setLeads] = useState<LeadSubmission[]>([]);

  // Form for adding a new project
  const [newProject, setNewProject] = useState({
    name: '',
    category: 'sites' as ProjectCategory,
    categoryLabel: 'Sites e Landing Pages',
    coverImage: portfolioWebImage,
    summary: '',
    serviceType: 'Criação de Site Institucional',
    objective: '',
    solutionsText: 'Design responsivo, Otimização para conversão, Performance técnica',
    resultsOrDelivery: 'Entrega final com código limpo e treinamento da equipe.',
    clientSegment: 'Tecnologia e Serviços'
  });

  const [addSuccess, setAddSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      try {
        const raw = localStorage.getItem('al_studio_leads');
        if (raw) {
          setLeads(JSON.parse(raw));
        }
      } catch {
        setLeads([]);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.name.trim() || !newProject.summary.trim()) return;

    const project: ProjectItem = {
      id: 'proj-' + Date.now(),
      name: newProject.name.trim(),
      category: newProject.category,
      categoryLabel: newProject.category === 'sites' ? 'Sites e Landing Pages' :
                     newProject.category === 'videos' ? 'Vídeos e Produção Audiovisual' :
                     newProject.category === 'redes' ? 'Redes Sociais' :
                     newProject.category === 'identidade' ? 'Identidade Visual' :
                     newProject.category === 'design' ? 'Design Gráfico' : 'Projetos com IA',
      coverImage: newProject.coverImage,
      gallery: [newProject.coverImage],
      summary: newProject.summary.trim(),
      serviceType: newProject.serviceType,
      objective: newProject.objective.trim() || 'Demonstrar solução de ponta para o cliente.',
      solutions: newProject.solutionsText.split(',').map(s => s.trim()),
      resultsOrDelivery: newProject.resultsOrDelivery.trim(),
      clientSegment: newProject.clientSegment,
      isDemonstration: true
    };

    onAddProject(project);
    setAddSuccess(true);
    setTimeout(() => setAddSuccess(false), 3000);
    setNewProject({
      ...newProject,
      name: '',
      summary: '',
      objective: ''
    });
  };

  const handleClearLeads = () => {
    if (window.confirm('Deseja limpar o histórico de leads salvos localmente?')) {
      localStorage.removeItem('al_studio_leads');
      setLeads([]);
    }
  };

  const exportDataJson = () => {
    const data = {
      agency: AGENCY_CONFIG,
      projects,
      leads,
      exportedAt: new Date().toISOString(),
      supabaseSchemaDraft: {
        tables: ['projects', 'leads', 'client_segments', 'services']
      }
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `al-studio-tech-data-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl h-full bg-[#101F38] border-l border-[#59A5FF]/30 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#59A5FF]/15 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#091426] border border-[#59A5FF]/30 text-[#FF7628]">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Painel de Gestão & CMS
                </h3>
                <span className="text-xs text-[#AAB4C4]">
                  Estrutura preparada para Supabase / PostgreSQL
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#AAB4C4] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mb-6 border-b border-[#59A5FF]/10 pb-2">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'leads'
                  ? 'bg-[#2878FF] text-white'
                  : 'text-[#AAB4C4] hover:text-white bg-[#091426]'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leads Recebidos ({leads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'projects'
                  ? 'bg-[#2878FF] text-white'
                  : 'text-[#AAB4C4] hover:text-white bg-[#091426]'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Gerenciar Projetos ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('schema')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'schema'
                  ? 'bg-[#2878FF] text-white'
                  : 'text-[#AAB4C4] hover:text-white bg-[#091426]'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Esquema SQL/Supabase</span>
            </button>
          </div>

          {/* Tab 1: Leads list */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#AAB4C4]">
                <span>Solicitações de orçamento gravadas pelo formulário</span>
                {leads.length > 0 && (
                  <button
                    onClick={handleClearLeads}
                    className="text-rose-400 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Limpar histórico
                  </button>
                )}
              </div>

              {leads.length === 0 ? (
                <div className="text-center py-12 bg-[#091426] rounded-xl border border-dashed border-[#59A5FF]/20 text-xs text-[#AAB4C4]">
                  Nenhum lead recebido ainda. Preencha o formulário de contato para testar a captura!
                </div>
              ) : (
                <div className="space-y-3">
                  {leads.map((l) => (
                    <div key={l.id} className="p-4 rounded-xl bg-[#091426] border border-[#59A5FF]/15 space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className="text-white text-sm">{l.name}</strong>
                        <span className="text-[11px] text-[#AAB4C4]">
                          {new Date(l.createdAt).toLocaleDateString('pt-BR')} {new Date(l.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div className="text-xs text-[#59A5FF]">
                        Empresa: {l.companyName} · Segmento: {l.segment}
                      </div>
                      <div className="text-xs text-white">
                        Serviço: <span className="font-semibold text-[#FF7628]">{l.service}</span>
                      </div>
                      <div className="text-xs text-[#AAB4C4] italic bg-[#101F38]/60 p-2 rounded">
                        "{l.projectDescription}"
                      </div>
                      <div className="pt-2 flex items-center justify-between text-xs">
                        <span className="text-[#AAB4C4]">Tel: {l.whatsapp}</span>
                        <a
                          href={`https://wa.me/55${l.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                        >
                          <MessageCircle className="w-3.5 h-3.5" /> Chamar cliente
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Manage / Add Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#091426] border border-[#59A5FF]/20">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-1.5">
                  <FolderPlus className="w-4 h-4 text-[#59A5FF]" />
                  <span>Cadastrar Novo Projeto no Portfólio</span>
                </h4>

                {addSuccess && (
                  <div className="p-3 mb-3 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Projeto adicionado com sucesso à galeria!</span>
                  </div>
                )}

                <form onSubmit={handleCreateProject} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#AAB4C4] mb-1">
                      Nome do Projeto *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Solaris Clinic — Plataforma Web"
                      value={newProject.name}
                      onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#101F38] border border-[#59A5FF]/20 text-xs text-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#AAB4C4] mb-1">
                        Categoria
                      </label>
                      <select
                        value={newProject.category}
                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value as ProjectCategory })}
                        className="w-full px-3 py-2 rounded-lg bg-[#101F38] border border-[#59A5FF]/20 text-xs text-white"
                      >
                        <option value="sites">Sites e Landing Pages</option>
                        <option value="videos">Vídeos e Produção Audiovisual</option>
                        <option value="redes">Redes Sociais</option>
                        <option value="identidade">Identidade Visual</option>
                        <option value="design">Design Gráfico</option>
                        <option value="ia">Projetos com IA</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#AAB4C4] mb-1">
                        Segmento de Cliente
                      </label>
                      <select
                        value={newProject.clientSegment}
                        onChange={(e) => setNewProject({ ...newProject, clientSegment: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#101F38] border border-[#59A5FF]/20 text-xs text-white"
                      >
                        {CLIENT_SEGMENTS.map((s) => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#AAB4C4] mb-1">
                      Resumo do Projeto *
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Breve resumo comercial do case..."
                      value={newProject.summary}
                      onChange={(e) => setNewProject({ ...newProject, summary: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#101F38] border border-[#59A5FF]/20 text-xs text-white resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#2878FF] hover:bg-[#1E60D0] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Publicar Projeto no Portfólio
                  </button>
                </form>
              </div>

              {/* List of currently registered projects */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-white">
                  Projetos Atuais no Portfólio:
                </div>
                {projects.map((p) => (
                  <div key={p.id} className="p-3 rounded-lg bg-[#091426] border border-[#59A5FF]/15 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-white block">{p.name}</span>
                      <span className="text-[#AAB4C4]">{p.categoryLabel} · {p.clientSegment}</span>
                    </div>
                    <button
                      onClick={() => onDeleteProject(p.id)}
                      className="text-rose-400 hover:text-rose-300 p-1"
                      title="Excluir projeto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Supabase Architecture */}
          {activeTab === 'schema' && (
            <div className="space-y-4 text-xs text-[#AAB4C4]">
              <div className="p-4 rounded-xl bg-[#091426] border border-[#59A5FF]/20">
                <span className="text-white font-bold block mb-2">
                  Esquema Pronto para Supabase / PostgreSQL:
                </span>
                <pre className="font-mono text-[11px] text-[#59A5FF] overflow-x-auto bg-[#101F38] p-3 rounded-lg leading-relaxed">
{`-- Tabela de Leads / Orçamentos
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company_name TEXT,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  segment TEXT NOT NULL,
  service TEXT NOT NULL,
  project_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de Projetos do Portfólio
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  summary TEXT NOT NULL,
  service_type TEXT NOT NULL,
  objective TEXT,
  solutions JSONB DEFAULT '[]',
  results_or_delivery TEXT,
  client_segment TEXT NOT NULL,
  is_demonstration BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);`}
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-[#091426] border border-[#59A5FF]/15">
                <strong className="text-white block mb-1">
                  Integração Backend Pronta
                </strong>
                O código da aplicação foi desenhado com camadas modulares (`src/types/index.ts` e `src/data/agencyData.ts`). Ao plugar as credenciais do Supabase ou Firebase, os métodos de query substituirão o storage local instantaneamente.
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#59A5FF]/15 flex items-center justify-between">
          <button
            onClick={exportDataJson}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#091426] hover:bg-[#152747] text-xs font-semibold text-[#59A5FF] border border-[#59A5FF]/20 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar JSON Completo</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#2878FF] rounded-lg hover:bg-[#1E60D0]"
          >
            Fechar Painel
          </button>
        </div>

      </div>
    </div>
  );
};
