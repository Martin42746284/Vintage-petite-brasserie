import { useState, type MouseEvent } from 'react'
import { contact, footer, mailFallback, nav } from '../content'
import { attemptMail, type MailDraft } from '../email'
import { useLang } from '../lang'
import { Logo } from './Logo'
import { MailFallback } from './MailFallback'

export function Footer() {
  const { t } = useLang()
  const [fallback, setFallback] = useState<MailDraft | null>(null)

  const writeUs = (e: MouseEvent) => {
    e.preventDefault()
    const draft: MailDraft = { subject: t(mailFallback.subject) }
    attemptMail(draft, { onFallback: () => setFallback(draft) })
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#top" aria-label="Vintage Petite Brasserie">
            <Logo size="lg" />
          </a>
          <p>{t(footer.tagline)}</p>
          <p className="footer__hours">{t(contact.hoursShort)}</p>
        </div>

        <nav className="footer__nav" aria-label="Pied de page">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <a href={contact.phoneHref}>{contact.phoneLabel}</a>
          <a href={`mailto:${contact.email}`} onClick={writeUs}>
            {contact.email}
          </a>
          <a href={contact.facebook} target="_blank" rel="noreferrer">
            Facebook ↗
          </a>
          <a href={contact.maps} target="_blank" rel="noreferrer">
            {t({ fr: 'Itinéraire', en: 'Directions' })} ↗
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {contact.name}. {t(footer.rights)}
        </p>
        <p className="footer__credits">{t(footer.credits)}</p>
        <a className="footer__top" href="#top">
          ↑ {t(footer.backTop)}
        </a>
      </div>

      {fallback && <MailFallback draft={fallback} onClose={() => setFallback(null)} />}
    </footer>
  )
}
