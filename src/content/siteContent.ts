import { siteConfig } from '../config/site'
import type { Project, Service, SiteInfo } from '../domain/models'

export const siteInfo: SiteInfo = siteConfig

// Content will be added only when real business information is available.
export const services: Service[] = []
export const projects: Project[] = []
