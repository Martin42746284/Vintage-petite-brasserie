import { avis } from '../content'
import { useLang } from '../lang'
import { Reveal } from './Reveal'

export function Avis() {
  const { t } = useLang()

  return (
    <section className="section section--cream" id="avis">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">{t(avis.eyebrow)}</p>
          <h2 className="section-title section-title--center">{t(avis.title)}</h2>
        </Reveal>

        <ul className="quotes">
          {avis.quotes.map((quote, i) => (
            <Reveal as="li" key={quote.source} delay={i * 90} className="quotes__card">
              <span className="quotes__mark" aria-hidden="true">
                “
              </span>
              <p>{t(quote.text)}</p>
              <footer>
                <strong>{quote.source}</strong>
                <span>{t(quote.meta)}</span>
              </footer>
            </Reveal>
          ))}
        </ul>

        <Reveal className="scores">
          {avis.scores.map((score) => (
            <div className="scores__item" key={score.label}>
              <div className="scores__top">
                <span className="scores__label">{score.label}</span>
                <strong>{score.score}</strong>
              </div>
              <div className="scores__bar" aria-hidden="true">
                <i style={{ width: score.width }} />
              </div>
              <span className="scores__meta">{t(score.meta)}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
