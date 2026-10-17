import { useLoaderData } from 'react-router-dom'
import type { Project, Service, SiteInfo } from '../domain/models'
import { HomeIntro } from '../features/home/components/HomeIntro'

export interface HomePageData {
  siteInfo: SiteInfo
  services: readonly Service[]
  projects: readonly Project[]
}

export function HomePage() {
  const { siteInfo } = useLoaderData() as HomePageData

  return <HomeIntro siteInfo={siteInfo} />
}
