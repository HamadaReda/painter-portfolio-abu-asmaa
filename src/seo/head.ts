import { siteConfig } from '../config/site'
import type { SeoMetadata } from './metadata'
import { getSiteUrl, toAbsoluteUrl } from './metadata'

export function renderSeoHead(metadata: SeoMetadata) {
  const canonicalUrl = toAbsoluteUrl(metadata.path)
  const imageUrl = toAbsoluteUrl(metadata.image)
  const robots = metadata.noIndex ? 'noindex, nofollow' : 'index, follow'
  const tags = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    '<meta property="og:locale" content="ar_SA" />',
    `<meta property="og:type" content="${metadata.type}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.businessName)}" />`,
    `<meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
  ]

  if (canonicalUrl) {
    tags.push(
      `<link rel="canonical" href="${canonicalUrl}" />`,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    )
  }

  if (imageUrl) {
    tags.push(
      `<meta property="og:image" content="${imageUrl}" />`,
      `<meta property="og:image:alt" content="${escapeHtml(metadata.title)}" />`,
      `<meta name="twitter:image" content="${imageUrl}" />`,
    )
  }

  for (const structuredData of getStructuredData(metadata)) {
    tags.push(
      `<script type="application/ld+json">${safeJson(structuredData)}</script>`,
    )
  }

  return tags.map(markSeoElement).join('\n    ')
}

function getStructuredData(metadata: SeoMetadata) {
  const siteUrl = getSiteUrl()
  if (!siteUrl || metadata.noIndex) return []

  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'HousePainter',
      name: siteConfig.businessName,
      url: siteUrl,
      telephone: siteConfig.contact.phone,
      areaServed: {
        '@type': 'City',
        name: siteConfig.city,
      },
      ...(siteConfig.googleMapsUrl ? { sameAs: [siteConfig.googleMapsUrl] } : {}),
    },
  ]

  if (metadata.breadcrumbs && metadata.breadcrumbs.length > 1) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: metadata.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: toAbsoluteUrl(item.path),
      })),
    })
  }

  return schemas
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function safeJson(value: unknown) {
  return JSON.stringify(value).replaceAll('<', '\\u003c')
}

function markSeoElement(tag: string) {
  return tag.replace(/^<([a-z]+)/, '<$1 data-seo="true"')
}
