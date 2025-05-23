import React from "react";

import { ContainerWeather } from "../style";

const WeatherIconCloudyWithMoon = () => (
  <ContainerWeather>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 60.7 44.4"
    >
      <g id="Cloud_5">
        <g id="White_cloud_5">
          <path
            id="XMLID_49_"
            fill="#ffffff"
            d="M47.2,44.4H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,40.9,51.6,44.4,47.2,44.4z"
          />
          <circle id="XMLID_48_" fill="#ffffff" cx="17.4" cy="27.2" r="9.3" />
          <circle id="XMLID_47_" fill="#ffffff" cx="34.5" cy="25.5" r="15.6" />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            dur="6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="translate"
            values="0;5;0"
            calcMode="linear"
          ></animateTransform>
        </g>
        <path
          id="Moon_5"
          fill="#ffeb3b"
          d="M33.6,17.9c-0.2-7.7,4.9-14.4,12-16.4c-2.3-1-4.9-1.5-7.6-1.5c-9.8,0.3-17.5,8.5-17.2,18.3 c0.3,9.8,8.5,17.5,18.3,17.2c2.7-0.1,5.2-0.8,7.5-1.9C39.3,32,33.8,25.6,33.6,17.9z"
        />
        <g id="Gray_cloud_5">
          <path
            id="XMLID_45_"
            fill="#e0e0e0"
            d="M54.7,26.8H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,24.1,58,26.8,54.7,26.8z"
          />
          <circle id="XMLID_43_" fill="#e0e0e0" cx="45.7" cy="15.1" r="10.7" />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            dur="6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="translate"
            values="0;-3;0"
            calcMode="linear"
          ></animateTransform>
        </g>
      </g>
    </svg>
  </ContainerWeather>
);

export default WeatherIconCloudyWithMoon;
