import { Images } from 'lucide-react'
import type { WorkGalleryImage } from '../../../domain/models'
import { Button, Container, SectionHeading } from '../../../shared/ui'

interface FeaturedProjectsProps {
  images: readonly WorkGalleryImage[]
}

export function FeaturedProjects({ images }: FeaturedProjectsProps) {
  const featuredImages = images.filter((image) => image.featured).slice(0, 6)

  return (
    <section aria-labelledby="projects-title" className="bg-charcoal-900 py-section text-white" id="projects">
      <Container>
        <SectionHeading
          description="لقطات حقيقية مقدمة من صاحب النشاط لأعمال دهانات وتشطيبات متنوعة."
          eyebrow="من أرض الواقع"
          id="projects-title"
          title="صور مختارة من الأعمال"
          tone="dark"
        />

        {featuredImages.length > 0 ? (
          <>
            <div className="mt-10 grid auto-rows-[14rem] gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredImages.map((image, index) => (
                <figure
                  className={`group relative overflow-hidden rounded-brand-lg bg-charcoal-800 ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                  key={image.id}
                >
                  <img
                    alt={image.alt}
                    className="size-full object-cover transition duration-300 group-hover:scale-[1.025]"
                    decoding="async"
                    height={image.height}
                    loading="lazy"
                    src={image.src}
                    width={image.width}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-charcoal-900/45 via-transparent to-transparent" />
                </figure>
              ))}
            </div>
            <Button className="mt-8 border-ivory-200 text-white hover:bg-white/10" to="/projects" variant="secondary">
              شاهد معرض الأعمال كاملًا
            </Button>
          </>
        ) : (
          <div className="mt-10 flex max-w-2xl items-start gap-4 rounded-brand-lg border border-white/10 bg-white/5 p-6">
            <Images aria-hidden="true" className="mt-1 size-6 shrink-0 text-bronze-300" />
            <p className="text-sm leading-7 text-ivory-200">سيتم عرض صور الأعمال هنا عند توفرها.</p>
          </div>
        )}
      </Container>
    </section>
  )
}
