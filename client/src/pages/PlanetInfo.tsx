import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Slider from "../components/Slider/Slider";
import "../styles/PlanetInfo.css";

type PlanetDataType = {
  name: string;
  img: {
    description_img: string;
    carrousel_img1: string;
    carrousel_img2: string;
    carrousel_img3: string;
    carrousel_img4: string;
    carrousel_img5: string;
  };
  description: string;
  planet_type: string;
  diameter: number;
  ring_system: boolean;
  number_of_satellites: number;
  orbital_period_days: number;
  rotation_period_days: number;
  gravity: number;
  mean_temp_deg: number;
  atmospheric_composition: {
    composition1: string;
    composition2: string;
    composition3: string;
  };
};

export default function PlanetInfo() {
  // id from selected planet card
  const { id } = useParams();

  //unseState hook to store selected planet data
  const [planet, setPlanet] = useState<PlanetDataType | null>(null);

  // get app-container element to change background in useEffect

  // fetch selected planet data using id
  useEffect(() => {
    fetch(`http://localhost:3310/${id}`)
      .then((response) => response.json())
      .then((data) => setPlanet(data))
      .catch((error) => console.log("error:", error));
    document.querySelector(".app-container")?.classList.add("container-bg");

    return () => {
      document
        .querySelector(".app-container")
        ?.classList.remove("container-bg");
    };
  }, [id]);

  console.log(planet);

  return (
    <div className="planetinfo-page">
      <article className="planet-description">
        <img
          src={planet?.img.description_img}
          alt="Panète"
          width={500}
          style={
            planet?.name === "Saturne" || planet?.name === "Soleil"
              ? { animation: "rotate 10000s linear infinite" }
              : { animation: "rotate 250s linear infinite" }
          }
        />
        <div className="description-box">
          <h2>{planet?.name}</h2>
          <p>{planet?.description}</p>
        </div>
      </article>
      <div className="planet-info-border">
        <div className="planet-info-content">
          <ul>
            <li>
              <span>Type de planète: {planet?.planet_type}</span>
            </li>
            <li>
              <span>Diamètre: {planet?.diameter} km</span>
            </li>
            <li>
              <span>
                Système d'anneaux: {planet?.ring_system ? "Oui" : "Non"}
              </span>
            </li>
            <li>
              <span>Nombre de satellites: {planet?.number_of_satellites}</span>
            </li>
            <li>
              <span>
                Période de révolution: {planet?.orbital_period_days} jours
              </span>
            </li>
            <li>
              <span>
                Période de rotation: {planet?.rotation_period_days} jours
              </span>
            </li>
            <li>
              <span>Gravité: {planet?.gravity} % de la gravité terrestre</span>
            </li>
            <li>
              <span>Température moyenne: {planet?.mean_temp_deg} °C</span>
            </li>
            <li>
              <span>
                Composition de l'atmosphère:{" "}
                {planet?.atmospheric_composition.composition1},{" "}
                {planet?.atmospheric_composition.composition2},{" "}
                {planet?.atmospheric_composition.composition3}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <Slider
        name={planet?.name}
        img1={planet?.img.carrousel_img1}
        img2={planet?.img.carrousel_img2}
        img3={planet?.img.carrousel_img3}
        img4={planet?.img.carrousel_img4}
        img5={planet?.img.carrousel_img5}
      />
    </div>
  );
}
