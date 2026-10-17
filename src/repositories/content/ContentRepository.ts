import type { Project, Service, SiteInfo } from '../../domain/models'

export interface ContentRepository {
  getSiteInfo(): Promise<SiteInfo>
  getServices(): Promise<readonly Service[]>
  getProjects(): Promise<readonly Project[]>
}
