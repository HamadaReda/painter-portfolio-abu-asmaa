import { StaticContentRepository } from './StaticContentRepository'

export type { ContentRepository } from './ContentRepository'

export const contentRepository = new StaticContentRepository()
