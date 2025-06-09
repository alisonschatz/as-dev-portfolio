import React from 'react';
import { Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          
          {/* Left Side - Code Metrics */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center">
            <div className="text-slate-500 text-xs space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-slate-400">☕</span>
                <span>1000+ linhas de código</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-400">🔥</span>
                <span>100% uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-400">⭐</span>
                <span>Clean code advocate</span>
              </div>
            </div>
          </div>

          {/* Center - Logo and Stats */}
          <div className="text-center flex flex-col items-center justify-center">
            {/* Logo Image */}
            <div className="relative mb-2">
              <img
                src="/logo.png"
                alt="AS.DEV Logo"
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}
              />
            </div>
            
            {/* Philosophy text */}
            <p className="text-slate-400 text-xs italic leading-relaxed max-w-xs mb-2">
              "O caminho do desenvolvedor: códigos limpos, soluções elegantes"
            </p>
            
            {/* Code stats */}
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-center">
                <span className="text-white text-sm font-semibold">5+</span>
                <span className="text-slate-500 text-xs">Projetos</span>
              </div>
              <div className="w-px h-6 bg-slate-600"></div>
              <div className="flex flex-col items-center">
                <span className="text-white text-sm font-semibold">12+</span>
                <span className="text-slate-500 text-xs">Tecnologias</span>
              </div>
              <div className="w-px h-6 bg-slate-600"></div>
              <div className="flex flex-col items-center">
                <span className="text-white text-sm font-semibold">∞</span>
                <span className="text-slate-500 text-xs">Ideias</span>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation */}
          <div className="text-center md:text-right relative z-10">
            <h4 className="text-white font-semibold mb-2 flex items-center justify-center md:justify-end space-x-2 text-sm">
              <span>🗾</span>
              <span>Navegação</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#skills"
                  className="block text-slate-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer hover:underline p-1 hover:bg-slate-700/50 rounded"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 20 }}
                  onClick={(e) => {
                    console.log('Clicou em Habilidades');
                    const element = document.getElementById('skills');
                    if (element) {
                      e.preventDefault();
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="hover:translate-x-1 transition-transform duration-300 inline-block">
                    Habilidades
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block text-slate-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer hover:underline p-1 hover:bg-slate-700/50 rounded"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 20 }}
                  onClick={(e) => {
                    console.log('Clicou em Projetos');
                    const element = document.getElementById('projects');
                    if (element) {
                      e.preventDefault();
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="hover:translate-x-1 transition-transform duration-300 inline-block">
                    Projetos
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-slate-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer hover:underline p-1 hover:bg-slate-700/50 rounded"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 20 }}
                  onClick={(e) => {
                    console.log('Clicou em Contato');
                    const element = document.getElementById('contact');
                    if (element) {
                      e.preventDefault();
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="hover:translate-x-1 transition-transform duration-300 inline-block">
                    Contato
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0">
          
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-slate-400 text-xs">
            <span>© {currentYear} Alison Schatz</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Feito com</span>
              <Heart size={10} className="text-red-500 animate-pulse" />
              <span>e</span>
              <Coffee size={10} className="text-amber-500" />
            </span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center space-x-2 text-slate-500 text-xs">
            <span>React • Tailwind • Lucide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;