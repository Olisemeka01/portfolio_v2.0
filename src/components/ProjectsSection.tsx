import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Globe, Server } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const urls = { marketingUrl: import.meta.env.VITE_MARKETING_URL };

interface Project {
  id: number;
  title: string;
  status: string;
  description: string;
  screenshot: string;
  liveLink: string | null;
  githubLink: string | null;
  technologies: string[];
  features?: string[];
}

const frontendProjects: Project[] = [
  {
    id: 1,
    title: 'Marketing Campaign Microsite',
    status: 'Live',
    description: 'A responsive microsite for marketing campaigns — showcasing products and capturing leads with a fast, conversion-first build.',
    screenshot: './microsite.png',
    liveLink: urls.marketingUrl,
    githubLink: null,
    technologies: ['Vue', 'Tailwind', 'Vite']
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    status: 'Coming Soon',
    description: 'A single control room for multiple social accounts — scheduling, analytics and inbox management in one place.',
    screenshot: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    liveLink: null,
    githubLink: null,
    technologies: ['Vue.js', 'Express', 'MongoDB']
  },
];

const backendProjects: Project[] = [
  {
    id: 3,
    title: 'NestJS Authentication API',
    status: 'Live',
    description: 'An authentication and authorization API built with NestJS — multiple login methods, role-based access control and audit logging out of the box.',
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
    description: 'An AI-assisted tool that reviews code and proposes refactorings — cleaner structure and faster hot paths, with the diff to prove it.',
    screenshot: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    liveLink: null,
    githubLink: null,
    technologies: ['Python', 'FastAPI', 'Transformers'],
    features: ['AI Analysis', 'Code Suggestions', 'Performance Optimization']
  },
];

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('frontend');

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
    <section id="projects" className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <p className="mono-label text-muted-foreground text-center mb-2">
          <span className="text-primary">//</span> selected work
        </p>
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground tracking-tight">
          Projects
        </h2>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 font-mono text-sm">
            <TabsTrigger value="frontend" className="gap-2">
              <Globe className="w-4 h-4" aria-hidden="true" />
              frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="gap-2">
              <Server className="w-4 h-4" aria-hidden="true" />
              backend
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
  projects: Project[];
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
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 48) return;
    if (deltaX < 0) {
      onNextSlide();
    } else {
      onPrevSlide();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      onNextSlide();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      onPrevSlide();
    }
  };

  return (
    <div
      className="relative max-w-4xl mx-auto"
      role="group"
      aria-roledescription="carousel"
      aria-label="Project previews"
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
            >
              <article>
                {/* Screenshot Section */}
                <div className="relative h-56 md:h-72 overflow-hidden border-b border-border">
                  <img
                    src={project.screenshot}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 motion-reduce:hover:scale-100"
                  />
                  <span className="absolute bottom-3 left-3 font-mono text-xs bg-background/90 text-foreground border border-border rounded-md px-2 py-1">
                    {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                  <span
                    className={`absolute top-3 right-3 inline-flex items-center gap-1.5 font-mono text-xs rounded-md px-2 py-1 border ${
                      project.status === 'Live'
                        ? 'border-primary/40 bg-background/90 text-primary'
                        : 'border-border bg-background/90 text-muted-foreground'
                    }`}
                  >
                    <span aria-hidden="true">{project.status === 'Live' ? '●' : '◌'}</span>
                    {project.status === 'Live' ? 'live' : 'coming soon'}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed [text-wrap:pretty]">
                    {project.description}
                  </p>

                  {/* Features (for backend projects) */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-4">
                      <p className="font-mono text-sm font-medium text-foreground mb-2">key features:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="outline"
                            className="font-mono text-xs rounded-md"
                          >
                            [{feature}]
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs rounded-md"
                      >
                        [{tech}]
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.liveLink ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 font-mono text-sm"
                        asChild
                      >
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          open live →
                        </a>
                      </Button>
                    ) : (
                      <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground border border-border rounded-md px-3 h-9 opacity-70">
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        coming soon
                      </span>
                    )}

                    {project.githubLink && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 font-mono text-sm"
                        asChild
                      >
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                          view code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        aria-label="Previous project"
        className="absolute left-3 top-1/3 -translate-y-1/2 rounded-full bg-background"
        onClick={onPrevSlide}
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        aria-label="Next project"
        className="absolute right-3 top-1/3 -translate-y-1/2 rounded-full bg-background"
        onClick={onNextSlide}
      >
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
      </Button>

      {/* Progress bar + counter */}
      <div className="flex items-center gap-4 mt-8 max-w-xs mx-auto">
        <div
          className="flex-1 h-1 rounded-full bg-muted overflow-hidden"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={projects.length}
          aria-valuenow={currentSlide + 1}
          aria-label="Slide position"
        >
          <div
            className="h-full bg-primary rounded-full transition-[width] duration-300"
            style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }}
          />
        </div>
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {String(currentSlide + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </div>
      <div className="sr-only" aria-live="polite">
        Slide {currentSlide + 1} of {projects.length}: {projects[currentSlide]?.title}
      </div>
    </div>
  );
};

export default ProjectsSection;
