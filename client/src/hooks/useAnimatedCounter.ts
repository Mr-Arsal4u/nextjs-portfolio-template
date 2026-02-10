import { useState, useEffect, useRef } from "react";

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  startOnView?: boolean;
  delay?: number;
}

export function useAnimatedCounter({
  end,
  duration = 2000,
  startOnView = true,
  delay = 0,
}: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView || hasStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setTimeout(() => {
              setHasStarted(true);
            }, delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted, delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(startValue + (end - startValue) * easeOut);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref: elementRef };
}
