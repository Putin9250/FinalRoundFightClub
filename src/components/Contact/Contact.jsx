import React from "react";
import "./Contact.css";
import "../hero/Hero.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="c-wrapper" id="contacts">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">91+ 8920364688</span>
                  </div>
                </div>
                <div className="flexCenter button" > <a href="tel:+918920364688">Call Now</a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">91+ 8920364688</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a
                    href="https://wa.me/918920364688"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">91+ 7042454551</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+918920364688">Call Now</a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaInstagram size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">FinalRoundFightClub</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://www.instagram.com/finalroundfightclub/">
                    Follow Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="img-container">
            <img src="./Contact.png" alt="ContactUs" loading="lazy"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
