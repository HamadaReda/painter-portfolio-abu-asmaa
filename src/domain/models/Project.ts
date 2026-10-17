export interface Project {
  id: string
  slug: string
  title: string
  description: string
  category: string
  location?: string
  coverImage: string
  gallery: readonly string[]
  beforeImage?: string
  afterImage?: string
  featured: boolean
  relatedServiceSlug?: string
}
