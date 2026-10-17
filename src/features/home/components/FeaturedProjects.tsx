import { Images } from 'lucide-react'
import type { Project } from '../../../domain/models'
import { ProjectCard } from '../../projects/components/ProjectCard'
import { Button, Container, SectionHeading } from '../../../shared/ui'

interface FeaturedProjectsProps {
  projects: readonly Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section aria-labelledby="projects-title" className="bg-charcoal-900 py-section text-white" id="projects">
      <Container>
        <SectionHeading
          description="لن نعرض صورًا أو تفاصيل أعمال قبل توثيقها والتحقق من معلوماتها."
          eyebrow="نماذج الأعمال"
          id="projects-title"
          title="مشروعات مختارة"
          tone="dark"
        />

        {featuredProjects.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <div className="md:col-span-2 lg:col-span-3">
              <Button to="/projects" variant="secondary">عرض كل المشروعات</Button>
            </div>
          </div>
        ) : (
          <div className="mt-10 flex max-w-2xl items-start gap-4 rounded-brand-lg border border-white/10 bg-white/5 p-6">
            <Images aria-hidden="true" className="mt-1 size-6 shrink-0 text-bronze-300" />
            <div>
              <h3 className="font-bold">لا توجد مشروعات موثقة معروضة حاليًا</h3>
              <p className="mt-2 text-sm leading-7 text-ivory-200">
                ستُضاف نماذج الأعمال هنا بعد توفر صور ومعلومات حقيقية معتمدة.
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
