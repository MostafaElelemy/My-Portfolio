import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'
import { DemoOverlay } from '@/components/DemoOverlay'
import { ScrollTop } from '@/components/ScrollTop'

export default function App() {
  return (
    <div className="min-h-screen text-neutral-800 dark:text-neutral-100 bg-white dark:bg-neutral-950">
      <Header />
      <Home />
      <Footer />
          <DemoOverlay />
    </div>
  )
}
