import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectFilters } from '@/components/ProjectFilters'
import { Skills } from '@/components/Skills'
import { ContactForm } from '@/components/ContactForm'
import { Testimonials } from '@/components/Testimonials'
import { PerfBadge } from '@/components/PerfBadge'
import { ScrollReveal } from '@/components/ScrollReveal'
import { useMemo, useState } from 'react'
import { projects } from '@/data/projects'

export function Home() {
  const categories = useMemo(() => Array.from(new Set(projects.map(p => p.category))), [])
  const [active, setActive] = useState<string>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter(p => p.category === active)
  }, [active])

  return (
    <main>
      <Hero />

      <Section id="projects" title="Projects">
        <ProjectFilters active={active} setActive={setActive} categories={categories} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </Section>

      {/* Hidden case study content containers */}
      <div id="case-p1" className="hidden"><h2>Realtime Chat Dashboard</h2><p>Scalable WebSocket architecture with rooms, presence, and optimistic updates.</p></div>
      <div id="case-p2" className="hidden"><h2>E‑Commerce Product Gallery</h2><p>Facet filters, prefetching, and image lazy-loading improved FCP and TTI.</p></div>

      <Section id="articles" title="Articles">
        <div className="grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/40">
            <h3 className="font-semibold">Designing Motion that Respects Users</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Micro-interactions should guide—not distract. Here are my rules of thumb.</p>
            <a href="/?demo=markdown" className="mt-3 inline-block px-3 py-2 rounded-lg border hover:bg-neutral-100 dark:hover:bg-neutral-800">Read as live markdown</a>
          </article>
          <article className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/40">
            <h3 className="font-semibold">From FCP to TTI: Frontend Performance Wins</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Real-world tweaks that improved loading and interactivity on recent projects.</p>
            <a href="/?demo=markdown" className="mt-3 inline-block px-3 py-2 rounded-lg border hover:bg-neutral-100 dark:hover:bg-neutral-800">Read as live markdown</a>
          </article>
        </div>
      </Section>

      <Section id="about" title="About & Skills">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="prose dark:prose-invert max-w-none"><p><strong>Mostafa Elelemy</strong> — Software Engineer and Full‑Stack Developer based in Cairo, Egypt. I build end‑to‑end solutions: fast, accessible UIs with React/TypeScript and reliable Python backends.</p><p>I customize <strong>Odoo ERP</strong>, ship <strong>WordPress</strong> sites, and work with Tailwind CSS, Docker, Git, and CI/CD workflows. My focus is performance, accessibility, and clean design systems.</p></div>
          <Skills />
        </div>
        <div className="mt-6">
          <PerfBadge />
        </div>
      </Section>

      <Section id="testimonials" title="Testimonials">
        <Testimonials />
      </Section>

      

      {/* <Section id="resume" title="Resume">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/70 dark:bg-neutral-900/40">
          <iframe title="Mostafa Elelemy CV" src="/cv.pdf#view=fitH" className="w-full h-[720px]" />
        </div>
        <a href="/cv.pdf" target="_blank" rel="noreferrer" className="mt-4 inline-block px-4 py-2 rounded-lg border hover:bg-neutral-100 dark:hover:bg-neutral-800">Open CV in new tab</a>
      </Section> */}

      <Section id="contact" title="Contact">
        <ContactForm />
      </Section>
    </main>
  )
}
