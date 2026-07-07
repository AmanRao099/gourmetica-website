import { useState, useEffect, useRef } from 'react';

export const useScrollHeader = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled beyond threshold
      setIsScrolled(currentScrollY > threshold);
      
      // Calculate scroll progress (percentage of viewport height, max 100)
      const viewportHeight = window.innerHeight;
      const calculatedProgress = Math.min((currentScrollY / viewportHeight) * 100, 100);
      setProgress(calculatedProgress);
      
      // Determine direction
      if (currentScrollY > lastScrollY.current) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call handler immediately on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isScrolled, progress, direction };
};
