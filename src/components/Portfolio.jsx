

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Mail, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentSkill, setCurrentSkill] = useState(0);

  // Array de habilidades (com arquivos SVG reais)
  const skills = [
    { name: 'HTML5', image: '/skills/html5.svg' },
    { name: 'CSS3', image: '/skills/css.svg' },
    { name: 'JavaScript', image: '/skills/javascript.svg' },
    { name: 'TypeScript', image: '/skills/typescript.svg' },
    { name: 'React', image: '/skills/react.svg' },
    { name: 'Next.js', image: '/skills/nextdotjs.svg' },
    { name: 'Node.js', image: '/skills/nodedotjs.svg' },
    { name: 'Dart', image: '/skills/dart.svg' },
    { name: 'Flutter', image: '/skills/flutter.svg' },
    { name: 'Sass', image: '/skills/sass.svg' },
    { name: 'Firebase', image: '/skills/firebase.svg' },
    { name: 'MongoDB', image: '/skills/mongodb.svg' }
  ];

  // Array de projetos
  const projects = [
    {
      name: 'Calculator App',
      image: '/projects/calculator-app.jpg',
      description: 'Calculadora moderna com interface limpa',
      stack: 'HTML, CSS, JavaScript',
      demo: 'https://calculator-app-main-dun.vercel.app/',
      repo: 'https://github.com/alisonschatz/calculator-app'
    },
    {
      name: 'Age Calculator',
      image: '/projects/age-calculator.jpg',
      description: 'Calculadora de idade com validação',
      stack: 'React, CSS Modules',
      demo: 'https://age-calculator-app-main-indol.vercel.app/',
      repo: 'https://github.com/alisonschatz/age-calculator'
    },
    {
      name: 'IP Address Tracker',
      image: '/projects/ip-tracker.jpg',
      description: 'Rastreador de endereços IP com mapas',
      stack: 'JavaScript, API Integration',
      demo: 'https://ip-address-tracker-master-wine.vercel.app/',
      repo: 'https://github.com/alisonschatz/ip-address-tracker'
    },
    {
      name: 'Anime Tracker',
      image: '/projects/anime-tracker.jpg',
      description: 'Plataforma para acompanhar animes',
      stack: 'React, API, Firebase',
      demo: 'https://animetrackerv1.vercel.app/',
      repo: 'https://github.com/alisonschatz/anime-tracker'
    },
    {
      name: 'Quest Tasks',
      image: '/projects/quest-tasks.jpg',
      description: 'Sistema de gerenciamento de tarefas',
      stack: 'Next.js, MongoDB, TypeScript',
      demo: 'https://quest-tasks-pucrs-tcc.vercel.app/',
      repo: 'https://github.com/alisonschatz/quest-tasks'
    }
  ];

  // Funções do carrossel
  const nextSkill = () => {
    setCurrentSkill((prev) => (prev + 1) % skills.length);
  };

  const prevSkill = () => {
    setCurrentSkill((prev) => (prev - 1 + skills.length) % skills.length);
  };

  // Função para obter skills visíveis no carrossel
  const getVisibleSkills = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentSkill + i + skills.length) % skills.length;
      visible.push({ ...skills[index], position: i });
    }
    return visible;
  };

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

  // Auto-advance carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
         
{/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Wallpaper */}
        <div className="absolute inset-0 z-0">
          {/* Using local image from public folder */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/hero_back.png')`,
            }}
          ></div>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Optional: Gradient overlay for Japanese aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-red-900/20"></div>
        </div>

        {/* Japanese Background Elements (now over the wallpaper) */}
        <div className="absolute inset-0 opacity-20 z-10">
        </div>

        {/* Japanese Calligraphy Strokes */}
        <div className="absolute inset-0 opacity-10 z-10">
        </div>

        <div className="text-center z-20 px-4">
          {/* Logo Image */}
          <div className="mb-12 relative">
            {/* Logo image from public folder */}
            <div className="flex justify-center">
              <img
                src="/logo.png"
                alt="AS.DEV Logo"
                className="h-32 md:h-48 lg:h-56 xl:h-64 w-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.6)) drop-shadow(0 5px 15px rgba(0,0,0,0.4))'
                }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide"
                style={{
                  textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)',
                  fontWeight: '700'
                }}>
              Alison Schatz
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-slate-100 font-semibold"
               style={{
                 textShadow: '0 3px 10px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)',
                 fontWeight: '600'
               }}>
              Desenvolvedor Front-End
            </p>

            {/* Discrete Navigation */}
            <div className="mt-16 flex justify-center">
              <nav className="flex space-x-8 md:space-x-12">
                <a
                  href="#skills"
                  className="group flex flex-col items-center space-y-3 text-white/70 hover:text-white transition-all duration-300 relative cursor-pointer"
                  style={{ 
                    cursor: 'pointer',
                    transform: 'translateZ(0)' // Force hardware acceleration 
                  }}
                >
                  <div className="relative">
                    {/* Simplified animated rings - more subtle */}
                    <div className="absolute -inset-2 rounded-full border border-white/10 animate-pulse" 
                         style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
                    <div className="absolute -inset-1 rounded-full border border-white/15 group-hover:border-white/40 transition-all duration-300"></div>
                    
                    {/* Subtle main dot */}
                    <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white group-hover:scale-125 transition-all duration-300 relative z-10"
                         style={{ 
                           animation: 'pulse 3s ease-in-out infinite',
                           animationDelay: '0s'
                         }}></div>
                  </div>
                  
                  {/* Always visible label */}
                  <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-red-200 group-hover:scale-105 transition-all duration-300 text-center mt-2"
                        style={{ 
                          textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                          opacity: '0.9'
                        }}>
                    Habilidades
                  </span>
                </a>
                
                <a
                  href="#projects"
                  className="group flex flex-col items-center space-y-3 text-white/70 hover:text-white transition-all duration-300 relative cursor-pointer"
                  style={{ 
                    cursor: 'pointer',
                    transform: 'translateZ(0)' 
                  }}
                >
                  <div className="relative">
                    {/* Simplified animated rings */}
                    <div className="absolute -inset-2 rounded-full border border-white/10 animate-pulse" 
                         style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
                    <div className="absolute -inset-1 rounded-full border border-white/15 group-hover:border-white/40 transition-all duration-300"></div>
                    
                    {/* Subtle main dot */}
                    <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white group-hover:scale-125 transition-all duration-300 relative z-10"
                         style={{ 
                           animation: 'pulse 3s ease-in-out infinite',
                           animationDelay: '1s'
                         }}></div>
                  </div>
                  
                  {/* Always visible label */}
                  <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-red-200 group-hover:scale-105 transition-all duration-300 text-center mt-2"
                        style={{ 
                          textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                          opacity: '0.9'
                        }}>
                    Projetos
                  </span>
                </a>
                
                <a
                  href="#contact"
                  className="group flex flex-col items-center space-y-3 text-white/70 hover:text-white transition-all duration-300 relative cursor-pointer"
                  style={{ 
                    cursor: 'pointer',
                    transform: 'translateZ(0)' 
                  }}
                >
                  <div className="relative">
                    {/* Simplified animated rings */}
                    <div className="absolute -inset-2 rounded-full border border-white/10 animate-pulse" 
                         style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
                    <div className="absolute -inset-1 rounded-full border border-white/15 group-hover:border-white/40 transition-all duration-300"></div>
                    
                    {/* Subtle main dot */}
                    <div className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white group-hover:scale-125 transition-all duration-300 relative z-10"
                         style={{ 
                           animation: 'pulse 3s ease-in-out infinite',
                           animationDelay: '2s'
                         }}></div>
                  </div>
                  
                  {/* Always visible label */}
                  <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-red-200 group-hover:scale-105 transition-all duration-300 text-center mt-2"
                        style={{ 
                          textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                          opacity: '0.9'
                        }}>
                    Contato
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
{/* Hero Section */}

{/* Skills Section */}
      <section id="skills" className={`py-20 px-4 relative transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden`}>
        {/* Skills Background Wallpaper */}
        <div className="absolute inset-0 z-0">
          {/* Local wallpaper image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/skills_back.jpg')`,
            }}
          ></div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
          
          {/* Optional: Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-red-50/30"></div>
        </div>

        {/* Japanese Pattern Background */}
        <div className="absolute inset-0 opacity-5 z-10">
        </div>

        <div className="max-w-6xl mx-auto relative z-20">
          <h2 className="text-4xl font-light text-center mb-4 text-slate-800 relative">
            <span className="relative">
              Habilidades
              {/* Japanese character */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-red-800 text-2xl opacity-60">技</div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-red-800"></div>
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-center text-slate-600 mb-0 italic">
            "Domínio através da prática constante"
          </p>
          
          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto mt-0">
            <div className="flex items-center justify-center py-4 px-4">
              {/* Previous Button */}
              <button
                onClick={prevSkill}
                className="absolute left-0 z-30 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-50 border border-slate-200 hover:border-red-300 flex-shrink-0"
              >
                <ChevronLeft className="w-6 h-6 text-slate-600" />
              </button>

              {/* Skills Carousel - Fixed Container with controlled height */}
              <div className="flex items-end justify-center w-full max-w-4xl mx-auto overflow-hidden h-48">
                <div className="flex items-end justify-center space-x-4 w-full h-full">
                  {getVisibleSkills().map((skill, index) => (
                    <div
                      key={`${skill.name}-${index}`}
                      className={`relative transition-all duration-700 ease-out flex-shrink-0 flex items-end ${
                        skill.position === 0
                          ? 'z-20 opacity-100'
                          : Math.abs(skill.position) === 1
                          ? 'z-15 opacity-80'
                          : 'z-10 opacity-50'
                      }`}
                      style={{
                        width: '140px',
                        height: skill.position === 0 ? '170px' : 
                               Math.abs(skill.position) === 1 ? '150px' : '130px',
                        display: 'flex',
                        alignItems: 'flex-end'
                      }}
                    >
                      <div className={`group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border-2 ${
                        skill.position === 0 ? 'border-red-200 bg-gradient-to-br from-white to-red-50' : 'border-slate-100'
                      } hover:border-red-300 text-center relative overflow-hidden w-full h-auto`}>
                        
                        {/* Subtle Japanese pattern on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                          <div className="w-full h-full bg-gradient-to-br from-red-50 to-amber-50"></div>
                        </div>
                        
                        {/* Icon/Image */}
                        <div className="flex items-center justify-center mb-3 h-12 md:h-16 relative z-10">
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className={`object-contain group-hover:scale-110 transition-transform duration-300 filter hover:brightness-110 ${
                              skill.position === 0 ? 'w-12 h-12 md:w-14 md:h-14' : 'w-10 h-10 md:w-12 md:h-12'
                            }`}
                            style={{
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                            }}
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          {/* Fallback placeholder (hidden by default) */}
                          <div 
                            className={`flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-300 rounded-lg group-hover:scale-110 transition-transform duration-300 ${
                              skill.position === 0 ? 'w-12 h-12 md:w-14 md:h-14' : 'w-10 h-10 md:w-12 md:h-12'
                            }`}
                            style={{ display: 'none' }}
                          >
                            <span className="text-xs font-medium">?</span>
                          </div>
                        </div>
                        
                        {/* Name */}
                        <h3 className={`font-medium text-slate-800 leading-tight relative z-10 ${
                          skill.position === 0 ? 'text-sm md:text-base' : 'text-xs md:text-sm'
                        }`}>
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSkill}
                className="absolute right-0 z-30 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-50 border border-slate-200 hover:border-red-300 flex-shrink-0"
              >
                <ChevronRight className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkill(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSkill ? 'bg-red-800 w-6' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Japanese-style Divider */}
          <div className="flex items-center justify-center mt-16">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-red-800"></div>
              <div className="flex items-center space-x-2">
                <span className="text-red-800 text-xl">🏮</span>
                <span className="text-red-800 text-sm font-light">道</span>
                <span className="text-red-800 text-xl">🏮</span>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-red-800"></div>
            </div>
          </div>
        </div>
      </section>
{/* Skills Section */}
     
{/* Projects Section */}
      <section id="projects" className={`py-20 px-4 relative transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden`}>
        {/* Projects Background Wallpaper */}
        <div className="absolute inset-0 z-0">
          {/* Local wallpaper image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/3.png')`,
            }}
          ></div>
          
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-slate-100 bg-opacity-40"></div>
          
          {/* Optional: Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50/60 via-transparent to-slate-100/40"></div>
        </div>

        {/* Japanese Elements */}
        <div className="absolute inset-0 opacity-5 z-10">
        </div>

        <div className="max-w-5xl mx-auto relative z-20">
          <h2 className="text-4xl font-light text-center mb-4 text-slate-800 relative">
            <span className="relative">
              Projetos
              {/* Japanese character for "work/project" */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-red-800 text-2xl opacity-60">作</div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-red-800"></div>
            </span>
          </h2>
          
          <p className="text-center text-slate-600 mb-16 italic">
            "Cada projeto é uma obra de arte digital"
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Japanese corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-red-800 to-amber-600 transform rotate-45"></div>
                </div>
                
                {/* Project Image */}
                <div className="h-64 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 bg-slate-100">
                  {/* Real project image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    style={{
                      aspectRatio: '16/9',
                      minHeight: '100%',
                      width: '100%'
                    }}
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback background (hidden by default) */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-slate-200 to-stone-200 flex items-center justify-center absolute inset-0"
                    style={{ display: 'none' }}
                  >
                    <div className="text-slate-500 text-lg font-medium text-center px-4">
                      {project.name}
                    </div>
                  </div>
                  
                  {/* Image optimization overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-slate-800 shadow-lg">
                        <div className="flex items-center space-x-1">
                          <ExternalLink size={14} />
                          <span>Ver Projeto</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 flex items-center">
                    {project.name}
                    <span className="ml-2 text-red-800 text-sm">⭐</span>
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">{project.description}</p>
                  <div className="text-xs text-red-800 font-medium mb-4 bg-gradient-to-r from-red-50 to-amber-50 px-3 py-1 rounded-full inline-block border border-red-100">
                    {project.stack}
                  </div>
                  
                  {/* Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-slate-600 hover:text-red-800 transition-colors duration-300 bg-slate-50 hover:bg-red-50 px-3 py-2 rounded-lg text-sm border border-slate-200 hover:border-red-200"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-slate-600 hover:text-red-800 transition-colors duration-300 bg-slate-50 hover:bg-red-50 px-3 py-2 rounded-lg text-sm border border-slate-200 hover:border-red-200"
                    >
                      <Github size={14} />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Projects Section */}

{/* Contact Section */}
      <section id="contact" className={`py-20 px-4 relative overflow-hidden transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Contact Background Wallpaper */}
        <div className="absolute inset-0 z-0">
          {/* Local wallpaper image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/contact_back.jpg')`,
            }}
          ></div>
          
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-slate-900 bg-opacity-85"></div>
          
          {/* Gradient overlay for Japanese aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-transparent to-red-900/40"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 z-10">
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-20">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white relative">
            <span className="relative">
              Entre em Contato
              {/* Japanese character for "connection/relationship" */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-red-300 text-3xl opacity-60">繋</div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-amber-400"></div>
            </span>
          </h2>
          
          <p className="text-slate-300 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Vamos construir algo incrível juntos. Entre em contato para discutir projetos, oportunidades ou apenas para conversar sobre tecnologia.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <a
                href="mailto:alisonschatz1@gmail.com"
                className="relative block bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-amber-400 rounded-2xl flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">Email</h3>
                <p className="text-slate-300 text-sm mb-4">Resposta rápida garantida</p>
                <p className="text-white font-medium break-all">alisonschatz1@gmail.com</p>
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <a
                href="https://linkedin.com/in/alison-schatz/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-400 rounded-2xl flex items-center justify-center">
                  <Linkedin size={24} className="text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">LinkedIn</h3>
                <p className="text-slate-300 text-sm mb-4">Vamos nos conectar profissionalmente</p>
                <div className="flex items-center justify-center space-x-2 text-white font-medium">
                  <span>Conectar</span>
                  <ExternalLink size={16} />
                </div>
              </a>
            </div>

            {/* GitHub Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-slate-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <a
                href="https://github.com/alisonschatz"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-500 to-slate-400 rounded-2xl flex items-center justify-center">
                  <Github size={24} className="text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">GitHub</h3>
                <p className="text-slate-300 text-sm mb-4">Confira meus repositórios</p>
                <div className="flex items-center justify-center space-x-2 text-white font-medium">
                  <span>Explorar</span>
                  <ExternalLink size={16} />
                </div>
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 flex flex-col items-center">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-500"></div>
              <div className="flex items-center space-x-2">
                <span className="text-white text-2xl">🏮</span>
                <span className="text-red-300 text-lg font-light">道</span>
                <span className="text-white text-2xl">🏮</span>
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-500"></div>
            </div>
            <p className="text-slate-300 text-lg italic">
              "Pronto para transformar ideias em realidade digital"
            </p>
          </div>
        </div>
      </section>
{/* Contact Section */}

{/* Footer */}
      <footer className="py-8 text-center text-slate-400 bg-slate-900 border-t border-slate-700">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-0.5 bg-red-600"></div>
          <span className="text-2xl">🌸</span>
          <div className="w-8 h-0.5 bg-red-600"></div>
        </div>
        <p className="text-sm">
          © 2025 Alison Schatz - Desenvolvido com precisão e elegância
        </p>
      </footer>
{/* Footer */}

    </div>
  );
};

export default Portfolio;