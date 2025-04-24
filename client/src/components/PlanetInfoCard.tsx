import type React from "react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
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
        {planet.image && (
          <img src={planet.image} alt={planet.name} className="planet-avatar" />
        )}
        <h3>{planet.name}</h3>
        <p className="planet-description">{planet.description}</p>
        <Link to={planet.link} className="learn-more">
          En savoir plus
        </Link>
      </div>
    );
  },
);

export default PlanetInfoCard;
