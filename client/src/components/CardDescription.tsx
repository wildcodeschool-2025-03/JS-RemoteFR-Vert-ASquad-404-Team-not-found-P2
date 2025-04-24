import "./CardDescription.css";

const CardDescription = () => {
  return (
    <div className="card-description">
      <h2>🌌 Explorez l’univers autrement !</h2>
      <p>
        Ce site s’adresse à tous les curieux du cosmos, petits et grands,
        passionnés d’astronomie ou simples explorateurs de l’espace en quête de
        découvertes. À travers une approche ludique et visuelle, plongez au cœur
        de notre système solaire :
      </p>
      <ul>
        <li>
          Découvrez chaque jour une nouvelle image de l’espace grâce à la NASA,
        </li>
        <li>Interagissez avec un système solaire dynamique en 2D,</li>
        <li>
          Accédez à des fiches complètes et illustrées pour tout savoir sur les
          planètes,
        </li>
        <li>
          Ne manquez aucun événement astronomique grâce à notre calendrier dédié
          (éclipses, apparitions planétaires, etc.).
        </li>
      </ul>
      <p>
        ✨ Un outil pédagogique immersif pour apprendre en s’amusant, rêver, et
        garder les yeux tournés vers les étoiles.
      </p>
    </div>
  );
};

export default CardDescription;
