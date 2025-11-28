import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="midFooter">
        <h1>WatchVerse.</h1>
        <p>High Quality is our first priority.</p>
        <p>&copy; 2024 WatchVerse. All rights reserved.</p>
      </div>

      <div className="rightFooter">
        <h4 style={{textDecoration:'none'}}>Follow Us </h4>
        <a href="https://instagram.com/_.watchverse._">Instagram</a>

      </div>
    </footer>
  );
};

export default Footer;
