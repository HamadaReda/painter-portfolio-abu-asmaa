import { ImageOff } from 'lucide-react'
import { useState } from 'react'

interface BeforeAfterComparisonProps {
  afterImage: string
  beforeImage: string
  title: string
}

export function BeforeAfterComparison({
  afterImage,
  beforeImage,
  title,
}: BeforeAfterComparisonProps) {
  const [position, setPosition] = useState(50)
  const [hasImageError, setHasImageError] = useState(false)

  if (hasImageError) {
    return (
      <div className="grid aspect-[16/10] place-items-center rounded-brand-xl bg-ivory-100 text-charcoal-700">
        <span className="flex flex-col items-center gap-2 text-sm">
          <ImageOff aria-hidden="true" className="size-7" />
          صور المقارنة غير متاحة
        </span>
      </div>
    )
  }

  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden rounded-brand-xl bg-ivory-100 shadow-card">
        <img
          alt={`مشروع ${title} قبل تنفيذ العمل`}
          className="absolute inset-0 size-full object-cover"
          decoding="async"
          loading="lazy"
          onError={() => setHasImageError(true)}
          src={beforeImage}
        />
        <img
          alt={`مشروع ${title} بعد تنفيذ العمل`}
          className="absolute inset-0 size-full object-cover"
          decoding="async"
          loading="lazy"
          onError={() => setHasImageError(true)}
          src={afterImage}
          style={{ clipPath: `inset(0 0 0 ${100 - position}%)` }}
        />
        <span className="absolute start-3 top-3 rounded-full bg-charcoal-900/85 px-3 py-1 text-xs font-bold text-white">
          بعد
        </span>
        <span className="absolute end-3 top-3 rounded-full bg-charcoal-900/85 px-3 py-1 text-xs font-bold text-white">
          قبل
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-y-0 w-0.5 bg-white shadow-card"
          style={{ left: `${100 - position}%` }}
        />
      </div>
      <label className="mt-5 block text-sm font-semibold text-charcoal-800">
        حرّك المؤشر لمقارنة النتيجة
        <input
          aria-label={`مقارنة صور قبل وبعد لمشروع ${title}`}
          aria-valuetext={`عرض ${position}% من صورة بعد التنفيذ`}
          className="mt-3 block w-full accent-bronze-600"
          dir="ltr"
          max="100"
          min="0"
          onChange={(event) => setPosition(Number(event.target.value))}
          type="range"
          value={position}
        />
      </label>
    </figure>
  )
}
