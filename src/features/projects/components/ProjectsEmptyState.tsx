import { Images, MessageCircle, Phone } from 'lucide-react'
import type { SiteInfo } from '../../../domain/models'
import { createWhatsAppUrl } from '../../../shared/lib/contact'
import { Button } from '../../../shared/ui'

interface ProjectsEmptyStateProps {
  siteInfo: SiteInfo
}

export function ProjectsEmptyState({ siteInfo }: ProjectsEmptyStateProps) {
  const whatsappUrl = createWhatsAppUrl(
    siteInfo.contact.whatsappUrl,
    `مرحبًا، أرغب في الاستفسار عن خدمات الدهانات في ${siteInfo.city}.`,
  )

  return (
    <div className="rounded-brand-xl border border-ivory-200 bg-surface p-8 text-center shadow-card sm:p-12">
      <span className="mx-auto grid size-14 place-items-center rounded-brand-md bg-bronze-100 text-bronze-700">
        <Images aria-hidden="true" className="size-7" />
      </span>
      <h2 className="mt-5 text-2xl font-bold text-charcoal-900">
        لا توجد مشروعات موثقة منشورة حاليًا
      </h2>
      <p className="mx-auto mt-3 max-w-xl leading-8 text-charcoal-700">
        ستظهر هنا صور وتفاصيل الأعمال بعد توفير محتوى حقيقي والتحقق منه. يمكنك التواصل الآن لمناقشة مشروع الدهانات المطلوب.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Button
          href={whatsappUrl}
          leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />}
          rel="noreferrer"
          target="_blank"
        >
          تواصل عبر واتساب
        </Button>
        <Button
          href={`tel:${siteInfo.contact.phone}`}
          leadingIcon={<Phone aria-hidden="true" className="size-5" />}
          variant="secondary"
        >
          اتصل الآن
        </Button>
      </div>
    </div>
  )
}
