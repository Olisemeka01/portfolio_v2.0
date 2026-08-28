
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from './ui/button';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:onochieemeka2@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/onochie-olisemeka-068960294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      href: 'https://wa.me/2349042407534?text=Hi%20there%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out.',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="mono-label text-muted-foreground mb-2">
          <span className="text-primary">~/contact</span> <span className="text-primary">$</span>
        </p>
        <h2 className="text-4xl font-bold mb-6 text-foreground tracking-tight">
          Open a connection
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed [text-wrap:pretty]">
          Have a project in mind, or just want to talk shop? My inbox is always
          open — pick a channel below.
        </p>

        <Button
          size="lg"
          asChild
          className="mb-12 font-mono text-base px-8 py-6 rounded-md"
        >
          <a
            href="mailto:onochieemeka2@gmail.com"
            className="inline-flex items-center gap-2"
          >
            <span aria-hidden="true">$</span> send email
          </a>
        </Button>

        <div className="flex flex-wrap justify-center gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group flex flex-col items-center gap-3 p-4 rounded-md border border-transparent hover:border-border hover:bg-card transition-colors duration-200 focus-visible:border-primary"
            >
              <span className="w-14 h-14 rounded-md border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors duration-200">
                <link.icon className="w-6 h-6" />
              </span>
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-16 mono-label text-muted-foreground">
          <span className="text-primary">$</span> exit 0 — thanks for scrolling
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
