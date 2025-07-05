
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TechLogos from '../components/TechLogos';
import ContactSection from '../components/ContactSection';
import ProjectsSection from '../components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <TechLogos />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
