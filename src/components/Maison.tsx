import { img, maison } from '../content'
import { useLang } from '../lang'
import { Reveal } from './Reveal'

export function Maison() {
  const { t } = useLang()

  return (
    <section className="section section--cream" id="maison">
      <div className="container maison">
        <div className="maison__text">
          <Reveal>
            <p className="eyebrow">{t(maison.eyebrow)}</p>
            <h2 className="section-title">{t(maison.title)}</h2>
          </Reveal>

          <Reveal delay={90}>
            <p className="lead">{t(maison.p1)}</p>
          </Reveal>

          <Reveal delay={150}>
            <p className="body-copy">{t(maison.p2)}</p>
          </Reveal>

          <Reveal delay={200}>
            <dl className="facts">
              {maison.facts.map((fact) => (
                <div className="facts__row" key={fact.k.fr}>
                  <dt>{t(fact.k)}</dt>
                  <dd>{t(fact.v)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="maison__media">
          <figure className="maison__figure">
            <img
              src={img.salle}
              alt={
                t({
                  fr: 'La salle du Vintage à la lueur des lampes, à Antsirabe',
                  en: 'The Vintage dining room lit by lamps, in Antsirabe',
                }) as string
              }
              loading="lazy"
            />
            <div className="seal" aria-hidden="true">
              <span>{t(maison.sealTop)}</span>
              <strong>2025</strong>
              <span>{t(maison.sealBottom)}</span>
            </div>
          </figure>

          <blockquote className="quote-card">
            <span className="quote-card__mark" aria-hidden="true">
              “
            </span>
            <p>{t(maison.quote)}</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
