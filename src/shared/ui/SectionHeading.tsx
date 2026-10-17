interface SectionHeadingProps {
  title: string
  description?: string
  eyebrow?: string
  align?: 'start' | 'center'
  id?: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = 'start',
  id,
  tone = 'light',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start'
  const titleColor = tone === 'dark' ? 'text-white' : 'text-charcoal-900'
  const descriptionColor = tone === 'dark' ? 'text-ivory-200' : 'text-charcoal-700'

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold tracking-wide text-bronze-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className={`text-3xl font-bold leading-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
