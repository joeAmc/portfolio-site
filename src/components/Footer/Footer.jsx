import React from "react";
import "./footer.css";
import FooterIcons from "./FooterIcons";

function Footer() {
  return (
    <div className="footer">
      <FooterIcons />
      <div className="copy">
        <h5>&copy; All rights reserved.</h5>
      </div>
    </div>
  );
}

export default Footer;
