import { Brush, Building2, Store, type LucideIcon } from 'lucide-react'
import type { Service } from '../../../domain/models'
import { Card } from '../../../shared/ui'

interface ServiceCardProps {
  service: Service
}

const serviceIcons: Record<string, LucideIcon> = {
  'homes-and-villas': Brush,
  buildings: Building2,
  commercial: Store,
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = serviceIcons[service.id] ?? Brush

  return (
    <Card className="h-full transition duration-200 hover:-translate-y-1 hover:border-bronze-300 hover:shadow-lift">
      <span className="grid size-12 place-items-center rounded-brand-md bg-bronze-100 text-bronze-700">
        <Icon aria-hidden="true" className="size-6" strokeWidth={1.7} />
      </span>
      <h3 className="mt-5 text-xl font-bold text-charcoal-900">{service.name}</h3>
      <p className="mt-3 leading-8 text-charcoal-700">{service.description}</p>
    </Card>
  )
}
