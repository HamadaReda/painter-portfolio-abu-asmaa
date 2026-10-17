import { MapPin } from 'lucide-react'
import { Container, SectionHeading } from '../../../shared/ui'

interface ServiceAreaProps {
  areas: readonly string[]
}

export function ServiceArea({ areas }: ServiceAreaProps) {
  return (
    <section aria-labelledby="area-title" className="py-section">
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <SectionHeading
          description="نعرض مناطق الخدمة المؤكدة فقط، ويمكن الاستفسار عن موقع المشروع عند التواصل."
          eyebrow="نطاق الخدمة"
          id="area-title"
          title="خدمة دهانات داخل المدينة المنورة"
        />

        <ul className="flex flex-wrap gap-3" aria-label="مناطق الخدمة المؤكدة">
          {areas.map((area) => (
            <li
              className="inline-flex items-center gap-2 rounded-full border border-bronze-300 bg-surface px-5 py-3 font-semibold text-charcoal-900 shadow-soft"
              key={area}
            >
              <MapPin aria-hidden="true" className="size-5 text-bronze-600" />
              {area}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
