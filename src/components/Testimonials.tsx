export function Testimonials() {
  const items = [
    { name: 'Sarah M.', role: 'Product Manager', text: 'Delivered pixel-perfect UI ahead of schedule. Great communicator.' },
    { name: 'Omar K.', role: 'CTO', text: 'Performance-focused and pragmatic. Our Lighthouse scores jumped.' },
    { name: 'Lina A.', role: 'Founder', text: 'Understood our brand and turned it into a delightful experience.' },
  ]
  return (
    <div className="overflow-x-auto no-scrollbar" aria-label="Testimonials">
      <div className="flex gap-4 min-w-full">
        {items.map((t, i) => (
          <div key={i} className="min-w-[280px] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/40">
            <div className="text-sm">{t.text}</div>
            <div className="mt-3 text-xs text-neutral-500">— {t.name}, {t.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
