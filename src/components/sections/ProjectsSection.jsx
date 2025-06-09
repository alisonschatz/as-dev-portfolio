import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = ({ isVisible }) => {
  // Array de projetos com informações atualizadas
  const projects = [
    {
      name: 'Calculator App',
      image: '/projects/calculator-app.jpg',
      description: 'Calculadora moderna com interface limpa e responsiva',
      stack: 'React, JavaScript, Tailwind',
      demo: 'https://calculator-app-main-dun.vercel.app/',
      repo: 'https://github.com/alisonschatz/calculator-app-main',
      accentColor: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-blue-500'
    },
    {
      name: 'Age Calculator',
      image: '/projects/age-calculator.jpg',
      description: 'Calculadora de idade com validação avançada',
      stack: 'Next.js, TypeScript, Tailwind',
      demo: 'https://age-calculator-app-main-indol.vercel.app/',
      repo: 'https://github.com/alisonschatz/age-calculator-app-main',
      accentColor: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-emerald-500'
    },
    {
      name: 'IP Address Tracker',
      image: '/projects/ip-tracker.jpg',
      description: 'Rastreador de endereços IP com mapas interativos',
      stack: 'React, JavaScript, Tailwind',
      demo: 'https://ip-address-tracker-master-wine.vercel.app/',
      repo: 'https://github.com/alisonschatz/ip-address-tracker-master',
      accentColor: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-blue-500'
    },
    {
      name: 'Anime Tracker',
      image: '/projects/anime-tracker.jpg',
      description: 'Plataforma completa para acompanhar animes',
      stack: 'Flutter, Dart',
      demo: 'https://animetrackerv1.vercel.app/',
      repo: 'https://github.com/alisonschatz/anime_tracker_v1',
      accentColor: 'from-purple-500 to-pink-600',
      iconBg: 'bg-purple-500'
    },
    {
      name: 'Quest Tasks',
      image: '/projects/quest-tasks.jpg',
      description: 'Sistema avançado de gerenciamento de tarefas',
      stack: 'React, JavaScript, Tailwind',
      demo: 'https://quest-tasks-pucrs-tcc.vercel.app/',
      repo: 'https://github.com/alisonschatz/quest-tasks-pucrs-tcc',
      accentColor: 'from-indigo-500 to-blue-600',
      iconBg: 'bg-indigo-500'
    }
  ];

  return (
    <section id="projects" className={`py-24 px-4 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden`}>
      {/* Background mais escuro para contraste */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-200 to-stone-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-300/40 via-transparent to-slate-300/30"></div>
      </div>

      {/* Elementos decorativos minimalistas */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-stone-300 to-slate-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header elegante com estilo japonês */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-slate-800 mb-4 tracking-tight relative">
            <span className="relative">
              Projetos
              {/* Japanese character for "work/project" */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-red-800 text-2xl opacity-60">作</div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed italic">
            "Cada projeto é uma obra de arte digital"
          </p>
        </div>
        
        {/* Grid de projetos elegante */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card principal */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-slate-100">
                
                {/* Image container - corrigido para não vazar */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center absolute inset-0"
                    style={{ display: 'none' }}
                  >
                    <div className="text-slate-500 text-lg font-medium">
                      {project.name}
                    </div>
                  </div>
                  
                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Hover overlay com CTA */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full text-slate-800 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        <span>Ver Projeto</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Header do projeto */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800 mb-2 leading-tight">
                        {project.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${project.iconBg} rounded-full`}></div>
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                          {project.stack.split(',')[0].trim()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Descrição */}
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Stack tecnológica */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.split(',').map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-200"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${project.accentColor} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Github size={16} />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer da seção */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-3 text-slate-500">
            <div className="w-8 h-px bg-slate-300"></div>
            <span className="text-sm font-medium">Mais projetos em breve</span>
            <div className="w-8 h-px bg-slate-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;