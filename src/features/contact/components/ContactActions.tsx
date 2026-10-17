import { MessageCircle, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import type { SiteInfo } from '../../../domain/models'
import { emitCtaEvent } from '../../../shared/lib/ctaEvents'
import { createWhatsAppUrl } from '../../../shared/lib/contact'
import { Button } from '../../../shared/ui'

interface ContactActionProps {
  children?: ReactNode
  className?: string
  context: string
  size?: 'sm' | 'md' | 'lg'
  siteInfo: SiteInfo
  variant?: 'primary' | 'secondary' | 'ghost'
}

interface WhatsAppCtaProps extends ContactActionProps {
  message?: string
}

export function WhatsAppCta({
  children = 'تواصل عبر واتساب',
  className,
  context,
  message,
  size,
  siteInfo,
  variant,
}: WhatsAppCtaProps) {
  const href = message
    ? createWhatsAppUrl(siteInfo.contact.whatsappUrl, message)
    : siteInfo.contact.whatsappUrl

  return (
    <Button
      className={className}
      href={href}
      leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />}
      onClick={() => emitCtaEvent('whatsapp', context)}
      rel="noreferrer"
      size={size}
      target="_blank"
      variant={variant}
    >
      {children}
    </Button>
  )
}

export function PhoneCta({
  children = 'اتصل الآن',
  className,
  context,
  size,
  siteInfo,
  variant = 'secondary',
}: ContactActionProps) {
  return (
    <Button
      className={className}
      href={`tel:${siteInfo.contact.phone}`}
      leadingIcon={<Phone aria-hidden="true" className="size-5" />}
      onClick={() => emitCtaEvent('phone', context)}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  )
}
