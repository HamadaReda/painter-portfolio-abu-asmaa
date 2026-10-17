import type { Service } from '../../../domain/models'
import { Container, SectionHeading } from '../../../shared/ui'
import { ServiceCard } from './ServiceCard'

interface ServicesPreviewProps {
  services: readonly Service[]
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section aria-labelledby="services-title" className="bg-surface py-section" id="services">
      <Container>
        <SectionHeading
          description="خدمات دهانات للمساحات السكنية والتجارية، مع تحديد المطلوب وفق طبيعة كل موقع."
          eyebrow="الخدمات"
          id="services-title"
          title="خدمات دهانات تناسب نوع مشروعك"
        />

        {services.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-brand-md border border-ivory-200 bg-background p-6 text-charcoal-700">
            سيتم إضافة تفاصيل الخدمات قريبًا. يمكنك التواصل مباشرة لمناقشة العمل المطلوب.
          </p>
        )}
      </Container>
    </section>
  )
}
