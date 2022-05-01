import React from "react";
import "./skills.css";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { SiRuby } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills">
        <div className="skills-label">
          <h1>skills</h1>
        </div>
        <div className="logos">
          <div className="skills-icons ps">
            <SiJavascript />
            <h3 class="icon-text">JavaScript</h3>
          </div>
          <div className="skills-icons">
            <GrReactjs />
            <h3 class="icon-text">React</h3>
          </div>
          <div className="skills-icons">
            <ImHtmlFive />
            <h3 class="icon-text">HTML</h3>
          </div>
          <div className="skills-icons">
            <SiCss3 />
            <h3 class="icon-text">CSS</h3>
          </div>
          <div className="skills-icons">
            <FaFigma />
            <h3 class="icon-text">Figma</h3>
          </div>
          <div className="skills-icons ps">
            <BsBootstrapFill />
            <h3 class="icon-text">Bootstrap</h3>
          </div>
          <div className="skills-icons ps">
            <SiRuby />
            <h3 class="icon-text">Ruby</h3>
          </div>
          <div className="skills-icons">
            <SiRubyonrails />
            <h3 class="icon-text">Rails</h3>
          </div>
          <div className="skills-icons ps">
            <SiAdobephotoshop />
            <h3 class="icon-text">Photoshop</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
