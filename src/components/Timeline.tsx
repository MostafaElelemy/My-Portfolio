export function Timeline() {
  const items = [
    { year: '2025', label: 'Freelance Frontend Developer', desc: 'React/TypeScript, performance & a11y focus.' },
    { year: '2023', label: 'Frontend Engineer', desc: 'Shipped design system and CI for apps.' },
    { year: '2021', label: 'CS Graduate', desc: 'Graduated and started building web products.' },
  ]
  return (
    <ol className="relative border-l border-neutral-200 dark:border-neutral-800 pl-6 space-y-6">
      {items.map((i, idx) => (
        <li key={idx}>
          <div className="absolute -left-[9px] top-1 size-2.5 rounded-full bg-brand-600"></div>
          <div className="text-sm uppercase tracking-wide text-neutral-500">{i.year}</div>
          <div className="font-semibold">{i.label}</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">{i.desc}</div>
        </li>
      ))}
    </ol>
  )
}
