import { contact } from './content'

/** Brouillon d'un e-mail à envoyer. */
export type MailDraft = { subject?: string; body?: string }

type MailHandlers = {
  /** Appelé quand un client mail a réellement pris le relais. */
  onOpened?: () => void
  /** Appelé quand aucun client n'a réagit (desktop sans messagerie). */
  onFallback: () => void
}

/** Lien `mailto:` classique (ouvre le client mail local). */
export function mailtoHref(draft: MailDraft): string {
  const params: string[] = []
  if (draft.subject) params.push(`subject=${encodeURIComponent(draft.subject)}`)
  if (draft.body) params.push(`body=${encodeURIComponent(draft.body)}`)
  const query = params.length ? `?${params.join('&')}` : ''
  return `mailto:${contact.email}${query}`
}

/** Lien de composition Gmail (repli quand aucun client mail n'est configuré). */
export function gmailHref(draft: MailDraft): string {
  const url = new URL('https://mail.google.com/mail/')
  url.searchParams.set('view', 'cm')
  url.searchParams.set('fs', '1')
  url.searchParams.set('to', contact.email)
  if (draft.subject) url.searchParams.set('su', draft.subject)
  if (draft.body) url.searchParams.set('body', draft.body)
  return url.toString()
}

/**
 * Ouvre le composeur mail :
 * - appareil tactile → directement le client natif (quasi toujours présent) ;
 * - bureau → tentative `mailto:` ; si la page garde le focus pendant 1,5 s
 *   (aucun client n'a réagi), `onFallback` est appelé pour proposer Gmail
 *   et la copie de l'adresse.
 */
export function attemptMail(draft: MailDraft, handlers: MailHandlers): void {
  const coarse = window.matchMedia('(pointer: coarse)').matches
  if (coarse) {
    window.location.href = mailtoHref(draft)
    handlers.onOpened?.()
    return
  }

  let settled = false
  const settle = (reacted: boolean) => {
    if (settled) return
    settled = true
    window.removeEventListener('blur', onBlur)
    if (reacted) handlers.onOpened?.()
    else handlers.onFallback()
  }
  const onBlur = () => settle(true)

  // Un blur signifie que le client mail a pris le focus : rien à signaler.
  window.addEventListener('blur', onBlur)
  window.location.href = mailtoHref(draft)
  window.setTimeout(() => settle(!document.hasFocus()), 1500)
}
