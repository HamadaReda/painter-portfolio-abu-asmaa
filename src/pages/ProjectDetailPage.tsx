import { ChevronLeft, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link, useLoaderData } from 'react-router-dom'
import type { Project, Service, SiteInfo } from '../domain/models'
import { BeforeAfterComparison } from '../features/projects/components/BeforeAfterComparison'
import { ProjectCard } from '../features/projects/components/ProjectCard'
import { ProjectImageGallery } from '../features/projects/components/ProjectImageGallery'
import { SafeProjectImage } from '../features/projects/components/SafeProjectImage'
import { usePageMetadata } from '../shared/hooks/usePageMetadata'
import { createWhatsAppUrl } from '../shared/lib/contact'
import { Badge, Button, Container, SectionHeading } from '../shared/ui'

export interface ProjectDetailPageData {
  project: Project
  relatedProjects: readonly Project[]
  relatedService: Service | null
  siteInfo: SiteInfo
}

export function ProjectDetailPage() {
  const { project, relatedProjects, relatedService, siteInfo } =
    useLoaderData() as ProjectDetailPageData
  const locationText = project.location ? ` في ${project.location}` : ''
  const whatsappUrl = createWhatsAppUrl(
    siteInfo.contact.whatsappUrl,
    `مرحبًا، شاهدت مشروع ${project.title}${locationText} وأرغب في مناقشة مشروع مشابه.`,
  )

  usePageMetadata(
    `${project.title} | مشروعات ${siteInfo.businessName}`,
    project.description,
  )

  return (
    <article className="w-full">
      <header className="border-b border-ivory-200 py-10 sm:py-14">
        <Container>
          <nav aria-label="مسار التنقل">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-700">
              <li><Link className="hover:text-bronze-700 hover:underline" to="/">الرئيسية</Link></li>
              <li aria-hidden="true"><ChevronLeft className="size-4" /></li>
              <li><Link className="hover:text-bronze-700 hover:underline" to="/projects">المشروعات</Link></li>
              <li aria-hidden="true"><ChevronLeft className="size-4" /></li>
              <li aria-current="page" className="font-semibold text-charcoal-900">{project.title}</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <Badge>{project.category}</Badge>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-charcoal-900 sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 text-lg leading-9 text-charcoal-700">{project.description}</p>
              {project.location ? (
                <p className="mt-5 flex items-center gap-2 font-semibold text-charcoal-800">
                  <MapPin aria-hidden="true" className="size-5 text-bronze-600" />
                  {project.location}
                </p>
              ) : null}
              {relatedService ? (
                <p className="mt-4 text-charcoal-700">
                  الخدمة المرتبطة:{' '}
                  <Link className="font-bold text-bronze-700 underline-offset-4 hover:underline" to={`/services/${relatedService.slug}`}>
                    {relatedService.title}
                  </Link>
                </p>
              ) : null}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappUrl} leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />} rel="noreferrer" size="lg" target="_blank">
                  ناقش مشروعًا مشابهًا
                </Button>
                <Button href={`tel:${siteInfo.contact.phone}`} leadingIcon={<Phone aria-hidden="true" className="size-5" />} size="lg" variant="secondary">
                  اتصل الآن
                </Button>
              </div>
            </div>
            <SafeProjectImage
              alt={`الصورة الرئيسية لمشروع ${project.title}`}
              className="aspect-[4/3] w-full rounded-brand-xl object-cover shadow-lift"
              fetchPriority="high"
              loading="eager"
              src={project.coverImage}
            />
          </div>
        </Container>
      </header>

      {project.beforeImage && project.afterImage ? (
        <section aria-labelledby="comparison-title" className="bg-surface py-section">
          <Container>
            <SectionHeading eyebrow="قبل وبعد" id="comparison-title" title="قارن نتيجة العمل" />
            <div className="mt-10 max-w-4xl">
              <BeforeAfterComparison afterImage={project.afterImage} beforeImage={project.beforeImage} title={project.title} />
            </div>
          </Container>
        </section>
      ) : null}

      {project.gallery.length > 0 ? (
        <section aria-labelledby="gallery-title" className="py-section">
          <Container>
            <SectionHeading eyebrow="تفاصيل المشروع" id="gallery-title" title="صور المشروع" />
            <div className="mt-10"><ProjectImageGallery project={project} /></div>
          </Container>
        </section>
      ) : null}

      <section aria-labelledby="project-contact-title" className="bg-bronze-500 py-12 sm:py-16">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-charcoal-900" id="project-contact-title">هل لديك مشروع مشابه؟</h2>
            <p className="mt-3 leading-8 text-charcoal-800">أرسل تفاصيل الموقع ونطاق العمل المطلوب لمناقشة احتياجك.</p>
          </div>
          <Button href={whatsappUrl} leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />} rel="noreferrer" size="lg" target="_blank">
            تواصل عبر واتساب
          </Button>
        </Container>
      </section>

      {relatedProjects.length > 0 ? (
        <section aria-labelledby="related-projects-title" className="py-section">
          <Container>
            <SectionHeading eyebrow="أعمال أخرى" id="related-projects-title" title="مشروعات مرتبطة" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((relatedProject) => <ProjectCard key={relatedProject.id} project={relatedProject} />)}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  )
}
