import React, { useState, useRef } from 'react';
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
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: 'GitHub', icon: icons.siGithub, pun: "Let's Git in touch!", color: '#181717' },
    { name: 'Git', icon: icons.siGit, pun: "Git-er done!", color: '#F05032' },
    { name: 'TypeScript', icon: icons.siTypescript, pun: "Type-ing it right!", color: '#3178C6' },
    { name: 'JavaScript', icon: icons.siJavascript, pun: "Just Script it!", color: '#F7DF1E' },
    { name: 'Vue.js', icon: icons.siVuedotjs, pun: "Nice to Vue you!", color: '#4FC08D' },
    { name: 'Quasar', icon: icons.siQuasar, pun: "Quantum leap!", color: '#0AA1DD' },
    { name: 'React', icon: icons.siReact, pun: "Now that's a React-ion!", color: '#61DAFB' },
    { name: 'NestJs', icon: icons.siNestjs, pun: "Nest-egg of code!", color: '#E0234E' },
    { name: 'Appsmith', icon: icons.siAppsmith, pun: "Smithing apps!", color: '#F6A21E' },
    { name: 'Postgres', icon: icons.siPostgresql, pun: "Post with the most!", color: '#4169E1' },
  ];

  // Handle hover to pause animation
  const handleMouseEnter = (techName: string) => {
    setHoveredTech(techName);
    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <p className="mono-label text-muted-foreground text-center mb-2">
          <span className="text-primary">//</span> stack
        </p>
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground tracking-tight">
          Technologies &amp; Tools
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" aria-hidden="true"></div>

          <div
            ref={scrollingContainerRef}
            className="flex w-max animate-scroll motion-reduce:animate-none"
            onMouseEnter={() => {
              if (scrollingContainerRef.current) {
                scrollingContainerRef.current.style.animationPlayState = 'paused';
              }
            }}
            onMouseLeave={() => {
              if (scrollingContainerRef.current && !hoveredTech) {
                scrollingContainerRef.current.style.animationPlayState = 'running';
              }
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-8 text-center cursor-pointer"
                onMouseEnter={() => handleMouseEnter(tech.name)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Tech icon container with joke space */}
                <div className="relative pb-16">
                  {/* Arrow indicator */}
                  {hoveredTech === tech.name && (
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 z-10">
                      <svg width="40" height="30" viewBox="0 0 40 30" className="stroke-primary" aria-hidden="true">
                        <path
                          d="M20,25 Q15,15 20,5"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          style={{
                            strokeDasharray: 100,
                            strokeDashoffset: 0,
                            animation: 'draw-arrow 0.3s ease-out forwards'
                          }}
                        />
                        <polygon
                          points="18,7 20,5 22,7"
                          fill="currentColor"
                          className="text-primary"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Tech icon */}
                  <div
                    className="w-20 h-20 rounded-md flex items-center justify-center border-2 transition-colors duration-200 hover:scale-[1.06] motion-reduce:hover:scale-100"
                    style={{
                      backgroundColor: hoveredTech === tech.name ? 'white' : 'hsl(var(--card))',
                      borderColor: hoveredTech === tech.name ? tech.color : 'hsl(var(--border))',
                      filter: hoveredTech === tech.name ? 'none' : 'grayscale(100%)'
                    }}
                  >
                    <Icon
                      icon={tech.icon}
                      size={32}
                      color={hoveredTech === tech.name ? tech.color : undefined}
                    />
                  </div>

                  {/* Tech name */}
                  <p className="mt-3 font-mono text-sm text-muted-foreground">
                    {tech.name}
                  </p>

                  {/* Joke text - positioned below with reserved space */}
                  <div
                    className={`absolute top-full left-0 w-full mt-4 transition-all duration-200 ${
                      hoveredTech === tech.name
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="border border-border bg-card px-4 py-2 rounded-md mx-auto max-w-xs">
                      <p className="font-mono text-sm text-center text-foreground">
                        <span className="text-primary">$ </span>"{tech.pun}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechLogos;
