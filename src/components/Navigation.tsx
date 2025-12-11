import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth',
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-6">
        <div
          className={cn(
            'glass rounded-2xl px-6 py-4 transition-all duration-500 shadow-subtle',
            isScrolled && 'shadow-elevated'
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-gradient"
            >
              KA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-all duration-300',
                    'hover:text-primary',
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                  {/* Active indicator */}
                  <span
                    className={cn(
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full',
                      'transition-all duration-300 ease-smooth',
                      location.pathname === item.path ? 'w-4 opacity-100' : 'w-0 opacity-0'
                    )}
                  />
                  {/* Glow effect for active */}
                  {location.pathname === item.path && (
                    <span className="absolute inset-0 rounded-lg bg-primary/5 -z-10" />
                  )}
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl glass transition-all duration-300 hover:scale-105"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <span
                    className={cn(
                      'absolute left-0 block w-5 h-0.5 bg-foreground transition-all duration-300',
                      isMobileMenuOpen ? 'top-2 rotate-45' : 'top-1'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute left-0 top-2 block w-5 h-0.5 bg-foreground transition-all duration-300',
                      isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute left-0 block w-5 h-0.5 bg-foreground transition-all duration-300',
                      isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-3'
                    )}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              'md:hidden overflow-hidden transition-all duration-500 ease-smooth',
              isMobileMenuOpen ? 'max-h-80 mt-4 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="flex flex-col gap-1 pt-4 border-t border-border/50">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={cn(
                    'px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300',
                    'hover:bg-primary/5 hover:text-primary',
                    location.pathname === item.path
                      ? 'text-primary bg-primary/5'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
