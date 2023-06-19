import React from "react";
import "../css/omni.css";
import omniproj from "../images/omniproj.png";

const omni = () => {
  return (
    <div>
      <div className="nav-space"></div>
      <div className="project-container">
        <img src={omniproj} />
      </div>
    </div>
  );
};

export default omni;
