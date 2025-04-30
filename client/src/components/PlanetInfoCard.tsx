import type React from "react";
import { forwardRef } from "react";
import { NavLink } from "react-router";
import type { PlanetData } from "../data/planete.ts";

interface Props {
  planet: PlanetData | null;
  onEnter: () => void;
  onLeave: () => void;
  position: { top: number; left: number; side: "left" | "right" };
}

const PlanetInfoCard = forwardRef<HTMLDivElement, Props>(
  ({ planet, onEnter, onLeave, position }, ref) => {
    if (!planet) return null;

    const style: React.CSSProperties = {
      top: position.top,
      left: position.side === "left" ? position.left - 260 : position.left + 20,
      transform: "translateY(-50%)",
    };

    return (
      <div
        ref={ref}
        className="info-card"
        style={style}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="planet-avatar-wrapper">
          <img
            src={planet.image}
            alt={planet.name}
            className="planet-avatar-floating"
          />
        </div>

        <div className="planet-info-content">
          <h3>{planet.name}</h3>
          {planet.description.split("|").map((line) => (
            <p key={line.trim()}>{line.trim()}</p>
          ))}
          <NavLink to={`/PlanetInfo/${planet.id}`}>En savoir plus</NavLink>
        </div>
      </div>
    );
  },
);

export default PlanetInfoCard;
