import type {
  AboutPageContent,
  HomePageContent,
  Project,
  Service,
  SiteInfo,
} from '../../domain/models'

export interface ContentRepository {
  getSiteInfo(): Promise<SiteInfo>
  getHomePageContent(): Promise<HomePageContent>
  getServices(): Promise<readonly Service[]>
  getServiceBySlug(slug: string): Promise<Service | null>
  getProjects(): Promise<readonly Project[]>
  getProjectBySlug(slug: string): Promise<Project | null>
  getAboutPageContent(): Promise<AboutPageContent>
}
