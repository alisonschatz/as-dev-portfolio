import React from 'react';

const HeroSection = () => {
  return (
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

          {/* Subtle scroll hint integrado à navegação */}
          <div className="mt-8 flex justify-center">
            <div className="text-white/50 text-xs flex items-center space-x-2 animate-pulse">
              <span>↓</span>
              <span>Role para explorar</span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;