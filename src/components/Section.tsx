import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">{title}</h2>
        <div ref={ref} className="opacity-0 translate-y-6">
          {children}
        </div>
      </div>
    </section>
  )
}
