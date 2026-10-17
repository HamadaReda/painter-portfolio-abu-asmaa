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

  async getServiceBySlug(slug: string) {
    return services.find((service) => service.slug === slug) ?? null
  }

  async getProjects() {
    return projects
  }

  async getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug) ?? null
  }
}
