import React from "react";

import { ContainerWeather } from "../style";

const WeatherIconCloudyWithLightning = () => (
  <ContainerWeather>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 60.7 48.7"
    >
      <g id="Cloud_4">
        <g id="White_cloud_4">
          <path
            id="XMLID_69_"
            fill="#ffffff"
            d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"
          />
          <circle id="XMLID_68_" fill="#ffffff" cx="17.4" cy="22.8" r="9.3" />
          <circle id="XMLID_67_" fill="#ffffff" cx="34.5" cy="21.1" r="15.6" />
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
        <g id="Gray_cloud_4">
          <path
            id="XMLID_65_"
            fill="#e0e0e0"
            d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"
          />
          <circle id="XMLID_64_" fill="#e0e0e0" cx="45.7" cy="10.7" r="10.7" />
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
        <g id="Lightning_4">
          <path
            id="XMLID_79_"
            fill="#ffeb3b"
            d="M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5
      			c-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3
      			c-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0
      			l-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"
          />
          <animate
            attributeType="CSS"
            attributeName="opacity"
            dur="1.5s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;0;1"
            calcMode="linear"
          />
        </g>
      </g>
    </svg>
  </ContainerWeather>
);

export default WeatherIconCloudyWithLightning;
