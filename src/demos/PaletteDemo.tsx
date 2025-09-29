import { useState } from 'react'

function rand() {
  const h = Math.floor(Math.random() * 360)
  const s = 60 + Math.floor(Math.random() * 30)
  const l = 50 + Math.floor(Math.random() * 20)
  return `hsl(${h} ${s}% ${l}%)`
}

export function PaletteDemo() {
  const [colors, setColors] = useState<string[]>(() => Array.from({length:5}, rand))
  return (
    <div>
      <div className="grid grid-cols-5 gap-2">
        {colors.map((c,i) => <div key={i} className="h-20 rounded-md border" style={{ background:c }} title={c}></div>)}
      </div>
      <button onClick={() => setColors(Array.from({length:5}, rand))} className="mt-3 px-3 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500">Regenerate</button>
    </div>
  )
}
