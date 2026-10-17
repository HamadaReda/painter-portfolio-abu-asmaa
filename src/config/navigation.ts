export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export const publicNavigation: readonly NavigationItem[] = [
  { label: 'الرئيسية', href: '/' },
  { label: 'الخدمات', href: '/services' },
  { label: 'المشروعات', href: '/projects' },
  { label: 'تواصل معنا', href: '/#contact' },
]
