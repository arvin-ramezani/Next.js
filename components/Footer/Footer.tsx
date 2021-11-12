import React, { FC } from "react";
import { AiTwotonePhone } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import classes from "../../styles/Footer.module.css";
import Form from "../Form/Form";

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer}>
        <div className={classes.contactUs}>
          <h3 className={classes.title}>CONTACT US</h3>
          <div className={classes.phone}>
            <AiTwotonePhone />
            <span>(631)412-3947</span>
          </div>
          <div className={classes.email}>
            <MdEmail />
            <span>info@example.net</span>
          </div>
          <div className={classes.address}>
            <HiOfficeBuilding />
            <span>189 South Wellwood Ave Lindenhurst, New York 11757 US</span>
          </div>
        </div>

        <Form />
      </div>
    </footer>
  );
};

export default Footer;
