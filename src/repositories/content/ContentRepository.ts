import type {
  HomePageContent,
  Project,
  Service,
  SiteInfo,
} from '../../domain/models'

export interface ContentRepository {
  getSiteInfo(): Promise<SiteInfo>
  getHomePageContent(): Promise<HomePageContent>
  getServices(): Promise<readonly Service[]>
  getProjects(): Promise<readonly Project[]>
}
