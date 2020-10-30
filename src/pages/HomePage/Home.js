import React from "react";
import {
  HeroSection,
  AboutUsSection,
  ProjectsSection,
} from "../../components/Sections";
import { hero, about_us, projects } from "./Data";
const Home = () => {
  return (
    <>
      <HeroSection {...hero} />
      <AboutUsSection {...about_us} />
      <ProjectsSection {...projects} />
    </>
  );
};

export default Home;
