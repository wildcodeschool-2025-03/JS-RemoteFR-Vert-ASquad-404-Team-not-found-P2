import type React from "react";
import SolarSystem from "../components/SolarSystem.tsx";

const SystemeSolaire: React.FC = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <SolarSystem />
    </div>
  );
};

export default SystemeSolaire;
