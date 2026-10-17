import type { SiteInfo } from '../domain/models'

export const siteConfig = {
  businessName: 'معلم دهانات بوية أبو أسماء',
  city: 'المدينة المنورة',
  description: 'موقع تعريفي لخدمات الدهانات في المدينة المنورة.',
  contact: {
    phone: '+966562167480',
    displayPhone: '0562167480',
    whatsappUrl: 'https://wa.me/966562167480',
  },
} as const satisfies SiteInfo
