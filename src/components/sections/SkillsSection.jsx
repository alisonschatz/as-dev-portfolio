import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SkillsSection = ({ isVisible }) => {
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

  // Auto-advance carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="skills" className={`py-20 px-4 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} overflow-hidden`}>
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
  );
};

export default SkillsSection;