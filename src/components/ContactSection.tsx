
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:john.doe@example.com',
      color: 'hover:text-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/johndoe',
      color: 'hover:text-blue-600'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-foreground">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
        </p>
        
        <Button 
          size="lg" 
          className="mb-12 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Contact Me
        </Button>
        
        <div className="flex justify-center space-x-8">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-card transition-all duration-300 ${link.color}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <link.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
