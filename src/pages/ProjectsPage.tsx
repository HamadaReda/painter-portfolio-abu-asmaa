import { Images } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'
import type { Project, SiteInfo } from '../domain/models'
import { ProjectsEmptyState } from '../features/projects/components/ProjectsEmptyState'
import { ProjectsGallery } from '../features/projects/components/ProjectsGallery'
import { usePageMetadata } from '../shared/hooks/usePageMetadata'
import { Badge, Container } from '../shared/ui'

export interface ProjectsPageData {
  projects: readonly Project[]
  siteInfo: SiteInfo
}

export function ProjectsPage() {
  const { projects, siteInfo } = useLoaderData() as ProjectsPageData

  usePageMetadata(
    `مشروعات الدهانات في ${siteInfo.city} | ${siteInfo.businessName}`,
    `معرض المشروعات الموثقة لخدمات الدهانات والتشطيبات في ${siteInfo.city}.`,
  )

  return (
    <div className="w-full">
      <section aria-labelledby="projects-page-title" className="border-b border-ivory-200 py-12 sm:py-16">
        <Container>
          <Badge icon={<Images aria-hidden="true" className="size-4" />}>
            معرض الأعمال
          </Badge>
          <h1
            className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-charcoal-900 sm:text-5xl"
            id="projects-page-title"
          >
            مشروعات الدهانات والتشطيبات في {siteInfo.city}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-charcoal-700">
            نماذج موثقة من الأعمال، تُعرض بصورها ومعلوماتها الحقيقية عند توفرها.
          </p>
        </Container>
      </section>

      <section aria-label="قائمة مشروعات الدهانات" className="py-section">
        <Container>
          {projects.length > 0 ? (
            <ProjectsGallery projects={projects} />
          ) : (
            <ProjectsEmptyState siteInfo={siteInfo} />
          )}
        </Container>
      </section>
    </div>
  )
}
