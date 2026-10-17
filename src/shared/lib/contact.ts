export function createWhatsAppUrl(baseUrl: string, message: string) {
  const url = new URL(baseUrl)
  url.searchParams.set('text', message)
  return url.toString()
}
