type Props = {
  active: string
  setActive: (v: string) => void
  categories: string[]
}

export function ProjectFilters({ active, setActive, categories }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {['All', ...categories].map((c) => (
        <button
          key={c}
          onClick={() => setActive(c)}
          className={`px-3 py-1.5 rounded-lg border transition active:scale-95 ${
            active === c
              ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
              : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
