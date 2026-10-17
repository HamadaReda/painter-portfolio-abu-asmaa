export type CtaKind = 'phone' | 'whatsapp' | 'quote-whatsapp' | 'copy-message'

export function emitCtaEvent(kind: CtaKind, context: string) {
  window.dispatchEvent(
    new CustomEvent('site:cta', {
      detail: { kind, context },
    }),
  )
}
