import { Images } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'
import type { SiteInfo, WorkGalleryImage } from '../domain/models'
import { ProjectsEmptyState } from '../features/projects/components/ProjectsEmptyState'
import { RealWorkGallery } from '../features/projects/components/RealWorkGallery'
import { usePageMetadata } from '../shared/hooks/usePageMetadata'
import { Badge, Container } from '../shared/ui'

export interface ProjectsPageData {
  siteInfo: SiteInfo
  galleryImages: readonly WorkGalleryImage[]
}

export function ProjectsPage() {
  const { galleryImages, siteInfo } = useLoaderData() as ProjectsPageData

  usePageMetadata(
    `معرض أعمال الدهانات في ${siteInfo.city} | ${siteInfo.businessName}`,
    `صور حقيقية من أعمال الدهانات والتشطيبات المقدمة من ${siteInfo.businessName}.`,
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
            صور من أعمال الدهانات والتشطيبات
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-charcoal-700">
            مجموعة من صور الأعمال مقدمة من صاحب النشاط، تعكس تنوع الدهانات والتشطيبات أثناء التنفيذ وبعده.
          </p>
        </Container>
      </section>

      <section aria-label="معرض صور أعمال الدهانات" className="py-section">
        <Container>
          {galleryImages.length > 0 ? (
            <>
              <div className="mb-10 grid gap-4 rounded-brand-xl border border-ivory-200 bg-surface p-6 shadow-card sm:grid-cols-3 sm:p-8">
                <p className="font-bold text-charcoal-900">صور حقيقية من مواقع العمل</p>
                <p className="text-sm leading-7 text-charcoal-700">بدون صور مخزنة أو نماذج دعائية منسوبة للأعمال.</p>
                <p className="text-sm leading-7 text-charcoal-700">اضغط على أي صورة لعرضها بحجم أكبر.</p>
              </div>
              <RealWorkGallery images={galleryImages} />
            </>
          ) : (
            <ProjectsEmptyState siteInfo={siteInfo} />
          )}
        </Container>
      </section>
    </div>
  )
}
