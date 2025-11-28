import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/_.watchverse._";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar className="logo"
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" ,outlineColor:"Black"}}
              src="https://img.freepik.com/premium-vector/wv-logo-design_705304-223.jpg?w=2000"
              alt="Founder"
            />
            <Typography style={{fontSize:30, color:"black"}}>WatchVerse</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
          
          </div>
          <div className="aboutSectionContainer2">
           Welcome to Watchverse, your ultimate destination for premium watches that combine timeless elegance with modern innovation. At Watchverse, we believe that a watch is more than just a timepiece- it’s a statement of style, precision, and personality. Our carefully curated collection features a blend of classic designs and cutting-edge trends to suit every taste and occasion.<br/><br/>

Whether you're searching for a luxury statement piece or an everyday essential, Watchverse offers an extensive range of watches from renowned brands and exclusive collections. Our mission is to provide you with not only exceptional products but also an exceptional shopping experience, ensuring that each watch you choose becomes a cherished part of your journey.<br/><br/>

At Watchverse, we are passionate about craftsmanship, quality, and design. Our team is dedicated to sourcing the finest timepieces and delivering them to you with impeccable service. Join us as we explore the vast universe of watches, where every tick tells a story.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
