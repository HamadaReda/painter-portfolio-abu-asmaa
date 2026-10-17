import { Construction } from 'lucide-react'

interface StatusBadgeProps {
  children: string
}

export function StatusBadge({ children }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
      <Construction aria-hidden="true" className="size-4" />
      {children}
    </span>
  )
}
