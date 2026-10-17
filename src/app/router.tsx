import { createBrowserRouter, type LoaderFunctionArgs } from 'react-router-dom'
import { contentRepository } from '../repositories/content'
import { PublicLayout } from '../shared/layouts/PublicLayout'
import { HomePage, type HomePageData } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ServiceDetailPage, type ServiceDetailPageData } from '../pages/ServiceDetailPage'
import { ServicesPage, type ServicesPageData } from '../pages/ServicesPage'
import { PageLoading } from '../shared/ui'

async function loadHomePage(): Promise<HomePageData> {
  const [siteInfo, homePageContent, services, projects] = await Promise.all([
    contentRepository.getSiteInfo(),
    contentRepository.getHomePageContent(),
    contentRepository.getServices(),
    contentRepository.getProjects(),
  ])

  return { siteInfo, homePageContent, services, projects }
}

async function loadServicesPage(): Promise<ServicesPageData> {
  const [services, siteInfo] = await Promise.all([
    contentRepository.getServices(),
    contentRepository.getSiteInfo(),
  ])

  return { services, siteInfo }
}

async function loadServiceDetail({
  params,
}: LoaderFunctionArgs): Promise<ServiceDetailPageData> {
  const slug = params.slug

  if (!slug) {
    throw new Response('Not Found', { status: 404 })
  }

  const [service, services, siteInfo] = await Promise.all([
    contentRepository.getServiceBySlug(slug),
    contentRepository.getServices(),
    contentRepository.getSiteInfo(),
  ])

  if (!service) {
    throw new Response('Not Found', { status: 404 })
  }

  const relatedSlugs = new Set(service.relatedServices ?? [])
  const relatedServices = services.filter((candidate) =>
    relatedSlugs.has(candidate.slug),
  )

  return { service, relatedServices, siteInfo }
}

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    hydrateFallbackElement: <PageLoading />,
    children: [
      {
        index: true,
        loader: loadHomePage,
        element: <HomePage />,
      },
      {
        path: 'services',
        loader: loadServicesPage,
        element: <ServicesPage />,
      },
      {
        path: 'services/:slug',
        loader: loadServiceDetail,
        element: <ServiceDetailPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
