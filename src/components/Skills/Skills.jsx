import React from "react";
import "./skills.css";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiRuby } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

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
            <FaReact />
            <h3 class="icon-text">React</h3>
          </div>
          <div className="skills-icons">
            <FaHtml5 />
            <h3 class="icon-text">HTML</h3>
          </div>
          <div className="skills-icons">
            <FaCss3Alt />
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
