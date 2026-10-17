import { Check, ChevronLeft, MessageCircle, Phone } from 'lucide-react'
import { Link, useLoaderData } from 'react-router-dom'
import type { Service, SiteInfo } from '../domain/models'
import { ServiceCard } from '../features/home/components/ServiceCard'
import { usePageMetadata } from '../shared/hooks/usePageMetadata'
import { createWhatsAppUrl } from '../shared/lib/contact'
import { Button, Container, SectionHeading } from '../shared/ui'

export interface ServiceDetailPageData {
  service: Service
  relatedServices: readonly Service[]
  siteInfo: SiteInfo
}

export function ServiceDetailPage() {
  const { service, relatedServices, siteInfo } =
    useLoaderData() as ServiceDetailPageData
  const whatsappUrl = createWhatsAppUrl(
    siteInfo.contact.whatsappUrl,
    `مرحبًا، أرغب في الاستفسار عن خدمة ${service.title} في ${siteInfo.city}.`,
  )

  usePageMetadata(
    `${service.title} في ${siteInfo.city} | ${siteInfo.businessName}`,
    service.shortDescription,
  )

  return (
    <article className="w-full">
      <header className="border-b border-ivory-200 py-10 sm:py-14">
        <Container>
          <nav aria-label="مسار التنقل">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-700">
              <li>
                <Link className="hover:text-bronze-700 hover:underline" to="/">
                  الرئيسية
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronLeft className="size-4" />
              </li>
              <li>
                <Link className="hover:text-bronze-700 hover:underline" to="/services">
                  الخدمات
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronLeft className="size-4" />
              </li>
              <li aria-current="page" className="font-semibold text-charcoal-900">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold text-bronze-600">خدمة دهانات</p>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-charcoal-900 sm:text-5xl">
                {service.title} في {siteInfo.city}
              </h1>
              <p className="mt-5 text-lg leading-9 text-charcoal-700">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={whatsappUrl}
                  leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />}
                  rel="noreferrer"
                  size="lg"
                  target="_blank"
                >
                  استفسر عبر واتساب
                </Button>
                <Button
                  href={`tel:${siteInfo.contact.phone}`}
                  leadingIcon={<Phone aria-hidden="true" className="size-5" />}
                  size="lg"
                  variant="secondary"
                >
                  اتصل الآن
                </Button>
              </div>
            </div>

            <figure>
              <img
                alt={`${service.title} — صورة توضيحية للخدمة`}
                className="aspect-[16/10] w-full rounded-brand-xl object-cover shadow-lift"
                decoding="async"
                fetchPriority="high"
                height="675"
                src={service.coverImage}
                width="1200"
              />
              <figcaption className="mt-3 text-xs text-charcoal-700">
                صورة توضيحية لطبيعة الخدمة وليست توثيقًا لمشروع منفذ.
              </figcaption>
            </figure>
          </div>
        </Container>
      </header>

      {service.benefits && service.benefits.length > 0 ? (
        <section aria-labelledby="included-title" className="bg-surface py-section">
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              description="تُحدد التفاصيل النهائية لكل بند بعد مناقشة حالة الموقع ونطاق المشروع."
              eyebrow="نطاق الخدمة"
              id="included-title"
              title="ما الذي يمكن أن يشمله العمل؟"
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li
                  className="flex items-start gap-3 rounded-brand-md border border-ivory-200 bg-background p-5 leading-7 text-charcoal-800"
                  key={benefit}
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-bronze-100 text-bronze-700">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section aria-labelledby="service-contact-title" className="bg-bronze-500 py-12 sm:py-16">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-charcoal-900" id="service-contact-title">
              ناقش تفاصيل {service.title}
            </h2>
            <p className="mt-3 leading-8 text-charcoal-800">
              أرسل معلومات المساحة والعمل المطلوب للحصول على رد مناسب لطبيعة مشروعك.
            </p>
          </div>
          <Button
            href={whatsappUrl}
            leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />}
            rel="noreferrer"
            size="lg"
            target="_blank"
          >
            تواصل عبر واتساب
          </Button>
        </Container>
      </section>

      {relatedServices.length > 0 ? (
        <section aria-labelledby="related-title" className="py-section">
          <Container>
            <SectionHeading
              eyebrow="قد تحتاج أيضًا"
              id="related-title"
              title="خدمات مرتبطة"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <ServiceCard key={relatedService.id} service={relatedService} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  )
}
