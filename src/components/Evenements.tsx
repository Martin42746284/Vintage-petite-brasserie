import { evenements } from '../content'
import { useLang } from '../lang'
import { Reveal } from './Reveal'

export function Evenements() {
  const { t } = useLang()

  return (
    <section className="section section--ink section--pattern" id="rendez-vous">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">{t(evenements.eyebrow)}</p>
            <h2 className="section-title">{t(evenements.title)}</h2>
          </div>
          <p className="lead">{t(evenements.intro)}</p>
        </Reveal>

        <ul className="events">
          {evenements.cards.map((card, i) => (
            <Reveal as="li" key={card.num} delay={i * 90} className="events__card">
              <span className="events__num">{card.num}</span>
              <h3>{t(card.title)}</h3>
              <p>{t(card.desc)}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="events__note">
          <p>{t(evenements.note)}</p>
          <a className="link" href="https://www.facebook.com/p/Vintage-Antsirabe-61576160977518/" target="_blank" rel="noreferrer">
            Facebook ↗
          </a>
        </Reveal>
      </div>
    </section>
  )
}
