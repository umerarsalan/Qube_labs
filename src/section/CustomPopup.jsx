
import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box flex items-center justify-center">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
