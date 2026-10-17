import { projects, services, siteInfo } from '../../content/siteContent'
import type { ContentRepository } from './ContentRepository'

export class StaticContentRepository implements ContentRepository {
  async getSiteInfo() {
    return siteInfo
  }

  async getServices() {
    return services
  }

  async getProjects() {
    return projects
  }
}
