import React from "react";
import "./banner.css";
import CTA from "./CTA";
// import BANNER from "../../assets/banner.png";
import LOGO from "../../assets/Logotrans.png";

function Banner() {
  return (
    <banner>
      <div className="container banner__container">
        {/* <div className="banner-text"> */}
        <div className="banner-text">
          <img className="logo" src={LOGO} alt="" />
          <h3>Joe McIlroy</h3>
          <h4>Frontend Developer</h4>
          <CTA />
        </div>
        {/* <a href="#contact" className="scroll_down">
          Scroll Down
        </a> */}
      </div>
    </banner>
  );
}

export default Banner;
