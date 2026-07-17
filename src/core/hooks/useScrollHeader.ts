import { useState, useEffect, useRef } from 'react';

export const useScrollHeader = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);

  const lastScrollY = useRef(0);
  const rafId = useRef(0);

  useEffect(() => {
    /* Coalesce scroll events into one update per frame, and quantize progress
       to whole percentages — unchanged state values let React bail out of
       re-rendering the header on every scrolled pixel. */
    const update = () => {
      rafId.current = 0;
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > threshold);

      const viewportHeight = window.innerHeight;
      setProgress(Math.min(Math.round((currentScrollY / viewportHeight) * 100), 100));

      if (currentScrollY > lastScrollY.current) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setDirection('up');
      }

      lastScrollY.current = currentScrollY;
    };

    const handleScroll = () => {
      if (rafId.current === 0) {
        rafId.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Set initial state on mount
    update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [threshold]);

  return { isScrolled, progress, direction };
};
