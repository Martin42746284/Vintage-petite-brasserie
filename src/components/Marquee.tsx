import { marquee } from '../content'
import { useLang } from '../lang'

export function Marquee() {
  const { t } = useLang()
  const items = marquee.map(t)

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__group" key={copy}>
            {items.map((label, i) => (
              <span className="marquee__item" key={`${copy}-${i}`}>
                {label}
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
