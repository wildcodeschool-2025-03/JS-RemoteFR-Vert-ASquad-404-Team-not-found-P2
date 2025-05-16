import { motion } from "motion/react";
import Lost from "../components/Lost/Lost";

function Page_404() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <Lost />
      </motion.div>
    </>
  );
}

export default Page_404;
