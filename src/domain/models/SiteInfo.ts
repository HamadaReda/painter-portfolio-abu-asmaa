export interface SiteInfo {
  businessName: string
  city: string
  description: string
  url: string
  contact: {
    phone: string
    displayPhone: string
    whatsappUrl: string
  }
  businessHours?: string
  googleMapsUrl?: string
}
