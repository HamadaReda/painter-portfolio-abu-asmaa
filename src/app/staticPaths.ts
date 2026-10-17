import { contentRepository } from '../repositories/content'

export async function getStaticPaths() {
  const [services, projects] = await Promise.all([
    contentRepository.getServices(),
    contentRepository.getProjects(),
  ])

  return [
    '/',
    '/services',
    '/projects',
    '/about',
    ...services.map((service) => `/services/${service.slug}`),
    ...projects.map((project) => `/projects/${project.slug}`),
  ]
}
