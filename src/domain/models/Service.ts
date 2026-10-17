export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  coverImage: string
  gallery?: readonly string[]
  benefits?: readonly string[]
  relatedServices?: readonly string[]
}
