# Vintage Petite Brasserie — site vitrine

Site vitrine du restaurant **Vintage Petite Brasserie**, Rue Benyowsky à **Antsirabe** (Madagascar).
Réalisé en **React + TypeScript** (Vite), sans framework CSS : un design system maison en CSS pur.

## Démarrage

```bash
npm install
npm run dev      # serveur de développement (Vite)
npm run build    # vérifie TypeScript puis produit dist/
npm run preview  # sert le build de production
npm run lint     # analyse du code (oxlint)
```

## Structure

```
index.html              meta, polices Google Fonts, données structurées (JSON-LD)
public/assets/img/      photographies du restaurant
src/
  content.ts            tout le texte du site, en FR et EN (source unique)
  lang.tsx              contexte de langue + persistance (localStorage)
  hooks.ts              état d'ouverture calculé sur l'heure d'Antsirabe (UTC+3)
  index.css             design system complet (tokens, composants, responsive)
  components/           Header, Hero, Marquee, Maison, Chef, Carte,
                        Evenements, Avis, Infos, Footer, Reveal, Logo
```

## Points d'attention

- **Langue** : bouton FR/EN dans l'en-tête, mémorisé dans le navigateur.
  Tout texte passe par `src/content.ts` — aucune chaîne en dur dans les composants.
- **Réservation** : le formulaire compose un e-mail (`mailto:`) pré-rempli vers
  `vintage.antsirabe@gmail.com`. Il n'y a pas de back-end ; le téléphone et
  WhatsApp restent accessibles en un clic.
- **Carte** : intégration OpenStreetMap (libre, sans clé) avec marqueur aux
  coordonnées du restaurant ; le bouton « Agrandir la carte » pointe vers
  Google Maps pour l'itinéraire.
- **Horaires** : l'état « Ouvert / Fermé » est calculé sur le fuseau horaire
  d'Antsirabe, pas sur celui du visiteur.
- **Photographies** : issues d'articles de presse (no comment®, Madatasting),
  créditées en pied de page. À remplacer par les photos du restaurant avant
  une mise en ligne définitive.

## Déploiement

`npm run build` produit un dossier `dist/` autonome (base relative : le site
peut être hébergé dans un sous-dossier ou ouvert depuis le disque).
