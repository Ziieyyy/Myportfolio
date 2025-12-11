import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TypewriterText({ text, delay = 50, className }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className={cn('inline-block', className)}>
      {displayText}
      <span
        className={cn(
          'inline-block w-0.5 h-[1.1em] ml-1 bg-primary align-middle',
          isComplete ? 'animate-pulse' : 'animate-[blink_0.8s_ease-in-out_infinite]'
        )}
        style={{
          animation: isComplete ? 'pulse 2s ease-in-out infinite' : 'blink 0.8s ease-in-out infinite',
        }}
      />
    </span>
  );
}
