import { Paintbrush } from 'lucide-react'
import type { SiteInfo } from '../../../domain/models'
import { StatusBadge } from '../../../shared/ui/StatusBadge'

interface HomeIntroProps {
  siteInfo: SiteInfo
}

export function HomeIntro({ siteInfo }: HomeIntroProps) {
  return (
    <section
      aria-labelledby="home-title"
      className="mx-auto flex w-full max-w-3xl flex-col items-start justify-center px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-blue-600 text-white shadow-sm">
        <Paintbrush aria-hidden="true" className="size-7" />
      </div>

      <StatusBadge>الموقع قيد التطوير</StatusBadge>

      <h1 id="home-title" className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">
        {siteInfo.businessName}
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        {siteInfo.description}
      </p>

      <address className="mt-8 not-italic">
        <a
          className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          href={`tel:${siteInfo.contact.phone}`}
          dir="ltr"
        >
          {siteInfo.contact.displayPhone}
        </a>
      </address>
    </section>
  )
}
