import React, { useState } from 'react';
import * as icons from 'simple-icons/icons';

const Icon = ({ icon, size = 24, color, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color || `#${icon.hex}`}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    dangerouslySetInnerHTML={{ __html: icon.svg }}
  />
);

const TechLogos = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { name: 'GitHub', icon: icons.siGithub, pun: "Let's Git in touch!", color: '#181717' },
    { name: 'Git', icon: icons.siGit, pun: "Git-er done!", color: '#F05032' },
    { name: 'TypeScript', icon: icons.siTypescript, pun: "Type-ing it right!", color: '#3178C6' },
    { name: 'JavaScript', icon: icons.siJavascript, pun: "Just Script it!", color: '#F7DF1E' },
    { name: 'Vue.js', icon: icons.siVuedotjs, pun: "Nice to Vue you!", color: '#4FC08D' },
    { name: 'Quasar', icon: icons.siQuasar, pun: "Quantum leap!", color: '#050A14' },
    { name: 'React', icon: icons.siReact, pun: "Now that's a React-ion!", color: '#61DAFB' },
    { name: 'NestJs', icon: icons.siNestjs, pun: "Nest-egg of code!", color: '#E0234E' },
    { name: 'Appsmith', icon: icons.siAppsmith, pun: "Smithing apps!", color: '#2A2F3D' },
    { name: 'Postgres', icon: icons.siPostgresql, pun: "Post with the most!", color: '#4169E1' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Technologies & Tools
        </h2>
        
        <div className="relative overflow-hidden group">
          {/* Gradient fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div 
            className="flex w-max"
            style={{
              animation: 'scroll 20s linear infinite',
              willChange: 'transform'
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-8 text-center cursor-pointer group relative"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {hoveredTech === tech.name && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-fade-in z-20">
                    <svg width="40" height="30" viewBox="0 0 40 30" className="stroke-primary">
                      <path 
                        d="M20,25 Q15,15 20,5" 
                        fill="none" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        className="animate-draw-arrow"
                      />
                      <polygon 
                        points="18,7 20,5 22,7" 
                        fill="currentColor"
                        className="text-primary"
                      />
                    </svg>
                  </div>
                )}
                
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:animate-glow"
                  style={{
                    backgroundColor: hoveredTech === tech.name ? 'white' : 'hsl(var(--background))',
                    border: `2px solid ${hoveredTech === tech.name ? tech.color : 'hsl(var(--border))'}`,
                    filter: hoveredTech === tech.name ? 'none' : 'grayscale(100%)'
                  }}
                >
                  <Icon icon={tech.icon} size={32} color={hoveredTech === tech.name ? tech.color : undefined} />
                </div>
                <p className="mt-3 font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </p>
                {hoveredTech === tech.name && (
                  <p className="mt-2 text-primary font-medium text-sm animate-float">
                    {tech.pun}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .group:hover .flex {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechLogos;