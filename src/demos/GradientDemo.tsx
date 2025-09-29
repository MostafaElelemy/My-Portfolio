import { useState } from 'react'

export function GradientDemo() {
  const [a, setA] = useState('#6366f1')
  const [b, setB] = useState('#22d3ee')
  const [angle, setAngle] = useState(135)
  const css = `linear-gradient(${angle}deg, ${a}, ${b})`
  return (
    <div className="space-y-3">
      <div className="h-40 rounded-xl border border-white/10" style={{ backgroundImage: css }} />
      <div className="grid grid-cols-2 gap-3">
        <label className="text-sm">Color A <input value={a} onChange={e => setA(e.target.value)} type="color" className="ml-2" /></label>
        <label className="text-sm">Color B <input value={b} onChange={e => setB(e.target.value)} type="color" className="ml-2" /></label>
      </div>
      <label className="text-sm">Angle {angle}°<input min={0} max={360} value={angle} onChange={e => setAngle(parseInt(e.target.value))} type="range" className="w-full" /></label>
      <code className="block bg-black/40 p-2 rounded-md text-xs">{css}</code>
    </div>
  )
}
