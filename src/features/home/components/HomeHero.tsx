import { MessageCircle, Phone } from 'lucide-react'
import heroLarge from '../../../assets/images/painting-hero-1440.jpg'
import heroSmall from '../../../assets/images/painting-hero-720.jpg'
import type { HomePageContent, SiteInfo } from '../../../domain/models'
import { Badge, Button, Container } from '../../../shared/ui'

interface HomeHeroProps {
  content: HomePageContent['hero']
  siteInfo: SiteInfo
}

export function HomeHero({ content, siteInfo }: HomeHeroProps) {
  return (
    <section aria-labelledby="home-title" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -start-36 top-10 -z-10 size-96 rounded-full bg-bronze-300/20 blur-3xl"
      />
      <Container className="grid items-center gap-10 py-12 md:py-16 lg:min-h-[42rem] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-section">
        <div>
          <Badge>{content.eyebrow}</Badge>
          <h1
            className="mt-6 text-4xl font-bold leading-[1.35] text-charcoal-900 sm:text-5xl lg:text-6xl"
            id="home-title"
          >
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-charcoal-700">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              aria-label={`اتصل الآن على الرقم ${siteInfo.contact.displayPhone}`}
              href={`tel:${siteInfo.contact.phone}`}
              leadingIcon={<Phone aria-hidden="true" className="size-5" />}
              size="lg"
              variant="secondary"
            >
              <span className="inline-flex flex-wrap items-center justify-center gap-x-2">
                <span>اتصل الآن</span>
                <span dir="ltr">{siteInfo.contact.displayPhone}</span>
              </span>
            </Button>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-brand-xl border border-bronze-300/60" />
          <picture>
            <source media="(max-width: 767px)" srcSet={heroSmall} />
            <img
              alt="دهان جدار داخلي باستخدام رول الدهان"
              className="aspect-[4/3] w-full rounded-brand-xl object-cover object-center shadow-lift lg:aspect-[5/4]"
              decoding="async"
              fetchPriority="high"
              height="719"
              src={heroLarge}
              srcSet={`${heroSmall} 720w, ${heroLarge} 1440w`}
              width="1440"
            />
          </picture>
          <figcaption className="sr-only">
            صورة توضيحية لخدمة الدهانات، وليست مشروعًا منفذًا معروضًا ضمن الأعمال.
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
