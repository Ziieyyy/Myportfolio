import { useState, useEffect } from 'react';
import { ExternalLink, Calculator, Car, Banknote, Search, Globe, Moon, LayoutDashboard, Shield, Heart, Cat, MessageCircle, MapPin, ShoppingCart, Menu, User, History, Utensils, Award, X, ChevronLeft, ChevronRight, FileText, Lock, FolderOpen } from 'lucide-react';
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
  { icon: Menu, text: 'Browse menu' },
  { icon: ShoppingCart, text: 'Online ordering system' },
  { icon: ShoppingCart, text: 'Shopping cart' },
  { icon: User, text: 'User registration & login' },
  { icon: History, text: 'Order history' },
  { icon: LayoutDashboard, text: 'Admin dashboard' },
  { icon: Utensils, text: 'Menu management system' },
];

const restaurantTechStack = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setPassword('');
    setIsPasswordCorrect(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Azizi11!!') {
      setIsPasswordCorrect(true);
    }
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

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

                    {/* Certificate Button */}
                    <div className="mt-auto pt-2">
                      <button 
                        onClick={openModal}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        View Certificates
                        <Award className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 md:px-8 py-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Web & Mobile Platform
                  </span>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                      View Project
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
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
              <div className="project-card group h-full flex flex-col md:col-span-2">
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
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

        {/* Password Protected Link Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with slow fade-in */}
            <div 
              className="fixed inset-0 bg-black/50 transition-opacity duration-1000 ease-out"
              onClick={closeModal}
            ></div>
            
            {/* Modal Panel - Centered with slow zoom-in effect */}
            <div 
              className="relative bg-background border border-border rounded-lg max-w-md w-full shadow-xl z-10 transition-all duration-700 ease-out scale-90 opacity-0"
              style={{ 
                animation: 'slowZoomIn 0.7s forwards ease-out',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FolderOpen className="w-5 h-5" />
                  Access Certificates
                </h3>
                <button 
                  onClick={closeModal}
                  className="p-2 rounded-md hover:bg-accent transition-colors duration-300"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                {!isPasswordCorrect ? (
                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div className="bg-muted p-4 rounded-md flex flex-col items-center justify-center gap-4">
                      <Lock className="w-12 h-12 text-muted-foreground" />
                      <div className="text-center">
                        <h4 className="font-medium">Certificates Protected</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Enter password to access certificate folder
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="Enter password"
                      />
                    </div>
                    
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-4 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                      >
                        Access Folder
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-md flex flex-col items-center justify-center gap-4">
                      <FileText className="w-12 h-12 text-muted-foreground" />
                      <div className="text-center">
                        <h4 className="font-medium">Access Granted</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          You can now access the certificate folder
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <a 
                        href="https://drive.google.com/drive/folders/1SZND0caTwjHHlZDwR3mnKLtwEkrO_FY0?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                      >
                        <FolderOpen className="w-4 h-4" />
                        Open Certificate Folder
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Modal Footer */}
              <div className="p-4 border-t border-border flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Keyframes for slow motion effect */}
        <style>{`
          @keyframes slowZoomIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </section>
    </PageTransition>
  );
};

export default Projects;