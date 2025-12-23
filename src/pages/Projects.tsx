import { useState, useEffect } from 'react';
import { ExternalLink, Calculator, Car, Banknote, Search, Globe, Moon, LayoutDashboard, Shield, Heart, Cat, MessageCircle, MapPin, ShoppingCart, Menu, User, History, Utensils, Award, X, ChevronLeft, ChevronRight, FileText, Lock, FolderOpen, Clock, BarChart3 } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

// BreedLink data
const breedLinkFeatures = [
  { icon: Cat, text: 'Cat profile creation' },
  { icon: Heart, text: 'Swipe & match system' },
  { icon: MessageCircle, text: 'Real-time chat' },
  { icon: MapPin, text: 'Geo-location search' },
  { icon: Shield, text: 'Vet verification' },
  { icon: LayoutDashboard, text: 'Admin dashboard' },
];

const breedLinkTechStack = ['React', 'Supabase', 'HTML', 'CSS', 'JavaScript'];

// Auto Finance Calculator data
const afcFeatures = [
  { icon: Car, text: 'Browse vehicles' },
  { icon: Calculator, text: 'Loan calculator' },
  { icon: Banknote, text: 'Bank comparison' },
  { icon: Search, text: 'Search & filter system' },
  { icon: Globe, text: 'Multi-language support' },
  { icon: Moon, text: 'Dark mode' },
  { icon: LayoutDashboard, text: 'Admin dashboard' },
];

const afcTechStack = ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'];

// Burung Hantu Western Restaurant data
const restaurantFeatures = [
  { icon: Menu, text: 'Menu browsing' },
  { icon: ShoppingCart, text: 'Online orders' },
  { icon: ShoppingCart, text: 'Cart' },
  { icon: User, text: 'User login' },
];

const restaurantTechStack = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'];

// myEasyAssets data
const easyAssetsFeatures = [
  { icon: LayoutDashboard, text: 'Real-time asset tracking' },
  { icon: Calculator, text: 'Automated depreciation calculation' },
  { icon: Clock, text: 'Maintenance scheduling & reminders' },
  { icon: BarChart3, text: 'Interactive dashboards & analytics' },
  { icon: Shield, text: 'Secure authentication & multi-company support' },
];

const easyAssetsTechStack = ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn-ui'];

const Projects = () => {


  return (
    <PageTransition>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="fade-up text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                My <span className="text-gradient">Projects</span>
              </h1>
              <p className="fade-up-delay-1 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Showcasing my work and the projects I've built.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up-delay-2">
              {/* myEasyAssets Project Card */}
              <div className="project-card group h-full flex flex-col">
                {/* Project Header */}
                <div className="relative p-6 md:p-8 overflow-hidden flex-grow">
                  {/* Background gradient */}
                  <div 
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--glow-primary) / 0.2) 0%, hsl(var(--glow-secondary) / 0.1) 100%)',
                    }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Featured badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Featured Project
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                      myEasyAssets
                    </h2>

                    {/* Description */}
                    <p className="text-base text-muted-foreground mb-4 flex-grow">
                      A modern, professional asset management and tracking system designed to help organizations efficiently manage, monitor, and analyze their assets in real time.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {easyAssetsFeatures.slice(0, 4).map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div
                            key={feature.text}
                            className="flex items-center gap-2 p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                          >
                            <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs text-foreground/80">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {easyAssetsTechStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 md:px-8 py-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Asset Management Platform
                  </span>
                  <a 
                    href="https://myeassy-assets.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* BreedLink Project Card */}
              <div className="project-card group h-full flex flex-col">
                {/* Project Header */}
                <div className="relative p-6 md:p-8 overflow-hidden flex-grow">
                  {/* Background gradient */}
                  <div 
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--glow-primary) / 0.2) 0%, hsl(var(--glow-secondary) / 0.1) 100%)',
                    }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Featured badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Featured Project
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                      BreedLink
                    </h2>

                    {/* Description */}
                    <p className="text-base text-muted-foreground mb-4 flex-grow">
                      A modern cat dating web and mobile platform that helps cat owners and breeders 
                      find ideal matches for their beloved felines. Connecting cats, one match at a time.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {breedLinkFeatures.slice(0, 4).map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div
                            key={feature.text}
                            className="flex items-center gap-2 p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                          >
                            <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs text-foreground/80">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {breedLinkTechStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>


                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 md:px-8 py-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Web & Mobile Platform
                  </span>
                  <a 
                    href="https://drive.google.com/drive/folders/159jCqEIkYN_TYHxIoY-FF3i3eVeHXCPa?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Auto Finance Calculator Project Card */}
              <div className="project-card group h-full flex flex-col">
                {/* Project Header */}
                <div className="relative p-6 md:p-8 overflow-hidden flex-grow">
                  {/* Background gradient */}
                  <div 
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--glow-secondary) / 0.2) 0%, hsl(var(--glow-primary) / 0.1) 100%)',
                    }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                      Auto Finance Calculator
                    </h2>

                    {/* Description */}
                    <p className="text-base text-muted-foreground mb-4 flex-grow">
                      A modern web application that helps users compare car loan rates from multiple Malaysian banks. Designed to make vehicle financing decisions simple, fast, and transparent.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {afcFeatures.slice(0, 4).map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div
                            key={feature.text}
                            className="flex items-center gap-2 p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                          >
                            <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs text-foreground/80">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                      {afcTechStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 md:px-8 py-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Web Platform
                  </span>
                  <a 
                    href="https://autofinancecalculator.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Burung Hantu Western Restaurant Project Card */}
              <div className="project-card group h-full flex flex-col">
                {/* Project Header */}
                <div className="relative p-6 md:p-8 overflow-hidden flex-grow">
                  {/* Background gradient */}
                  <div 
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--accent) / 0.2) 0%, hsl(var(--glow-secondary) / 0.1) 100%)',
                    }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                      Burung Hantu Western Restaurant
                    </h2>

                    {/* Description */}
                    <p className="text-base text-muted-foreground mb-4 flex-grow">
                      A modern web-based restaurant commerce system that allows customers to browse menus, place orders, and manage their profiles, while enabling administrators to manage menu items, orders, and customer data efficiently.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {restaurantFeatures.slice(0, 4).map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div
                            key={feature.text}
                            className="flex items-center gap-2 p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                          >
                            <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs text-foreground/80">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                      {restaurantTechStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 md:px-8 py-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Web Platform
                  </span>
                  <a 
                    href="https://burunghantuwestern.wasmer.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* More Projects Note */}
            <div className="fade-up-delay-3 mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass">
                <span className="text-sm text-muted-foreground">
                  More projects coming soon as I continue to learn and build
                </span>
              </div>
            </div>
          </div>
        </div>



      </section>
    </PageTransition>
  );
};

export default Projects;