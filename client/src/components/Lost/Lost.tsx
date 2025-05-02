import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Lost.css";

function Lost() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 300000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="lost-container">
      <h1>Vous êtes arrivés dans le vide intersidéral.</h1>
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default Lost;
