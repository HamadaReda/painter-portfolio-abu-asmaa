export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export const publicNavigation: readonly NavigationItem[] = [
  { label: 'الرئيسية', href: '/' },
  { label: 'الخدمات', href: '/services' },
  { label: 'معرض الأعمال', href: '/projects' },
  { label: 'من نحن', href: '/about' },
  { label: 'تواصل معنا', href: '/contact' },
]
