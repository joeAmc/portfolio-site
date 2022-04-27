import React from "react";
import "./about.css";
import PROFILE from "../../assets/profile.png";
// import Skills from "./Skills"

const About = () => {
  return (
    <section id="about">
      <div className="about">
        <div className="me">
          <img src={PROFILE} alt="" />
        </div>
        <div className="about-block">
          <div className="about-text">
            <h1>About</h1>
            <p>
              Hi, I’m Joe a Frontend developer, experienced in project
              management with a passion for design. Always happy to be
              challenged with a desire to learn new things. Eager to adapt where
              required.
            </p>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
    </section>
  );
};

export default About;
