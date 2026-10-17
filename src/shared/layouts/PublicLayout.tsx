import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { FloatingWhatsAppButton } from '../../features/contact/components/FloatingWhatsAppButton'

export function PublicLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-charcoal-900">
      <a
        className="fixed start-4 top-4 z-50 -translate-y-24 rounded-brand-sm bg-charcoal-900 px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0 focus:outline-2 focus:outline-offset-4 focus:outline-bronze-500"
        href="#main-content"
      >
        انتقل إلى المحتوى
      </a>

      <Header />

      <main className="flex flex-1" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
