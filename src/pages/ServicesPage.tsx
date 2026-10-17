import { Paintbrush } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'
import type { Service, SiteInfo } from '../domain/models'
import { ServiceCard } from '../features/home/components/ServiceCard'
import { usePageMetadata } from '../shared/hooks/usePageMetadata'
import { Badge, Container } from '../shared/ui'

export interface ServicesPageData {
  services: readonly Service[]
  siteInfo: SiteInfo
}

export function ServicesPage() {
  const { services, siteInfo } = useLoaderData() as ServicesPageData

  usePageMetadata(
    `خدمات الدهانات في ${siteInfo.city} | ${siteInfo.businessName}`,
    `تعرّف على خدمات الدهانات المتاحة للمنازل والفلل والمباني والمواقع التجارية في ${siteInfo.city}.`,
  )

  return (
    <div className="w-full">
      <section aria-labelledby="services-page-title" className="border-b border-ivory-200 py-12 sm:py-16">
        <Container>
          <Badge icon={<Paintbrush aria-hidden="true" className="size-4" />}>
            دليل الخدمات
          </Badge>
          <h1
            className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-charcoal-900 sm:text-5xl"
            id="services-page-title"
          >
            خدمات الدهانات في {siteInfo.city}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-charcoal-700">
            اختر الخدمة الأقرب إلى احتياج مشروعك للاطلاع على تفاصيلها وطريقة التواصل بشأنها.
          </p>
        </Container>
      </section>

      <section aria-label="قائمة خدمات الدهانات" className="bg-surface py-section">
        <Container>
          {services.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="rounded-brand-lg border border-ivory-200 bg-background p-8 text-charcoal-700">
              لا توجد خدمات منشورة حاليًا. يمكنك التواصل للاستفسار عن العمل المطلوب.
            </p>
          )}
        </Container>
      </section>
    </div>
  )
}
