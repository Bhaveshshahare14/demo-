import React from "react";
import "../css/popuppage.scss"; // You can create a CSS file for styling the popup

function PopupPage(props) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2><b>Discharge Changes</b></h2>
        
        <div className="btn">
          <button className="popup-1" onClick={props.onYes}>No</button>
          <button className="popup-2" onClick={props.onNo}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default PopupPage;
