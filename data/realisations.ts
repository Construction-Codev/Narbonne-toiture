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
  // ============================================================
  // NARBONNE
  // ============================================================
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
      "Découvrez une rénovation de toiture en tuiles et le savoir-faire de Narbonne Toiture pour les travaux de couverture à Narbonne et dans l’Aude.",

    heroImage: {
      src: "/images/realisations/narbonne-renovation-toiture-01.jpg",
      alt: "Rénovation d’une couverture en tuiles avec écran sous-toiture et liteaux",
      caption:
        "Rénovation d’une couverture en tuiles avec préparation complète du support.",
      originalFile: "WhatsApp Image 2026-09-04 at 16.03.38.jpeg",
    },

    gallery: [
      {
        src: "/images/realisations/narbonne-renovation-toiture-02.jpg",
        alt: "Préparation d’une toiture avant la pose des tuiles",
        caption:
          "Préparation du support avant la remise en place de la couverture.",
        originalFile: "WhatsApp Image 2026-09-04 at 16.02.14.jpeg",
      },
      {
        src: "/images/realisations/narbonne-renovation-toiture-03.jpg",
        alt: "Écran sous-toiture et liteaux visibles pendant des travaux de couverture",
        caption:
          "L’écran sous-toiture et le réseau de liteaux apparaissent avant la pose des tuiles.",
        originalFile: "WhatsApp Image 2026-09-04 at 16.02.54.jpeg",
      },
      {
        src: "/images/realisations/narbonne-renovation-toiture-04.jpg",
        alt: "Pose progressive des tuiles sur une toiture en rénovation",
        caption:
          "Les tuiles sont progressivement remises en place sur le support préparé.",
        originalFile: "WhatsApp Image 2026-09-04 at 16.03.51.jpeg",
      },
      {
        src: "/images/realisations/narbonne-renovation-toiture-05.jpg",
        alt: "Travaux de couverture avec tuiles en cours de pose",
        caption:
          "La couverture se reconstitue progressivement sur les différents pans.",
        originalFile: "WhatsApp Image 2026-09-04 at 16.05.45.jpeg",
      },
      {
        src: "/images/realisations/narbonne-renovation-toiture-06.jpg",
        alt: "Couverture en tuiles après progression des travaux",
        caption:
          "Vue de la toiture après progression de la remise en couverture.",
        originalFile: "WhatsApp Image 2026-09-04 at 16.06.07.jpeg",
      },
    ],

    introduction:
      "La rénovation d’une couverture ne se résume pas à remplacer les éléments visibles. Le travail concerne également la préparation du support et l’organisation des différents éléments qui se trouvent sous les tuiles.",

    story: [
      "Cette série de photographies permet d’observer plusieurs phases caractéristiques d’un chantier de couverture. La toiture est progressivement préparée avant la remise en place des éléments de couverture.",
      "L’écran sous-toiture et le réseau de liteaux apparaissent notamment sur plusieurs vues avant que les tuiles ne viennent progressivement recouvrir l’ensemble.",
      "Narbonne Toiture intervient à Narbonne et plus largement dans l’Aude pour la rénovation, la réparation et l’entretien des couvertures.",
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
          "Les photographies montrent la présence de l’écran sous-toiture et du réseau de liteaux avant la pose des tuiles.",
      },
      {
        title: "Pose des tuiles",
        description:
          "La couverture est progressivement reconstituée avec la mise en place des tuiles.",
      },
      {
        title: "Finition de la couverture",
        description:
          "Les dernières phases permettent de retrouver une toiture entièrement couverte et visuellement homogène.",
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

  // ============================================================
  // GRUISSAN
  // ============================================================
  {
    slug: "refection-couverture-gruissan",
    seoLocation: "Gruissan",

    eyebrow: "Couverture · Gruissan",

    title: "Réfection d’une couverture en tuiles à Gruissan",

    shortTitle: "Réfection de couverture",

    description:
      "Une réalisation consacrée à la réfection d’une couverture en tuiles, avec plusieurs vues permettant d’observer le chantier et le résultat obtenu.",

    metaTitle: "Réfection de toiture à Gruissan | Narbonne Toiture",

    metaDescription:
      "Découvrez une réalisation de réfection de couverture en tuiles et les interventions de Narbonne Toiture dans le secteur de Gruissan et dans l’Aude.",

    heroImage: {
      src: "/images/realisations/gruissan-refection-couverture-01.jpg",
      alt: "Travaux de réfection d’une couverture en tuiles",
      caption:
        "Réfection d’une couverture en tuiles dans un environnement méditerranéen.",
      originalFile: "WhatsApp Image 2026-09-04 at 15.48.51.jpeg",
    },

    gallery: [
      {
        src: "/images/realisations/gruissan-refection-couverture-02.jpg",
        alt: "Vue d’ensemble d’une couverture en tuiles après travaux",
        caption:
          "Vue générale de la couverture et de ses différents pans.",
        originalFile: "WhatsApp Image 2026-09-04 at 15.49.17.jpeg",
      },
      {
        src: "/images/realisations/gruissan-refection-couverture-03.jpg",
        alt: "Détail d’une toiture en tuiles pendant des travaux de couverture",
        caption:
          "Une vue plus rapprochée du travail effectué sur la couverture.",
        originalFile: "WhatsApp Image 2026-09-04 at 15.50.42.jpeg",
      },
      {
        src: "/images/realisations/gruissan-refection-couverture-04.jpg",
        alt: "Travaux réalisés sur une couverture en tuiles",
        caption:
          "Les différents éléments de couverture sont repris au cours de l’intervention.",
        originalFile: "WhatsApp Image 2026-09-04 at 15.50.51.jpeg",
      },
      {
        src: "/images/realisations/gruissan-refection-couverture-05.jpg",
        alt: "Vue rapprochée d’une couverture en cours de réfection",
        caption:
          "Détail de la toiture permettant d’observer la couverture pendant les travaux.",
        originalFile: "WhatsApp Image 2026-09-04 at 15.51.22.jpeg",
      },
      {
        src: "/images/realisations/gruissan-refection-couverture-06.jpg",
        alt: "Vue complémentaire des travaux réalisés sur la toiture",
        caption:
          "Une dernière vue complète la présentation de cette réfection de couverture.",
        originalFile: "WhatsApp Image 2026-09-04 at 15.51.30.jpeg",
      },
    ],

    introduction:
      "La réfection d’une couverture permet d’intervenir sur les éléments qui assurent directement la protection du bâtiment. Les différentes vues montrent le travail réalisé sur une toiture en tuiles et permettent d’en observer plusieurs détails.",

    story: [
      "Cette réalisation présente plusieurs vues d’une même couverture afin de montrer le chantier sous différents angles, plutôt que de limiter la présentation à une seule photographie finale.",
      "Les tuiles constituent la partie immédiatement visible de la toiture, mais leur disposition et le traitement des différents points de la couverture participent à la cohérence de l’ensemble.",
      "Narbonne Toiture réalise ce type de travaux de couverture dans le secteur de Gruissan, à Narbonne et plus largement dans l’Aude.",
    ],

    steps: [
      {
        title: "Observation de la couverture",
        description:
          "Les différentes zones concernées par les travaux sont examinées avant l’intervention.",
      },
      {
        title: "Travail sur la couverture",
        description:
          "Les éléments concernés sont repris afin de remettre les différentes zones de toiture en état.",
      },
      {
        title: "Remise en place",
        description:
          "La couverture en tuiles est progressivement reconstituée au fil de l’intervention.",
      },
      {
        title: "Contrôle de l’ensemble",
        description:
          "L’ensemble de la couverture peut ensuite être observé afin de vérifier sa continuité visuelle.",
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

    localTitle: "Travaux de couverture dans le secteur de Gruissan",

    localDescription:
      "Narbonne Toiture intervient à Gruissan ainsi que dans le secteur narbonnais pour les travaux de couverture, la rénovation, les réparations et l’entretien des toitures.",
  },

  // ============================================================
  // COURSAN
  // ============================================================
  {
    slug: "renovation-toiture-coursan",
    seoLocation: "Coursan",

    eyebrow: "Rénovation de toiture",

    title: "Rénovation d’une toiture en tuiles à Coursan",

    shortTitle: "Rénovation de toiture",

    description:
      "Une rénovation de couverture illustrant plusieurs étapes du travail, de la préparation du support à la remise en place des tuiles.",

    metaTitle: "Rénovation de toiture à Coursan | Narbonne Toiture",

    metaDescription:
      "Découvrez une rénovation de toiture en tuiles présentée par Narbonne Toiture, couvreur intervenant à Coursan et dans le département de l’Aude.",

    heroImage: {
      src: "/images/realisations/coursan-renovation-toiture-01.jpg",
      alt: "Travaux de rénovation sur une toiture en tuiles",
      caption:
        "Une rénovation de couverture montrant le travail réalisé sous les tuiles.",
      originalFile: "coursan-renovation-toiture-01.jpg",
    },

    gallery: [
      {
        src: "/images/realisations/coursan-renovation-toiture-02.jpg",
        alt: "Couverture en cours de rénovation avec tuiles déposées",
        caption:
          "La couverture au cours des travaux de rénovation.",
        originalFile: "coursan-renovation-toiture-02.jpg",
      },
      {
        src: "/images/realisations/coursan-renovation-toiture-03.jpg",
        alt: "Écran sous-toiture et liteaux visibles pendant une rénovation",
        caption:
          "Une étape intermédiaire permettant d’observer la composition sous les tuiles.",
        originalFile: "coursan-renovation-toiture-03.jpg",
      },
      {
        src: "/images/realisations/coursan-renovation-toiture-04.jpg",
        alt: "Préparation d’une toiture avant remise en place des tuiles",
        caption:
          "Préparation progressive des différentes zones de couverture.",
        originalFile: "coursan-renovation-toiture-04.jpg",
      },
      {
        src: "/images/realisations/coursan-renovation-toiture-05.jpg",
        alt: "Tuiles préparées sur une toiture en cours de rénovation",
        caption:
          "Les tuiles sont réparties sur la couverture au fil de l’avancement.",
        originalFile: "coursan-renovation-toiture-05.jpg",
      },
      {
        src: "/images/realisations/coursan-renovation-toiture-06.jpg",
        alt: "Repose des tuiles sur une couverture en rénovation",
        caption:
          "La couverture reprend progressivement son aspect final.",
        originalFile: "coursan-renovation-toiture-06.jpg",
      },
    ],

    introduction:
      "Cette réalisation permet d’observer plusieurs étapes caractéristiques d’une rénovation de couverture en tuiles. Les photographies montrent le travail effectué sous la couverture avant la remise en place progressive des tuiles.",

    story: [
      "Une rénovation de toiture ne se résume pas à l’aspect visible des tuiles. Lorsque la couverture est déposée, l’intervention permet également d’accéder aux éléments situés dessous et de préparer correctement le support avant la remise en place de la couverture.",
      "Sur cette réalisation, les différentes vues permettent notamment d’observer l’écran sous-toiture, le litonnage et l’organisation des tuiles pendant l’avancement du chantier.",
      "Narbonne Toiture intervient à Coursan et plus largement dans l’Aude pour les travaux de couverture, les réparations et l’entretien des toitures.",
    ],

    steps: [
      {
        title: "Dépose de la couverture",
        description:
          "Les tuiles sont retirées sur les zones concernées afin d’accéder aux éléments situés sous la couverture.",
      },
      {
        title: "Préparation du support",
        description:
          "La toiture est préparée avant la reconstitution de la couverture, avec l’écran sous-toiture et les liteaux visibles sur les photographies.",
      },
      {
        title: "Organisation des tuiles",
        description:
          "Les éléments de couverture sont répartis sur le toit afin d’accompagner l’avancement de la pose.",
      },
      {
        title: "Remise en place de la couverture",
        description:
          "Les tuiles sont progressivement remises en place pour reconstituer les différents pans de toiture.",
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

    localTitle: "Travaux de toiture à Coursan et dans l’Aude",

    localDescription:
      "Narbonne Toiture intervient à Coursan ainsi que dans les communes voisines et plus largement dans le département de l’Aude pour les travaux de couverture, la réparation et l’entretien des toitures.",
  },

  // ============================================================
  // SIGEAN
  // ============================================================
  {
    slug: "couverture-maison-sigean",
    seoLocation: "Sigean",

    eyebrow: "Travaux de toiture · Sigean",

    title: "Travaux de couverture sur une maison à Sigean",

    shortTitle: "Couverture en tuiles",

    description:
      "Une réalisation permettant d’observer plusieurs étapes de préparation et de mise en œuvre d’une couverture en tuiles.",

    metaTitle: "Couvreur à Sigean | Travaux de toiture | Narbonne Toiture",

    metaDescription:
      "Découvrez une réalisation de couverture en tuiles présentée par Narbonne Toiture, couvreur intervenant à Sigean et dans l’Aude.",

    heroImage: {
      src: "/images/realisations/sigean-couverture-01.jpg",
      alt: "Travaux de couverture sur une toiture en tuiles",
      caption:
        "Travaux de couverture avec préparation progressive des différentes zones de toiture.",
      originalFile: "sigean-couverture-01.jpg",
    },

    gallery: [
      {
        src: "/images/realisations/sigean-couverture-02.jpg",
        alt: "Préparation d’une toiture avant la pose des tuiles",
        caption:
          "Une vue du support pendant la préparation de la couverture.",
        originalFile: "sigean-couverture-02.jpg",
      },
      {
        src: "/images/realisations/sigean-couverture-03.jpg",
        alt: "Éléments de toiture visibles pendant des travaux de couverture",
        caption:
          "Les éléments situés sous la couverture sont visibles pendant l’intervention.",
        originalFile: "sigean-couverture-03.jpg",
      },
      {
        src: "/images/realisations/sigean-couverture-04.jpg",
        alt: "Préparation d’un pan de toiture en cours de rénovation",
        caption:
          "Préparation progressive du pan de toiture avant sa remise en couverture.",
        originalFile: "sigean-couverture-04.jpg",
      },
      {
        src: "/images/realisations/sigean-couverture-05.jpg",
        alt: "Travaux sur une couverture traditionnelle en tuiles",
        caption:
          "Les travaux progressent sur les différentes zones de la couverture.",
        originalFile: "sigean-couverture-05.jpg",
      },
      {
        src: "/images/realisations/sigean-couverture-06.jpg",
        alt: "Vue d’ensemble d’une toiture en cours de travaux",
        caption:
          "Vue complémentaire de la toiture pendant l’intervention.",
        originalFile: "sigean-couverture-06.jpg",
      },
    ],

    introduction:
      "Cette réalisation met en évidence le travail qui se déroule sous les tuiles lors d’une intervention sur une couverture. Avant de retrouver son aspect final, la toiture passe par plusieurs phases de préparation et de mise en œuvre.",

    story: [
      "Les photographies permettent d’observer différentes zones de la toiture au cours des travaux et donnent une vision plus complète de l’intervention qu’une simple photographie du résultat final.",
      "La préparation du support et l’organisation des différents éléments de la couverture constituent une partie importante du travail avant la remise en place progressive des tuiles.",
      "Narbonne Toiture intervient à Sigean et dans les communes environnantes pour les travaux de couverture, les réparations et l’entretien des toitures.",
    ],

    steps: [
      {
        title: "Accès à la couverture",
        description:
          "Les zones concernées sont dégagées afin de pouvoir intervenir sur les différents éléments de la toiture.",
      },
      {
        title: "Préparation du support",
        description:
          "Le support de couverture est préparé avant la remise en place progressive des éléments visibles.",
      },
      {
        title: "Mise en œuvre de la couverture",
        description:
          "Les différentes zones sont reconstituées au fil de l’avancement du chantier.",
      },
      {
        title: "Reconstitution des pans de toiture",
        description:
          "Les tuiles viennent progressivement reformer la couverture et assurer sa continuité.",
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

    localTitle: "Travaux de toiture à Sigean et dans l’Aude",

    localDescription:
      "Narbonne Toiture intervient à Sigean et dans les communes environnantes pour les travaux de couverture, la rénovation, les réparations et l’entretien des toitures.",
  },

  // ============================================================
  // PORT-LA-NOUVELLE
  // ============================================================
  {
    slug: "renovation-couverture-port-la-nouvelle",
    seoLocation: "Port-la-Nouvelle",

    eyebrow: "Rénovation · Port-la-Nouvelle",

    title: "Rénovation d’une couverture à Port-la-Nouvelle",

    shortTitle: "Rénovation de couverture",

    description:
      "Une série de photographies montrant différentes phases d’intervention sur une couverture en tuiles.",

    metaTitle:
      "Rénovation toiture Port-la-Nouvelle | Narbonne Toiture",

    metaDescription:
      "Découvrez une rénovation de couverture présentée par Narbonne Toiture, couvreur intervenant à Port-la-Nouvelle et dans l’Aude.",

    heroImage: {
      src: "/images/realisations/port-la-nouvelle-couverture-01.jpg",
      alt: "Rénovation d’une couverture en tuiles",
      caption:
        "Une intervention de rénovation permettant d’observer la couverture sous plusieurs angles.",
      originalFile: "port-la-nouvelle-couverture-01.jpg",
    },

    gallery: [
      {
        src: "/images/realisations/port-la-nouvelle-couverture-02.jpg",
        alt: "Toiture en tuiles pendant des travaux de rénovation",
        caption:
          "Vue de la couverture pendant l’avancement des travaux.",
        originalFile: "port-la-nouvelle-couverture-02.jpg",
      },
      {
        src: "/images/realisations/port-la-nouvelle-couverture-03.jpg",
        alt: "Travaux réalisés sur différents éléments d’une toiture",
        caption:
          "L’intervention concerne plusieurs zones de la couverture.",
        originalFile: "port-la-nouvelle-couverture-03.jpg",
      },
      {
        src: "/images/realisations/port-la-nouvelle-couverture-04.jpg",
        alt: "Détail d’une couverture en cours de rénovation",
        caption:
          "Vue rapprochée du travail réalisé sur la toiture.",
        originalFile: "port-la-nouvelle-couverture-04.jpg",
      },
      {
        src: "/images/realisations/port-la-nouvelle-couverture-05.jpg",
        alt: "Vue générale d’une couverture en tuiles après progression des travaux",
        caption:
          "La couverture retrouve progressivement un ensemble homogène.",
        originalFile: "port-la-nouvelle-couverture-05.jpg",
      },
    ],

    introduction:
      "Une rénovation de couverture nécessite d’intervenir de manière cohérente sur les différentes zones de la toiture. Cette série permet d’observer le chantier sous plusieurs angles et de mieux comprendre l’étendue du travail réalisé.",

    story: [
      "Les photographies montrent différentes phases de l’intervention et permettent de suivre l’évolution de la couverture au-delà de son seul aspect final.",
      "Selon l’état d’une toiture, les travaux peuvent concerner différentes zones de la couverture afin de retrouver un ensemble cohérent.",
      "Narbonne Toiture intervient dans le secteur de Port-la-Nouvelle ainsi que plus largement dans l’Aude pour les travaux de couverture et l’entretien des toitures.",
    ],

    steps: [
      {
        title: "Observation des zones à reprendre",
        description:
          "Les différentes parties de la couverture sont observées afin d’identifier les zones concernées par l’intervention.",
      },
      {
        title: "Intervention sur la couverture",
        description:
          "Les travaux sont réalisés progressivement sur les parties concernées de la toiture.",
      },
      {
        title: "Remise en place des éléments",
        description:
          "Les éléments de couverture sont remis en place au fil de l’avancement.",
      },
      {
        title: "Vérification de l’ensemble",
        description:
          "Une fois les travaux avancés, l’ensemble de la couverture peut être contrôlé visuellement.",
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

    localTitle: "Rénovation de toiture à Port-la-Nouvelle",

    localDescription:
      "Narbonne Toiture intervient à Port-la-Nouvelle et dans les communes voisines pour les travaux de couverture, les réparations et l’entretien des toitures.",
  },

  // ============================================================
  // LÉZIGNAN-CORBIÈRES
  // ============================================================
  {
    slug: "refection-toiture-lezignan-corbieres",
    seoLocation: "Lézignan-Corbières",

    eyebrow: "Réfection · Lézignan-Corbières",

    title: "Réfection de toiture à Lézignan-Corbières",

    shortTitle: "Réfection de toiture",

    description:
      "Une réalisation montrant le travail effectué sur une toiture en tuiles au cours de plusieurs phases de réfection.",

    metaTitle:
      "Réfection toiture Lézignan-Corbières | Narbonne Toiture",

    metaDescription:
      "Découvrez une réalisation de réfection de toiture présentée par Narbonne Toiture, couvreur intervenant à Lézignan-Corbières et dans l’Aude.",

    heroImage: {
      src: "/images/realisations/lezignan-refection-toiture-01.jpg",
      alt: "Travaux de réfection sur une toiture en tuiles",
      caption:
        "Réfection d’une toiture en tuiles avec plusieurs phases de préparation de la couverture.",
      originalFile: "lezignan-refection-toiture-01.jpg",
    },

    gallery: [
      {
        src: "/images/realisations/lezignan-refection-toiture-02.jpg",
        alt: "Préparation d’une couverture pendant des travaux de réfection",
        caption:
          "La toiture au cours d’une phase intermédiaire des travaux.",
        originalFile: "lezignan-refection-toiture-02.jpg",
      },
      {
        src: "/images/realisations/lezignan-refection-toiture-03.jpg",
        alt: "Éléments visibles sous les tuiles pendant une réfection de toiture",
        caption:
          "Les travaux donnent accès aux éléments situés sous la couverture.",
        originalFile: "lezignan-refection-toiture-03.jpg",
      },
      {
        src: "/images/realisations/lezignan-refection-toiture-04.jpg",
        alt: "Travail de préparation sur un pan de toiture",
        caption:
          "Préparation d’une zone avant la reconstitution de la couverture.",
        originalFile: "lezignan-refection-toiture-04.jpg",
      },
      {
        src: "/images/realisations/lezignan-refection-toiture-05.jpg",
        alt: "Pose progressive des éléments d’une couverture en tuiles",
        caption:
          "La couverture est progressivement reconstituée.",
        originalFile: "lezignan-refection-toiture-05.jpg",
      },
      {
        src: "/images/realisations/lezignan-refection-toiture-06.jpg",
        alt: "Vue générale d’une toiture après progression de la réfection",
        caption:
          "Vue complémentaire permettant d’observer l’ensemble de la couverture.",
        originalFile: "lezignan-refection-toiture-06.jpg",
      },
    ],

    introduction:
      "La réfection d’une toiture peut nécessiter d’aller au-delà des tuiles visibles afin d’accéder aux éléments qui composent la couverture. Cette réalisation permet d’observer plusieurs phases de ce travail.",

    story: [
      "Les vues prises pendant l’intervention montrent la progression du chantier et les différentes zones de la toiture avant leur remise en état.",
      "Cette présentation permet également de montrer des étapes qui disparaissent une fois la couverture terminée, alors qu’elles font pleinement partie du travail du couvreur.",
      "Narbonne Toiture intervient à Lézignan-Corbières et plus largement dans l’Aude pour les travaux de couverture, les réparations et l’entretien des toitures.",
    ],

    steps: [
      {
        title: "Ouverture des zones concernées",
        description:
          "Les éléments de couverture sont retirés sur les parties nécessitant une intervention.",
      },
      {
        title: "Préparation de la toiture",
        description:
          "Les zones découvertes sont préparées avant la reconstitution de la couverture.",
      },
      {
        title: "Reprise de la couverture",
        description:
          "Les éléments sont progressivement remis en œuvre sur les différents pans.",
      },
      {
        title: "Remise en état de l’ensemble",
        description:
          "La couverture retrouve progressivement sa continuité au fil des travaux.",
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

    localTitle: "Couvreur à Lézignan-Corbières et dans l’Aude",

    localDescription:
      "Narbonne Toiture intervient à Lézignan-Corbières et dans les communes environnantes pour les travaux de couverture, les réparations et l’entretien des toitures.",
  },

  // ============================================================
  // CARCASSONNE
  // ============================================================
  {
    slug: "travaux-toiture-carcassonne",
    seoLocation: "Carcassonne",

    eyebrow: "Couverture · Carcassonne",

    title: "Travaux de toiture à Carcassonne",

    shortTitle: "Travaux de couverture",

    description:
      "Une réalisation mettant en évidence plusieurs détails rencontrés lors de travaux sur une couverture.",

    metaTitle:
      "Travaux de toiture à Carcassonne | Narbonne Toiture",

    metaDescription:
      "Découvrez une réalisation de couverture présentée par Narbonne Toiture et les interventions proposées dans le secteur de Carcassonne et dans l’Aude.",

    heroImage: {
      src: "/images/realisations/carcassonne-travaux-toiture-01.jpg",
      alt: "Travaux réalisés sur une couverture en tuiles",
      caption:
        "Une intervention ciblée sur une couverture en tuiles.",
      originalFile: "carcassonne-travaux-toiture-01.jpg",
    },

    gallery: [
      {
        src: "/images/realisations/carcassonne-travaux-toiture-02.jpg",
        alt: "Détail d’une toiture pendant des travaux de couverture",
        caption:
          "Une vue rapprochée permettant d’observer le travail réalisé sur la couverture.",
        originalFile: "carcassonne-travaux-toiture-02.jpg",
      },
      {
        src: "/images/realisations/carcassonne-travaux-toiture-03.jpg",
        alt: "Vue complémentaire d’une couverture en cours d’intervention",
        caption:
          "Une seconde vue du chantier et des éléments de toiture concernés.",
        originalFile: "carcassonne-travaux-toiture-03.jpg",
      },
    ],

    introduction:
      "Toutes les interventions de couverture ne nécessitent pas une réfection complète de la toiture. Cette réalisation illustre un travail plus ciblé et permet d’observer certains détails de la couverture de plus près.",

    story: [
      "Les trois photographies retenues se concentrent volontairement sur les éléments de toiture et les zones concernées par l’intervention.",
      "Ce type de réalisation complète les chantiers de rénovation plus importants présentés ailleurs sur le site et illustre la diversité des travaux pouvant être rencontrés sur une couverture.",
      "Narbonne Toiture intervient dans l’ensemble du département de l’Aude, notamment dans le secteur de Carcassonne, pour différents travaux de toiture.",
    ],

    steps: [
      {
        title: "Observation de la zone",
        description:
          "La partie de toiture concernée est observée avant l’intervention.",
      },
      {
        title: "Intervention ciblée",
        description:
          "Le travail est concentré sur les éléments de couverture nécessitant une reprise.",
      },
      {
        title: "Remise en état",
        description:
          "Les éléments concernés sont remis en place afin de retrouver un ensemble cohérent.",
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

    localTitle: "Travaux de toiture dans le secteur de Carcassonne",

    localDescription:
      "Narbonne Toiture intervient dans le département de l’Aude, notamment dans le secteur de Carcassonne, pour les travaux de couverture, les réparations et l’entretien des toitures.",
  },
];

export function getRealisationBySlug(slug: string) {
  return realisations.find((realisation) => realisation.slug === slug);
}