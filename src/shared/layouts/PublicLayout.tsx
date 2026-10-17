import { Outlet } from 'react-router-dom'
import { siteConfig } from '../../config/site'

export function PublicLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl items-center px-5 py-4 sm:px-8">
          <span className="font-semibold">{siteConfig.businessName}</span>
        </div>
      </header>

      <main className="flex flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-5xl px-5 py-4 text-sm text-slate-600 sm:px-8">
          خدمات دهانات في {siteConfig.city}
        </div>
      </footer>
    </div>
  )
}
