import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Lost.css";

function Lost() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

  return (
    <div className="lost-container">
      <h1>Vous êtes arrivés dans le vide intersidéral.</h1>
      <motion.img
        src="/images/Astroload.png"
        alt="Astronaute dérivant"
        className="astronaut"
        animate={{
          rotate: [0, 360],
          x: isMobile ? [-70, 70, -70] : [-180, 180, -180],
        }}
        transition={{
          rotate: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          },
          x: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
      />
      <h2>Retour sur terre dans {secondsLeft}</h2>
    </div>
  );
}

export default Lost;
