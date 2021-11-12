import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import classes from "../../styles/Header.module.css";
import { useRouter } from "next/router";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";
import { mobileNavVariants } from "../../utils/variants";

const Header: FC = () => {
  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const showMobileNavHandler = () => setShowMobileNav((prev) => !prev);


  return (
    <div className={classes.test}>
      <header className={classes.header}>
        <div className={classes.wrapper}>
          <div className={classes.logo}>
            <Image
              src="/images/logo/logo.png"
              width="200"
              height="60"
              alt="logo"
              layout="responsive"
            />
          </div>
          <nav className={classes.nav}>
            <ul>
              <li className={router.pathname === "/" ? classes.active : ""}>
                <Link href="/">Home</Link>
              </li>
              <li className={router.pathname === "/articles" ? "active" : ""}>
                <a>Articles</a>
              </li>
              <li className={router.pathname === "/courses" ? "active" : ""}>
                <a>Courses</a>
              </li>
              <li className={classes.enroll}>
                <a>Enrol Now</a>
              </li>
            </ul>
          </nav>
          <AnimatePresence>
            <div className={classes.mobileNav}>
              <div className={classes.navIcon} onClick={showMobileNavHandler}>
                <HiMenuAlt3 />
              </div>
              <motion.nav
                className={classes.mobileNavContent}
                initial={"hide"}
                animate={showMobileNav ? "show" : ""}
                exit={"hide"}
                variants={mobileNavVariants}
              >
                <ImCancelCircle onClick={showMobileNavHandler} />
                <ul className={classes.mobileNavList}>
                  <li className={router.pathname === "/" ? classes.active : ""}>
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className={router.pathname === "/articles" ? "active" : ""}
                  >
                    <Link href="">Articles</Link>
                  </li>
                  <li
                    className={router.pathname === "/courses" ? "active" : ""}
                  >
                    <Link href="">Courses</Link>
                  </li>
                  <li className={classes.enroll}>
                    <Link href="">Enrol Now</Link>
                  </li>
                </ul>
              </motion.nav>
            </div>
          </AnimatePresence>
        </div>
      </header>
    </div>
  );
};

export default Header;
