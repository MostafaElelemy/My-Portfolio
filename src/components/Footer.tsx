export function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-500">
        © {new Date().getFullYear()} Tefa Plus. Built with React, Vite & Tailwind. · <a className="underline" href="https://github.com/MostafaElelemy" target="_blank" rel="noreferrer">GitHub</a> · <a className="underline" href="https://www.linkedin.com/in/mostafa-elelemy-502785204/" target="_blank" rel="noreferrer">LinkedIn</a> · <a className="underline" href="mailto:mostelelemy@gmail.com" target="_blank" rel="noreferrer">Email</a> · <a className="underline" href="https://wa.me/201095159396" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </footer>
  )
}
