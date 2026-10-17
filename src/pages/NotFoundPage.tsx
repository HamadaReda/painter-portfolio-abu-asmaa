import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="mx-auto flex w-full max-w-3xl flex-col items-start justify-center px-5 py-16 sm:px-8"
    >
      <p className="font-semibold text-blue-700">404</p>
      <h1 id="not-found-title" className="mt-3 text-3xl font-bold">
        الصفحة غير موجودة
      </h1>
      <p className="mt-3 text-slate-600">
        تعذّر العثور على الصفحة التي طلبتها.
      </p>
      <Link
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
        to="/"
      >
        <ArrowRight aria-hidden="true" className="size-4" />
        العودة إلى الرئيسية
      </Link>
    </section>
  )
}
