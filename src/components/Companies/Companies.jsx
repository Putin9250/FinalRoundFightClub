import React from "react";

import './Companies.css'

const Companies = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter company-container">
                <img src="./mfn-logo.png" alt="MFN Logo" loading="lazy"/>
                <img src="./India_Combat_League-logo.jpg" alt="ICL Logo" loading="lazy"/>
                <img src="./mix-boxing.jpg" alt="MixBoxing Logo" id="KclLogo" loading="lazy"/>
                <img src="./kcl.jpeg" alt="KCL logo" id="KclLogo" loading="lazy"/>
            </div>
        </section>
    )
}

export default Companies