import { renderToString } from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom'
import { routes } from './app/router'
import { getStaticPaths } from './app/staticPaths'
import { renderSeoHead } from './seo/head'
import { getSeoMetadata, getSiteUrl } from './seo/metadata'

export { getSiteUrl, getStaticPaths }

export async function render(pathname: string) {
  const { dataRoutes, query } = createStaticHandler(routes)
  const request = new Request(new URL(pathname, 'http://static-render.local'))
  const context = await query(request)

  if (context instanceof Response) {
    return {
      appHtml: '',
      headHtml: renderSeoHead(getSeoMetadata(pathname)),
      statusCode: context.status,
    }
  }

  const router = createStaticRouter(dataRoutes, context)

  return {
    appHtml: renderToString(
      <StaticRouterProvider context={context} router={router} />,
    ),
    headHtml: renderSeoHead(getSeoMetadata(pathname)),
    statusCode: context.statusCode,
  }
}
