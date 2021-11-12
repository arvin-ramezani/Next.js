import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import classes from "../styles/Home.module.css";
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
