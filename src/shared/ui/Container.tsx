import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-page ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
