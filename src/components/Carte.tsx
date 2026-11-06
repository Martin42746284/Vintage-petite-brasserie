import { useEffect, useState } from 'react'
import { carte, gallery } from '../content'
import { useLang } from '../lang'
import { Reveal } from './Reveal'

export function Carte() {
  const { t } = useLang()
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => ((i ?? 0) + 1) % gallery.length)
      if (e.key === 'ArrowLeft') setActive((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const current = active === null ? null : gallery[active]

  return (
    <section className="section section--cream" id="carte">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">{t(carte.eyebrow)}</p>
          <h2 className="section-title section-title--center">{t(carte.title)}</h2>
          <p className="lead lead--center">{t(carte.intro)}</p>
          <span className="ornament" aria-hidden="true">
            ✦
          </span>
        </Reveal>

        <div className="menu">
          {carte.groups.map((group, i) => (
            <Reveal key={group.title.fr} delay={i * 70} className="menu__group">
              <h3 className="menu__title">{t(group.title)}</h3>
              <ul>
                {group.items.map((dish) => (
                  <li key={dish.name}>
                    <p className="menu__dish">{dish.name}</p>
                    <p className="menu__desc">{t(dish.desc)}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="menu__note">
          <p>{t(carte.note)}</p>
        </Reveal>

        <Reveal className="gallery-head">
          <span className="rule" aria-hidden="true" />
          <h3 className="gallery-head__title">{t(carte.galleryCaption)}</h3>
          <span className="rule" aria-hidden="true" />
        </Reveal>

        <div className="gallery">
          {gallery.map((item, i) => (
            <Reveal
              as="figure"
              key={item.src}
              delay={(i % 3) * 80}
              className={`gallery__item gallery__item--${i + 1}`}
            >
              <button type="button" onClick={() => setActive(i)} aria-label={item.name}>
                <img src={item.src} alt={t(item.alt)} loading="lazy" />
                <figcaption>
                  <span>{item.name}</span>
                  <i aria-hidden="true">＋</i>
                </figcaption>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.name}
          onClick={() => setActive(null)}
        >
          <button className="lightbox__close" type="button" onClick={() => setActive(null)} aria-label="Fermer">
            ✕
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            type="button"
            aria-label="Précédent"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length)
            }}
          >
            ←
          </button>

          <figure onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={t(current.alt)} />
            <figcaption>{current.name}</figcaption>
          </figure>

          <button
            className="lightbox__nav lightbox__nav--next"
            type="button"
            aria-label="Suivant"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => ((i ?? 0) + 1) % gallery.length)
            }}
          >
            →
          </button>
        </div>
      )}
    </section>
  )
}
