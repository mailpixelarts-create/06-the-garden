import { useEffect, RefObject } from 'react';

interface UseScrollTriggerOptions {
  threshold?: number;
  rootMargin?: string;
  onEnter?: () => void;
  onLeave?: () => void;
}

export const useScrollTrigger = (
  ref: RefObject<HTMLElement>,
  options: UseScrollTriggerOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', onEnter, onLeave } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            onEnter?.();
          } else {
            onLeave?.();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, onEnter, onLeave]);
};
