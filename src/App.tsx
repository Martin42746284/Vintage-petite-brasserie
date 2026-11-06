import { Avis } from './components/Avis'
import { Carte } from './components/Carte'
import { Chef } from './components/Chef'
import { Evenements } from './components/Evenements'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Infos } from './components/Infos'
import { Maison } from './components/Maison'
import { Marquee } from './components/Marquee'
import { LangProvider } from './lang'

export default function App() {
  return (
    <LangProvider>
      <a className="skip-link" href="#maison">
        Aller au contenu
      </a>

      <Header />

      <main>
        <Hero />
        <Marquee />
        <Maison />
        <Chef />
        <Carte />
        <Evenements />
        <Avis />
        <Infos />
      </main>

      <Footer />
    </LangProvider>
  )
}
