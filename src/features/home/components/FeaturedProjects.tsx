import { Images } from 'lucide-react'
import type { Project } from '../../../domain/models'
import { Card, Container, SectionHeading } from '../../../shared/ui'

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
              <Card className="overflow-hidden p-0" key={project.id}>
                {project.imageUrl ? (
                  <img
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover"
                    decoding="async"
                    loading="lazy"
                    src={project.imageUrl}
                  />
                ) : null}
                <div className="p-6">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="mt-2 leading-7 text-charcoal-700">{project.description}</p>
                </div>
              </Card>
            ))}
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
