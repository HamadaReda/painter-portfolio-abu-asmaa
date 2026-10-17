import paintingHeroImage from '../assets/images/painting-hero-1440.jpg'
import { siteConfig } from '../config/site'
import { services } from '../content/siteContent'

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface SeoMetadata {
  title: string
  description: string
  path: string
  image: string
  type: 'website' | 'article'
  breadcrumbs?: readonly BreadcrumbItem[]
  noIndex?: boolean
}

const baseUrl = (
  import.meta.env.VITE_SITE_URL || siteConfig.url
).replace(/\/$/, '')

export function getSiteUrl() {
  return baseUrl
}

export function toAbsoluteUrl(path: string) {
  if (!baseUrl) return ''
  return new URL(path, `${baseUrl}/`).toString()
}

export function getSeoMetadata(pathname: string): SeoMetadata {
  const path = normalizePath(pathname)
  const shared = { image: paintingHeroImage, path, type: 'website' as const }

  if (path === '/') {
    return {
      ...shared,
      title: `معلم دهانات في ${siteConfig.city} | ${siteConfig.businessName}`,
      description:
        'خدمات دهانات للمنازل والفلل والمباني والمواقع التجارية في المدينة المنورة، مع تواصل مباشر لمناقشة تفاصيل المشروع.',
    }
  }

  if (path === '/about') {
    return {
      ...shared,
      title: `من نحن | ${siteConfig.businessName}`,
      description: `تعرّف على ${siteConfig.businessName} وخدمات الدهانات والتشطيبات المقدمة في ${siteConfig.city}.`,
      breadcrumbs: breadcrumb('من نحن', path),
    }
  }

  if (path === '/services') {
    return {
      ...shared,
      title: `خدمات الدهانات في ${siteConfig.city} | ${siteConfig.businessName}`,
      description:
        'استعرض خدمات الدهانات الداخلية والخارجية ودهانات الفلل والمباني وتجهيز الأسطح في المدينة المنورة.',
      breadcrumbs: breadcrumb('الخدمات', path),
    }
  }

  if (path.startsWith('/services/')) {
    const slug = path.slice('/services/'.length)
    const service = services.find((item) => item.slug === slug)
    if (service) {
      return {
        title: `${service.title} في ${siteConfig.city} | ${siteConfig.businessName}`,
        description: service.shortDescription,
        path,
        image: service.coverImage,
        type: 'article',
        breadcrumbs: [
          { name: 'الرئيسية', path: '/' },
          { name: 'الخدمات', path: '/services' },
          { name: service.title, path },
        ],
      }
    }
  }

  if (path === '/projects') {
    return {
      ...shared,
      title: `أعمال الدهانات والتشطيبات | ${siteConfig.businessName}`,
      description:
        'صور حقيقية من أعمال الدهانات والتشطيبات المقدمة من معلم دهانات بوية أبو أسماء.',
      breadcrumbs: breadcrumb('معرض الأعمال', path),
    }
  }

  if (path === '/contact') {
    return {
      ...shared,
      title: `تواصل معنا | ${siteConfig.businessName}`,
      description: `تواصل مع ${siteConfig.businessName} لمناقشة خدمات الدهانات في ${siteConfig.city}.`,
      breadcrumbs: breadcrumb('تواصل معنا', path),
    }
  }

  return {
    ...shared,
    title: `الصفحة غير موجودة | ${siteConfig.businessName}`,
    description: 'تعذّر العثور على الصفحة المطلوبة.',
    noIndex: true,
  }
}

function breadcrumb(name: string, path: string): BreadcrumbItem[] {
  return [
    { name: 'الرئيسية', path: '/' },
    { name, path },
  ]
}

function normalizePath(pathname: string) {
  const withoutQuery = pathname.split(/[?#]/, 1)[0] || '/'
  return withoutQuery === '/' ? '/' : withoutQuery.replace(/\/$/, '')
}
