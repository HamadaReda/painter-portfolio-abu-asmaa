import type { Project } from '../../../domain/models'
import { SafeProjectImage } from './SafeProjectImage'

interface ProjectImageGalleryProps {
  project: Project
}

export function ProjectImageGallery({ project }: ProjectImageGalleryProps) {
  if (project.gallery.length === 0) {
    return null
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {project.gallery.map((image, index) => (
        <SafeProjectImage
          alt={`صورة ${index + 1} من مشروع ${project.title}`}
          className="aspect-[4/3] w-full rounded-brand-lg object-cover shadow-card"
          key={`${image}-${index}`}
          src={image}
        />
      ))}
    </div>
  )
}
