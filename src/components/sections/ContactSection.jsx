import React, { useState } from 'react';
import { ExternalLink, Github, Mail, Linkedin, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = ({ isVisible }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      subtitle: 'Resposta em até 24h',
      value: 'alisonschatz1@gmail.com',
      href: 'mailto:alisonschatz1@gmail.com',
      gradient: 'from-red-500 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50',
      description: 'Melhor forma de entrar em contato para projetos e oportunidades'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'Vamos nos conectar',
      value: '/in/alison-schatz',
      href: 'https://linkedin.com/in/alison-schatz/',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      description: 'Networking profissional e atualizações de carreira'
    },
    {
      id: 'github',
      icon: Github,
      title: 'GitHub',
      subtitle: 'Código e projetos',
      value: '@alisonschatz',
      href: 'https://github.com/alisonschatz',
      gradient: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-50 to-slate-50',
      description: 'Repositórios, contribuições e projetos open source'
    }
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Blumenau, SC - Brasil',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Clock,
      label: 'Fuso Horário',
      value: 'UTC-3 (Brasília)',
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <section id="contact" className={`py-16 px-4 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background limpo */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/contact_back.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-85"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-transparent to-red-900/40"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-20">
        {/* Header com estilo japonês */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white relative">
            <span className="relative">
              Vamos Conversar
              {/* Japanese character for "connection/relationship" */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-red-300 text-3xl opacity-60">繋</div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-red-500 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mt-6">
            Pronto para transformar ideias em realidade digital? Entre em contato para discutirmos seu próximo projeto.
          </p>
        </div>
        
        {/* Cards de contato principais */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                className="group relative h-80"
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl transform-gpu overflow-hidden h-full"
                >
                  {/* Icon container */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-slate-300 text-sm mb-3">{method.subtitle}</p>
                    <p className="text-white font-semibold text-base mb-3 break-words overflow-hidden">{method.value}</p>
                    <p className="text-slate-400 text-xs leading-relaxed flex-1">{method.description}</p>
                  </div>

                  {/* Hover indicator */}
                  <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100`}>
                    <div className={`w-8 h-8 bg-gradient-to-br ${method.gradient} rounded-lg flex items-center justify-center`}>
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Bottom accent - corrigido para não estourar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Informações adicionais - mais discretas */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto mb-8">
          {additionalInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={info.label}
                className="flex items-center space-x-2 text-slate-300 text-sm"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <Icon size={14} className="text-slate-400" />
                <span>{info.value}</span>
              </div>
            );
          })}
        </div>

        {/* Call to action compacto */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-3 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-white">Pronto para começar?</h3>
            <p className="text-slate-300 text-sm">
              Vamos criar algo extraordinário juntos.
            </p>
            
            <a
              href="https://wa.me/5547992935133"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl transform-gpu"
            >
              <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;