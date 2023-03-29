import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./pop.css";
import PopUp1 from "./Popup1";
import PopUp2 from "./PopUp2";
function PopUp() {
  return (
    <div className="popup">
      <div className="poup" >
        <Popup trigger={<button> Trigger</button>} position="bottom center">
          <div>Popup content here !!</div>
        </Popup>
      </div>
      <PopUp1 />
      <PopUp2/>
    </div>
  );
}

export default PopUp;
