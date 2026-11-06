import { useState, type FormEvent } from 'react'
import { contact, infos, mailFallback } from '../content'
import { attemptMail, type MailDraft } from '../email'
import { openLabel, useOpenStatus } from '../hooks'
import { useLang } from '../lang'
import { MailFallback } from './MailFallback'
import { Reveal } from './Reveal'

type Fields = {
  name: string
  phone: string
  date: string
  time: string
  guests: string
  message: string
}

const INITIAL: Fields = { name: '', phone: '', date: '', time: '', guests: '2', message: '' }

export function Infos() {
  const { t, lang } = useLang()
  const status = useOpenStatus()
  const [fields, setFields] = useState<Fields>(INITIAL)
  const [sent, setSent] = useState(false)
  const [fallback, setFallback] = useState<MailDraft | null>(null)

  const set = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }))

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const subject =
      lang === 'fr'
        ? `Réservation — ${fields.name} — ${fields.date || 'date à préciser'}`
        : `Booking — ${fields.name} — ${fields.date || 'date to confirm'}`

    const lines =
      lang === 'fr'
        ? [
            `Nom : ${fields.name}`,
            `Téléphone : ${fields.phone}`,
            `Date : ${fields.date || '—'}`,
            `Heure : ${fields.time || '—'}`,
            `Convives : ${fields.guests}`,
            '',
            fields.message,
          ]
        : [
            `Name: ${fields.name}`,
            `Phone: ${fields.phone}`,
            `Date: ${fields.date || '—'}`,
            `Time: ${fields.time || '—'}`,
            `Guests: ${fields.guests}`,
            '',
            fields.message,
          ]

    const draft: MailDraft = { subject, body: lines.join('\n') }

    attemptMail(draft, {
      onOpened: () => setSent(true),
      onFallback: () => setFallback(draft),
    })
  }

  return (
    <section className="section section--ink" id="infos">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">{t(infos.eyebrow)}</p>
          <h2 className="section-title section-title--center">{t(infos.title)}</h2>
        </Reveal>

        <div className="infos">
          <Reveal className="infos__list">
            <div className={`pill pill--lg ${status === 'open' ? 'is-on' : ''}`}>
              <span className="pill__dot" aria-hidden="true" />
              <strong>{openLabel(status, t)}</strong>
            </div>

            <dl>
              {infos.items.map((item) => (
                <div className="infos__row" key={item.k.fr}>
                  <dt>{t(item.k)}</dt>
                  <dd>
                    <span>{t(item.v)}</span>
                    {item.note && <small>{t(item.note)}</small>}
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      onClick={
                        item.href.startsWith('mailto:')
                          ? (e) => {
                              e.preventDefault()
                              const draft: MailDraft = { subject: t(mailFallback.subject) }
                              attemptMail(draft, { onFallback: () => setFallback(draft) })
                            }
                          : undefined
                      }
                    >
                      {t(item.link)}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="infos__social">
              <a className="link" href={contact.facebook} target="_blank" rel="noreferrer">
                Facebook ↗
              </a>
              <a className="link" href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp ↗
              </a>
              <a className="link" href={contact.maps} target="_blank" rel="noreferrer">
                {t({ fr: 'Itinéraire', en: 'Directions' })} ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="form-card">
            <h3>{t(infos.form.title)}</h3>
            <p className="form-card__sub">{t(infos.form.subtitle)}</p>

            <form onSubmit={onSubmit} noValidate={false}>
              <div className="field-row">
                <label className="field">
                  <span>{t(infos.form.name)} *</span>
                  <input
                    type="text"
                    required
                    value={fields.name}
                    onChange={set('name')}
                    autoComplete="name"
                  />
                </label>

                <label className="field">
                  <span>{t(infos.form.phone)} *</span>
                  <input
                    type="tel"
                    required
                    value={fields.phone}
                    onChange={set('phone')}
                    autoComplete="tel"
                  />
                </label>
              </div>

              <div className="field-row field-row--3">
                <label className="field">
                  <span>{t(infos.form.date)}</span>
                  <input type="date" value={fields.date} onChange={set('date')} />
                </label>

                <label className="field">
                  <span>{t(infos.form.time)}</span>
                  <input type="time" value={fields.time} onChange={set('time')} />
                </label>

                <label className="field">
                  <span>{t(infos.form.guests)}</span>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={fields.guests}
                    onChange={set('guests')}
                  />
                </label>
              </div>

              <label className="field">
                <span>{t(infos.form.message)}</span>
                <textarea rows={3} value={fields.message} onChange={set('message')} />
              </label>

              <div className="form-card__actions">
                <button className="btn btn--solid" type="submit">
                  {t(infos.form.submit)}
                </button>
                <a className="btn btn--ghost" href={contact.phoneHref}>
                  {contact.phoneLabel}
                </a>
              </div>

              {sent && (
                <p className="form-card__success" role="status">
                  {t(infos.form.success)}
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal delay={80} className="map">
          <iframe
            title={t(infos.mapNote)}
            src={contact.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map__caption">
            <span>{t(infos.mapNote)}</span>
            <a className="link" href={contact.maps} target="_blank" rel="noreferrer">
              {t({ fr: 'Agrandir la carte', en: 'Open map' })} ↗
            </a>
          </div>
        </Reveal>
      </div>

      {fallback && <MailFallback draft={fallback} onClose={() => setFallback(null)} />}
    </section>
  )
}
