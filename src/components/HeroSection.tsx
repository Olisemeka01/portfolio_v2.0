import React from 'react';
import { Send } from 'lucide-react';
import pfp from '../assests/images/Vic-21.png'

const portfolioV1Url = import.meta.env.VITE_PORTFOLIO_V1_URL;

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 terminal-bg-light dark:terminal-bg-dark" aria-hidden="true" />
      {/* fade the grid into the page background so sections below start clean */}
      <div className="absolute inset-x-0 bottom-0 h-40 grid-fade" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-6 pt-36 pb-24 min-h-screen flex items-center">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center w-full">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="mono-label text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground [text-wrap:balance]">
                Olisemeka Onochie<span className="text-primary animate-blink motion-reduce:animate-none">_</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl [text-wrap:pretty]">
                Software engineer building clean, scalable web apps — from pixel to Postgres.
                Debugging is just another step along the way.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <span className="inline-flex items-center gap-2 border border-border rounded-md px-3 py-1.5 font-mono text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                  available for work
                </span>
                <span className="mono-label text-muted-foreground hidden sm:inline">
                  full-stack · vue / react / nestjs
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative animate-float motion-reduce:animate-none">
              {/* corner brackets */}
              <span className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" aria-hidden="true" />
              <span className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary" aria-hidden="true" />
              <span className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary" aria-hidden="true" />
              <span className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" aria-hidden="true" />
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-md overflow-hidden border border-border">
                <img
                  src={pfp}
                  alt="Olisemeka Onochie"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-center mono-label text-muted-foreground">
                <span className="text-primary">&gt;</span> me.png
              </p>
            </div>
          </div>
        </div>

        {/* Curved dotted trail with paper plane → v1 */}
        <div className="absolute bottom-16 right-16 hidden lg:block">
          <svg
            width="320"
            height="180"
            className="stroke-primary/60"
            viewBox="0 0 320 180"
            aria-hidden="true"
          >
            <path
              d="M30,150 Q60,120 90,130 Q140,140 180,100 Q220,60 260,80 Q290,100 300,60"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 8"
              className="animate-draw-trail motion-reduce:animate-none"
            />
          </svg>

          <div className="absolute top-8 right-0">
            <Send className="w-6 h-6 text-primary rotate-12 animate-float motion-reduce:animate-none" aria-hidden="true" />
          </div>

          <div className="absolute top-0 right-0 translate-x-1/2">
            <a
              href={portfolioV1Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-primary text-primary px-4 py-2 rounded-md font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              → view v1
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
