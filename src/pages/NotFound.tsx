export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p>Page not found.</p>
        <a className="inline-block mt-4 px-4 py-2 rounded-lg border" href="/">Go Home</a>
      </div>
    </main>
  )
}
