import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../../../config/site'
import { emitCtaEvent } from '../../../shared/lib/ctaEvents'

export function FloatingWhatsAppButton() {
  return (
    <a
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 end-5 z-30 grid size-14 place-items-center rounded-full bg-charcoal-900 text-white shadow-lift transition hover:-translate-y-1 hover:bg-charcoal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-600"
      href={siteConfig.contact.whatsappUrl}
      onClick={() => emitCtaEvent('whatsapp', 'floating-button')}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="size-6" />
    </a>
  )
}
