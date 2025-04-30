import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Slider from "../components/Slider/Slider";

type PlanetData = {
  name: string;
  img: {
    carrousel_img1: string;
    carrousel_img2: string;
    carrousel_img3: string;
  };
};

export default function PlanetInfo() {
  // id from selected planet card
  const { id } = useParams();

  //unseState hook to store selected planet data
  const [planet, setPlanet] = useState<PlanetData | null>(null);

  // fetch selected planet data using id
  useEffect(() => {
    fetch(`http://localhost:3310/${id}`)
      .then((response) => response.json())
      .then((data) => setPlanet(data))
      .catch((error) => console.log("error:", error));
  }, [id]);

  // /!\ @ALex: pour ton composant caroussel, tu peux récupérer les images en utilisant planet.img
  return (
    <>
      <h1>{planet?.name}</h1>
      <Slider
        name={planet?.name}
        img1={planet?.img.carrousel_img1}
        img2={planet?.img.carrousel_img2}
        img3={planet?.img.carrousel_img3}
      />
    </>
  );
}
