import { MessageCircle, PaintRoller, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { publicNavigation } from '../../config/navigation'
import { siteConfig } from '../../config/site'
import { Container } from '../ui'

const footerLinkClassName =
  'rounded-sm text-sm text-ivory-200 transition hover:text-bronze-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-300'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-3 md:py-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-brand-sm bg-bronze-500 text-charcoal-900">
              <PaintRoller aria-hidden="true" className="size-5" />
            </span>
            <p className="font-bold">{siteConfig.businessName}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ivory-200">
            {siteConfig.description}
          </p>
          <p className="mt-3 text-sm text-bronze-300">
            نطاق الخدمة: {siteConfig.city}
          </p>
        </div>

        <nav aria-label="روابط تذييل الموقع">
          <h2 className="text-sm font-bold text-bronze-300">روابط الموقع</h2>
          <ul className="mt-4 grid gap-3">
            {publicNavigation.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a className={footerLinkClassName} href={item.href}>
                    {item.label}
                  </a>
                ) : (
                  <Link className={footerLinkClassName} to={item.href}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-bronze-300">التواصل</h2>
          <address className="mt-4 grid gap-3 not-italic">
            <a
              className={`${footerLinkClassName} inline-flex w-fit items-center gap-2`}
              dir="ltr"
              href={`tel:${siteConfig.contact.phone}`}
            >
              <Phone aria-hidden="true" className="size-4" />
              {siteConfig.contact.displayPhone}
            </a>
            <a
              className={`${footerLinkClassName} inline-flex w-fit items-center gap-2`}
              href={siteConfig.contact.whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              واتساب
            </a>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 text-center text-xs text-ivory-200 md:text-start">
          © {currentYear} {siteConfig.businessName}. جميع الحقوق محفوظة.
        </Container>
      </div>
    </footer>
  )
}
