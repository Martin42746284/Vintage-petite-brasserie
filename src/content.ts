/**
 * Contenu bilingue du site — Vintage Petite Brasserie, Antsirabe.
 * Chaque texte est un couple { fr, en } ; les composants lisent la langue courante.
 */

export type Lang = 'fr' | 'en'
export type L = { fr: string; en: string }

export const img = {
  salle: 'assets/img/salle-vintage.jpg',
  chefPortrait: 'assets/img/chef-rivo-portrait.webp',
  salade: 'assets/img/salade-perigourdine.webp',
  huitres: 'assets/img/huitres-gratinees.webp',
  magret: 'assets/img/magret-canard.webp',
  souris: 'assets/img/souris-agneau.webp',
  tarte: 'assets/img/tarte-pommes.webp',
} as const

export const contact = {
  name: 'Vintage Petite Brasserie',
  phoneLabel: '+261 38 09 948 98',
  phoneHref: 'tel:+261380994898',
  whatsapp: 'https://wa.me/261380994898',
  email: 'vintage.antsirabe@gmail.com',
  maps: 'https://maps.app.goo.gl/LhEV2ejX7fTDRiiF8',
  facebook: 'https://www.facebook.com/p/Vintage-Antsirabe-61576160977518/',
  embed:
    'https://www.openstreetmap.org/export/embed.html?bbox=47.028969%2C-19.872701%2C47.048969%2C-19.860701&layer=mapnik&marker=-19.8667013%2C47.038969',
  address: {
    fr: '42MQ+8H3, Rue Benyowsky — Antsirabe 110, Madagascar',
    en: '42MQ+8H3, Rue Benyowsky — Antsirabe 110, Madagascar',
  } satisfies L,
  addressNote: {
    fr: "En face de l'ancienne agence Star, à deux pas de la gare",
    en: 'Opposite the old Star agency, two minutes from the station',
  } satisfies L,
  hoursShort: { fr: 'Tous les jours · 11h – 22h', en: 'Daily · 11 am – 10 pm' } satisfies L,
}

/* ------------------------------------------------------------------ header */

export const nav: { id: string; label: L }[] = [
  { id: 'maison', label: { fr: 'La maison', en: 'The house' } },
  { id: 'chef', label: { fr: 'Le chef', en: 'The chef' } },
  { id: 'carte', label: { fr: 'La carte', en: 'The menu' } },
  { id: 'rendez-vous', label: { fr: 'Rendez-vous', en: "What's on" } },
  { id: 'avis', label: { fr: 'Avis', en: 'Reviews' } },
  { id: 'infos', label: { fr: 'Infos', en: 'Visit' } },
]

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: { fr: 'Antsirabe · Ville d’Eau', en: 'Antsirabe · City of Water' } satisfies L,
  line1: 'Vintage',
  line2: { fr: 'Petite Brasserie', en: 'Petite Brasserie' } satisfies L,
  tagline: {
    fr: 'Cuisine du monde aux accents européens, servie dans l’ancienne maison familiale de la Ville d’Eau.',
    en: 'World cuisine with European accents, served in a restored family home in the City of Water.',
  } satisfies L,
  ctaPrimary: { fr: 'Réserver une table', en: 'Book a table' } satisfies L,
  ctaSecondary: { fr: 'Découvrir la carte', en: 'Discover the menu' } satisfies L,
  rating: { fr: '4,7/5 sur Google · 32 avis', en: '4.7/5 on Google · 32 reviews' } satisfies L,
  scroll: { fr: 'Faire défiler', en: 'Scroll' } satisfies L,
}

export const marquee: L[] = [
  { fr: 'Cuisine bistronomique', en: 'Bistronomic cooking' },
  { fr: 'Produits de la mer', en: 'Seafood' },
  { fr: 'Méchouis', en: 'Méchouis lamb roast' },
  { fr: 'Soirées musicales', en: 'Live music nights' },
  { fr: 'Rhums « dérangés »', en: 'Spiced “dérangé” rums' },
  { fr: 'Desserts maison', en: 'House desserts' },
  { fr: 'Ouvert tous les jours 11h – 22h', en: 'Open daily 11 am – 10 pm' },
]

/* ------------------------------------------------------------------ maison */

export const maison = {
  eyebrow: { fr: 'La maison', en: 'The house' } satisfies L,
  title: {
    fr: 'Une maison de famille devenue brasserie',
    en: 'A family home turned brasserie',
  } satisfies L,
  p1: {
    fr: 'Ouvert le 17 mai 2025, le Vintage est né de l’attachement de sa fondatrice, Miora Rasamuel, à la maison familiale où elle a grandi. À deux pas de la gare, la maison a été entièrement rénovée : elle garde le charme de l’ancien tout en adoptant une décoration contemporaine et soignée.',
    en: 'Opened on 17 May 2025, the Vintage grew out of founder Miora Rasamuel’s attachment to the family home she grew up in. Two minutes from the station, the house has been fully restored — keeping the charm of the old while adopting a contemporary, carefully crafted décor.',
  } satisfies L,
  p2: {
    fr: 'Décor boisé, lumière tamisée, mobilier soigné : l’esprit des grandes brasseries d’antan rencontre l’énergie de la Ville d’Eau. On y vient pour un déjeuner, un dîner en couple, un repas entre amis — ou pour célébrer une occasion privée.',
    en: 'Warm wood, low light, carefully chosen furniture: the spirit of the great brasseries of old meets the energy of the City of Water. Come for lunch, a dinner for two, a meal with friends — or to celebrate a private occasion.',
  } satisfies L,
  quote: {
    fr: 'Le lieu conserve le charme de l’ancien, tout en adoptant une décoration contemporaine.',
    en: 'The place keeps the charm of the old, while adopting a contemporary décor.',
  } satisfies L,
  facts: [
    { k: { fr: 'Ouverture', en: 'Opened' }, v: { fr: '17 mai 2025', en: '17 May 2025' } },
    { k: { fr: 'Adresse', en: 'Address' }, v: contact.addressNote },
    {
      k: { fr: 'Service', en: 'Service' },
      v: { fr: 'Tous les jours · 11h00 – 22h00', en: 'Every day · 11:00 am – 10:00 pm' },
    },
    {
      k: { fr: 'Cuisine', en: 'Kitchen' },
      v: { fr: 'Française & malgache', en: 'French & Malagasy' },
    },
  ] satisfies { k: L; v: L }[],
  sealTop: { fr: 'Maison', en: 'House' } satisfies L,
  sealBottom: { fr: 'Antsirabe', en: 'Antsirabe' } satisfies L,
}

/* -------------------------------------------------------------------- chef */

export const chef = {
  eyebrow: { fr: 'Au fourneau', en: 'In the kitchen' } satisfies L,
  title: 'Chef Rivo Randriambololona',
  caption: { fr: 'Chef Rivo — photo no comment®', en: 'Chef Rivo — photo no comment®' } satisfies L,
  p1: {
    fr: 'Derrière les fourneaux, il y a Chef Rivo. La cuisine est pour lui une vocation d’enfant : après son baccalauréat en 1999, il se consacre entièrement à l’art culinaire et obtient un bac+3 en restauration. Stage à Brest, deux ans à Maurice, une étape à La Réunion, puis des tables à Antananarivo : son parcours le mène aujourd’hui au Vintage.',
    en: 'Behind the stoves is Chef Rivo. Cooking has been a childhood vocation: after his baccalauréat in 1999 he devoted himself entirely to the culinary arts, earning a degree in hospitality. A placement in Brest, two years in Mauritius, a chapter in Réunion, then tables in Antananarivo — his path now leads to the Vintage.',
  } satisfies L,
  p2: {
    fr: '« J’affectionne particulièrement le style bistronomique : la liberté qu’il offre est très large, on n’est pas figé. »',
    en: '“I’m particularly fond of the bistronomic style: the freedom it offers is very wide, nothing is frozen.”',
  } satisfies L,
  motto: { fr: 'Passion. Précision. Création.', en: 'Passion. Precision. Creation.' } satisfies L,
  details: [
    {
      k: { fr: 'Style', en: 'Style' },
      v: { fr: 'Bistronomique, libre et de saison', en: 'Bistronomic, free and seasonal' },
    },
    {
      k: { fr: 'Prédilection', en: 'Favourite' },
      v: { fr: 'Les produits de la mer', en: 'Seafood' },
    },
    {
      k: { fr: 'La carte', en: 'The menu' },
      v: { fr: 'Renouvelée tous les trois mois', en: 'Renewed every three months' },
    },
    {
      k: { fr: 'Inspiration', en: 'Inspiration' },
      v: { fr: 'Philippe Etchebest', en: 'Philippe Etchebest' },
    },
  ] satisfies { k: L; v: L }[],
  rum: {
    fr: 'Au bar : les rhums « dérangés » du Vintage, infusés maison — dont le rhum piment-chocolat, le péché mignon du chef.',
    en: 'At the bar: the Vintage’s house-infused “dérangé” rums — including the chilli-chocolate rum, the chef’s guilty pleasure.',
  } satisfies L,
}

/* ------------------------------------------------------------------- carte */

export type Dish = { name: string; desc: L }
export type MenuGroup = { title: L; items: Dish[] }

export const carte = {
  eyebrow: { fr: 'La carte', en: 'The menu' } satisfies L,
  title: { fr: 'Une carte vivante, au rythme des saisons', en: 'A living menu, changing with the seasons' } satisfies L,
  intro: {
    fr: 'Viandes grillées, poissons, fruits de mer et suggestions du chef évoluent au fil des envies et des saisons. La carte est renouvelée tous les trois mois, et l’ardoise du jour se réécrit chaque matin.',
    en: 'Grilled meats, fish, shellfish and the chef’s suggestions move with the seasons. The menu is renewed every three months, and the daily chalkboard is rewritten each morning.',
  } satisfies L,
  note: {
    fr: 'La carte complète et les prix sont disponibles sur place — l’ardoise du jour change chaque matin.',
    en: 'The full menu and prices are available in house — the daily chalkboard changes every morning.',
  } satisfies L,
  groups: [
    {
      title: { fr: 'Pour commencer', en: 'To start' },
      items: [
        {
          name: 'Salade Périgourdine',
          desc: {
            fr: 'Jeunes pousses, magret, croûtons dorés, tomates et vinaigrette maison',
            en: 'Young leaves, magret, golden croutons, tomatoes and house vinaigrette',
          },
        },
        {
          name: 'Huîtres gratinées de Fort-Dauphin',
          desc: {
            fr: 'Gratinées à la croûte d’herbes, servies au citron vert',
            en: 'Gratinated with an herb crust, served with lime',
          },
        },
      ],
    },
    {
      title: { fr: 'La terre', en: 'From the land' },
      items: [
        {
          name: 'Souris d’agneau confite au romarin, au thym et au miel',
          desc: { fr: 'Pommes de terre grenaille rissolées', en: 'Crisp roasted baby potatoes' },
        },
        {
          name: 'Rôti de magret de canard au miel-gingembre',
          desc: { fr: 'Légumes primeurs du potager', en: 'Fresh garden vegetables' },
        },
        {
          name: 'Bœuf bourguignon',
          desc: { fr: 'Le grand classique de la maison', en: 'The house’s great classic' },
        },
      ],
    },
    {
      title: { fr: 'La mer', en: 'From the sea' },
      items: [
        {
          name: 'Poissons & fruits de mer du jour',
          desc: {
            fr: 'Les produits de la mer, la prédilection du chef : selon l’arrivage',
            en: 'Seafood — the chef’s favourite: subject to the day’s catch',
          },
        },
        {
          name: 'Suggestions du chef',
          desc: {
            fr: 'Deux ou trois propositions écrites à la craie chaque matin',
            en: 'Two or three chalk-written proposals each morning',
          },
        },
      ],
    },
    {
      title: { fr: 'Douceurs', en: 'Sweet things' },
      items: [
        {
          name: 'Tarte fine aux pommes, caramel beurre salé',
          desc: { fr: 'Sa boule de glace vanille', en: 'With a scoop of vanilla ice cream' },
        },
        {
          name: 'Desserts maison',
          desc: {
            fr: 'Au fil de l’ardoise : le dessert du jour, préparé par le chef',
            en: 'From the chalkboard: the chef’s dessert of the day',
          },
        },
      ],
    },
    {
      title: { fr: 'Le bar', en: 'The bar' },
      items: [
        {
          name: 'Rhums « dérangés »',
          desc: { fr: 'Infusions maison, à déguster avec modération', en: 'House infusions, to be enjoyed in moderation' },
        },
        {
          name: 'Rhum piment-chocolat',
          desc: { fr: 'Le péché mignon du chef Rivo', en: 'Chef Rivo’s guilty pleasure' },
        },
      ],
    },
  ] satisfies MenuGroup[],
  galleryCaption: { fr: 'À la carte', en: 'On the plate' } satisfies L,
}

export const gallery: { src: string; name: string; alt: L }[] = [
  {
    src: img.salade,
    name: 'Salade Périgourdine',
    alt: { fr: 'Salade Périgourdine du Vintage', en: 'Salade Périgourdine at the Vintage' },
  },
  {
    src: img.huitres,
    name: 'Huîtres gratinées de Fort-Dauphin',
    alt: { fr: 'Huîtres gratinées de Fort-Dauphin', en: 'Gratinated oysters from Fort-Dauphin' },
  },
  {
    src: img.magret,
    name: 'Magret de canard au miel-gingembre',
    alt: { fr: 'Rôti de magret de canard au miel-gingembre', en: 'Roasted magret duck with honey and ginger' },
  },
  {
    src: img.souris,
    name: 'Souris d’agneau confite',
    alt: { fr: 'Souris d’agneau confite au romarin et au miel', en: 'Lamb shank confit with rosemary and honey' },
  },
  {
    src: img.tarte,
    name: 'Tarte fine aux pommes',
    alt: { fr: 'Tarte fine aux pommes, caramel beurre salé', en: 'Thin apple tart, salted caramel' },
  },
]

/* ------------------------------------------------------------- rendez-vous */

export const evenements = {
  eyebrow: { fr: 'Les rendez-vous', en: "What's on" } satisfies L,
  title: { fr: 'Méchouis, musique et soirées privées', en: 'Lamb roast, music and private evenings' } satisfies L,
  intro: {
    fr: 'La maison vit au rythme de ses programmations : selon les saisons, on y croise un méchouis, une animation musicale ou une soirée à thème.',
    en: 'The house lives to its own programme: through the seasons you may find a lamb roast, live music or a themed evening.',
  } satisfies L,
  cards: [
    {
      num: '01',
      title: { fr: 'Méchouis', en: 'Méchouis' },
      desc: {
        fr: 'L’agneau rôti au feu, à partager en grande tablée. Une date annoncée au fil de la programmation.',
        en: 'Lamb roasted over fire, to share at a long table. Dates announced through the season.',
      },
    },
    {
      num: '02',
      title: { fr: 'Animations musicales', en: 'Live music' },
      desc: {
        fr: 'Des soirées spéciales rythment la vie de la maison, entre tables dînantes et verres de fin de journée.',
        en: 'Special evenings season the house, between dinner tables and end-of-day drinks.',
      },
    },
    {
      num: '03',
      title: { fr: 'Événements privés', en: 'Private events' },
      desc: {
        fr: 'Anniversaires, repas d’affaires, tables de groupe : la maison se prête à vos occasions, sur réservation.',
        en: 'Birthdays, business dinners, group tables: the house suits your occasions, by reservation.',
      },
    },
  ],
  note: {
    fr: 'La programmation évolue au fil des saisons — suivez la page Facebook pour ne rien manquer.',
    en: 'The programme changes with the seasons — follow the Facebook page to stay posted.',
  } satisfies L,
}

/* -------------------------------------------------------------------- avis */

export const avis = {
  eyebrow: { fr: 'Ils en parlent', en: 'In their words' } satisfies L,
  title: { fr: 'Le regard des gourmands', en: 'From our guests' } satisfies L,
  quotes: [
    {
      text: {
        fr: 'Merveilleuse découverte et incontournable d’Antsirabe : un lieu très calme et apaisant, les plats sont délicieux et très bien présentés, personnel chaleureux.',
        en: 'A wonderful discovery and a must in Antsirabe: a very calm and soothing place, the dishes are delicious and beautifully presented, warm staff.',
      } satisfies L,
      source: 'Google',
      meta: { fr: '4,7/5 · 32 avis', en: '4.7/5 · 32 reviews' } satisfies L,
    },
    {
      text: {
        fr: 'Un cadre très sympathique, une ambiance conviviale, une très bonne bouffe, des propositions inédites.',
        en: 'A really lovely setting, a friendly atmosphere, very good food, original ideas.',
      } satisfies L,
      source: 'Facebook',
      meta: { fr: 'Page officielle', en: 'Official page' } satisfies L,
    },
    {
      text: {
        fr: 'An original menu, and very well prepared and delicious dishes. Professional service.',
        en: 'An original menu, and very well prepared and delicious dishes. Professional service.',
      } satisfies L,
      source: 'Tripadvisor',
      meta: { fr: '5,0/5 · 8 avis', en: '5.0/5 · 8 reviews' } satisfies L,
    },
  ],
  scores: [
    {
      label: 'Google',
      score: '4,7/5',
      width: '94%',
      meta: { fr: '32 avis', en: '32 reviews' } satisfies L,
    },
    {
      label: 'Tripadvisor',
      score: '5,0/5',
      width: '100%',
      meta: { fr: '#10 sur 33 restaurants à Antsirabe', en: '#10 of 33 restaurants in Antsirabe' } satisfies L,
    },
  ],
}

/* ------------------------------------------------------------------- infos */

export const infos = {
  eyebrow: { fr: 'Infos pratiques', en: 'Good to know' } satisfies L,
  title: { fr: 'Nous trouver & réserver', en: 'Find us & book' } satisfies L,
  items: [
    {
      k: { fr: 'Adresse', en: 'Address' },
      v: contact.address,
      note: contact.addressNote,
      href: contact.maps,
      link: { fr: 'Ouvrir l’itinéraire', en: 'Get directions' } satisfies L,
    },
    {
      k: { fr: 'Horaires', en: 'Hours' },
      v: { fr: 'Tous les jours · 11h00 – 22h00', en: 'Every day · 11:00 am – 10:00 pm' },
      note: null,
      href: contact.phoneHref,
      link: { fr: 'Appeler la maison', en: 'Call the house' } satisfies L,
    },
    {
      k: { fr: 'Téléphone', en: 'Phone' },
      v: { fr: contact.phoneLabel, en: contact.phoneLabel },
      note: null,
      href: contact.phoneHref,
      link: { fr: 'Passer un appel', en: 'Place a call' } satisfies L,
    },
    {
      k: { fr: 'E-mail', en: 'E-mail' },
      v: { fr: contact.email, en: contact.email },
      note: null,
      href: `mailto:${contact.email}`,
      link: { fr: 'Écrire au restaurant', en: 'Write to the restaurant' } satisfies L,
    },
  ],
  form: {
    title: { fr: 'Demander une table', en: 'Request a table' } satisfies L,
    subtitle: {
      fr: 'Votre demande s’ouvre dans votre messagerie — ou appelez-nous directement.',
      en: 'Your request opens in your e-mail app — or simply call us.',
    } satisfies L,
    name: { fr: 'Nom & prénom', en: 'Full name' } satisfies L,
    phone: { fr: 'Téléphone', en: 'Phone' } satisfies L,
    date: { fr: 'Date', en: 'Date' } satisfies L,
    time: { fr: 'Heure', en: 'Time' } satisfies L,
    guests: { fr: 'Convives', en: 'Guests' } satisfies L,
    message: { fr: 'Message (optionnel)', en: 'Message (optional)' } satisfies L,
    submit: { fr: 'Envoyer la demande', en: 'Send request' } satisfies L,
    success: {
      fr: 'Votre messagerie s’ouvre avec la demande pré-remplie. À très vite au Vintage !',
      en: 'Your e-mail app is opening with the request pre-filled. See you soon at the Vintage!',
    } satisfies L,
    required: { fr: 'Champs obligatoires', en: 'Required fields' } satisfies L,
  },
  mapNote: {
    fr: 'Rue Benyowsky, Antsirabe — en face de l’ancienne agence Star',
    en: 'Rue Benyowsky, Antsirabe — opposite the old Star agency',
  } satisfies L,
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  tagline: {
    fr: 'Brasserie bistronomique · Rue Benyowsky, Antsirabe',
    en: 'Bistronomic brasserie · Rue Benyowsky, Antsirabe',
  } satisfies L,
  rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' } satisfies L,
  credits: {
    fr: 'Photographies : no comment® & Madatasting — merci de leur crédit.',
    en: 'Photography: no comment® & Madatasting — with our thanks.',
  } satisfies L,
  backTop: { fr: 'Haut de page', en: 'Back to top' } satisfies L,
}

/* ----------------------------------------------------------- état d'ouverture */

export const openState = {
  open: { fr: 'Ouvert', en: 'Open' },
  closed: { fr: 'Fermé', en: 'Closed' },
  until: { fr: 'jusqu’à 22h', en: 'until 10 pm' },
  at: { fr: 'ouvre à 11h', en: 'opens at 11 am' },
  tomorrow: { fr: 'réouvre demain à 11h', en: 'opens tomorrow at 11 am' },
}
