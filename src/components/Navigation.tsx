
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-purple-200/20 dark:border-cyan-400/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
          John Doe
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:text-purple-500 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover:text-purple-500 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-purple-500 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            Contact
          </button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full hover:bg-purple-100 dark:hover:bg-cyan-900/20 border-2 border-transparent hover:border-purple-300 dark:hover:border-cyan-400/30 transition-all duration-300"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5 text-purple-600" />
          ) : (
            <Sun className="h-5 w-5 text-cyan-400" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
