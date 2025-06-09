import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = ({ isVisible }) => {
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

  return (
    <section id="projects" className={`py-20 px-4 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden`}>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 border border-slate-200/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-amber-400/10 to-red-600/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-red-600"></div>
              
              {/* Project Image com overlay melhorado */}
              <div className="h-72 relative overflow-hidden bg-gradient-to-br from-slate-100 to-stone-50">
                {/* Real project image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  style={{
                    aspectRatio: '16/9',
                    minHeight: '100%',
                    width: '100%'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback background melhorado */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-slate-200 via-stone-100 to-red-50 flex items-center justify-center absolute inset-0"
                  style={{ display: 'none' }}
                >
                  <div className="text-slate-600 text-xl font-semibold text-center px-6 py-4 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg">
                    {project.name}
                  </div>
                </div>
                
                {/* Gradient overlays para profundidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-amber-900/5 pointer-events-none"></div>
                
                {/* Hover overlay - clicável melhorado */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/0 group-hover:from-black/30 group-hover:via-black/20 group-hover:to-red-900/30 transition-all duration-500 flex items-center justify-center cursor-pointer"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 text-base font-semibold text-slate-800 shadow-2xl border border-white/50">
                      <div className="flex items-center space-x-2">
                        <ExternalLink size={18} className="text-red-600" />
                        <span>Ver Projeto</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              
              {/* Project Info com melhor espaçamento */}
              <div className="p-8 bg-gradient-to-br from-white via-slate-50/50 to-red-50/30">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-red-600">
                    <span className="text-lg">⭐</span>
                    <span className="text-xs font-medium bg-red-50 px-2 py-1 rounded-full">TOP</span>
                  </div>
                </div>
                
                <p className="text-slate-600 text-base mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Stack tags melhoradas */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50 via-amber-50 to-red-50 border border-red-200/50 rounded-2xl">
                    <span className="text-sm font-semibold text-red-800">
                      {project.stack}
                    </span>
                  </div>
                </div>
                
                {/* Links com design melhorado */}
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 px-4 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 hover:border-slate-400 transition-all duration-300 px-4 py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Github size={16} />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;