
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    { id: 1, title: 'E-Commerce Platform', status: 'Coming Soon' },
    { id: 2, title: 'Task Management App', status: 'Coming Soon' },
    { id: 3, title: 'Social Media Dashboard', status: 'Coming Soon' },
    { id: 4, title: 'Weather Forecast App', status: 'Coming Soon' },
    { id: 5, title: 'Portfolio Website', status: 'Coming Soon' },
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
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-2 border-dashed border-muted-foreground/30 h-80">
                    <CardContent className="flex flex-col items-center justify-center h-full text-center space-y-6">
                      <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {project.status}
                      </p>
                      <div className="w-16 h-1 bg-primary/30 rounded-full">
                        <div className="w-1/3 h-full bg-primary rounded-full animate-pulse"></div>
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
