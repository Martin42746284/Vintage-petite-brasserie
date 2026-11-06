import { chef, img } from '../content'
import { useLang } from '../lang'
import { Reveal } from './Reveal'

export function Chef() {
  const { t } = useLang()

  return (
    <section className="section section--ink" id="chef">
      <div className="container chef">
        <Reveal className="chef__portrait">
          <figure className="frame">
            <img src={img.chefPortrait} alt={t(chef.caption)} loading="lazy" />
            <figcaption>{t(chef.caption)}</figcaption>
          </figure>
        </Reveal>

        <div className="chef__body">
          <Reveal>
            <p className="eyebrow">{t(chef.eyebrow)}</p>
            <h2 className="section-title">{chef.title}</h2>
          </Reveal>

          <Reveal delay={90}>
            <p className="lead">{t(chef.p1)}</p>
          </Reveal>

          <Reveal delay={140}>
            <p className="chef__quote">{t(chef.p2)}</p>
          </Reveal>

          <Reveal delay={180}>
            <p className="motto">
              {t(chef.motto)
                .split('.')
                .map((word) => word.trim())
                .filter(Boolean)
                .map((word) => (
                  <span key={word}>{word}</span>
                ))}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <dl className="chef__details">
              {chef.details.map((detail) => (
                <div key={detail.k.fr}>
                  <dt>{t(detail.k)}</dt>
                  <dd>{t(detail.v)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={260}>
            <p className="chef__rum">{t(chef.rum)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
