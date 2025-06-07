import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexCenter hero-container ">
        {/* Left Side */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
            initial={{y:"2rem",opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{
              duration:2,
              type:'spring'
            }}
            >
              Final <br />
              Round Fight
              <br /> Club
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Unleash your inner warrior at our martial arts academy —
            </span>
            <span className="secondaryText">
              {" "}
              where strength, and self-mastery converge.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker
              color="var(--blue)"
              size={32}
              className="location-icon"
            />
            <span>School Road, Uttam Nagar East - 110059</span>
            <button className="button">
              <a href="https://www.google.com/maps/place/Final+Round+Fight+Club/@28.6204468,77.0595554,17z/data=!3m1!4b1!4m6!3m5!1s0x390d057eb4d6ec8d:0xe3da5041093608da!8m2!3d28.6204468!4d77.0621303!16s%2Fg%2F11sstr2mdm?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D">
                Search
              </a>
            </button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={9000} end={10000} duration={2} />
                <span className="orangespan">+</span>
              </span>
              <span className="secondaryText">Student Trained</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={6950} end={7000} duration={2} />
                <span className="orangespan">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={200} end={250} />
                <span className="orangespan">+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
            initial={{y:"2rem",opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{
              duration:2,
              type:'spring'
            }} className="flexCenter hero-right ">
          <div className="img-container">
            <img src="./ss.png" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
