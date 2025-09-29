export function ThemeSelector() {
  const set = (cls: string) => {
    document.documentElement.classList.remove('theme-cyan','theme-emerald')
    if (cls) document.documentElement.classList.add(cls)
    localStorage.setItem('theme-accent', cls)
  }
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme-accent') || ''
    if (saved) document.documentElement.classList.add(saved)
  }
  return (
    <div className="hidden md:flex items-center gap-2">
      <span className="text-xs opacity-70">Accent:</span>
      <button onClick={() => set('')} className="px-2 py-1 rounded bg-brand-gradient text-white text-xs">Violet</button>
      <button onClick={() => set('theme-cyan')} className="px-2 py-1 rounded bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-xs">Cyan</button>
      <button onClick={() => set('theme-emerald')} className="px-2 py-1 rounded bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs">Emerald</button>
    </div>
  )
}
