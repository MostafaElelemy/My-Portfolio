import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      aria-label="Toggle theme"
      className="ml-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 hover:shadow"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="flex items-center gap-2">
        {theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}
        <span className="text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </div>
    </button>
  )
}
