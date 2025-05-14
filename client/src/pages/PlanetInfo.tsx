import { motion } from "motion/react";
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
  const { id } = useParams();
  const [planet, setPlanet] = useState<PlanetDataType | null>(null);

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
    <motion.div
      className="planetinfo-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.4 } }}
    >
      <article className="planet-description">
        <motion.div
          className="image-container"
          initial={{ x: -400, y: 400, scale: 0.2 }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              bounce: 0.2,
              ease: "easeIn",
              duration: 2.8,
            },
          }}
        >
          <img
            src={planet?.img.description_img}
            alt="Planète"
            width={500}
            style={
              planet?.name === "Saturne" || planet?.name === "Soleil"
                ? { animation: "rotate 10000s linear infinite" }
                : { animation: "rotate 250s linear infinite" }
            }
          />
        </motion.div>
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
        img1={planet?.img.carrousel_img1}
        img2={planet?.img.carrousel_img2}
        img3={planet?.img.carrousel_img3}
        img4={planet?.img.carrousel_img4}
        img5={planet?.img.carrousel_img5}
      />
    </motion.div>
  );
}
