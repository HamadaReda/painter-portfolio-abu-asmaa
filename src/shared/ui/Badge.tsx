import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export function Badge({ children, icon, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-bronze-300/70 bg-bronze-50 px-3 py-1 text-xs font-semibold text-bronze-700 ${className}`}
    >
      {icon}
      {children}
    </span>
  )
}
