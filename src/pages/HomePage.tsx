import { useLoaderData } from 'react-router-dom'
import type {
  HomePageContent,
  Project,
  Service,
  SiteInfo,
  WorkGalleryImage,
} from '../domain/models'
import { FeaturedProjects } from '../features/home/components/FeaturedProjects'
import { FinalCta } from '../features/home/components/FinalCta'
import { HomeHero } from '../features/home/components/HomeHero'
import { ServiceArea } from '../features/home/components/ServiceArea'
import { ServicesPreview } from '../features/home/components/ServicesPreview'
import { WhyChooseUs } from '../features/home/components/WhyChooseUs'
import { WorkProcess } from '../features/home/components/WorkProcess'

export interface HomePageData {
  siteInfo: SiteInfo
  homePageContent: HomePageContent
  services: readonly Service[]
  projects: readonly Project[]
  galleryImages: readonly WorkGalleryImage[]
}

export function HomePage() {
  const { siteInfo, homePageContent, services, galleryImages } =
    useLoaderData() as HomePageData

  return (
    <div className="w-full">
      <HomeHero content={homePageContent.hero} siteInfo={siteInfo} />
      <ServicesPreview services={services} />
      <WhyChooseUs values={homePageContent.values} />
      <FeaturedProjects images={galleryImages} />
      <WorkProcess steps={homePageContent.process} />
      <ServiceArea areas={homePageContent.serviceAreas} />
      <FinalCta content={homePageContent.finalCta} siteInfo={siteInfo} />
    </div>
  )
}
