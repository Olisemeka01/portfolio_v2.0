
import React, { useState } from 'react';

const TechLogos = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { name: 'GitHub', logo: '🐙', pun: "Let's Git in touch!" },
    { name: 'Vue.js', logo: '🟢', pun: "Nice to Vue you!" },
    { name: 'React', logo: '⚛️', pun: "Now that's a React-ion!" },
    { name: 'Node.js', logo: '🟩', pun: "Node doubt about it!" },
    { name: 'TailwindCSS', logo: '🎨', pun: "Styling made Swift!" },
    { name: 'TypeScript', logo: '🔷', pun: "Type-ing it right!" },
    { name: 'JavaScript', logo: '💛', pun: "Just Script it!" },
    { name: 'MongoDB', logo: '🍃', pun: "Mongo and get it!" },
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
                className="flex-shrink-0 mx-8 text-center cursor-pointer group"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center text-4xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:animate-glow">
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
