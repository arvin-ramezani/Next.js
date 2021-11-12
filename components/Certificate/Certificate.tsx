import React, { FC, useEffect } from "react";
import classes from "../../styles/Certificate.module.css";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-hook-inview";
import { certificateVriants, licenseVriants } from "../../utils/variants";

const Certificate: FC = () => {
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
    <section ref={ref} className={classes.certificate}>
      <div className={classes.certificateWrapper}>
        <motion.div
          className={classes.licenseCardWrapper}
          variants={licenseVriants}
          animate={animationControl}
          initial="initial"
        >
          <div className={classes.licenseCard}>
            <div className={classes.licenseCardImg}>
              <Image
                src="/images/logo/BBB.png"
                alt="BBB"
                width="70"
                height="70"
              />
            </div>
            <div className={classes.licenseCardText}>
              <p>Licensed by New York State and fully-accredited by the BBB</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={certificateVriants}
          animate={animationControl}
          className={classes.certificateCardWrapper}
        >
          <div className={classes.certificateCard}>
            <div className={classes.certificateCardImg}>
              <Image
                src="/images/logo/certificate-icon.png"
                alt="certificate"
                width="70"
                height="70"
              />
            </div>
            <div className={classes.certificateCardText}>
              <p>All course materials prepared by professional photographers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
