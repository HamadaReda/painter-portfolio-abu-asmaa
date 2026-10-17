import type { WorkStep } from '../../../domain/models'
import { Container, SectionHeading } from '../../../shared/ui'

interface WorkProcessProps {
  steps: readonly WorkStep[]
}

export function WorkProcess({ steps }: WorkProcessProps) {
  return (
    <section aria-labelledby="process-title" className="bg-surface py-section">
      <Container>
        <SectionHeading
          align="center"
          description="مسار بسيط يبدأ بفهم المطلوب وينتهي بتنفيذ نطاق العمل المتفق عليه."
          eyebrow="خطوات العمل"
          id="process-title"
          title="كيف تبدأ مشروعك؟"
        />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li className="relative border-t border-bronze-300 pt-6" key={step.id}>
              <span className="absolute -top-4 start-0 grid size-8 place-items-center rounded-full bg-bronze-500 text-sm font-bold text-charcoal-900 ring-4 ring-surface">
                {index + 1}
              </span>
              <h3 className="font-bold text-charcoal-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-charcoal-700">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
