import { motion, useAnimation, Variants } from "framer-motion";
import React, { FC, useEffect } from "react";
import { useInView } from "react-hook-inview";
import classes from "../../styles/OnlineCourses.module.css";
import { onlineCoursesVariants } from "../../utils/variants";

const OnlineCourses: FC = () => {
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
    <section ref={ref} className={classes.onlineCourses}>
      <motion.div
        variants={onlineCoursesVariants}
        initial="initial"
        animate={animationControl}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.4 }}
        className={classes.onlineCoursesText}
      >
        <h3>The Online Photography School the Pros Recommend</h3>
        <p>
          Whether you want to start a new career, earn money part time, or take
          your hobby to the next level – NYIP offers online photography classes
          to help
        </p>
      </motion.div>
    </section>
  );
};

export default OnlineCourses;
