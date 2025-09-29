import { useEffect, useState } from 'react'

type T = { id: string; text: string; done: boolean }

export function TodoDemo() {
  const [items, setItems] = useState<T[]>(() => {
    try { return JSON.parse(localStorage.getItem('todo-demo') || '[]') } catch { return [] }
  })
  const [text, setText] = useState('')

  useEffect(() => localStorage.setItem('todo-demo', JSON.stringify(items)), [items])

  const add = () => {
    if (!text.trim()) return
    setItems([{ id: crypto.randomUUID(), text: text.trim(), done: false }, ...items])
    setText('')
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="New task" className="flex-1 px-3 py-2 rounded-md bg-neutral-900 border border-neutral-700" />
        <button onClick={add} className="px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500">Add</button>
      </div>
      <ul className="space-y-1">
        {items.map(i => (
          <li key={i.id} className="flex items-center gap-2">
            <input type="checkbox" checked={i.done} onChange={() => setItems(items.map(x => x.id === i.id ? { ...x, done: !x.done } : x))} />
            <span className={i.done ? 'line-through opacity-60' : ''}>{i.text}</span>
            <button onClick={() => setItems(items.filter(x => x.id !== i.id))} className="ml-auto text-xs text-red-400 hover:text-red-300">Delete</button>
          </li>
        ))}
        {items.length === 0 && <li className="opacity-60 text-sm">No tasks yet</li>}
      </ul>
    </div>
  )
}
