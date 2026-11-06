import { contact, footer, nav } from '../content'
import { useLang } from '../lang'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useLang()

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
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
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
    </footer>
  )
}
