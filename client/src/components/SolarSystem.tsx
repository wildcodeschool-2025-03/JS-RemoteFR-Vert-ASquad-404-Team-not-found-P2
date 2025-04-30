import type React from "react";
import { useEffect, useRef, useState } from "react";
import Planet from "../components/Planet.tsx";
import PlanetInfoCard from "../components/PlanetInfoCard.tsx";
import { type PlanetData, planets } from "../data/planete.ts";
import "../components/SolarisSystem.css";

const SolarSystem: React.FC = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetData | null>(null);
  const [cardPosition, setCardPosition] = useState({
    top: 0,
    left: 0,
    side: "right" as "left" | "right",
    vertical: "bottom" as "top" | "bottom",
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
      const solarSystem = document
        .querySelector(".solar-system")
        ?.getBoundingClientRect();
      const planetRect = (event.target as HTMLElement).getBoundingClientRect();

      if (solarSystem) {
        const relativeLeft = planetRect.left - solarSystem.left;
        const relativeTop = planetRect.top - solarSystem.top;
        const side = relativeLeft > solarSystem.width / 2 ? "left" : "right";

        let vertical: "top" | "bottom" = "bottom";

        const cardHeight = 250;
        const avatarHeight = 50;
        const marginFromTop = 70;

        if (planetRect.top - avatarHeight - marginFromTop < 0) {
          vertical = "bottom";
        } else if (planetRect.bottom + cardHeight > window.innerHeight) {
          vertical = "top";
        } else {
          vertical = relativeTop > solarSystem.height / 2 ? "top" : "bottom";
        }

        setCardPosition({
          top: relativeTop + planetRect.height / 2,
          left: relativeLeft + planetRect.width / 2,
          side,
          vertical,
        });
      }
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
        role="button"
        tabIndex={0}
        style={{ backgroundImage: `url(${planets[0].image})` }}
        onMouseEnter={(e) => handleHover(planets[0], e)}
        onMouseLeave={() => handleHover(null)}
        onClick={(e) => handleHover(planets[0], e)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleHover(planets[0], e as unknown as React.MouseEvent);
          }
        }}
      />

      {planets.slice(1).map((planet) => (
        <Planet
          key={planet.id}
          planet={planet}
          speedMultiplier={speedMultiplier}
          onHover={handleHover}
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
