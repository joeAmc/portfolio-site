import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import LOGO from "../../assets/logobg.png";

function FooterIcons() {
  return (
    <div className="footer-icons">
      <a href="#">
        <img src={LOGO} alt="" />
      </a>
      <a href="https://github.com/joeAmc" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/joe-mcilroy/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
}

export default FooterIcons;
