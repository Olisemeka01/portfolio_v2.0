import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { url } from 'inspector';
import { isNull } from 'util';

const urls = { marketingUrl: import.meta.env.VITE_MARKETING_URL};
const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    { 
      id: 1, 
      title: 'Marketing Campaign Microsite', 
      status: 'Live',
      description: 'A responsive microsite for marketing campaigns to showcase products and capture leads',
      screenshot: '/microsite.png' ,
      liveLink: urls.marketingUrl,
      githubLink: null,
      technologies: ['Vue', 'Tailwind', 'NestJS']
    },
    { 
      id: 2, 
      title: 'AI-Powered Daily Planner', 
      status: 'Coming Soon',
      description: 'Intelligent task scheduling with AI recommendations and priority management',
      screenshot: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      liveLink: null,
      githubLink: null,
      technologies: ['Next.js', 'OpenAI', 'PostgreSQL']
    },
    { 
      id: 3, 
      title: 'Social Media Dashboard', 
      status: 'Coming Soon',
      description: 'Comprehensive dashboard for managing multiple social media accounts',
      screenshot: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      liveLink: null,
      githubLink: null,
      technologies: ['Vue.js', 'Express', 'MongoDB']
    },
    { 
      id: 4, 
      title: 'Code Refactoring AI', 
      status: 'Coming Soon',
      description: 'AI-powered tool for automatic code refactoring and optimization',
      screenshot: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      liveLink: null,
      githubLink: null,
      technologies: ['Python', 'FastAPI', 'Transformers']
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Projects
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-2 border-dashed border-muted-foreground/30 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Screenshot Section */}
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img 
                          src={project.screenshot} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'Live' 
                              ? 'bg-green-500/20 text-green-600' 
                              : 'bg-black text-yellow-600'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Project Details */}
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-muted/50 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* Links */}
                        <div className="flex items-center gap-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            asChild={!!project.liveLink}
                            disabled={!project.liveLink}
                          >
                            {project.liveLink ? (
                              <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                              </a>
                            ) : (
                              <>
                                <ExternalLink className="w-4 h-4" />
                                Coming Soon
                              </>
                            )}
                          </Button>
                          
                          {/* <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2"
                            asChild
                          >
                            <a 
                              href={project.githubLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              View Code
                            </a>
                          </Button> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;