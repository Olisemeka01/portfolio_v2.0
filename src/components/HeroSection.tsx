
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 hero-bg-light dark:hero-bg-dark curved-section"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                John Doe
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                I'm a Software Engineer passionate about building clean and scalable web apps.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Improved Arrow pointing to v1 */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <svg 
            width="220" 
            height="120" 
            className="stroke-primary"
            style={{ strokeDasharray: '8 4', strokeDashoffset: '0' }}
          >
            <path 
              d="M20,20 Q120,60 200,100" 
              fill="none" 
              strokeWidth="3" 
              strokeLinecap="round"
              className="animate-draw-arrow"
            />
            <polygon 
              points="195,95 205,100 195,105" 
              fill="currentColor"
              className="text-primary"
            />
          </svg>
          <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            v1
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
