import { useEffect, useState } from 'react'
import { openState, type L } from './content'

const ZONE = 'Indian/Antananarivo'
const OPEN_MINUTES = 11 * 60 // 11h00
const CLOSE_MINUTES = 22 * 60 // 22h00

export type OpenStatus = 'open' | 'before' | 'after'

/** Heure courante convertie dans le fuseau du restaurant (UTC+3). */
function antananarivoMinutes(): number {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: ZONE,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())

  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0)
  return get('hour') * 60 + get('minute')
}

function computeStatus(): OpenStatus {
  const now = antananarivoMinutes()
  if (now < OPEN_MINUTES) return 'before'
  if (now >= CLOSE_MINUTES) return 'after'
  return 'open'
}

/**
 * État d'ouverture du restaurant, recalculé chaque minute
 * selon l'heure locale d'Antsirabe.
 */
export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>('open')

  useEffect(() => {
    const update = () => setStatus(computeStatus())
    update()
    const id = window.setInterval(update, 60_000)
    return () => window.clearInterval(id)
  }, [])

  return status
}

/** « Ouvert · jusqu'à 22h » / « Fermé · ouvre à 11h » / « Fermé · réouvre demain à 11h » */
export function openLabel(status: OpenStatus, t: (v: L) => string): string {
  if (status === 'open') return `${t(openState.open)} · ${t(openState.until)}`
  if (status === 'before') return `${t(openState.closed)} · ${t(openState.at)}`
  return `${t(openState.closed)} · ${t(openState.tomorrow)}`
}
