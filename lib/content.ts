export type Category =
  | "Færøsk litteratur"
  | "Ultraminor"
  | "Nordisk identitet"
  | "Heinesen"
  | "Barbara";

export const categories: Category[] = [
  "Færøsk litteratur",
  "Ultraminor",
  "Nordisk identitet",
  "Heinesen",
  "Barbara",
];

export interface Lecture {
  slug: string;
  title: string;
  categories: Category[];
  description: string;
  duration: string;
}

export const lectures: Lecture[] = [
  {
    slug: "hvad-er-det-nordiske",
    title: "Hvad er det nordiske — og hvad kan det blive?",
    categories: ["Nordisk identitet"],
    description:
      "Et opgør med den skandinaviske selvforståelse: hvad sker der med begrebet 'Norden', når Færøerne, Grønland og Island tages alvorligt som litterære og kulturelle centre — ikke periferi?",
    duration: "45-60 min. + debat",
  },
  {
    slug: "heinesen-verdensbillede",
    title: "William Heinesen og det færøske verdensbillede",
    categories: ["Heinesen", "Færøsk litteratur"],
    description:
      "En introduktion til Heinesens forfatterskab og den mytiske Tórshavn-by Klondyke — om at skrive en hel verden frem fra en lille nordatlantisk klippeø.",
    duration: "60 min. + debat",
  },
  {
    slug: "ultraminor-litteratur",
    title: "Ultraminor litteratur: Når små sprog skriver stort",
    categories: ["Ultraminor"],
    description:
      "Om begrebet 'ultraminor', udviklet sammen med David Damrosch (Harvard), og hvordan litteratur skrevet på sprog med få tusinde talere alligevel kan gøre verdenskrav.",
    duration: "45 min. + debat",
  },
  {
    slug: "barbara-i-hoj-so",
    title: "Barbara i høj sø — Jørgen-Frantz Jacobsen 125 år",
    categories: ["Barbara", "Færøsk litteratur"],
    description:
      "En nærlæsning af den færøske klassiker 'Barbara' i anledning af den nye udgivelse 'Barbara i høj sø' — om kærlighed, skæbne og et forfatterskab afbrudt for tidligt.",
    duration: "60 min. + debat",
  },
  {
    slug: "faeroerne-mellem-danmark-og-verden",
    title: "Færøerne mellem Danmark og verden",
    categories: ["Nordisk identitet", "Færøsk litteratur"],
    description:
      "Et foredrag om Færøernes dobbelte position — historisk bundet til Danmark, kulturelt orienteret mod det nordatlantiske og det globale. Hvad betyder det for litteraturen?",
    duration: "45 min. + debat",
  },
  {
    slug: "jacobsen-kaerlighedens-geografi",
    title: "Jørgen-Frantz Jacobsen og kærlighedens geografi",
    categories: ["Barbara", "Heinesen"],
    description:
      "Om venskabet mellem Jørgen-Frantz Jacobsen og William Heinesen, og om hvordan et landskab — hav, klipper, tåge — bliver til et sprog for begær og tab.",
    duration: "45 min. + debat",
  },
  {
    slug: "nordung-undervisning",
    title: "NORDUNG: At undervise Norden på ny",
    categories: ["Nordisk identitet"],
    description:
      "Om det nordiske undervisningsprojekt NORDUNG — hvordan vi bygger undervisningsmateriale, der tager de nordatlantiske samfund alvorligt i skolens litteraturundervisning.",
    duration: "30-45 min.",
  },
  {
    slug: "prosaens-modernitet",
    title: "Prosaens modernitet i den nordatlantiske litteratur",
    categories: ["Færøsk litteratur", "Ultraminor"],
    description:
      "Hvordan bliver en litteratur 'moderne'? Et foredrag om prosaformens udvikling i færøsk og nordatlantisk litteratur set i lyset af verdenslitterære strømninger.",
    duration: "60 min. + debat",
  },
];

export interface EventItem {
  date: string;
  displayDate: string;
  title: string;
  location: string;
  description: string;
}

export const events: EventItem[] = [
  {
    date: "2026-09-10",
    displayDate: "10. sept. 2026",
    title: "William Heinesen og det færøske verdensbillede",
    location: "Nordatlantens Brygge, København",
    description:
      "Foredrag og samtale om Heinesens forfatterskab i anledning af efterårets litteraturprogram på Nordatlantens Brygge.",
  },
  {
    date: "2026-10-02",
    displayDate: "2. okt. 2026",
    title: "Barbara i høj sø — Jørgen-Frantz Jacobsen 125 år",
    location: "Færøernes Hus, København",
    description:
      "Bergur Rønne Moberg og Erik Skyum-Nielsen præsenterer 'Barbara i høj sø' og taler om klassikeren, der aldrig slipper sit greb.",
  },
  {
    date: "2026-11-14",
    displayDate: "14. nov. 2026",
    title: "Ultraminor litteratur: Når små sprog skriver stort",
    location: "Institut for Nordiske Studier og Sprogvidenskab, KU",
    description:
      "Offentligt foredrag om ultraminor-begrebet og dets betydning for den globale litteraturforståelse.",
  },
];

export interface Publication {
  title: string;
  year: number;
  venue: string;
  coauthor?: string;
  description: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    title: "Ultraminor World Literatures",
    year: 2022,
    venue: "Brill",
    coauthor: "med David Damrosch",
    description:
      "Antologi der etablerer 'ultraminor' som litteraturvidenskabeligt begreb — en undersøgelse af litteraturer skrevet på sprog med ekstremt få talere, og deres plads i verdenslitteraturen.",
    featured: true,
  },
  {
    title: "Barbara i høj sø",
    year: 2025,
    venue: "Multivers",
    coauthor: "med Erik Skyum-Nielsen",
    description:
      "En ny, uddybende læsning af Jørgen-Frantz Jacobsens klassiker 'Barbara' — dens tilblivelse, dens eftermæle og dens plads i den færøske og nordiske litteraturhistorie.",
    featured: true,
  },
  {
    title: "Defining the Ultraminor",
    year: 2017,
    venue: "Journal of World Literature",
    description:
      "Den første formulering af ultraminor-begrebet: et forsøg på at indfange den særlige position, som de aller mindste litterære sprogsamfund indtager i verdenslitteraturen.",
  },
  {
    title: "William Heinesen og modernitetens prosa",
    year: 2011,
    venue: "Antologibidrag, Museum Tusculanums Forlag",
    description:
      "En undersøgelse af Heinesens prosastil som svar på en moderne, brudt verden — og af Tórshavns fiktive dobbeltgænger, Klondyke, som litterært laboratorium.",
  },
  {
    title: "Færøsk litteratur og det postkoloniale blik",
    year: 2015,
    venue: "Tidsskriftartikel",
    description:
      "Om at læse færøsk litteratur i spændingsfeltet mellem selvstyre, sprogpolitik og en fortsat forbindelse til Danmark.",
  },
  {
    title: "PhD-afhandling: Prosa og modernitet i færøsk litteratur",
    year: 2004,
    venue: "Københavns Universitet",
    description:
      "Afhandlingen der lagde grunden til Bergur Rønne Mobergs videre forskning i forholdet mellem færøsk prosa, modernitet og et lille sprogsamfunds litterære selvbevidsthed.",
  },
];

export interface SeriesItem {
  slug: string;
  title: string;
  episodeCount: number;
  episodeLabel: string;
  teaser: string;
  comingSoon?: boolean;
  gradient: string;
}

export const series: SeriesItem[] = [
  {
    slug: "heinesens-verden",
    title: "Heinesens Verden",
    episodeCount: 6,
    episodeLabel: "episoder",
    teaser:
      "En vandring gennem William Heinesens litterære univers — fra den fiktive by Klondyke til det virkelige Tórshavn. Om hav, myte og mennesker i et forfatterskab, der rummer en hel verden.",
    gradient: "from-[#0f2a35] via-[#173a45] to-[#0a1a1f]",
  },
  {
    slug: "hvad-er-ultraminor",
    title: "Hvad er ultraminor litteratur?",
    episodeCount: 4,
    episodeLabel: "artikler",
    teaser:
      "En kort, tilgængelig introduktion til begrebet 'ultraminor' — udviklet sammen med Harvard-professor David Damrosch — og til de litteraturer, der skriver stort på små sprog.",
    gradient: "from-[#2a1f0f] via-[#3a2c17] to-[#1a130a]",
  },
  {
    slug: "at-laese-barbara",
    title: "At læse Barbara",
    episodeCount: 5,
    episodeLabel: "episoder",
    teaser:
      "En nærlæsningsserie om Jørgen-Frantz Jacobsens 'Barbara' — romanen om kærlighed og skæbne, der stadig, snart hundrede år efter, ikke slipper sit greb om sine læsere.",
    gradient: "from-[#1a1530] via-[#251c3d] to-[#0f0c1a]",
  },
  {
    slug: "nordisk-identitet-i-dag",
    title: "Nordisk identitet i dag",
    episodeCount: 0,
    episodeLabel: "kommer snart",
    teaser:
      "En kommende serie om, hvad 'det nordiske' betyder, når Færøerne, Grønland og Island tages alvorligt som centre snarere end periferi. Udvikles i forlængelse af NORDUNG-projektet.",
    comingSoon: true,
    gradient: "from-[#0f1a2a] via-[#17253a] to-[#0a121a]",
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "1965",
    title: "Født på Færøerne",
    description:
      "Bergur Rønne Moberg vokser op på Færøerne, i et sprogsamfund, der senere skulle blive et centralt omdrejningspunkt i hans forskning.",
  },
  {
    year: "1990'erne",
    title: "Litteraturstudier i København",
    description:
      "Studier i litteraturvidenskab ved Københavns Universitet, med fokus på nordisk og færøsk litteratur.",
  },
  {
    year: "2004",
    title: "PhD-grad",
    description:
      "Forsvarer sin PhD-afhandling om prosa og modernitet i færøsk litteratur ved Københavns Universitet.",
  },
  {
    year: "2011",
    title: "Lektor ved NorS",
    description:
      "Tiltræder som lektor ved Institut for Nordiske Studier og Sprogvidenskab (NorS), Københavns Universitet.",
  },
  {
    year: "2017",
    title: "Ultraminor-begrebet formuleres",
    description:
      "'Defining the Ultraminor' udgives i Journal of World Literature — første formulering af et begreb udviklet sammen med David Damrosch (Harvard).",
  },
  {
    year: "2022",
    title: "Ultraminor World Literatures",
    description:
      "Hovedværket om ultraminor-litteratur udgives på det internationale forlag Brill, i samarbejde med David Damrosch.",
  },
  {
    year: "2023",
    title: "NORDUNG igangsættes",
    description:
      "Bergur Rønne Moberg bliver projektleder for NORDUNG, et nordisk undervisningsprojekt støttet med 15 mio. kr. fra A.P. Møller Fonden.",
  },
  {
    year: "2025",
    title: "Barbara i høj sø",
    description:
      "Udgiver 'Barbara i høj sø' sammen med Erik Skyum-Nielsen — en ny læsning af Jørgen-Frantz Jacobsens klassiker.",
  },
];

export interface Quote {
  text: string;
  source: string;
}

export const quotes: Quote[] = [
  {
    text: "Et lille sprog skriver ikke lille litteratur. Det skriver litteratur, der endnu ikke er blevet læst rigtigt.",
    source: "Om ultraminor litteratur",
  },
  {
    text: "Heinesen skrev ikke om en ø i udkanten af verden. Han skrev en hel verden, der tilfældigvis lå på en ø.",
    source: "Om William Heinesen",
  },
  {
    text: "Norden er ikke et centrum med nogle øer omkring sig. Det er en arkipelag af centre.",
    source: "Om nordisk identitet",
  },
  {
    text: "Barbara er ikke en kvinde, man dømmer. Hun er et hav, man forsøger at kortlægge — og fejler.",
    source: "Om 'Barbara i høj sø'",
  },
];
