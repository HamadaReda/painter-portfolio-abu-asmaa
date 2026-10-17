import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  children: ReactNode
  className?: string
  leadingIcon?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

type AnchorButtonProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string
    to?: never
  }

type LinkButtonProps = ButtonBaseProps &
  Omit<LinkProps, 'className' | 'children' | 'to'> & {
    to: string
    href?: never
  }

type NativeButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: never
    to?: never
  }

export type ButtonProps = AnchorButtonProps | LinkButtonProps | NativeButtonProps

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-charcoal-900 text-white shadow-soft hover:bg-charcoal-800 hover:shadow-card',
  secondary:
    'border border-bronze-300 bg-transparent text-charcoal-900 hover:border-bronze-500 hover:bg-bronze-50',
  ghost: 'text-charcoal-700 hover:bg-charcoal-900/5 hover:text-charcoal-900',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-12 px-6 py-3 text-base',
}

function getClassName({
  variant = 'primary',
  size = 'md',
  className = '',
}: Pick<ButtonBaseProps, 'variant' | 'size' | 'className'>) {
  return [
    'inline-flex items-center justify-center gap-2 rounded-brand-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-600 disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ')
}

export function Button(props: ButtonProps) {
  const { children, className, leadingIcon, size, variant, ...elementProps } = props
  const content = (
    <>
      {leadingIcon}
      <span>{children}</span>
    </>
  )
  const classes = getClassName({ className, size, variant })

  if ('href' in elementProps && elementProps.href) {
    const { href, ...anchorProps } = elementProps
    return (
      <a {...anchorProps} className={classes} href={href}>
        {content}
      </a>
    )
  }

  if ('to' in elementProps && elementProps.to) {
    const { to, ...linkProps } = elementProps
    return (
      <Link {...linkProps} className={classes} to={to}>
        {content}
      </Link>
    )
  }

  const buttonProps = elementProps as Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
  >

  return (
    <button {...buttonProps} className={classes}>
      {content}
    </button>
  )
}
