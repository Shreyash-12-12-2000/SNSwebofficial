import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // slower = smoother glide
      easing: (t) => 1 - Math.pow(2, -10 * t), // very natural easing
      gestureDirection: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
      normalizeWheel: true,
    } as any);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
