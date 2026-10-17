import { contentRepository } from '../repositories/content'

export async function getStaticPaths() {
  const services = await contentRepository.getServices()

  return ['/', '/services', ...services.map((service) => `/services/${service.slug}`)]
}
