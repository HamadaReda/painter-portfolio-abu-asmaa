import { Construction, MessageCircle, Phone } from 'lucide-react'
import type { SiteInfo } from '../../../domain/models'
import { Badge, Button, Container } from '../../../shared/ui'

interface HomeIntroProps {
  siteInfo: SiteInfo
}

export function HomeIntro({ siteInfo }: HomeIntroProps) {
  return (
    <section aria-labelledby="home-title" className="relative isolate w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -start-32 top-16 -z-10 size-80 rounded-full bg-bronze-300/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -end-40 bottom-0 -z-10 size-96 rounded-full bg-white/70 blur-3xl"
      />

      <Container className="flex min-h-[36rem] items-center py-section">
        <div className="max-w-3xl">
          <Badge
            icon={<Construction aria-hidden="true" className="size-3.5" />}
          >
            الموقع قيد التطوير
          </Badge>

          <h1
            className="mt-7 text-4xl font-bold leading-[1.35] text-charcoal-900 sm:text-5xl lg:text-6xl"
            id="home-title"
          >
            {siteInfo.businessName}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-9 text-charcoal-700 sm:text-xl">
            {siteInfo.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteInfo.contact.whatsappUrl}
              leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />}
              rel="noreferrer"
              size="lg"
              target="_blank"
            >
              تواصل عبر واتساب
            </Button>
            <Button
              href={`tel:${siteInfo.contact.phone}`}
              leadingIcon={<Phone aria-hidden="true" className="size-5" />}
              size="lg"
              variant="secondary"
            >
              <span dir="ltr">{siteInfo.contact.displayPhone}</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
