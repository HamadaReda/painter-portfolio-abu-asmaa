import { ArrowLeft, Brush } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../../../domain/models'
import { Card } from '../../../shared/ui'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group h-full overflow-hidden p-0 transition duration-200 hover:-translate-y-1 hover:border-bronze-300 hover:shadow-lift">
      <Link
        aria-label={`عرض تفاصيل خدمة ${service.title}`}
        className="flex h-full flex-col rounded-brand-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-600"
        to={`/services/${service.slug}`}
      >
        <img
          alt={`${service.title} — صورة توضيحية`}
          className="aspect-[16/10] w-full object-cover"
          decoding="async"
          height="675"
          loading="lazy"
          src={service.coverImage}
          width="1200"
        />
        <div className="flex flex-1 flex-col p-6">
          <span className="grid size-10 place-items-center rounded-brand-sm bg-bronze-100 text-bronze-700">
            <Brush aria-hidden="true" className="size-5" strokeWidth={1.7} />
          </span>
          <h3 className="mt-4 text-xl font-bold text-charcoal-900">{service.title}</h3>
          <p className="mt-3 flex-1 leading-8 text-charcoal-700">
            {service.shortDescription}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-bronze-700">
            عرض التفاصيل
            <ArrowLeft aria-hidden="true" className="size-4 transition group-hover:-translate-x-1" />
          </span>
        </div>
      </Link>
    </Card>
  )
}
