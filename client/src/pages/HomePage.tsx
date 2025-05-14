import { motion } from "motion/react";
import CardDescription from "../components/CardDescription";
import PicOfTheDay from "../components/pic_of_the_day/PicOfTheDay";

function HomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <CardDescription />
        <PicOfTheDay />
      </motion.div>
    </>
  );
}

export default HomePage;
