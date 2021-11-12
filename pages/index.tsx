import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Animal from "../models/animal";
import classes from "../styles/Home.module.css";
import { connect } from "../utils/connection";
import db from "../utils/mongodb";
import clientPromise from "../utils/mongodb";
import { IAnimal, IAnimal2 } from "../utils/types";
import HeroBackground from "../public/images/background/hero.jpg";
import Carousel from "../components/Carousel/Carousel";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import HeroSection from "../components/HeroSection/HeroSection";
import OnlineCourses from "../components/OnlineCourses/OnlineCourses";
import RiskFree from "../components/RiskFree/RiskFree";
import Certificate from "../components/Certificate/Certificate";
import StudentsGallery from "../components/StudentsGallery/StudentsGallery";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Photography Course</title>
      </Head>
      <Header />
      <main className={classes.main}>
        <HeroSection />
        <OnlineCourses />
        <RiskFree />
        <Certificate />
        <StudentsGallery />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
