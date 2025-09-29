import { useCallback, useState } from 'react'

type FileItem = { name: string; size: number; type: string }

export function UploaderDemo() {
  const [items, setItems] = useState<FileItem[]>([])

  const onFiles = useCallback((files: FileList) => {
    const arr: FileItem[] = Array.from(files).map(f => ({ name: f.name, size: f.size, type: f.type }))
    setItems(prev => [...arr, ...prev])
  }, [])

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    onFiles(e.dataTransfer.files)
  }

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') (e.currentTarget as HTMLElement).click() }}
        className="grid place-items-center h-36 rounded-xl border-2 border-dashed border-white/20 hover:border-white/40 cursor-pointer bg-neutral-900"
        onDragOver={(e) => { e.preventDefault() }}
        onDrop={onDrop}
        onClick={() => {
          const input = document.createElement('input')
          input.type = 'file'
          input.multiple = true
          input.onchange = () => { if (input.files) onFiles(input.files) }
          input.click()
        }}
        aria-label="Upload files"
      >
        Drop files here or click to choose
      </div>

      <ul className="mt-3 space-y-2">
        {items.map((f, i) => (
          <li key={i} className="flex gap-2 text-sm">
            <span className="inline-flex px-2 py-0.5 rounded bg-white/10">{f.type || 'file'}</span>
            <span className="truncate">{f.name}</span>
            <span className="ml-auto opacity-70">{(f.size/1024).toFixed(1)} KB</span>
          </li>
        ))}
        {items.length === 0 && <li className="opacity-60">No files yet.</li>}
      </ul>
    </div>
  )
}
