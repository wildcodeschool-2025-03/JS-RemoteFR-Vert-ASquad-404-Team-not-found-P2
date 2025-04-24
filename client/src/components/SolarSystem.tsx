import type React from "react";
import { useEffect, useRef, useState } from "react";
import { type PlanetData, planets } from "../data/planete.ts";
import Planet from "../components/Planet.tsx";
import PlanetInfoCard from "../components/PlanetInfoCard.tsx";
import "../components/SolarisSystem.css";

const SolarSystem: React.FC = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetData | null>(null);
  const [cardPosition, setCardPosition] = useState({
    top: 0,
    left: 0,
    side: "right" as "left" | "right",
  });
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  const timeoutRef = useRef<number | null>(null);
  const hoverDelayRef = useRef<number | null>(null);
  const lastHoveredRef = useRef<PlanetData | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleHover = (planet: PlanetData | null, event?: React.MouseEvent) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hoverDelayRef.current) clearTimeout(hoverDelayRef.current);

    if (!planet) {
      timeoutRef.current = window.setTimeout(
        () => setHoveredPlanet(null),
        1000,
      );
      return;
    }

    if (planet !== lastHoveredRef.current) {
      hoverDelayRef.current = window.setTimeout(() => {
        lastHoveredRef.current = planet;
        setHoveredPlanet(planet);
      }, 300);
    } else {
      setHoveredPlanet(planet);
    }

    if (event) {
      const planetRect = (event.target as HTMLElement).getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const side = planetRect.left > windowWidth / 2 ? "left" : "right";

      setCardPosition({
        top: planetRect.top + planetRect.height / 2,
        left: planetRect.left + planetRect.width / 2,
        side,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).classList.contains("planet") &&
        !(e.target as HTMLElement).classList.contains("sun")
      ) {
        setHoveredPlanet(null);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="solar-system">
      <div className="speed-slider">
        <label htmlFor="speedRange">x{speedMultiplier.toFixed(1)}</label>
        <input
          id="speedRange"
          type="range"
          min="1"
          max="100"
          step="0.1"
          value={speedMultiplier}
          onChange={(e) =>
            setSpeedMultiplier(Number.parseFloat(e.target.value))
          }
        />
      </div>

      <div
        className="sun"
        style={{ backgroundImage: `url(${planets[0].image})` }}
        onMouseEnter={(e) => handleHover(planets[0], e)}
        onMouseLeave={() => handleHover(null)}
      />

      {planets.slice(1).map((planet) => (
        <Planet
          key={planet.id}
          planet={planet}
          speedMultiplier={speedMultiplier}
          onHover={handleHover}
          onClick={() => {}}
        />
      ))}

      <PlanetInfoCard
        ref={cardRef}
        planet={hoveredPlanet}
        onEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
        onLeave={() => {
          timeoutRef.current = window.setTimeout(
            () => setHoveredPlanet(null),
            1000,
          );
        }}
        position={cardPosition}
      />
    </div>
  );
};

export default SolarSystem;
