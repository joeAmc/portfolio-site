import React from "react";
import "./navbar.css";
import LOGO from "../../assets/Logo white.png";
// import { AiFillInfoCircle } from "react-icons-ai";
import { FaUserCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <navbar>
      {/* <div className="navbar__container">
        <div className="nav-links"> */}
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <img src={LOGO} alt="" />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserCircle />
      </a>
      <a
        activeClass="active"
        smooth
        spy
        to="about"
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <FaLaptop />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <FaFolderOpen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
      {/* </div>
      </div> */}
    </navbar>
  );
};
export default Navbar;
