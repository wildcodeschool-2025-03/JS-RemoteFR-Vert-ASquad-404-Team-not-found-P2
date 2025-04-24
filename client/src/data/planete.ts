export interface PlanetData {
  id: number;
  name: string;
  revolutionDays: number;
  radius: number;
  color: string;
  description: string;
  link: string;
  image: string;
}

export const planets: PlanetData[] = [
  {
    id: 0,
    name: "Soleil",
    revolutionDays: 0,
    radius: 100,
    color: "yellow",
    description: "Le Soleil est l’étoile au centre du système solaire.",
    link: "/soleil",
    image: "/images/Soleil.png",
  },
  {
    id: 1,
    name: "Mercure",
    revolutionDays: 88,
    radius: 40,
    color: "#aaa",
    description: "Mercure est la planète la plus proche du Soleil.",
    link: "/planetes/mercure",
    image: "/images/Mercure.png",
  },
  {
    id: 2,
    name: "Vénus",
    revolutionDays: 225,
    radius: 60,
    color: "#f5deb3",
    description:
      "Vénus, souvent appelée “sœur jumelle” de la Terre à cause de sa taille similaire, possède pourtant un environnement extrêmement hostile.",
    link: "/planetes/venus",
    image: "/images/Venus.png",
  },
  {
    id: 3,
    name: "Terre",
    revolutionDays: 365,
    radius: 80,
    color: "#2e86de",
    description:
      "La Terre est la seule planète connue à ce jour à abriter la vie.",
    link: "/planetes/terre",
    image: "/images/Terre.png",
  },
  {
    id: 4,
    name: "Mars",
    revolutionDays: 687,
    radius: 100,
    color: "#d35400",
    description:
      "Mars est surnommée la “planète rouge” en raison de l’oxyde de fer qui recouvre sa surface.",
    link: "/planetes/mars",
    image: "/images/Mars.png",
  },
  {
    id: 5,
    name: "Jupiter",
    revolutionDays: 4331,
    radius: 130,
    color: "#e1b12c",
    description: "Jupiter est la plus grande planète du système solaire.",
    link: "/planetes/jupiter",
    image: "/images/Jupiter.png",
  },
  {
    id: 6,
    name: "Saturne",
    revolutionDays: 10747,
    radius: 160,
    color: "#f7dc6f",
    description:
      "Saturne est une géante gazeuse célèbre pour son système d’anneaux spectaculaires composés de glace, de roche et de poussière.",
    link: "/planetes/saturne",
    image: "/images/Saturne.png",
  },
  {
    id: 7,
    name: "Uranus",
    revolutionDays: 30589,
    radius: 190,
    color: "#a29bfe",
    description:
      "Uranus est une géante glacée au bleu pâle distinctif, dû au méthane présent dans son atmosphère.",
    link: "/planetes/uranus",
    image: "/images/Uranus.png",
  },
  {
    id: 8,
    name: "Neptune",
    revolutionDays: 59800,
    radius: 220,
    color: "#2980b9",
    description: "Neptune est la planète la plus lointaine du Soleil.",
    link: "/planetes/neptune",
    image: "/images/Neptune.png",
  },
];
