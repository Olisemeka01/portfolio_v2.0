import React from 'react';
import { Send } from 'lucide-react';
import pfp from '../assests/images/pfp_1.png'; // Import the image


const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 hero-bg-light dark:hero-bg-dark curved-section"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Olisemeka Onochie
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              I'm a Software Engineer passionate about building clean, scalable web apps — because the right vibe while coding isn’t just a mood, it’s a productivity hack and debugging’s just part of the rhythm.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                <img 
                  src={pfp}
                  alt="Olisemeka Onochie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved dotted trail with paper plane */}
        <div className="absolute bottom-20 right-20 hidden lg:block">
          <svg 
            width="320" 
            height="180" 
            className="stroke-primary/60"
            viewBox="0 0 320 180"
          >
            {/* Curved dotted path with more dramatic curl */}
            <path 
              d="M30,150 Q60,120 90,130 Q140,140 180,100 Q220,60 260,80 Q290,100 300,60" 
              fill="none" 
              strokeWidth="3" 
              strokeLinecap="round"
              strokeDasharray="6 8"
              className="animate-draw-trail"
            />
          </svg>
          
          {/* Paper plane pointing at v1 */}
          <div className="absolute top-8 right-0">
            <Send 
              className="w-7 h-7 text-primary transform rotate-12 animate-float" 
            />
          </div>
          
          {/* v1 label - moved further right and added link */}
          <div className="absolute top-0 right-0 transform translate-x-1/2">
            <a 
              href="https://portfolio-ot01.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-primary/90 transition-colors animate-pulse"
            >
              Portfolio V1
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;