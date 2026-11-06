import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { L, Lang } from './content'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  /** Traduit un couple { fr, en } vers la langue courante. */
  t: (v: L) => string
}

const LangContext = createContext<Ctx | null>(null)

const STORAGE_KEY = 'vpb-lang'

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    /* stockage indisponible : on garde le français */
  }
  return 'fr'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title =
      lang === 'fr'
        ? 'Vintage Petite Brasserie — Brasserie bistronomique à Antsirabe'
        : 'Vintage Petite Brasserie — Bistronomic brasserie in Antsirabe'
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* rien à faire */
    }
  }, [lang])

  const value: Ctx = { lang, setLang, t: (v) => v[lang] }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LangProvider')
  return ctx
}
