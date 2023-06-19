import React from "react";
import "../css/projectbox.css";

const Projectbox = (props) => {
  const { backgroundImage } = props;

  return (
    <div className="square-container">
      <a href={props.linkAddress}>
        <div
          class="square"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div class="text">{props.projectName}</div>
        </div>
      </a>
    </div>
  );
};

export default Projectbox;
