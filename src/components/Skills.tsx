const groups = [
  { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Frameworks', items: ['Django', 'Flask', 'React', 'Next.js', 'Vite'] },
  { title: 'Platforms', items: ['Odoo ERP', 'WordPress'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { title: 'UI & Styling', items: ['Tailwind CSS', 'Framer Motion'] },
  { title: 'Tools', items: ['Docker', 'Git', 'Vercel', 'ESLint', 'Prettier'] },
]

export function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {groups.map((g) => (
        <div key={g.title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
          <h4 className="font-semibold mb-2">{g.title}</h4>
          <div className="flex flex-wrap gap-2">
            {g.items.map((i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">{i}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
