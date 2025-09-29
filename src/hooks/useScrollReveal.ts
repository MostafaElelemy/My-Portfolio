import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.remove('opacity-0', 'translate-y-6')
      return
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0', 'translate-y-6')
          e.target.classList.add('opacity-100', 'translate-y-0')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options })

    el.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700')
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return ref
}
