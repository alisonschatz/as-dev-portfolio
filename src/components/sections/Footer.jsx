import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center">
                <Code size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">AS.DEV</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Desenvolvedor Front-End apaixonado por criar experiências digitais únicas.
            </p>
          </div>

          {/* Creative Center Section */}
          <div className="text-center flex flex-col items-center justify-center">
            {/* Animated Japanese Symbol */}
            <div className="relative mb-2">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600/20 to-amber-500/20 rounded-full flex items-center justify-center border border-red-500/30 backdrop-blur-sm">
                <span className="text-red-400 text-xl animate-pulse">道</span>
              </div>
              {/* Floating elements around */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-80"></div>
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

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-2 flex items-center justify-center md:justify-end space-x-2 text-sm">
              <span>🗾</span>
              <span>Navegação</span>
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-300 inline-flex items-center space-x-1 group text-sm cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <span className="text-red-400 text-xs font-light">道</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
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