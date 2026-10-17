import { ArrowLeft, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../../domain/models'
import { Card } from '../../../shared/ui'
import { SafeProjectImage } from './SafeProjectImage'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group h-full overflow-hidden p-0 transition duration-200 hover:-translate-y-1 hover:border-bronze-300 hover:shadow-lift">
      <Link
        aria-label={`عرض تفاصيل مشروع ${project.title}`}
        className="flex h-full flex-col rounded-brand-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-600"
        to={`/projects/${project.slug}`}
      >
        <SafeProjectImage
          alt={`صورة مشروع ${project.title}`}
          className="aspect-[4/3] w-full object-cover"
          src={project.coverImage}
        />
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-bold text-bronze-600">{project.category}</p>
          <h3 className="mt-2 text-xl font-bold text-charcoal-900">{project.title}</h3>
          <p className="mt-3 line-clamp-3 flex-1 leading-8 text-charcoal-700">
            {project.description}
          </p>
          {project.location ? (
            <p className="mt-4 flex items-center gap-2 text-sm text-charcoal-700">
              <MapPin aria-hidden="true" className="size-4 text-bronze-600" />
              {project.location}
            </p>
          ) : null}
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-bronze-700">
            عرض المشروع
            <ArrowLeft aria-hidden="true" className="size-4 transition group-hover:-translate-x-1" />
          </span>
        </div>
      </Link>
    </Card>
  )
}
