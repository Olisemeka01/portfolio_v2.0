
import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

const TechLogos = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { name: 'GitHub', logo: '🐙', pun: "Let's Git in touch!", color: '#333' },
    { name: 'Vue.js', logo: '🟢', pun: "Nice to Vue you!", color: '#4FC08D' },
    { name: 'React', logo: '⚛️', pun: "Now that's a React-ion!", color: '#61DAFB' },
    { name: 'Node.js', logo: '🟩', pun: "Node doubt about it!", color: '#68A063' },
    { name: 'TailwindCSS', logo: '🎨', pun: "Styling made Swift!", color: '#06B6D4' },
    { name: 'TypeScript', logo: '🔷', pun: "Type-ing it right!", color: '#3178C6' },
    { name: 'JavaScript', logo: '💛', pun: "Just Script it!", color: '#F7DF1E' },
    { name: 'MongoDB', logo: '🍃', pun: "Mongo and get it!", color: '#47A248' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Technologies & Tools
        </h2>
        
        <div className="scroll-container overflow-hidden">
          <div className="scroll-content flex animate-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 text-center cursor-pointer group relative"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Curved arrow on hover */}
                {hoveredTech === tech.name && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-fade-in">
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
                  {tech.logo}
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
    </section>
  );
};

export default TechLogos;
