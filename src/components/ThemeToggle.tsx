import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark) || saved === null;
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative p-3 rounded-xl glass overflow-hidden',
        'transition-all duration-400 ease-smooth',
        'hover:scale-105 active:scale-95',
        'glow-hover'
      )}
      aria-label="Toggle theme"
    >
      {/* Background glow */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-500',
          isDark ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--glow-primary) / 0.15), transparent)',
        }}
      />

      {/* Icons container */}
      <div className="relative w-5 h-5">
        {/* Sun */}
        <Sun
          className={cn(
            'absolute inset-0 w-5 h-5 transition-all duration-500 ease-smooth',
            isDark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100 text-amber-500'
          )}
        />
        
        {/* Moon */}
        <Moon
          className={cn(
            'absolute inset-0 w-5 h-5 transition-all duration-500 ease-smooth',
            isDark
              ? 'rotate-0 scale-100 opacity-100 text-primary'
              : '-rotate-90 scale-0 opacity-0'
          )}
        />
      </div>

      {/* Pulse effect on click */}
      {isAnimating && (
        <span
          className="absolute inset-0 rounded-xl animate-ping bg-primary/20"
          style={{ animationDuration: '600ms', animationIterationCount: 1 }}
        />
      )}
    </button>
  );
}