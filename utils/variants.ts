import { Variants } from "framer-motion";

export const certificateVriants: Variants = {
  initial: { opacity: 0, rotate: -30, scale: 0 },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { delay: 0.2, duration: 0.6 },
  },
};

export const licenseVriants: Variants = {
  initial: { opacity: 0, rotate: 30 },
  animate: { opacity: 1, rotate: 0, transition: { delay: 0.2, duration: 0.4 } },
};

export const mobileNavVariants: Variants = {
  hide: {
    opacity: 0,
    y: "-100%",
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const heroSectionVariants: Variants = {
  animate: {
    top: "40%",
    transition: {
      type: "spring",
      delay: 0.6,
      stiffness: 100,
    },
  },
  initial: {
    top: "-100%",
  },
};

export const onlineCoursesVariants: Variants = {
  initial: { opacity: 0, y: -200 },
  animate: { opacity: 1, y: 0 },
};

export const riskFreeVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};
