import { motion, useAnimation, Variants } from "framer-motion";
import React, { FC, useEffect } from "react";
import { useInView } from "react-hook-inview";
import classes from "../../styles/RiskFree.module.css";
import { riskFreeVariants } from "../../utils/variants";

const RiskFree: FC = () => {
  const animationControl = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      animationControl.start("animate");
      return;
    }
    animationControl.start("initial");
  }, [animationControl, inView]);

  return (
    <section ref={ref} className={classes.riskFree}>
      <motion.div
        variants={riskFreeVariants}
        animate={animationControl}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
          delay: 0.6,
        }}
        className={classes.riskFreeText}
      >
        <h3>14 days to try NYIP risk-free</h3>
        <p>
          Enroll and try out our photography certificate programs for up to 2
          weeks and if it’s not right for you for any reason, simply let us know
          and we’ll refund every penny.
        </p>
      </motion.div>
    </section>
  );
};

export default RiskFree;
