import { siteConfig } from './site'

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export const publicNavigation: readonly NavigationItem[] = [
  { label: 'الرئيسية', href: '/' },
  {
    label: 'اتصل بنا',
    href: `tel:${siteConfig.contact.phone}`,
    external: true,
  },
]
