import { createBrowserRouter } from 'react-router-dom'
import { contentRepository } from '../repositories/content'
import { PublicLayout } from '../shared/layouts/PublicLayout'
import { HomePage, type HomePageData } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'

async function loadHomePage(): Promise<HomePageData> {
  const [siteInfo, homePageContent, services, projects] = await Promise.all([
    contentRepository.getSiteInfo(),
    contentRepository.getHomePageContent(),
    contentRepository.getServices(),
    contentRepository.getProjects(),
  ])

  return { siteInfo, homePageContent, services, projects }
}

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        index: true,
        loader: loadHomePage,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
