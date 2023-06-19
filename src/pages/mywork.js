import React from "react";
import "../css/portfolio.css";
import Projectbox from "../components/projectbox";
import CU from "../images/CU.png";
import II from "../images/II.png";
import Omni from "../images/Omni.png";
import MO from "../images/MO.png";
import P8 from "../images/P8.png";
import VR from "../images/VR.png";

const Mywork = () => {
  return (
    <div className="portfolio-page">
      <div className="nav-space"></div>
      <div className="portfolio-container">
        <div className="portfolio-text">
          <h1>My Portfolio</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            tristique eros. Vestibulum pulvinar gravida tincidunt. Nullam vel
            ligula ut augue accumsan dignissim. Cras ut quam vestibulum,
            suscipit lacus at, venenatis tellus. Nam a libero vitae tellus
            venenatis bibendum.
          </p>
        </div>
        <div className="portfolio-projects">
          <div className="portfolio-projects-row">
            <Projectbox
              projectName="Omni Health App"
              backgroundImage={Omni}
              linkAddress="/omni"
            />
            <Projectbox
              projectName="VR Live App"
              backgroundImage={VR}
              linkAddress="/vrl"
            />
          </div>
          <div className="portfolio-projects-row">
            <Projectbox
              projectName="Mixa Orthopedics Responsive Website"
              backgroundImage={MO}
              linkAddress="/mo"
            />
            <Projectbox
              projectName="Immersive Insights"
              backgroundImage={II}
              linkAddress="/ii"
            />
          </div>
          <div className="portfolio-projects-row">
            <Projectbox
              projectName="CommUnity Landing Page"
              backgroundImage={CU}
              linkAddress="/cu"
            />
            <Projectbox
              projectName="ProjectM8te Dashboard"
              backgroundImage={P8}
              linkAddress="/p8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
