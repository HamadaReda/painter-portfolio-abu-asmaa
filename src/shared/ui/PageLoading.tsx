export function PageLoading() {
  return (
    <div
      aria-live="polite"
      className="grid min-h-dvh place-items-center bg-background px-page text-charcoal-700"
      role="status"
    >
      <span className="inline-flex items-center gap-3">
        <span
          aria-hidden="true"
          className="size-3 animate-pulse rounded-full bg-bronze-500 motion-reduce:animate-none"
        />
        جارٍ تحميل المحتوى…
      </span>
    </div>
  )
}
