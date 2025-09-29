import { useMemo, useState } from 'react'

function mdToHtml(md: string) {
  // Tiny markdown subset: headings, bold, italics, code blocks, links
  return md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`{3}([\s\S]*?)`{3}/gim, '<pre><code>$1</code></pre>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\n$/gim, '<br />')
}

const starter = `# Markdown Editor
Type on the left, preview on the right.

**Bold**, *italic*, and \`inline code\`.

\`\`\`
console.log('Code blocks too');
\`\`\`
[Example link](https://example.com)`

export function MarkdownDemo() {
  const [value, setValue] = useState(starter)
  const html = useMemo(() => mdToHtml(value), [value])

  return (
    <div className="grid md:grid-cols-2 gap-3">
      <textarea
        aria-label="Markdown input"
        className="min-h-[260px] p-3 rounded-lg bg-neutral-900 border border-neutral-700"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="min-h-[260px] p-3 rounded-lg bg-neutral-900 border border-neutral-700 prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
