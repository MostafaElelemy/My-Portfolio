import { useEffect, useRef, useState } from 'react'

export function PomodoroDemo() {
  const [sec, setSec] = useState(1500)
  const [on, setOn] = useState(false)
  const ref = useRef<number | null>(null)
  useEffect(() => {
    if (on) ref.current = window.setInterval(() => setSec(s => Math.max(0, s - 1)), 1000)
    return () => { if (ref.current) clearInterval(ref.current) }
  }, [on])
  const reset = () => setSec(1500)
  const m = String(Math.floor(sec / 60)).padStart(2, '0')
  const s = String(sec % 60).padStart(2, '0')
  return (
    <div className="space-y-3 text-center">
      <div className="text-5xl font-mono">{m}:{s}</div>
      <div className="flex justify-center gap-2">
        <button onClick={() => setOn(!on)} className="px-3 py-2 rounded-md bg-sky-600 hover:bg-sky-500">{on ? 'Pause' : 'Start'}</button>
        <button onClick={reset} className="px-3 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700">Reset</button>
      </div>
    </div>
  )
}
