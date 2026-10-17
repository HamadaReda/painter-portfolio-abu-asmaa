import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <article
      className={`rounded-brand-lg border border-ivory-200 bg-surface p-6 shadow-card ${className}`}
      {...props}
    >
      {children}
    </article>
  )
}
