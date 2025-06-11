import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
            <span>
              {" "}
              <a href="#contacts">Contact</a>
            </span>
            <span>
              <a href="#started">Get Started</a>
            </span>
            <span>
              <a href="#charges">Disciplines</a>
            </span>
            <span>
              <a href="#values">Values</a>
            </span>
          </div>
          <div className="footer-copy">
            <p>© 2025 Final Round Fight Club. All rights reserved.</p>
            <p className="secondaryText">
              Developed by{" "}
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sahil Kumar
              </a>
            </p>
            <span className="social-icons">
              <a href="https://www.linkedin.com/in/putin1">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:sahil24042005@gmail.com">
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://wa.me/919582586200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
