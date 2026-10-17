interface SectionHeadingProps {
  title: string
  description?: string
  eyebrow?: string
  align?: 'start' | 'center'
  id?: string
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = 'start',
  id,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start'

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold tracking-wide text-bronze-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-bold leading-tight text-charcoal-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-charcoal-700 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
