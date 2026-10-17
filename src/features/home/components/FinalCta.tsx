import { MessageCircle, Phone } from 'lucide-react'
import type { HomePageContent, SiteInfo } from '../../../domain/models'
import { Button, Container } from '../../../shared/ui'

interface FinalCtaProps {
  content: HomePageContent['finalCta']
  siteInfo: SiteInfo
}

export function FinalCta({ content, siteInfo }: FinalCtaProps) {
  return (
    <section aria-labelledby="contact-title" className="bg-bronze-500 py-12 sm:py-16" id="contact">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-charcoal-900 sm:text-4xl" id="contact-title">
            {content.title}
          </h2>
          <p className="mt-3 leading-8 text-charcoal-800">{content.description}</p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            className="w-full sm:w-auto"
            href={siteInfo.contact.whatsappUrl}
            leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />}
            rel="noreferrer"
            size="lg"
            target="_blank"
          >
            واتساب
          </Button>
          <Button
            className="w-full border-charcoal-900 sm:w-auto"
            href={`tel:${siteInfo.contact.phone}`}
            leadingIcon={<Phone aria-hidden="true" className="size-5" />}
            size="lg"
            variant="secondary"
          >
            {siteInfo.contact.displayPhone}
          </Button>
        </div>
      </Container>
    </section>
  )
}
