import React from "react";
import "./about.css";
import PROFILE from "../../assets/profilesm.png";
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
              Hi, I’m Joe a frontend developer, bootcamp graduate and former
              lighting designer. I have a passion for problem solving, design,
              being pushed and learning new things.I have vast experience
              working within teams, managing projects and hitting deadlines,
              communicating with internal and external teams.
            </p>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
    </section>
  );
};

export default About;
