import { motion, Variants } from "framer-motion";
import React, { FC } from "react";
import classes from "../../styles/HeroSection.module.css";
import { heroSectionVariants } from "../../utils/variants";

const HeroSection: FC = () => {
  return (
    <section className={classes.heroContainer}>
      <motion.div
        className={classes.heroText}
        variants={heroSectionVariants}
        animate="animate"
        initial="initial"
      >
        <h1>Best photography classes</h1>
        <p>WE ARE HERE TO HELP YOU</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
