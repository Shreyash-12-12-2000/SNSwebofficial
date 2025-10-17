import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // smooth glide duration
      easing: (t: number) => 1 - Math.pow(2, -10 * t), // natural easing
      smoothWheel: true,
      normalizeWheel: true,
      // Remove 'gestureDirection' and 'smoothTouch'
    } as any)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}

export default SmoothScrollProvider
