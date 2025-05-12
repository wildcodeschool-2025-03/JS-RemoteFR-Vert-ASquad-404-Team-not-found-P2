import type React from "react";
import type { PlanetData } from "../data/planete.ts";
import { getRevolutionDuration } from "../data/revolution.ts";

interface PlanetProps {
  planet: PlanetData;
  speedMultiplier: number;
  onHover: (planet: PlanetData | null, event?: React.MouseEvent) => void;
}

const Planet: React.FC<PlanetProps> = ({
  planet,
  speedMultiplier,
  onHover,
}) => {
  const duration = getRevolutionDuration(
    planet.revolutionDays,
    speedMultiplier,
  );

  return (
    <div
      className="orbit"
      style={{
        width: `${planet.orbitSize}%`,
        height: `${planet.orbitSize}%`,
        animation: `rotate ${duration}s linear infinite`,
      }}
    >
      <div
        className={`planet ${planet.name.toLowerCase() === "saturne" ? "saturne" : planet.name.toLowerCase() === "jupiter" ? "jupiter" : ""}`}
        style={{
          backgroundImage: planet.image ? `url(${planet.image})` : "none",
        }}
        role="button"
        tabIndex={0}
        onMouseEnter={(e) => onHover(planet, e)}
        onMouseLeave={() => onHover(null)}
        onClick={(e) => onHover(planet, e)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onHover(planet, e as unknown as React.MouseEvent);
          }
        }}
      />
    </div>
  );
};

export default Planet;
