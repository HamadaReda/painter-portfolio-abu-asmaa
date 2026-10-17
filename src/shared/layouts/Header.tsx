import { useEffect, useState } from 'react'
import { Menu, MessageCircle, PaintRoller, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { publicNavigation } from '../../config/navigation'
import { siteConfig } from '../../config/site'
import { Button, Container } from '../ui'

const navLinkClassName =
  'rounded-brand-sm px-3 py-2 text-sm font-semibold text-charcoal-700 transition hover:bg-charcoal-900/5 hover:text-charcoal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-600'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className="relative z-40 border-b border-ivory-200/90 bg-surface/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <NavLink
          aria-label={`${siteConfig.businessName} — الصفحة الرئيسية`}
          className="flex min-w-0 items-center gap-3 rounded-brand-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-600"
          to="/"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-brand-sm bg-charcoal-900 text-bronze-300 shadow-soft">
            <PaintRoller aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </span>
          <span className="truncate text-sm font-bold text-charcoal-900 sm:text-base">
            {siteConfig.businessName}
          </span>
        </NavLink>

        <div className="hidden items-center gap-2 lg:flex">
          <nav aria-label="التنقل الرئيسي">
            <ul className="flex items-center gap-1">
              {publicNavigation.map((item) => (
                <li key={item.href}>
                  {item.external || item.href.includes('#') ? (
                    <a className={navLinkClassName} href={item.href}>
                      {item.label}
                    </a>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        `${navLinkClassName} ${isActive ? 'bg-bronze-50 text-bronze-700' : ''}`
                      }
                      end
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Button
            aria-label="تواصل عبر واتساب"
            href={siteConfig.contact.whatsappUrl}
            leadingIcon={<MessageCircle aria-hidden="true" className="size-4" />}
            rel="noreferrer"
            target="_blank"
          >
            واتساب
          </Button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل'}
          className="grid size-11 shrink-0 place-items-center rounded-brand-sm border border-ivory-200 bg-ivory-50 text-charcoal-900 transition hover:border-bronze-300 hover:bg-bronze-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-600 lg:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <div
        className={`${isMenuOpen ? 'grid' : 'hidden'} absolute inset-x-0 top-full border-b border-ivory-200 bg-surface shadow-card lg:hidden`}
        id="mobile-navigation"
      >
        <Container className="py-5">
          <nav aria-label="التنقل عبر الهاتف">
            <ul className="grid gap-1">
              {publicNavigation.map((item) => (
                <li key={item.href}>
                  {item.external || item.href.includes('#') ? (
                    <a
                      className={`${navLinkClassName} block`}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <NavLink
                      className={`${navLinkClassName} block`}
                      end
                      onClick={() => setIsMenuOpen(false)}
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Button
            className="mt-4 w-full"
            href={siteConfig.contact.whatsappUrl}
            leadingIcon={<MessageCircle aria-hidden="true" className="size-4" />}
            onClick={() => setIsMenuOpen(false)}
            rel="noreferrer"
            target="_blank"
          >
            تواصل عبر واتساب
          </Button>
        </Container>
      </div>
    </header>
  )
}
