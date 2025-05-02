import { useState } from "react";
import "./RocketOnTop.css";

const RocketOnTop = () => {
  const [launched, setLaunched] = useState(false);

  const scrollToTop = async () => {
    const audio = new Audio("/sounds/Rocket_Launcher.mp3");
    audio.volume = 0.5;

    try {
      await audio.play();
    } catch (err) {
      console.warn("Oups, pas de son !", err);
    }

    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 1500);

    setLaunched(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setLaunched(false);
    }, 900);
  };

  return (
    <button
      type="button"
      className={`rocket-on-top ${launched ? "launched" : ""}`}
      onClick={scrollToTop}
      aria-label="Return Top"
    >
      <img src="/images/Rocket.png" alt="Return Top" />
    </button>
  );
};

export default RocketOnTop;
