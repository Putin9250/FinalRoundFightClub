import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={"60px"} />
          <span className="secondaryText">
            Our vision is to empower every individual to
            <br />
            unlock their full potential — physically and
            <br />
            mentally — through the discipline of martial arts.
          </span>
        </div>
        {/* right side  */}
        <div className="flexColStart f-right">
          <span className="primaryText">Final Round Fight Club</span>
          <span className="secondaryText">
            G-84, School Rd, near Shoe Market, Vijay Vihar, Milap Nagar, Uttam
            Nagar, New Delhi, Delhi, 110059
          </span>
          <div className="flexCenter f-menu">
            <span>Contact</span>
            <span>Get Started</span>
            <span>Fees</span>
            <span>Values</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
