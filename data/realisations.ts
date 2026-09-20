export type RealisationStep = {
  title: string;
  description: string;
};

export type RealisationPhoto = {
  src: string;
  alt: string;
  caption?: string;
  originalFile?: string;
};

export type RealisationService = {
  label: string;
  href: string;
};

export type Realisation = {
  slug: string;

  seoLocation: string;
  actualLocation?: string;

  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;

  metaTitle: string;
  metaDescription: string;

  heroImage: RealisationPhoto;
  gallery: RealisationPhoto[];

  introduction: string;
  story: string[];

  steps: RealisationStep[];

  services: RealisationService[];

  localTitle: string;
  localDescription: string;
};

export const realisations: Realisation[] = [
  {
    slug: "renovation-toiture-narbonne",

    seoLocation: "Narbonne",

    eyebrow: "Rénovation de toiture · Narbonne",

    title: "Rénovation d’une couverture en tuiles à Narbonne",

    shortTitle: "Rénovation de toiture",

    description:
      "Un chantier de couverture illustrant les différentes étapes d’une rénovation, de la préparation du support jusqu’à la remise en place des tuiles.",

    metaTitle: "Rénovation de toiture à Narbonne | Narbonne Toiture",

    metaDescription:
      "Découvrez un chantier de rénovation de toiture en tuiles et le savoir-faire de Narbonne Toiture pour les travaux de couverture à Narbonne et dans l’Aude.",

    heroImage: {
      src: "/images/realisations/narbonne-renovation-toiture-01.jpg",
      alt: "Rénovation d'une couverture en tuiles avec écran sous-toiture et liteaux",
      originalFile: "WhatsApp Image 2026-09-04 at 16.03.38.jpeg",
    },

    gallery: [
      {
        src: "/images/realisations/narbonne-renovation-toiture-02.jpg",
        alt: "Préparation d'une toiture avant la pose des tuiles",
        originalFile: "WhatsApp Image 2026-09-04 at 16.02.14.jpeg",
      },
      {
        src: "/images/realisations/narbonne-renovation-toiture-03.jpg",
        alt: "Écran sous-toiture et liteaux visibles pendant des travaux de couverture",
        originalFile: "WhatsApp Image 2026-09-04 at 16.02.54.jpeg",
      },
      {
        src: "/images/realisations/narbonne-renovation-toiture-04.jpg",
        alt: "Pose progressive des tuiles sur une toiture en rénovation",
        originalFile: "WhatsApp Image 2026-09-04 at 16.03.51.jpeg",
      },
      {
        src: "/images/realisations/narbonne-renovation-toiture-05.jpg",
        alt: "Travaux de couverture avec tuiles en cours de pose",
        originalFile: "WhatsApp Image 2026-09-04 at 16.05.45.jpeg",
      },
      {
        src: "/images/realisations/narbonne-renovation-toiture-06.jpg",
        alt: "Couverture en tuiles après progression des travaux",
        originalFile: "WhatsApp Image 2026-09-04 at 16.06.07.jpeg",
      },
    ],

    introduction:
      "La rénovation d’une couverture ne se résume pas à remplacer les éléments visibles. Le travail concerne également la préparation du support et l’organisation des différents éléments qui se trouvent sous les tuiles.",

    story: [
      "Cette série de photographies permet de suivre plusieurs phases caractéristiques d’un chantier de couverture. La toiture est progressivement préparée avant la remise en place des éléments de couverture.",
      "L’écran sous-toiture et le réseau de liteaux apparaissent notamment sur plusieurs vues avant que les tuiles ne viennent progressivement recouvrir l’ensemble.",
      "Ce type d’intervention illustre le travail réalisé par Narbonne Toiture pour la rénovation et l’entretien des couvertures en tuiles dans le secteur de Narbonne et plus largement dans l’Aude.",
    ],

    steps: [
      {
        title: "Préparation de la couverture",
        description:
          "Le support est préparé afin de permettre la mise en œuvre des différents éléments de la toiture.",
      },
      {
        title: "Écran et liteaux",
        description:
          "Les photographies du chantier montrent la présence de l’écran sous-toiture et du réseau de liteaux avant la pose des tuiles.",
      },
      {
        title: "Pose des tuiles",
        description:
          "La couverture est ensuite reconstituée progressivement avec la mise en place des tuiles.",
      },
      {
        title: "Finition de la couverture",
        description:
          "Les dernières phases permettent de retrouver une toiture entièrement couverte et homogène.",
      },
    ],

    services: [
      {
        label: "Travaux de couverture",
        href: "/couverture",
      },
      {
        label: "Réparation de toiture",
        href: "/reparations",
      },
    ],

    localTitle: "Des travaux de couverture à Narbonne et dans l’Aude",

    localDescription:
      "Narbonne Toiture intervient pour les travaux de couverture, la rénovation et l’entretien des toitures à Narbonne ainsi que dans les principales communes de l’Aude, notamment Coursan, Gruissan, Sigean, Port-la-Nouvelle, Lézignan-Corbières et Carcassonne.",
  },

  {
    slug: "refection-couverture-gruissan",
    seoLocation: "Gruissan",
    eyebrow: "Couverture · Gruissan",
    title: "Réfection d’une couverture en tuiles à Gruissan",
    shortTitle: "Réfection de couverture",
    description:
      "Travaux de couverture en tuiles illustrant la préparation de la toiture et sa remise en état.",
    metaTitle: "Réfection de toiture à Gruissan | Narbonne Toiture",
    metaDescription:
      "Travaux de couverture et réfection de toiture à Gruissan. Découvrez le savoir-faire de Narbonne Toiture à travers ses réalisations.",
    heroImage: {
      src: "/images/realisations/gruissan-refection-couverture-01.jpg",
      alt: "Travaux de couverture en tuiles dans le secteur de Gruissan",
      originalFile: "WhatsApp Image 2026-09-04 at 15.48.51.jpeg",
    },
    gallery: [],
    introduction:
      "Les couvertures en tuiles nécessitent une mise en œuvre cohérente de l’ensemble des éléments qui composent la toiture.",
    story: [],
    steps: [],
    services: [{ label: "Couverture", href: "/couverture" }],
    localTitle: "Couvreur à Gruissan",
    localDescription:
      "Narbonne Toiture intervient à Gruissan et dans le secteur narbonnais pour les travaux de couverture, d’entretien et de rénovation de toiture.",
  },

  {
    slug: "renovation-toiture-coursan",
    seoLocation: "Coursan",
    eyebrow: "Rénovation · Coursan",
    title: "Rénovation de toiture à Coursan",
    shortTitle: "Rénovation de toiture",
    description:
      "Un aperçu du travail réalisé lors d’une intervention de rénovation de couverture.",
    metaTitle: "Rénovation de toiture à Coursan | Narbonne Toiture",
    metaDescription:
      "Rénovation et travaux de toiture à Coursan avec Narbonne Toiture, artisan couvreur intervenant dans l’Aude.",
    heroImage: {
      src: "/images/realisations/coursan-renovation-toiture-01.jpg",
      alt: "Travaux de rénovation d'une toiture en tuiles",
    },
    gallery: [],
    introduction:
      "Chaque rénovation commence par l’observation de l’existant et une intervention adaptée à l’état de la couverture.",
    story: [],
    steps: [],
    services: [{ label: "Couverture", href: "/couverture" }],
    localTitle: "Travaux de toiture à Coursan",
    localDescription:
      "Narbonne Toiture intervient à Coursan pour les travaux de couverture, les réparations et l’entretien des toitures.",
  },

  {
    slug: "couverture-maison-sigean",
    seoLocation: "Sigean",
    eyebrow: "Travaux de toiture · Sigean",
    title: "Travaux de couverture sur une maison à Sigean",
    shortTitle: "Couverture en tuiles",
    description:
      "Une réalisation mettant en avant le travail de couverture et la mise en œuvre des différents éléments de toiture.",
    metaTitle: "Couvreur à Sigean | Travaux de toiture",
    metaDescription:
      "Découvrez les travaux de couverture réalisés par Narbonne Toiture et ses interventions dans le secteur de Sigean.",
    heroImage: {
      src: "/images/realisations/sigean-couverture-01.jpg",
      alt: "Couverture en tuiles sur une maison",
    },
    gallery: [],
    introduction:
      "La couverture constitue la partie directement exposée de la toiture et participe à la protection durable du bâtiment.",
    story: [],
    steps: [],
    services: [{ label: "Couverture", href: "/couverture" }],
    localTitle: "Votre couvreur dans le secteur de Sigean",
    localDescription:
      "Narbonne Toiture intervient à Sigean et dans les communes environnantes pour différents travaux de toiture.",
  },

  {
    slug: "renovation-couverture-port-la-nouvelle",
    seoLocation: "Port-la-Nouvelle",
    eyebrow: "Rénovation · Port-la-Nouvelle",
    title: "Rénovation d’une couverture à Port-la-Nouvelle",
    shortTitle: "Rénovation de couverture",
    description:
      "Travaux de rénovation et de remise en état d’une couverture réalisés par un artisan couvreur.",
    metaTitle: "Rénovation toiture Port-la-Nouvelle | Narbonne Toiture",
    metaDescription:
      "Travaux de rénovation de toiture à Port-la-Nouvelle et dans l’Aude avec Narbonne Toiture.",
    heroImage: {
      src: "/images/realisations/port-la-nouvelle-couverture-01.jpg",
      alt: "Rénovation d'une couverture en tuiles",
    },
    gallery: [],
    introduction:
      "Une toiture évolue avec le temps et son environnement. Une rénovation permet d’intervenir sur les éléments de couverture lorsque leur état le nécessite.",
    story: [],
    steps: [],
    services: [{ label: "Couverture", href: "/couverture" }],
    localTitle: "Travaux de toiture à Port-la-Nouvelle",
    localDescription:
      "Narbonne Toiture intervient dans le secteur de Port-la-Nouvelle pour la couverture, les réparations et l’entretien des toitures.",
  },

  {
    slug: "refection-toiture-lezignan-corbieres",
    seoLocation: "Lézignan-Corbières",
    eyebrow: "Réfection · Lézignan-Corbières",
    title: "Réfection de toiture à Lézignan-Corbières",
    shortTitle: "Réfection de toiture",
    description:
      "Un chantier permettant d’observer différentes étapes du travail réalisé sur une couverture.",
    metaTitle: "Réfection toiture Lézignan-Corbières | Narbonne Toiture",
    metaDescription:
      "Réfection et travaux de toiture à Lézignan-Corbières avec Narbonne Toiture, couvreur intervenant dans l’Aude.",
    heroImage: {
      src: "/images/realisations/lezignan-refection-toiture-01.jpg",
      alt: "Travaux de réfection d'une toiture",
    },
    gallery: [],
    introduction:
      "La réfection d’une toiture permet d’intervenir plus largement sur la couverture lorsque son état le nécessite.",
    story: [],
    steps: [],
    services: [{ label: "Couverture", href: "/couverture" }],
    localTitle: "Couvreur à Lézignan-Corbières",
    localDescription:
      "Narbonne Toiture intervient à Lézignan-Corbières et dans les communes de l’Aude pour différents travaux de couverture.",
  },

  {
    slug: "travaux-toiture-carcassonne",
    seoLocation: "Carcassonne",
    eyebrow: "Couverture · Carcassonne",
    title: "Travaux de toiture à Carcassonne",
    shortTitle: "Travaux de couverture",
    description:
      "Une réalisation illustrant le savoir-faire nécessaire à la préparation et à la mise en œuvre d’une couverture.",
    metaTitle: "Travaux de toiture à Carcassonne | Narbonne Toiture",
    metaDescription:
      "Découvrez les réalisations de Narbonne Toiture et ses travaux de couverture dans le secteur de Carcassonne et dans l’Aude.",
    heroImage: {
      src: "/images/realisations/carcassonne-travaux-toiture-01.jpg",
      alt: "Travaux de couverture sur une toiture",
    },
    gallery: [],
    introduction:
      "Les travaux de toiture peuvent concerner aussi bien la couverture visible que les éléments nécessaires à sa bonne mise en œuvre.",
    story: [],
    steps: [],
    services: [{ label: "Couverture", href: "/couverture" }],
    localTitle: "Travaux de couverture à Carcassonne",
    localDescription:
      "Narbonne Toiture intervient dans l’Aude pour les travaux de couverture et peut intervenir dans le secteur de Carcassonne.",
  },
];

export function getRealisationBySlug(slug: string) {
  return realisations.find((realisation) => realisation.slug === slug);
}