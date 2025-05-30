import "dotenv/config";
import "../database/checkConnection";
import app from "./app";

const infoSolarSystem = [
  {
    id: 0,
    name: "Soleil",
    planet_type: "Étoile",
    sun_distance: 0,
    diameter: 1392000,
    mass: 1.989e30,
    density: 1410,
    gravity: 274,
    orbital_period_days: 0,
    rotation_period_days: 25,
    mean_temp_deg: 5505,
    atmospheric_composition: {
      composition1: "73% d'hydrogène",
      composition2: "25% d'hélium",
      composition3: "2% d'autres éléments",
    },
    number_of_satellites: 0,
    ring_system: false,
    img: {
      description_img: "../images/Soleil1_Page1bis.png",
      carrousel_img1: "../images/Soleil1_Page1bis.png",
      carrousel_img2: "../images/Soleil2_Page1bis.png",
      carrousel_img3: "../images/Soleil3_Page1bis.png",
      carrousel_img4: "../images/Soleil4_Page1bis.png",
      carrousel_img5: "../images/Soleil5_Page1bis.png",
    },
    description:
      "Le Soleil est l’étoile au centre du système solaire. Composé principalement d’hydrogène et d’hélium, il produit de l’énergie par fusion nucléaire en transformant l’hydrogène en hélium. Cette énergie est essentielle à la vie sur Terre, fournissant lumière et chaleur. Son diamètre dépasse 1,39 million de kilomètres, ce qui représente 109 fois celui de la Terre. Le Soleil représente plus de 99,8 % de la masse du système solaire. Sa surface, appelée photosphère, atteint environ 5 500 °C. Il n’a pas de surface solide et tourne sur lui-même en environ 25 jours à l’équateur. Il influence tous les corps du système solaire.",
  },
  {
    id: 1,
    name: "Mercure",
    planet_type: "Tellurique",
    sun_distance: 57.91e6,
    diameter: 4879,
    mass: 3.3011e23,
    density: 5427,
    gravity: 38,
    orbital_period_days: 88,
    rotation_period_days: 58.6,
    mean_temp_deg: 167,
    atmospheric_composition: {
      composition1: "95% d'oxygène",
      composition2: "4% de Sodium",
      composition3: "1% d'autres gaz",
    },
    number_of_satellites: 0,
    ring_system: false,
    img: {
      description_img: "../images/Mercure.png",
      carrousel_img1: "../images/Mercure1_Page1bis.png",
      carrousel_img2: "../images/Mercure2_Page1bis.png",
      carrousel_img3: "../images/Mercure3_Page1bis.png",
      carrousel_img4: "../images/Mercure4_Page1bis.png",
      carrousel_img5: "../images/Mercure5_Page1bis.png",
    },
    description:
      "Mercure est la planète la plus proche du Soleil. Petite et rocheuse, elle n’a presque pas d’atmosphère, ce qui entraîne de grandes variations de température entre le jour et la nuit. Sa surface est criblée de cratères, semblable à celle de la Lune. Mercure orbite très rapidement autour du Soleil, en seulement 88 jours terrestres. Sa proximité au Soleil la rend difficile à observer depuis la Terre. Sa rotation lente, combinée à son orbite rapide, donne lieu à des levers de soleil étonnants. Bien qu’elle soit la plus petite planète, elle possède un noyau métallique très dense.",
  },
  {
    id: 2,
    name: "Vénus",
    planet_type: "Tellurique",
    sun_distance: 108.2e6,
    diameter: 12104,
    mass: 4.867e24,
    density: 5243,
    gravity: 91,
    orbital_period_days: 225,
    rotation_period_days: 243,
    mean_temp_deg: 464,
    atmospheric_composition: {
      composition1: "96% de Dioxyde de Carbone",
      composition2: "3.5% d'Azote",
      composition3: "0.5% d'autres gaz",
    },
    number_of_satellites: 0,
    ring_system: false,
    img: {
      description_img: "../images/Venus.png",
      carrousel_img1: "../images/Venus1_Page1bis.png",
      carrousel_img2: "../images/Venus2_Page1bis.png",
      carrousel_img3: "../images/Venus3_Page1bis.png",
      carrousel_img4: "../images/Venus4_Page1bis.png",
      carrousel_img5: "../images/Venus5_Page1bis.png",
    },
    description:
      "Vénus, souvent appelée “sœur jumelle” de la Terre à cause de sa taille similaire, possède pourtant un environnement extrêmement hostile. Son atmosphère épaisse est composée majoritairement de dioxyde de carbone et crée un effet de serre intense, faisant de Vénus la planète la plus chaude du système solaire. Sa surface est volcanique et recouverte de plaines et montagnes. Elle tourne très lentement et dans le sens inverse des autres planètes. Vénus ne possède ni lune ni champ magnétique important. Depuis la Terre, elle brille fortement dans le ciel et est souvent visible au lever ou au coucher du Soleil.",
  },
  {
    id: 3,
    name: "Terre",
    planet_type: "Tellurique",
    sun_distance: 149.6e6,
    diameter: 12742,
    mass: 5.972e24,
    density: 5515,
    gravity: 100,
    orbital_period_days: 365.25,
    rotation_period_days: 1,
    mean_temp_deg: 14,
    atmospheric_composition: {
      composition1: "78% d'Azote",
      composition2: "21% d'Oxygène",
      composition3: "1% d'Argon",
    },
    number_of_satellites: 1,
    ring_system: false,
    img: {
      description_img: "../images/Terre1_Page1bis.png",
      carrousel_img1: "../images/Terre1_Page1bis.png",
      carrousel_img2: "../images/Terre2_Page1bis.png",
      carrousel_img3: "../images/Terre3_Page1bis.png",
      carrousel_img4: "../images/Terre4_Page1bis.png",
      carrousel_img5: "../images/Terre5_Page1bis.png",
    },
    description:
      "La Terre est la seule planète connue à ce jour à abriter la vie. Elle possède une atmosphère riche en azote et oxygène, une abondance d’eau liquide, et un climat tempéré. Sa surface est composée de continents et d’océans, en perpétuel mouvement à cause des plaques tectoniques. Elle a un unique satellite naturel, la Lune, qui influence les marées. La Terre effectue une rotation sur elle-même en 24 heures et une révolution autour du Soleil en 365,25 jours. Sa biosphère diversifiée en fait un écosystème complexe et fascinant. C’est notre foyer, fragile et précieux dans l’immensité de l’espace.",
  },
  {
    id: 4,
    name: "Mars",
    planet_type: "Tellurique",
    sun_distance: 227.9e6,
    diameter: 6779,
    mass: 6.4171e23,
    density: 3933,
    gravity: 38,
    orbital_period_days: 687,
    rotation_period_days: 1.03,
    mean_temp_deg: -63,
    atmospheric_composition: {
      composition1: "95% de Dioxyde de Carbone",
      composition2: "3% d'Azote",
      composition3: "1.6% d'Argon",
    },
    number_of_satellites: 2,
    ring_system: false,
    img: {
      description_img: "../images/Mars.png",
      carrousel_img1: "../images/Mars1_Page1bis.png",
      carrousel_img2: "../images/Mars2_Page1bis.png",
      carrousel_img3: "../images/Mars3_Page1bis.png",
      carrousel_img4: "../images/Mars4_Page1bis.png",
      carrousel_img5: "../images/Mars5_Page1bis.png",
    },
    description:
      "Mars est surnommée la “planète rouge” en raison de l’oxyde de fer qui recouvre sa surface. C’est une planète rocheuse, plus petite que la Terre, avec une atmosphère très mince composée majoritairement de dioxyde de carbone. Elle possède les plus grands volcans et canyons du système solaire, comme Olympus Mons et Valles Marineris. Les températures y sont froides, et bien qu’il n’y ait pas d’eau liquide à la surface aujourd’hui, de nombreuses preuves suggèrent qu’elle a coulé dans le passé. Mars a deux petites lunes, Phobos et Deimos, et elle est au cœur de nombreuses missions spatiales en quête de vie.",
  },
  {
    id: 5,
    name: "Jupiter",
    planet_type: "Gazeuse",
    sun_distance: 778.5e6,
    diameter: 139820,
    mass: 1.8982e27,
    density: 1326,
    gravity: 252,
    orbital_period_days: 4333,
    rotation_period_days: 0.41,
    mean_temp_deg: -108,
    atmospheric_composition: {
      composition1: "89% d'Hydrognène",
      composition2: "10% d'Hélium",
      composition3: "1% d'autres Gaz",
    },
    number_of_satellites: 80,
    ring_system: true,
    img: {
      description_img: "../images/Jupiter.png",
      carrousel_img1: "../images/Jupiter1_Page1bis.png",
      carrousel_img2: "../images/Jupiter2_Page1bis.png",
      carrousel_img3: "../images/Jupiter3_Page1bis.png",
      carrousel_img4: "../images/Jupiter4_Page1bis.png",
      carrousel_img5: "../images/Jupiter5_Page1bis.png",
    },
    description:
      "Jupiter est la plus grande planète du système solaire. C’est une géante gazeuse principalement composée d’hydrogène et d’hélium, avec une atmosphère marquée par des bandes colorées et des tempêtes puissantes, comme la célèbre Grande Tache Rouge. Elle possède un champ magnétique colossal et dégage plus d’énergie qu’elle n’en reçoit du Soleil. Jupiter est entourée d’un grand nombre de lunes, dont les quatre plus grandes, appelées lunes galiléennes, comprennent Io, Europe, Ganymède et Callisto. Ces satellites présentent un grand intérêt scientifique, notamment Europe, qui pourrait abriter un océan souterrain. Jupiter n’a pas de surface solide, mais son noyau est probablement rocheux.",
  },
  {
    id: 6,
    name: "Saturne",
    planet_type: "Gazeuse",
    sun_distance: 1433.5e6,
    diameter: 116460,
    mass: 5.683e26,
    density: 687,
    gravity: 107,
    orbital_period_days: 10759,
    rotation_period_days: 0.45,
    mean_temp_deg: -139,
    atmospheric_composition: {
      composition1: "96% d'Hydrogène",
      composition2: "3% d'Hélium",
      composition3: "1% d'autres gaz",
    },
    number_of_satellites: 82,
    ring_system: true,
    img: {
      description_img: "../images/Saturne1_Page1bis.png",
      carrousel_img1: "../images/Saturne1_Page1bis.png",
      carrousel_img2: "../images/Saturne2_Page1bis.png",
      carrousel_img3: "../images/Saturne3_Page1bis.png",
      carrousel_img4: "../images/Saturne4_Page1bis.png",
      carrousel_img5: "../images/Saturne5_Page1bis.png",
    },
    description:
      "Saturne est une géante gazeuse célèbre pour son système d’anneaux spectaculaires composés de glace, de roche et de poussière. Elle est principalement constituée d’hydrogène et d’hélium, et a une faible densité — elle flotterait dans l’eau si une baignoire assez grande existait ! Son atmosphère présente des bandes similaires à celles de Jupiter, bien que plus pâles. Saturne a plus de 80 lunes confirmées, dont Titan, une lune massive avec une atmosphère dense et des lacs de méthane liquide. Le système saturnien fascine les scientifiques, notamment grâce aux données recueillies par la sonde Cassini, qui a exploré la planète pendant 13 ans.",
  },
  {
    id: 7,
    name: "Uranus",
    planet_type: "Gazeuse",
    sun_distance: 2872.5e6,
    diameter: 50724,
    mass: 8.681e25,
    density: 1271,
    gravity: 89,
    orbital_period_days: 30687,
    rotation_period_days: -0.72,
    mean_temp_deg: -197,
    atmospheric_composition: {
      composition1: "83% d'Hydrogène",
      composition2: "15% d'Hélium",
      composition3: "2% de Méthane",
    },
    number_of_satellites: 27,
    ring_system: true,
    img: {
      description_img: "../images/Uranus.png",
      carrousel_img1: "../images/Uranus1_Page1bis.png",
      carrousel_img2: "../images/Uranus2_Page1bis.png",
      carrousel_img3: "../images/Uranus3_Page1bis.png",
      carrousel_img4: "../images/Uranus4_Page1bis.png",
      carrousel_img5: "../images/Uranus5_Page1bis.png",
    },
    description:
      "Uranus est une géante glacée au bleu pâle distinctif, dû au méthane présent dans son atmosphère. Elle se distingue par son axe de rotation très incliné : la planète “roule” presque sur son orbite, ce qui provoque des saisons extrêmes. Composée principalement d’hydrogène, d’hélium et de glaces comme l’eau, l’ammoniac et le méthane, Uranus est entourée d’anneaux ténus et de 27 lunes connues. Elle est souvent appelée “planète oubliée” en raison de son éloignement et du peu de missions l’ayant visitée. Son atmosphère peut atteindre des températures glaciales record, faisant d’elle la planète la plus froide du système solaire.",
  },
  {
    id: 8,
    name: "Neptune",
    planet_type: "Gazeuse",
    sun_distance: 4495.1e6,
    diameter: 49244,
    mass: 1.02413e26,
    density: 1638,
    gravity: 114,
    orbital_period_days: 60190,
    rotation_period_days: 0.67,
    mean_temp_deg: -214,
    atmospheric_composition: {
      composition1: "80% d'Hydrogène",
      composition2: "19% d'Hélium",
      composition3: "1% de Méthane",
    },
    number_of_satellites: 14,
    ring_system: true,
    img: {
      description_img: "../images/Neptune.png",
      carrousel_img1: "../images/Neptune1_Page1bis.png",
      carrousel_img2: "../images/Neptune2_Page1bis.png",
      carrousel_img3: "../images/Neptune3_Page1bis.jpg",
      carrousel_img4: "../images/Neptune4_Page1bis.png",
      carrousel_img5: "../images/Neptune5_Page1bis.png",
    },
    description:
      "Neptune est la planète la plus lointaine du Soleil. C’est une géante glacée, semblable à Uranus, avec une couleur bleue intense. Elle est connue pour ses vents parmi les plus rapides du système solaire, atteignant plus de 2 000 km/h. Son atmosphère est composée de méthane, d’hydrogène et d’hélium. Neptune possède un système complexe de tempêtes, dont la Grande Tache Sombre observée par Voyager 2. Elle a 14 lunes, dont Triton, qui orbite en sens inverse et pourrait être un objet capturé. Malgré sa distance, Neptune influence gravitationnellement l’ensemble du système solaire et demeure un objet de fascination pour l’astronomie.",
  },
];

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const thing = infoSolarSystem.find((i) => i.id === Number(id));
  if (thing) {
    res.json(thing);
    return;
  }
  res.status(404).json({
    message: "Not found",
  });
});

const port = process.env.APP_PORT;

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
