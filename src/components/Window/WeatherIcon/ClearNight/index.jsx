import React from "react";
// import { observer } from "mobx-react";

// import { store } from '../../../../store';

// import { CloudWrapper } from "./style";
import "./style.css";

const WeatherIconClearNight = () => (
  <div className="containerClearNight">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 30.8 42.5"
      // style="enable-background:new 0 0 30.8 42.5;"
      // xml:space="preserve"
      height="30px"
      width="30px"
    >
      <path
        id="Moon"
        className="yellow"
        d="M15.3,21.4C15,12.1,21.1,4.2,29.7,1.7c-2.8-1.2-5.8-1.8-9.1-1.7C8.9,0.4-0.3,10.1,0,21.9 c0.3,11.7,10.1,20.9,21.9,20.6c3.2-0.1,6.3-0.9,8.9-2.3C22.2,38.3,15.6,30.7,15.3,21.4z"
      />
    </svg>
  </div>
);

export default WeatherIconClearNight;