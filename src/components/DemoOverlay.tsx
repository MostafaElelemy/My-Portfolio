import { useEffect, useSyncExternalStore } from 'react'
import { TodoDemo } from '@/demos/TodoDemo'
import { GradientDemo } from '@/demos/GradientDemo'
import { PomodoroDemo } from '@/demos/PomodoroDemo'
import { PaletteDemo } from '@/demos/PaletteDemo'
import { MarkdownDemo } from '@/demos/MarkdownDemo'
import { UploaderDemo } from '@/demos/UploaderDemo'

function subscribe(callback: () => void) {
  const handler = () => callback()
  window.addEventListener('popstate', handler)
  window.addEventListener('hashchange', handler)
  const push = history.pushState
  const replace = history.replaceState
  history.pushState = function (...args) {
    const r = push.apply(this, args as any)
    window.dispatchEvent(new Event('popstate'))
    return r
  } as any
  history.replaceState = function (...args) {
    const r = replace.apply(this, args as any)
    window.dispatchEvent(new Event('popstate'))
    return r
  } as any
  return () => {
    window.removeEventListener('popstate', handler)
    window.removeEventListener('hashchange', handler)
    history.pushState = push
    history.replaceState = replace
  }
}

function getSnapshot() {
  return window.location.search
}

function getCaseContent(id: string) {
  try {
    const el = document.getElementById('case-' + id)
    return el ? el.innerHTML : 'Case not found.'
  } catch {
    return 'Case not found.'
  }
}

export function DemoOverlay() {
  const search = useSyncExternalStore(subscribe, getSnapshot, () => '')
  const params = new URLSearchParams(search)
  const demo = params.get('demo')
  const caseId = params.get('case')

  useEffect(() => {
    if (!demo) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [demo])

  const close = () => {
    const url = new URL(window.location.href)
    url.searchParams.delete('demo')
    history.replaceState({}, '', url.toString())
  }

  if (!demo && !caseId) return null

  const map: Record<string, JSX.Element> = {
    todo: <TodoDemo />,
    gradient: <GradientDemo />,
    pomodoro: <PomodoroDemo />,
    palette: <PaletteDemo />,
    markdown: <MarkdownDemo />,
    uploader: <UploaderDemo />,
  }

  const content = demo ? (map[demo] ?? <div className="p-6">Demo not found.</div>) : (
    <div className="prose prose-invert max-w-none p-4" dangerouslySetInnerHTML={{ __html: getCaseContent(caseId!) }} />
  )

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl rounded-2xl border border-neutral-700 bg-neutral-950 text-neutral-100 shadow-2xl">
        <button onClick={close} aria-label="Close demo" className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold">× Close</button>
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Live Demo: {demo}</h3>
          <span className="text-xs opacity-70">Built-in</span>
        </div>
        <div className="p-4">{content}</div>
      </div>
    </div>
  )
}
