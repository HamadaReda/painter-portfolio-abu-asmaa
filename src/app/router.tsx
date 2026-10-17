import {
  createBrowserRouter,
  type LoaderFunctionArgs,
  type RouteObject,
} from 'react-router-dom'
import { contentRepository } from '../repositories/content'
import { PublicLayout } from '../shared/layouts/PublicLayout'
import { HomePage, type HomePageData } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ServiceDetailPage, type ServiceDetailPageData } from '../pages/ServiceDetailPage'
import { ServicesPage, type ServicesPageData } from '../pages/ServicesPage'
import { ProjectsPage, type ProjectsPageData } from '../pages/ProjectsPage'
import { PageLoading } from '../shared/ui'
import { AboutPage, type AboutPageData } from '../pages/AboutPage'
import { ContactPage, type ContactPageData } from '../pages/ContactPage'

async function loadHomePage(): Promise<HomePageData> {
  const [siteInfo, homePageContent, services, projects, galleryImages] = await Promise.all([
    contentRepository.getSiteInfo(),
    contentRepository.getHomePageContent(),
    contentRepository.getServices(),
    contentRepository.getProjects(),
    contentRepository.getWorkGalleryImages(),
  ])

  return { siteInfo, homePageContent, services, projects, galleryImages }
}

async function loadServicesPage(): Promise<ServicesPageData> {
  const [services, siteInfo] = await Promise.all([
    contentRepository.getServices(),
    contentRepository.getSiteInfo(),
  ])

  return { services, siteInfo }
}

async function loadProjectsPage(): Promise<ProjectsPageData> {
  const [siteInfo, galleryImages] = await Promise.all([
    contentRepository.getSiteInfo(),
    contentRepository.getWorkGalleryImages(),
  ])

  return { siteInfo, galleryImages }
}

async function loadAboutPage(): Promise<AboutPageData> {
  const [content, services, siteInfo] = await Promise.all([
    contentRepository.getAboutPageContent(),
    contentRepository.getServices(),
    contentRepository.getSiteInfo(),
  ])

  return { content, services, siteInfo }
}

async function loadContactPage(): Promise<ContactPageData> {
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

export const routes: RouteObject[] = [
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
        path: 'projects',
        loader: loadProjectsPage,
        element: <ProjectsPage />,
      },
      {
        path: 'about',
        loader: loadAboutPage,
        element: <AboutPage />,
      },
      {
        path: 'contact',
        loader: loadContactPage,
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]

export function createAppRouter() {
  return createBrowserRouter(routes, {
    hydrationData: window.__staticRouterHydrationData,
  })
}
