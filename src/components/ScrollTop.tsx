import { useEffect, useState } from 'react'

export function ScrollTop() {
  const [show, setShow] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      // show after 200px; fade in from 200→500px
      const visible = y > 200
      setShow(visible)
      if (visible) {
        const t = Math.min(1, Math.max(0, (y - 200) / 300))
        setOpacity(t)
      } else {
        setOpacity(0)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!show) return null

  return (
    <button
      onClick={toTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[90] p-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg hover:opacity-95 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      style={{ opacity }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 15l-6-6-6 6"></path>
      </svg>
    </button>
  )
}
