import { motion } from "motion/react";
import type React from "react";
import SolarSystem from "../components/SolarSystem.tsx";
import "../components/SolarisSystem.css";

const SystemeSolaire: React.FC = () => {
  return (
    <motion.div
      className="systeme-solaire-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <SolarSystem />
    </motion.div>
  );
};

export default SystemeSolaire;
