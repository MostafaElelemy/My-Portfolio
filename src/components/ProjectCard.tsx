import type { Project } from '@/types/project'
import { ExternalLink, Github } from 'lucide-react'

export function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 p-5 hover:shadow-xl hover:-translate-y-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
      {p.image && <img src={p.image} alt="" loading="lazy" className="mb-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60" />}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">{p.category}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.demoUrl && (
        <a
          className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          href={p.demoUrl}
          onClick={(e) => {
            const url = new URL(p.demoUrl!, window.location.origin)
            if (url.origin === window.location.origin) {
              e.preventDefault()
              history.pushState({}, '', url.toString())
              window.dispatchEvent(new Event('popstate'))
            }
          }}
        >
          <ExternalLink size={16}/> Live Demo
        </a>
      )}
        {p.repoUrl && <a className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500" href={p.repoUrl} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>}
        {p.caseStudyUrl && <a className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-brand-500 text-brand-600 hover:bg-brand-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500" href={p.caseStudyUrl} target="_blank" rel="noreferrer">Case Study</a>}
      </div>
    </div>
  )
}
