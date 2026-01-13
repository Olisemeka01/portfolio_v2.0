import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Globe, Server } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const urls = { marketingUrl: import.meta.env.VITE_MARKETING_URL};

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendProjects = [
    {
      id: 1,
      title: 'Marketing Campaign Microsite',
      status: 'Live',
      description: 'A responsive microsite for marketing campaigns to showcase products and capture leads',
      screenshot: './MIcrosite.png',
      liveLink: urls.marketingUrl,
      githubLink: null,
      technologies: ['Vue', 'Tailwind', 'Vite']
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      status: 'Coming Soon',
      description: 'Comprehensive dashboard for managing multiple social media accounts',
      screenshot: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      liveLink: null,
      githubLink: null,
      technologies: ['Vue.js', 'Express', 'MongoDB']
    },
  ];

  const backendProjects = [
    {
      id: 3,
      title: 'NestJS Authentication API',
      status: 'Live',
      description:'A comprehensive authentication and authorization API system built with NestJS, featuring multiple authentication methods, role-based access control (RBAC), and audit logging.',
      screenshot: './auth_system.jpg',
      liveLink: null,
      githubLink: 'https://github.com/Olisemeka01/Auth-system',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'JWT'],
      features: ['JWT Authentication', 'RBAC System', 'Audit Logs', 'API Documentation']
    },
    {
      id: 4,
      title: 'Code Refactoring AI',
      status: 'Coming Soon',
      description: 'AI-powered tool for automatic code refactoring and optimization',
      screenshot: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      liveLink: null,
      githubLink: null,
      technologies: ['Python', 'FastAPI', 'Transformers'],
      features: ['AI Analysis', 'Code Suggestions', 'Performance Optimization']
    },
  ];

  const currentProjects = activeTab === 'frontend' ? frontendProjects : backendProjects;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentProjects.length) % currentProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentSlide(0);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Projects
        </h2>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="frontend" className="gap-2">
              <Globe className="w-4 h-4" />
              Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="gap-2">
              <Server className="w-4 h-4" />
              Backend
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="mt-0">
            <ProjectCarousel
              projects={frontendProjects}
              currentSlide={currentSlide}
              onNextSlide={nextSlide}
              onPrevSlide={prevSlide}
              onGoToSlide={goToSlide}
            />
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <ProjectCarousel
              projects={backendProjects}
              currentSlide={currentSlide}
              onNextSlide={nextSlide}
              onPrevSlide={prevSlide}
              onGoToSlide={goToSlide}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface ProjectCarouselProps {
  projects: Array<{
    id: number;
    title: string;
    status: string;
    description: string;
    screenshot: string;
    liveLink: string | null;
    githubLink: string | null;
    technologies: string[];
    features?: string[];
  }>;
  currentSlide: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onGoToSlide: (index: number) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  currentSlide,
  onNextSlide,
  onPrevSlide,
  onGoToSlide,
}) => {
  return (
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
                      <Badge
                        variant={project.status === 'Live' ? 'default' : 'secondary'}
                        className={project.status === 'Live' ? 'bg-green-500/20 text-green-600 hover:bg-green-500/30' : ''}
                      >
                        {project.status}
                      </Badge>
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

                    {/* Features (for backend projects) */}
                    {project.features && project.features.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
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

                      {project.githubLink && (
                        <Button
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
                        </Button>
                      )}
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
        onClick={onPrevSlide}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={onNextSlide}
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
            onClick={() => onGoToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;