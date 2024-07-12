// LandingPage.js
import React from "react";
import { Header } from "../../Components/Header/Header";
import { Navbar } from "../../Components/Nav/Nav";
import { Features } from "../../Components/Features/Features";
import { Testimonial } from "../../Components/Testimonial/Testimonial";
import { Footer } from "../../Components/Footer/Footer";
import "./LandingPage.css"; // Add a CSS file for general styles
// import { ParticlesBackground } from "./ParticleBackground";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* <ParticlesBackground /> */}
      <Navbar />
      <Header />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
};
