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
    name: "SOLEIL",
    revolutionDays: 0,
    radius: 100,
    color: "yellow",
    description:
      "Type : Étoile | Distance : 0 M km | Masse : 1,989 × 10³⁰ kg | Diamètre : 1 392 700 km",
    link: "/soleil",
    image: "/images/Soleil.png",
  },
  {
    id: 1,
    name: "MERCURE",
    revolutionDays: 88,
    radius: 40,
    color: "#aaa",
    description:
      "Type : Planète tellurique | Distance : 57,9 M km | Masse : 3,30 × 10²³ kg | Diamètre : 4 879 km",
    link: "/planetes/mercure",
    image: "/images/Mercure.png",
  },
  {
    id: 2,
    name: "VENUS",
    revolutionDays: 225,
    radius: 60,
    color: "#f5deb3",
    description:
      "Type : Planète tellurique | Distance : 108,2 M km | Masse : 4,87 × 10²⁴ kg | Diamètre : 12 104 km",
    link: "/planetes/venus",
    image: "/images/Venus.png",
  },
  {
    id: 3,
    name: "TERRE",
    revolutionDays: 365,
    radius: 80,
    color: "#2e86de",
    description:
      "Type : Planète tellurique | Distance : 149,6 M km | Masse : 5,97 × 10²⁴ kg | Diamètre : 12 742 km",
    link: "/planetes/terre",
    image: "/images/Terre.png",
  },
  {
    id: 4,
    name: "MARS",
    revolutionDays: 687,
    radius: 100,
    color: "#d35400",
    description:
      "Type : Planète tellurique | Distance : 227,9 M km | Masse : 6,42 × 10²³ kg | Diamètre : 6 779 km",
    link: "/planetes/mars",
    image: "/images/Mars.png",
  },
  {
    id: 5,
    name: "JUPITER",
    revolutionDays: 4331,
    radius: 130,
    color: "#e1b12c",
    description:
      "Type : Géante gazeuse | Distance : 778,6 M km | Masse : 1,90 × 10²⁷ kg | Diamètre : 139 820 km",
    link: "/planetes/jupiter",
    image: "/images/Jupiter.png",
  },
  {
    id: 6,
    name: "SATURNE",
    revolutionDays: 10747,
    radius: 160,
    color: "#f7dc6f",
    description:
      "Type : Géante gazeuse | Distance : 1 433,5 M km | Masse : 5,68 × 10²⁶ kg | Diamètre : 116 460 km",
    link: "/planetes/saturne",
    image: "/images/Saturne.png",
  },
  {
    id: 7,
    name: "URANUS",
    revolutionDays: 30589,
    radius: 190,
    color: "#a29bfe",
    description:
      "Type : Géante glacée | Distance : 2 872,5 M km | Masse : 8,68 × 10²⁵ kg | Diamètre : 50 724 km",
    link: "/planetes/uranus",
    image: "/images/Uranus.png",
  },
  {
    id: 8,
    name: "NEPTUNE",
    revolutionDays: 59800,
    radius: 220,
    color: "#2980b9",
    description:
      "Type : Géante glacée | Distance : 4 495,1 M km | Masse : 1,02 × 10²⁶ kg | Diamètre : 49 244 km",
    link: "/planetes/neptune",
    image: "/images/Neptune.png",
  },
];
