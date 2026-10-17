import { ImageOff } from 'lucide-react'
import { useState } from 'react'

interface SafeProjectImageProps {
  alt: string
  className?: string
  decoding?: 'async' | 'auto' | 'sync'
  fetchPriority?: 'high' | 'low' | 'auto'
  loading?: 'eager' | 'lazy'
  src: string
}

export function SafeProjectImage({
  alt,
  className = '',
  decoding = 'async',
  fetchPriority = 'auto',
  loading = 'lazy',
  src,
}: SafeProjectImageProps) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div
        aria-label={`${alt} — الصورة غير متاحة`}
        className={`grid place-items-center bg-ivory-100 text-charcoal-700 ${className}`}
        role="img"
      >
        <span className="flex flex-col items-center gap-2 text-sm">
          <ImageOff aria-hidden="true" className="size-6" />
          الصورة غير متاحة
        </span>
      </div>
    )
  }

  return (
    <img
      alt={alt}
      className={className}
      decoding={decoding}
      fetchPriority={fetchPriority}
      loading={loading}
      onError={() => setHasError(true)}
      src={src}
    />
  )
}
