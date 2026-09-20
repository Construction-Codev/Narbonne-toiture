export type AdviceSection =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "h2";
      title: string;
      content?: string;
    }
  | {
      type: "h3";
      title: string;
      content?: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "callout";
      title: string;
      content: string;
    };

export type AdviceLink = {
  label: string;
  href: string;
};

export type AdviceArticle = {
  slug: string;

  eyebrow: string;
  title: string;
  shortTitle: string;
  introduction: string;

  metaTitle: string;
  metaDescription: string;

  image: {
    src: string;
    alt: string;
  };

  readingTime: string;

  sections: AdviceSection[];

  serviceLinks: AdviceLink[];
  relatedSlugs: string[];
};

export const adviceArticles: AdviceArticle[] = [
  {
    slug: "comment-enlever-mousse-toiture",

    eyebrow: "Entretien de toiture",

    title: "Comment enlever la mousse d’une toiture ?",

    shortTitle: "Enlever la mousse d’une toiture",

    introduction:
      "Mousses, lichens et autres dépôts peuvent progressivement coloniser une couverture. Leur retrait fait partie de l’entretien d’une toiture, mais la méthode employée doit tenir compte de son état et du matériau de couverture.",

    metaTitle:
      "Comment enlever la mousse d'une toiture ? | Narbonne Toiture",

    metaDescription:
      "Comment enlever la mousse d'une toiture ? Découvrez pourquoi la mousse apparaît, les précautions à prendre et les principes d'un démoussage de toiture.",

    image: {
      src: "/images/conseils/enlever-mousse-toiture.jpg",
      alt: "Mousse présente sur des tuiles de toiture",
    },

    readingTime: "5 min",

    sections: [
      {
        type: "paragraph",
        content:
          "La présence de mousse sur une toiture est courante. Avec le temps, certaines surfaces peuvent se couvrir de mousses, de lichens ou d’autres dépôts, en particulier dans les zones qui restent régulièrement humides ou peu exposées au soleil.",
      },

      {
        type: "h2",
        title: "Pourquoi la mousse apparaît-elle sur une toiture ?",
        content:
          "L’humidité, l’exposition de la toiture, son environnement et l’état de sa surface peuvent favoriser le développement de végétaux et de dépôts sur les matériaux de couverture.",
      },

      {
        type: "paragraph",
        content:
          "Toutes les parties d’une toiture ne vieillissent pas nécessairement de la même manière. Une zone plus ombragée peut par exemple présenter davantage de dépôts qu’une partie fortement exposée au soleil.",
      },

      {
        type: "h2",
        title: "Faut-il enlever la mousse présente sur les tuiles ?",
        content:
          "Lorsque les mousses et dépôts deviennent importants, leur retrait permet de nettoyer la surface de la couverture et d’observer plus facilement son état.",
      },

      {
        type: "callout",
        title: "Nettoyer ne signifie pas réparer",
        content:
          "Le démoussage agit sur les végétaux et dépôts présents en surface. Une tuile cassée, un raccord dégradé ou une infiltration relèvent d’un autre type d’intervention.",
      },

      {
        type: "h2",
        title: "Comment se déroule un démoussage de toiture ?",
        content:
          "La méthode dépend de la couverture, de son état et de la nature des dépôts présents. L’objectif est de retirer les éléments indésirables tout en tenant compte du support sur lequel l’intervention est réalisée.",
      },

      {
        type: "list",
        items: [
          "Observer l’état général de la couverture",
          "Identifier les zones présentant des mousses ou dépôts",
          "Adapter le nettoyage à la toiture",
          "Contrôler visuellement la couverture après l’intervention",
        ],
      },

      {
        type: "h2",
        title: "Peut-on nettoyer soi-même une toiture ?",
        content:
          "Au-delà de la méthode de nettoyage, intervenir sur une toiture implique un travail en hauteur. L’accès, la pente et l’état de la couverture doivent être pris en compte avant toute intervention.",
      },

      {
        type: "h2",
        title: "Et après le démoussage ?",
        content:
          "Selon l’état de la toiture et l’objectif recherché, le nettoyage peut constituer une intervention à part entière. Dans certaines situations, la question d’une protection complémentaire de la surface peut également se poser.",
      },

      {
        type: "callout",
        title: "À Narbonne et dans l’Aude",
        content:
          "Narbonne Toiture réalise des travaux de nettoyage et de démoussage de toiture à Narbonne et dans le département de l’Aude.",
      },
    ],

    serviceLinks: [
      {
        label: "Démoussage de toiture",
        href: "/demoussage-toiture",
      },
      {
        label: "Nettoyage de toiture",
        href: "/nettoyage-toiture",
      },
      {
        label: "Hydrofuge de toiture",
        href: "/hydrofuge-toiture",
      },
    ],

    relatedSlugs: [
      "hydrofuge-toiture-a-quoi-ca-sert",
      "fuite-toiture-comment-trouver-origine",
    ],
  },

  {
    slug: "hydrofuge-toiture-a-quoi-ca-sert",

    eyebrow: "Protection de toiture",

    title: "Hydrofuge toiture : à quoi ça sert ?",

    shortTitle: "À quoi sert un hydrofuge ?",

    introduction:
      "L’hydrofuge est une solution destinée à protéger la surface d’une toiture contre la pénétration de l’eau. Il ne remplace cependant ni une réparation ni la remise en état d’une couverture présentant un défaut.",

    metaTitle:
      "Hydrofuge toiture : à quoi ça sert ? | Narbonne Toiture",

    metaDescription:
      "À quoi sert un hydrofuge de toiture ? Découvrez son rôle, ses limites et pourquoi l'état de la couverture doit être pris en compte avant son application.",

    image: {
      src: "/images/conseils/hydrofuge-toiture.jpg",
      alt: "Tuiles d'une toiture en bon état de surface",
    },

    readingTime: "5 min",

    sections: [
      {
        type: "paragraph",
        content:
          "L’entretien d’une toiture ne se limite pas au retrait des mousses et des dépôts. Après un nettoyage, la question de la protection de la surface peut également se poser selon l’état et les caractéristiques de la couverture.",
      },

      {
        type: "h2",
        title: "Qu’est-ce qu’un traitement hydrofuge ?",
        content:
          "Un traitement hydrofuge est destiné à limiter la pénétration de l’eau dans la surface sur laquelle il est appliqué. Sur une toiture, il s’inscrit donc dans une logique de protection de la couverture.",
      },

      {
        type: "h2",
        title: "Hydrofuge et étanchéité : est-ce la même chose ?",
        content:
          "Non. Une protection de surface ne doit pas être confondue avec la réparation d’un défaut de couverture ou d’un point permettant à l’eau de pénétrer dans la toiture.",
      },

      {
        type: "callout",
        title: "Protection ≠ réparation",
        content:
          "Un hydrofuge n’a pas vocation à réparer une tuile cassée, un raccord dégradé ou une autre cause d’infiltration.",
      },

      {
        type: "h2",
        title: "Pourquoi l’état de la toiture est-il important ?",
        content:
          "Avant d’envisager une protection de surface, il est utile de considérer l’état général de la couverture. Un problème nécessitant une réparation doit être distingué d’un simple besoin d’entretien ou de protection.",
      },

      {
        type: "list",
        items: [
          "État général des tuiles",
          "Présence éventuelle de mousses ou de dépôts",
          "État visible des raccords",
          "Présence éventuelle d’un problème d’infiltration",
        ],
      },

      {
        type: "h2",
        title: "Faut-il nettoyer la toiture avant un hydrofuge ?",
        content:
          "La protection concerne la surface de la couverture. Son état et sa propreté doivent donc être pris en compte avant d’envisager une intervention de ce type.",
      },

      {
        type: "h2",
        title: "Dans quels cas demander l’avis d’un couvreur ?",
        content:
          "Lorsqu’il existe un doute sur l’état de la couverture, la présence d’une infiltration ou la pertinence d’un traitement, l’examen de la toiture permet de distinguer les besoins d’entretien des travaux de réparation.",
      },

      {
        type: "callout",
        title: "À Narbonne et dans l’Aude",
        content:
          "Narbonne Toiture réalise des travaux d’entretien et de protection de toiture à Narbonne et dans le département de l’Aude.",
      },
    ],

    serviceLinks: [
      {
        label: "Hydrofuge de toiture",
        href: "/hydrofuge-toiture",
      },
      {
        label: "Nettoyage de toiture",
        href: "/nettoyage-toiture",
      },
      {
        label: "Démoussage de toiture",
        href: "/demoussage-toiture",
      },
    ],

    relatedSlugs: [
      "comment-enlever-mousse-toiture",
      "fuite-toiture-comment-trouver-origine",
    ],
  },

  {
    slug: "fuite-toiture-comment-trouver-origine",

    eyebrow: "Fuite & infiltration",

    title: "Fuite de toiture : comment trouver son origine ?",

    shortTitle: "Trouver l’origine d’une fuite",

    introduction:
      "Une trace d’humidité visible à l’intérieur d’un bâtiment n’indique pas nécessairement l’endroit exact où l’eau pénètre dans la toiture. Comprendre son cheminement est une étape importante avant d’envisager une réparation.",

    metaTitle:
      "Fuite toiture : comment trouver son origine ? | Narbonne Toiture",

    metaDescription:
      "Comment trouver l'origine d'une fuite de toiture ? Découvrez pourquoi l'eau peut cheminer sous la couverture et quels éléments peuvent être examinés.",

    image: {
      src: "/images/conseils/fuite-toiture-origine.jpg",
      alt: "Détail d'une toiture lors d'une recherche d'infiltration",
    },

    readingTime: "6 min",

    sections: [
      {
        type: "paragraph",
        content:
          "Une infiltration peut être trompeuse. L’eau peut pénétrer par une zone de la toiture puis circuler avant de devenir visible ailleurs à l’intérieur du bâtiment.",
      },

      {
        type: "h2",
        title: "Pourquoi une fuite peut-elle apparaître loin de son origine ?",
        content:
          "Après avoir franchi un élément de la toiture, l’eau peut suivre différents supports ou éléments de construction. La trace visible à l’intérieur constitue donc un indice, mais pas toujours l’emplacement exact du point d’entrée.",
      },

      {
        type: "callout",
        title: "La trace visible est un symptôme",
        content:
          "Réparer uniquement à l’endroit où l’humidité apparaît ne permet pas nécessairement de traiter la cause de l’infiltration.",
      },

      {
        type: "h2",
        title: "Quels éléments de toiture peuvent être concernés ?",
        content:
          "Une infiltration peut avoir différentes origines. L’examen doit donc tenir compte de la configuration de la toiture et des éléments présents autour de la zone concernée.",
      },

      {
        type: "list",
        items: [
          "La couverture et les tuiles",
          "Les raccords entre différents éléments",
          "Certains éléments de zinguerie",
          "Les zones particulières de la toiture",
          "Le cheminement et l’évacuation des eaux",
        ],
      },

      {
        type: "h2",
        title: "Comment rechercher l’origine d’une infiltration ?",
        content:
          "La recherche consiste à rapprocher les signes observés à l’intérieur de l’état et de la configuration de la toiture afin de remonter vers une cause possible.",
      },

      {
        type: "h3",
        title: "Observer la zone où l’eau devient visible",
        content:
          "L’emplacement de la trace, son environnement et les éléments situés au-dessus constituent un premier ensemble d’indices.",
      },

      {
        type: "h3",
        title: "Examiner la toiture",
        content:
          "La couverture et les points particuliers situés dans la zone correspondante peuvent ensuite être examinés afin de rechercher une anomalie compatible avec l’infiltration observée.",
      },

      {
        type: "h3",
        title: "Adapter la réparation à la cause",
        content:
          "Une fois la zone concernée mieux comprise, l’intervention peut être orientée vers l’élément à réparer plutôt que vers le seul symptôme visible.",
      },

      {
        type: "h2",
        title: "Une fuite impose-t-elle de refaire toute la toiture ?",
        content:
          "Non, pas systématiquement. Certaines situations peuvent concerner une zone ou un élément précis. D’autres peuvent révéler un problème plus étendu. L’ampleur de l’intervention dépend donc de la cause et de l’état de la toiture.",
      },

      {
        type: "callout",
        title: "À Narbonne et dans l’Aude",
        content:
          "Narbonne Toiture intervient pour les problèmes de fuite, d’infiltration et de réparation de toiture à Narbonne et dans le département de l’Aude.",
      },
    ],

    serviceLinks: [
      {
        label: "Fuite de toiture",
        href: "/fuites",
      },
      {
        label: "Réparation de toiture",
        href: "/reparations",
      },
      {
        label: "Zinguerie",
        href: "/zinguerie",
      },
    ],

    relatedSlugs: [
      "comment-enlever-mousse-toiture",
      "hydrofuge-toiture-a-quoi-ca-sert",
    ],
  },
];

export function getAdviceArticle(slug: string) {
  return adviceArticles.find((article) => article.slug === slug);
}