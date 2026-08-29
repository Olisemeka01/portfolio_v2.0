import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'Frontend' | 'Backend' | 'Fullstack';
  status: 'Live' | 'In Progress';
  tagline: string;
  screenshot: string;
  liveLink: string | null;
  githubLink: string | null;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Wavy — Real-Time Collaboration App',
    category: 'Fullstack',
    status: 'Live',
    tagline:
      'A real-time collaboration app for creating workspaces, inviting members, and co-editing rich-text documents with role-based permissions and live updates.',
    screenshot: '/wavy.png',
    liveLink: 'https://wavy-theta.vercel.app/',
    githubLink: null,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Supabase', 'TipTap'],
  },
  {
    id: 2,
    title: 'Marketing Campaign Microsite',
    category: 'Frontend',
    status: 'Live',
    tagline:
      'A responsive microsite for marketing campaigns to showcase products and capture leads.',
    screenshot: '/microsite.png',
    liveLink: 'https://staging.microsite.kar2kash.com/',
    githubLink: null,
    technologies: ['Vue', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 3,
    title: 'NestJS Authentication API',
    category: 'Backend',
    status: 'Live',
    tagline:
      'A production-ready auth system with multiple login methods, role-based access control, and full audit logging.',
    screenshot: '/auth_system.jpg',
    liveLink: null,
    githubLink: 'https://github.com/Olisemeka01/Auth-system',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'JWT'],
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    category: 'Frontend',
    status: 'In Progress',
    tagline:
      'A unified dashboard for managing multiple social media accounts from one place.',
    screenshot:
      'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    liveLink: null,
    githubLink: null,
    technologies: ['Vue.js', 'Express', 'MongoDB'],
  },
  {
    id: 5,
    title: 'Code Refactoring AI',
    category: 'Backend',
    status: 'In Progress',
    tagline:
      'An AI-powered tool that analyzes, refactors, and optimizes code automatically.',
    screenshot:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    liveLink: null,
    githubLink: null,
    technologies: ['Python', 'FastAPI', 'Transformers'],
  },
];

/** Reveals an element once it scrolls into view. */
function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Soft ambient glow, echoes the hero */}
      <div className="pointer-events-none absolute inset-0 hero-bg-light dark:hero-bg-dark opacity-20" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            A fraction of what I've built
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From pixel-perfect frontends to robust backend systems — projects I've
            designed, engineered, and shipped.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} flip={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  flip: boolean;
}

const ProjectCard = ({ project, index, flip }: ProjectCardProps) => {
  const { ref, visible } = useReveal<HTMLElement>();
  const primaryLink = project.liveLink || project.githubLink;

  return (
    <article
      ref={ref}
      className={`group grid md:grid-cols-12 gap-8 lg:gap-14 items-center transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Screenshot */}
      <a
        href={primaryLink || undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={primaryLink ? `Open ${project.title}` : undefined}
        className={`md:col-span-7 block relative rounded-2xl overflow-hidden border border-border shadow-xl shadow-primary/5 cursor-pointer ${
          primaryLink ? '' : 'pointer-events-none'
        } ${flip ? 'md:order-2' : 'md:order-1'}`}
      >
        <img
          src={project.screenshot}
          alt={project.title}
          loading="lazy"
          className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Subtle sheen on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-transparent to-white/0 opacity-0 group-hover:from-primary/10 group-hover:to-white/10 transition-all duration-700" />

        {/* Status badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-md border border-border px-3 py-1.5 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            {project.status === 'Live' ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            )}
          </span>
          <span className="text-foreground">{project.status}</span>
        </div>
      </a>

      {/* Details */}
      <div className={`md:col-span-5 ${flip ? 'md:order-1' : 'md:order-2'}`}>
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
          {String(index + 1).padStart(2, '0')} · {project.category}
        </p>

        <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
          {project.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.tagline}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium rounded-full border border-border bg-muted/50 px-3 py-1 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-300"
            >
              Visit site
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              View code
            </a>
          )}

          {!project.liveLink && !project.githubLink && (
            <span className="text-sm text-muted-foreground italic">
              Currently in the works
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsSection;
