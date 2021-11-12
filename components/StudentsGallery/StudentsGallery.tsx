import React, { FC } from "react";
import Carousel from "../Carousel/Carousel";
import classes from "../../styles/StudentsGallery.module.css";

const StudentsGallery: FC = () => {
  return (
    <section className={classes.studentsGallery}>
      <div className={classes.studentsGalleryCarousel}>
        <div className={classes.carouselWrapper}>
          <Carousel />
        </div>
      </div>
      <div className={classes.studentsGalleryText}>
        <h4>Visit Our Student Gallery</h4>
        <p>
          {`We are proud of our vibrant student community. NYIP's global reach
          means that we are able to bring together photographers from all over
          the world who share a passion for taking great photographs. All of
          NYIP's photography students gain access to a student forum where they
          can share their work, discuss the courses and learn from and offer
          advice to other students. Our student gallery features select examples
          of great student work. Visit the NYIP Student Photo Gallery.`}
        </p>
      </div>
    </section>
  );
};

export default StudentsGallery;
