import { ThemeToggle } from './ThemeToggle'
import { ThemeSelector } from './ThemeSelector'
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-xl">
          <span className="text-brand-gradient">Tefa Plus</span>
        </a>
        <nav className="flex items-center gap-3">
          <a className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#projects">Projects</a>
          <a className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#about">About</a>
          <a className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#contact">Contact</a>
          <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800 mx-1" />
          <a className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
          <a className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" href="https://wa.me/201095159396" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" href="https://t.me/username" target="_blank" rel="noreferrer">Telegram</a>
          <a aria-label="GitHub" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" href="https://github.com/MostafaElelemy" target="_blank" rel="noreferrer"><Github size={18}/></a>
          <a aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" href="https://www.linkedin.com/in/mostafa-elelemy-502785204/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
          <a aria-label="Twitter" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800" href="mailto:mostelelemy@gmail.com" target="_blank" rel="noreferrer"><Twitter size={18}/></a>
          
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
