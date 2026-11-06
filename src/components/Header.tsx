import { useEffect, useState } from 'react'
import { contact, nav } from '../content'
import { useLang } from '../lang'
import { Logo } from './Logo'

export function Header() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
        <div className="header__inner">
          <a className="header__brand" href="#top" onClick={close} aria-label="Vintage Petite Brasserie">
            <Logo />
          </a>

          <nav className="header__nav" aria-label="Navigation principale">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {t(item.label)}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <div className="lang" role="group" aria-label="Langue / Language">
              {(['fr', 'en'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  className={lang === l ? 'is-active' : ''}
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a className="btn btn--solid header__cta" href="#infos">
              {t({ fr: 'Réserver', en: 'Book' })}
            </a>

            <button
              type="button"
              className={`burger ${open ? 'is-open' : ''}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Navigation mobile">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={close} tabIndex={open ? 0 : -1}>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <a className="btn btn--solid" href={contact.phoneHref} tabIndex={open ? 0 : -1}>
            {contact.phoneLabel}
          </a>
          <p>{t(contact.hoursShort)}</p>
        </div>
      </div>
    </>
  )
}
