import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ClientSegments } from './components/ClientSegments';
import { Process } from './components/Process';
import { Differentials } from './components/Differentials';
import { ConversionCta } from './components/ConversionCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ProjectModal } from './components/ProjectModal';
import { SegmentModal } from './components/SegmentModal';
import { QuoteModal } from './components/QuoteModal';
import { AdminDrawer } from './components/AdminDrawer';

import { INITIAL_PROJECTS, generateWhatsAppUrl } from './data/agencyData';
import { ProjectItem, ClientSegmentItem, ServiceItem, LeadSubmission } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [projects, setProjects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedSegment, setSelectedSegment] = useState<ClientSegmentItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Form pre-fill values
  const [formInitialService, setFormInitialService] = useState('');
  const [formInitialSegment, setFormInitialSegment] = useState('');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (service: ServiceItem) => {
    setFormInitialService(service.title);
    scrollToSection('contato');
  };

  const handleRequestSimilarProject = (project: ProjectItem) => {
    // Open WhatsApp directly or pre-fill form
    const msg = `Olá! Vi o projeto demonstrativo "${project.name}" no site da AL Studio Tech e gostaria de um projeto com estrutura semelhante para a minha empresa.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const handleApplySegmentToForm = (segmentName: string) => {
    setFormInitialSegment(segmentName);
    scrollToSection('contato');
  };

  const handleGoToFullForm = (service?: string, segment?: string) => {
    if (service) setFormInitialService(service);
    if (segment) setFormInitialSegment(segment);
    scrollToSection('contato');
  };

  const handleAddProject = (newProject: ProjectItem) => {
    setProjects([newProject, ...projects]);
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects(projects.filter(p => p.id !== projectId));
  };

  return (
    <div className="min-h-screen bg-[#091426] text-[#F2F5FA] relative selection:bg-[#FF7628] selection:text-white">
      
      {/* Fixed Header */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onStartProject={() => setIsQuoteModalOpen(true)}
          onExplorePortfolio={() => scrollToSection('portfolio')}
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services 
          onSelectServiceForQuote={handleSelectServiceForQuote} 
        />

        {/* 4. Portfolio Section */}
        <Portfolio
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
          onRequestSimilarProject={handleRequestSimilarProject}
        />

        {/* 5. Client Segments Section */}
        <ClientSegments
          onSelectSegment={(segment) => setSelectedSegment(segment)}
        />

        {/* 6. Work Process Section */}
        <Process />

        {/* 7. Differentials Section */}
        <Differentials />

        {/* 8. Conversion CTA Section */}
        <ConversionCta
          onScrollToContact={() => scrollToSection('contato')}
        />

        {/* 9. Contact & Budget Section */}
        <Contact
          initialService={formInitialService}
          initialSegment={formInitialSegment}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppFloating />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      <SegmentModal
        segment={selectedSegment}
        onClose={() => setSelectedSegment(null)}
        onApplySegmentToForm={handleApplySegmentToForm}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onGoToFullForm={handleGoToFullForm}
      />

      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        projects={projects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
      />

    </div>
  );
}
