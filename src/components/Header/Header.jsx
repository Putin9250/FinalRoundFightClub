import React, { useState, useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  
  // Handle window resize to close menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpened(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={30} />

    <OutsideClickHandler onOutsideClick={ () => {setMenuOpened(false)}}>        <div 
          className={`flexCenter h-menu ${menuOpened ? "open" : ""}`}
        >
          <a href="#charges">Disciplines</a>
          <a href="#values">Our Value</a>
          <a href="#started">Get Started</a>
          <button className="button">
            <a href="#contacts">Contact</a>
          </button>
        </div>

        <div 
          className="menu-icon" 
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          
          <BiMenuAltRight size={50} />
        </div>
</OutsideClickHandler>

      </div>
    </section>
  );
};

export default Header;