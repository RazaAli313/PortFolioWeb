/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Muhammad Raza Ali",
  title: "Web Developer &Graphic Desginer",
  workEmail: "raza.ali@studentambassadors.com",
  personalEmail:razaalipk313@gmail.com,
  gitHub: "github.com/RazaAli313",
  instagram: "muhammadrazaali313",
  linkedIn: "https://www.linkedin.com/in/muhammad-raza-ali-748425256/",
  medium: "",
  twitter: "https://twitter.com/razaalipk313",
  youTube: "https://www.youtube.com/@maktabeshaheen5347",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
