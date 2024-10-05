import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Coming Soon ...</h4>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>WatchVerse.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2024 &copy; snehaVerma</p>
      </div>

      <div className="rightFooter">
        <h4 style={{textDecoration:'none'}}>Follow Us </h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://instagram.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
