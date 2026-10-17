import { MapPin, MessageSquareText, PaintBucket, type LucideIcon } from 'lucide-react'
import type { HomeValue } from '../../../domain/models'
import { Container, SectionHeading } from '../../../shared/ui'

interface WhyChooseUsProps {
  values: readonly HomeValue[]
}

const valueIcons: Record<string, LucideIcon> = {
  'direct-contact': MessageSquareText,
  'local-service': MapPin,
  'clear-scope': PaintBucket,
}

export function WhyChooseUs({ values }: WhyChooseUsProps) {
  return (
    <section aria-labelledby="why-title" className="py-section">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          description="معلومات واضحة وقنوات تواصل مباشرة تساعد على بدء الحديث عن المشروع دون ادعاءات أو وعود غير موثقة."
          eyebrow="لماذا تتواصل معنا؟"
          id="why-title"
          title="بداية عملية وواضحة لمشروع الدهانات"
        />

        <ul className="grid gap-4 sm:grid-cols-3">
          {values.map((value) => {
            const Icon = valueIcons[value.id] ?? PaintBucket
            return (
              <li className="rounded-brand-lg border border-ivory-200 bg-surface p-5 shadow-soft" key={value.id}>
                <Icon aria-hidden="true" className="size-6 text-bronze-600" strokeWidth={1.7} />
                <h3 className="mt-4 font-bold text-charcoal-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-charcoal-700">{value.description}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
