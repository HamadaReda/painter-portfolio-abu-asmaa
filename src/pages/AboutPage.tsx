import { Check, MapPin, MessageCircle, Paintbrush, Phone } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'
import type { AboutPageContent, Service, SiteInfo } from '../domain/models'
import { usePageMetadata } from '../shared/hooks/usePageMetadata'
import { createWhatsAppUrl } from '../shared/lib/contact'
import { Badge, Button, Container, SectionHeading } from '../shared/ui'

export interface AboutPageData {
  content: AboutPageContent
  services: readonly Service[]
  siteInfo: SiteInfo
}

export function AboutPage() {
  const { content, services, siteInfo } = useLoaderData() as AboutPageData
  const whatsappUrl = createWhatsAppUrl(
    siteInfo.contact.whatsappUrl,
    `مرحبًا، أرغب في مناقشة مشروع دهانات في ${siteInfo.city}.`,
  )

  usePageMetadata(
    `من نحن | ${siteInfo.businessName}`,
    `تعرّف على ${siteInfo.businessName} وخدمات الدهانات المقدمة في ${siteInfo.city}.`,
  )

  return (
    <article className="w-full">
      <header className="border-b border-ivory-200 py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Badge icon={<Paintbrush aria-hidden="true" className="size-4" />}>من نحن</Badge>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-charcoal-900 sm:text-5xl">
              {siteInfo.businessName}
            </h1>
            <p className="mt-5 text-lg leading-9 text-charcoal-700">{content.introduction}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl} leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />} rel="noreferrer" size="lg" target="_blank">
                تواصل عبر واتساب
              </Button>
              <Button href={`tel:${siteInfo.contact.phone}`} leadingIcon={<Phone aria-hidden="true" className="size-5" />} size="lg" variant="secondary">
                اتصل الآن
              </Button>
            </div>
          </div>
          <aside className="rounded-brand-lg border border-charcoal-800 bg-charcoal-900 p-8 text-white shadow-card sm:p-10">
            <MapPin aria-hidden="true" className="size-8 text-bronze-400" />
            <h2 className="mt-5 text-2xl font-bold">نطاق الخدمة</h2>
            <ul className="mt-5 space-y-3 text-ivory-100">
              {content.serviceAreas.map((area) => (
                <li className="flex items-center gap-3" key={area}>
                  <Check aria-hidden="true" className="size-5 text-bronze-400" />
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </header>

      <section aria-labelledby="specializations-title" className="bg-surface py-section">
        <Container>
          <SectionHeading eyebrow="مجالات العمل" id="specializations-title" title="خدمات الدهانات والتشطيبات" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li className="flex items-start gap-3 rounded-brand-md border border-ivory-200 bg-background p-5 font-semibold text-charcoal-800" key={service.id}>
                <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-bronze-600" />
                {service.title}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="philosophy-title" className="py-section">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading description="مبادئ عملية توضّح طريقة مناقشة المشروع قبل التنفيذ." eyebrow="طريقة العمل" id="philosophy-title" title="فلسفة العمل" />
          <ol className="space-y-4">
            {content.workPhilosophy.map((item, index) => (
              <li className="flex gap-4 rounded-brand-lg border border-ivory-200 bg-surface p-5 leading-8 text-charcoal-800" key={item}>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-bronze-100 font-bold text-bronze-700">{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {content.qualifications && content.qualifications.length > 0 ? (
        <section aria-labelledby="qualifications-title" className="bg-surface py-section">
          <Container>
            <SectionHeading eyebrow="معلومات موثقة" id="qualifications-title" title="الخبرات والمؤهلات" />
            <ul className="mt-8 space-y-3">
              {content.qualifications.map((qualification) => <li key={qualification}>{qualification}</li>)}
            </ul>
          </Container>
        </section>
      ) : null}
    </article>
  )
}
