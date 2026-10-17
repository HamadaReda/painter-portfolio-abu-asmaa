import { ArrowRight } from 'lucide-react'
import { Button, Container } from '../shared/ui'

export function NotFoundPage() {
  return (
    <section aria-labelledby="not-found-title" className="flex w-full items-center py-section">
      <Container>
        <div className="max-w-xl rounded-brand-xl border border-ivory-200 bg-surface p-8 shadow-card sm:p-12">
          <p className="text-sm font-bold text-bronze-600">خطأ 404</p>
          <h1 id="not-found-title" className="mt-3 text-3xl font-bold text-charcoal-900 sm:text-4xl">
            الصفحة غير موجودة
          </h1>
          <p className="mt-4 leading-8 text-charcoal-700">
            تعذّر العثور على الصفحة التي طلبتها.
          </p>
          <Button
            className="mt-8"
            leadingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
            to="/"
          >
            العودة إلى الرئيسية
          </Button>
        </div>
      </Container>
    </section>
  )
}
