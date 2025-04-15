import React from "react";
import { Helmet } from "react-helmet-async";
import "./About.css";
import Value from "./Value";
import Team from "./Team";
import ExSer from "../../components/Work/Work";
// import Services from "../../components/Services/Services";

const About = () => {
  return (
    <section id="about" className="about-wrapper">
      <Helmet>
        <title>About Us - Altair Attic Limited</title>
        <meta
          name="description"
          content="Altair Attic Limited is at the forefront of technological innovation, delivering cutting-edge solutions in smart home automation, software development, IoT, and embedded systems integration."
        />
        <meta
          name="keywords"
          content="About Altair Attic Limited, company profile, tech solutions"
        />
        <meta property="og:title" content="About Us - Altair Attic Limited" />
        <meta
          property="og:description"
          content="Altair Attic Limited is at the forefront of technological innovation, delivering cutting-edge solutions in smart home automation, software development, IoT, and embedded systems integration."
        />
        <meta property="og:url" content="https://www.altairattic.com/about" />
        <meta
          property="og:image"
          content="https://www.altairattic.com/images/about.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Altair Attic Limited" />
        <meta
          name="twitter:description"
          content="Altair Attic Limited is at the forefront of technological innovation, delivering cutting-edge solutions in smart home automation, software development, IoT, and embedded systems integration."
        />
        <meta
          name="twitter:image"
          content="https://www.altairattic.com/images/about.jpg"
        />
      </Helmet>
      <div className="paddings innerWidth flexCenter about-container">
        <div className="about-left flexColStart">
          <span className=" primary-Text">ABOUT US</span>

          <span className="secondary-Text">
            Altair Attic Limited is at the forefront of technological
            innovation, delivering cutting-edge solutions in smart home
            automation, software development, IoT, and embedded systems
            integration. Our mission is to seamlessly integrate advanced
            technology into everyday life, making it accessible, efficient, and
            beneficial for all.
          </span>
        </div>
        <div className="about-right">
          <div className="about-image-container">
            <img src="./Aboutus.jpg" alt="About Us" />
          </div>
        </div>
      </div>
      <ExSer />

      {/* <Services/> */}
      <Team />
      <Value />
    </section>
  );
};

export default About;
