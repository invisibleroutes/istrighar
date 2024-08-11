import React from "react";
import "./Hero.css";
import ContactUs from "../ContactUS/ContactUs";

export const Hero = () => {
  return (
    <>
      <div className="hero"></div>
      <div className="title container">
        <h2>What We Offer</h2>
        <p>
          At Invisible Routes, we're dedicated to empowering businesses like
          yours with cutting-edge software solutions tailored to your needs.
          With a commitment to innovation and excellence, we offer a
          comprehensive suite of services designed to streamline your
          operations, boost productivity, and drive growth.
        </p>
      </div>
      <h2>Contact with us</h2>
      <ContactUs />
    </>
  );
};
export default Hero;
