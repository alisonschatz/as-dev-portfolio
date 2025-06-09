import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Hook para observar visibilidade das seções
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Hook para mostrar/esconder botão de scroll to top
  useEffect(() => {
    const handleScroll = () => {
      // Mostrar botão quando rolar mais de 100vh (altura da tela)
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <HeroSection />
      <SkillsSection isVisible={isVisible.skills} />
      <ProjectsSection isVisible={isVisible.projects} />
      <ContactSection isVisible={isVisible.contact} />
      <Footer />

      {/* Botão Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-1 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          backdropFilter: 'blur(10px)',
          background: showScrollTop 
            ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)' 
            : 'transparent'
        }}
        aria-label="Voltar ao topo"
      >
        {/* Anel animado externo */}
        <div className="absolute inset-0 rounded-2xl border-2 border-red-300/30 animate-pulse"></div>
        
        {/* Anel animado interno */}
        <div className="absolute inset-1 rounded-xl border border-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Ícone com animação */}
        <ChevronUp 
          size={24} 
          className="relative z-10 transform transition-transform duration-300 hover:-translate-y-0.5" 
        />
        
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </button>
    </div>
  );
};

export default Portfolio;