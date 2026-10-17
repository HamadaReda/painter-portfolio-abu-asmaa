import { useMemo, useState } from 'react'
import type { Project } from '../../../domain/models'
import { ProjectCard } from './ProjectCard'

interface ProjectsGalleryProps {
  projects: readonly Project[]
}

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = useMemo(
    () => [...new Set(projects.map((project) => project.category))],
    [projects],
  )
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      {categories.length > 1 ? (
        <div aria-label="تصفية المشروعات حسب الفئة" className="flex flex-wrap gap-2" role="group">
          <button
            aria-pressed={activeCategory === 'all'}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-600 ${
              activeCategory === 'all'
                ? 'border-charcoal-900 bg-charcoal-900 text-white'
                : 'border-ivory-200 bg-surface text-charcoal-700 hover:border-bronze-300'
            }`}
            onClick={() => setActiveCategory('all')}
            type="button"
          >
            جميع المشروعات
          </button>
          {categories.map((category) => (
            <button
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-600 ${
                activeCategory === category
                  ? 'border-charcoal-900 bg-charcoal-900 text-white'
                  : 'border-ivory-200 bg-surface text-charcoal-700 hover:border-bronze-300'
              }`}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div aria-live="polite" className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}
