
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 hero-bg-light dark:hero-bg-dark curved-section"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                John Doe
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              I'm a <span className="text-purple-500 font-semibold">Software Engineer</span> passionate about building 
              <span className="text-cyan-400 font-semibold"> clean</span> and 
              <span className="text-blue-500 font-semibold"> scalable</span> web apps.
            </p>
            
            <div className="flex justify-center space-x-4 pt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                View Projects
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-500 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Dotted Arrow pointing to v1 */}
        <div className="absolute bottom-16 right-16 hidden lg:block">
          <div className="relative">
            <svg 
              width="280" 
              height="120" 
              className="stroke-purple-500 dark:stroke-cyan-400"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            >
              {/* Dotted curved path */}
              <path 
                d="M20,100 Q80,40 140,60 Q200,80 260,40" 
                strokeDasharray="8,6"
                className="animate-draw-arrow opacity-80"
              />
              {/* Arrow head */}
              <polygon 
                points="250,35 265,40 250,45 255,40" 
                fill="currentColor"
                className="text-purple-500 dark:text-cyan-400 animate-pulse"
              />
              {/* Additional decorative dots */}
              <circle cx="50" cy="80" r="2" fill="currentColor" className="text-purple-400 animate-pulse" style={{animationDelay: '0.5s'}} />
              <circle cx="100" cy="50" r="2" fill="currentColor" className="text-blue-400 animate-pulse" style={{animationDelay: '1s'}} />
              <circle cx="150" cy="70" r="2" fill="currentColor" className="text-cyan-400 animate-pulse" style={{animationDelay: '1.5s'}} />
              <circle cx="200" cy="60" r="2" fill="currentColor" className="text-purple-400 animate-pulse" style={{animationDelay: '2s'}} />
            </svg>
            
            {/* Enhanced v1 badge */}
            <div className="absolute -bottom-8 right-0 bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
              <span className="flex items-center space-x-1">
                <span>✨</span>
                <span>v1</span>
                <span>✨</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
