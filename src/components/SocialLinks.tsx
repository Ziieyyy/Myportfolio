import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const socials = [
  { 
    name: 'GitHub', 
    icon: Github, 
    href: 'https://github.com/Ziieyyy',
    color: 'hover:text-foreground'
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/khairul-azizi-512670391',
    color: 'hover:text-[#0077B5]'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: 'https://www.instagram.com/ziieyyy?igsh=djFibDR5MmYzbnk5',
    color: 'hover:text-[#E4405F]'
  },
  { 
    name: 'Facebook', 
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
      </svg>
    ), 
    href: 'https://www.facebook.com/KHAIRULAZIZIANUWAR/',
    color: 'hover:text-[#1877F2]'
  },
  { 
    name: 'WhatsApp', 
    icon: Phone, 
    href: 'https://wa.me/60166798900',
    color: 'hover:text-green-500'
  },
  { 
    name: 'Email', 
    icon: Mail, 
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=khairazizi@gmail.com',
    color: 'hover:text-red-500'
  },
];

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'social-icon',
              'text-muted-foreground',
              social.color
            )}
            style={{ animationDelay: `${index * 100}ms` }}
            aria-label={social.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}