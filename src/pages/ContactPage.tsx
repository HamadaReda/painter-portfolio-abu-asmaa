import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'
import type { Service, SiteInfo } from '../domain/models'
import { PhoneCta, WhatsAppCta } from '../features/contact/components/ContactActions'
import { QuoteRequestForm } from '../features/contact/components/QuoteRequestForm'
import { usePageMetadata } from '../shared/hooks/usePageMetadata'
import { Badge, Container, SectionHeading } from '../shared/ui'

export interface ContactPageData {
  services: readonly Service[]
  siteInfo: SiteInfo
}

export function ContactPage() {
  const { services, siteInfo } = useLoaderData() as ContactPageData

  usePageMetadata(
    `تواصل معنا | ${siteInfo.businessName}`,
    `تواصل مع ${siteInfo.businessName} لمناقشة خدمات الدهانات في ${siteInfo.city}.`,
  )

  return (
    <div className="w-full">
      <section aria-labelledby="contact-page-title" className="border-b border-ivory-200 py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Badge icon={<MessageCircle aria-hidden="true" className="size-4" />}>تواصل معنا</Badge>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-charcoal-900 sm:text-5xl" id="contact-page-title">
              ناقش مشروع الدهانات مباشرة
            </h1>
            <p className="mt-5 text-lg leading-9 text-charcoal-700">
              تواصل مع {siteInfo.businessName} عبر واتساب أو الهاتف لمشاركة تفاصيل المشروع في {siteInfo.city}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCta
                context="contact-hero"
                message={`مرحبًا، أرغب في الاستفسار عن مشروع دهانات في ${siteInfo.city}.`}
                size="lg"
                siteInfo={siteInfo}
              />
              <PhoneCta context="contact-hero" size="lg" siteInfo={siteInfo} />
            </div>
          </div>

          <aside className="rounded-brand-xl border border-charcoal-800 bg-charcoal-900 p-8 text-white shadow-lift sm:p-10">
            <h2 className="text-2xl font-bold">بيانات التواصل</h2>
            <dl className="mt-6 space-y-5 text-ivory-100">
              <div className="flex gap-3">
                <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-bronze-300" />
                <div><dt className="text-sm text-bronze-300">الهاتف وواتساب</dt><dd className="mt-1" dir="ltr">{siteInfo.contact.displayPhone}</dd></div>
              </div>
              <div className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-bronze-300" />
                <div><dt className="text-sm text-bronze-300">نطاق الخدمة</dt><dd className="mt-1">{siteInfo.city}</dd></div>
              </div>
              {siteInfo.businessHours ? (
                <div className="flex gap-3">
                  <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-bronze-300" />
                  <div><dt className="text-sm text-bronze-300">مواعيد العمل</dt><dd className="mt-1">{siteInfo.businessHours}</dd></div>
                </div>
              ) : null}
            </dl>
            {siteInfo.googleMapsUrl ? (
              <a className="mt-7 inline-flex items-center gap-2 font-semibold text-bronze-300 hover:underline" href={siteInfo.googleMapsUrl} rel="noreferrer" target="_blank">
                عرض الموقع على خرائط Google
                <ExternalLink aria-hidden="true" className="size-4" />
              </a>
            ) : null}
          </aside>
        </Container>
      </section>

      <section aria-labelledby="quote-form-title" className="bg-surface py-section">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <SectionHeading
            description="أدخل المعلومات الأساسية لتكوين رسالة واضحة يمكنك مراجعتها قبل إرسالها بنفسك عبر واتساب."
            eyebrow="طلب عرض"
            id="quote-form-title"
            title="جهّز تفاصيل مشروعك"
          />
          <div className="rounded-brand-xl border border-ivory-200 bg-background p-6 shadow-card sm:p-8">
            <QuoteRequestForm services={services} siteInfo={siteInfo} />
          </div>
        </Container>
      </section>
    </div>
  )
}
