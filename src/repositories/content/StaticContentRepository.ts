import {
  homePageContent,
  projects,
  services,
  siteInfo,
} from '../../content/siteContent'
import type { ContentRepository } from './ContentRepository'

export class StaticContentRepository implements ContentRepository {
  async getSiteInfo() {
    return siteInfo
  }

  async getHomePageContent() {
    return homePageContent
  }

  async getServices() {
    return services
  }

  async getProjects() {
    return projects
  }
}
