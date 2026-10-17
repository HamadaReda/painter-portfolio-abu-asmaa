import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const rootDirectory = resolve(import.meta.dirname, '..')
const outputDirectory = resolve(rootDirectory, 'dist')
const serverEntryPath = resolve(outputDirectory, 'server', 'entry-server.js')
const template = await readFile(resolve(outputDirectory, 'index.html'), 'utf8')
const serverEntry = await import(pathToFileURL(serverEntryPath).href)
const paths = await serverEntry.getStaticPaths()

for (const pathname of paths) {
  const rendered = await serverEntry.render(pathname)
  if (rendered.statusCode >= 400) {
    throw new Error(`Could not pre-render ${pathname}: HTTP ${rendered.statusCode}`)
  }

  await writeRoute(pathname, injectRenderedContent(template, rendered))
}

const notFound = await serverEntry.render('/404-not-found')
await writeFile(
  resolve(outputDirectory, '404.html'),
  injectRenderedContent(template, notFound),
  'utf8',
)

await generateCrawlerFiles(serverEntry.getSiteUrl(), paths)
await rm(resolve(outputDirectory, 'server'), { force: true, recursive: true })

console.log(`Pre-rendered ${paths.length} public routes and 404.html.`)

function injectRenderedContent(html, rendered) {
  return html
    .replace('<!--seo-head-->', rendered.headHtml)
    .replace('<!--app-html-->', rendered.appHtml)
}

async function writeRoute(pathname, html) {
  const filePath =
    pathname === '/'
      ? resolve(outputDirectory, 'index.html')
      : resolve(outputDirectory, pathname.slice(1), 'index.html')

  await mkdir(dirname(filePath), { recursive: true })
  await writeFile(filePath, html, 'utf8')
}

async function generateCrawlerFiles(siteUrl, publicPaths) {
  if (!siteUrl) {
    await writeFile(
      resolve(outputDirectory, 'robots.txt'),
      'User-agent: *\nDisallow: /\n',
      'utf8',
    )
    await writeFile(
      resolve(outputDirectory, 'sitemap.xml'),
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" />\n',
      'utf8',
    )
    console.warn(
      'VITE_SITE_URL is not configured. Canonicals are omitted and robots.txt blocks indexing for this build.',
    )
    return
  }

  const urls = publicPaths
    .map((pathname) => `  <url><loc>${escapeXml(new URL(pathname, `${siteUrl}/`).toString())}</loc></url>`)
    .join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`

  await Promise.all([
    writeFile(resolve(outputDirectory, 'sitemap.xml'), sitemap, 'utf8'),
    writeFile(resolve(outputDirectory, 'robots.txt'), robots, 'utf8'),
  ])
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}
