import { useEffect, useState } from 'react'
import { contact, mailFallback } from '../content'
import { gmailHref, type MailDraft } from '../email'
import { useLang } from '../lang'

type Props = {
  draft: MailDraft
  onClose: () => void
}

/**
 * Panneau affiché quand aucun client mail n'a réagi au clic :
 * propose d'ouvrir Gmail avec le message pré-rempli, ou de copier l'adresse.
 */
export function MailFallback({ draft, onClose }: Props) {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    // Si le client mail finit par s'ouvrir (ou que l'utilisateur clique sur
    // Gmail), la page perd le focus : on referme le panneau.
    const onBlur = () => onClose()

    window.addEventListener('keydown', onKey)
    window.addEventListener('blur', onBlur)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('blur', onBlur)
    }
  }, [onClose])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
    } catch {
      /* presse-papiers indisponible : l'adresse reste visible à l'écran */
    }
  }

  return (
    <div className="mail-fallback" role="status" aria-live="polite">
      <button
        type="button"
        className="mail-fallback__close"
        onClick={onClose}
        aria-label={t(mailFallback.close)}
      >
        ✕
      </button>

      <p className="mail-fallback__title">{t(mailFallback.title)}</p>
      <p className="mail-fallback__body">{t(mailFallback.body)}</p>
      <p className="mail-fallback__address">{contact.email}</p>

      <div className="mail-fallback__actions">
        <a className="btn btn--solid" href={gmailHref(draft)} target="_blank" rel="noreferrer">
          {t(mailFallback.gmail)}
        </a>
        <button className="btn btn--ghost" type="button" onClick={copy}>
          {copied ? t(mailFallback.copied) : t(mailFallback.copy)}
        </button>
      </div>
    </div>
  )
}
