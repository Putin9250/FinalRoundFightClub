import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="started">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-conatiner">
          <span className="primaryText">
            Get Started With Final Round Fight Club
          </span>
          <span className="secondaryText">
            Join our elite MMA academy and start your transformation today.
          </span>
          <span>
            Whether you're training to fight or just to be your best self — your
            journey begins here.
          </span>
          <button className="button">
            <a href="mailto:sahil24042005@gmail.com?subject=Join%20Final%20Round&body=I%20am%20interested%20in%20training.">
              Email Us
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
