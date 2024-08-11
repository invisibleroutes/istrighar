import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item container">
        <ul>
          <li>
            <NavLink to={"/terms-and-conditions"}>Terms and Conditions</NavLink>
          </li>
          <li>
            <NavLink to={"/privacy-and-policy"}>Privacy and Policy</NavLink>
          </li>
          <li>
            <NavLink to={"/faqs"}>FAQ's</NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </li>
        </ul>
      </div>
      <p className="rights">
        <NavLink to={"/"}>© 2024 24*7 Istri</NavLink>. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
