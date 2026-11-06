import { useEffect, useRef } from 'react'
import { hero, img } from '../content'
import { openLabel, useOpenStatus } from '../hooks'
import { useLang } from '../lang'

export function Hero() {
  const { t } = useLang()
  const status = useOpenStatus()
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const media = mediaRef.current
    if (!media) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      if (y > window.innerHeight * 1.2) return
      media.style.transform = `translate3d(0, ${y * 0.22}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__media" ref={mediaRef}>
        <img src={img.salle} alt="" aria-hidden="true" fetchPriority="high" />
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__eyebrow">{t(hero.eyebrow)}</p>

        <h1 className="hero__title">
          <span className="hero__title-main">{hero.line1}</span>
          <span className="hero__title-sub">{t(hero.line2)}</span>
        </h1>

        <p className="hero__tagline">{t(hero.tagline)}</p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#infos">
            {t(hero.ctaPrimary)}
          </a>
          <a className="btn btn--ghost" href="#carte">
            {t(hero.ctaSecondary)}
          </a>
        </div>
      </div>

      <div className="hero__foot">
        <span className={`pill ${status === 'open' ? 'is-on' : ''}`}>
          <span className="pill__dot" aria-hidden="true" />
          <strong>{openLabel(status, t)}</strong>
        </span>

        <span className="hero__rating">{t(hero.rating)}</span>

        <a className="hero__scroll" href="#maison">
          <span>{t(hero.scroll)}</span>
          <i aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
