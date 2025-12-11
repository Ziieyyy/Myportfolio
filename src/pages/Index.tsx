import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { TypewriterText } from '@/components/TypewriterText';
import { SocialLinks } from '@/components/SocialLinks';

const Index = () => {
  return (
    <PageTransition>
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div 
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-30 animate-float-slow"
            style={{
              background: 'radial-gradient(circle, hsl(var(--glow-primary) / 0.4) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-20 animate-float"
            style={{
              background: 'radial-gradient(circle, hsl(var(--glow-secondary) / 0.4) 0%, transparent 70%)',
              animationDelay: '-3s',
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 60%)',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 mb-12 rounded-full glass text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="text-foreground">Khairul</span>{' '}
              <span className="text-gradient">Azizi</span>
            </h1>

            {/* Title */}
            <p className="fade-up-delay-2 text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12">
              Diploma in Information Technology | Web Developer
            </p>

            {/* Typewriter tagline */}
            <div className="fade-up-delay-3 min-h-[3rem] mb-16">
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light">
                <TypewriterText 
                  text="I build clean, functional, and user-friendly web applications."
                  delay={40}
                />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <Link to="/projects" className="btn-primary group flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="fade-up-delay-4">
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;