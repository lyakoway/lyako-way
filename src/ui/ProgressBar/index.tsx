import React, { useEffect } from "react";

import styles from "./progress.module.css";
import { getMobileOperatingSystem, isAndroid, isIos } from "src/common/utils";

const ProgressBar = () => {
  function getProductsHref() {
    let userAgent = getMobileOperatingSystem();

    if (isAndroid(userAgent)) {
      return true;
    }

    if (isIos(userAgent)) {
      return true;
    }

    return false;
  }

  const productsHref = getProductsHref();

  useEffect(() => {
    const progressBar = () => {
      const progressTop = document.getElementById("progressTop");
      const progressRight = document.getElementById("progressRight");
      const progressBottom = document.getElementById("progressBottom");
      const progressLeft = document.getElementById("progressLeft");

      let windowScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let windowHeight =
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight) /
        4;
      let per = ((windowScroll / windowHeight) * 100).toFixed(0);

      let windowHeightPer =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollPer = ((windowScroll / windowHeightPer) * 100).toFixed(0);

      if (per <= 100) {
        progressTop.style.width = per + "%";
        progressRight.style.height = "0%";
        progressBottom.style.width = "0%";
        progressLeft.style.height = "0%";
      }
      if (100 < per && per <= 200) {
        progressTop.style.width = "100%";
        progressRight.style.height = per - 100 + "%";
        progressBottom.style.width = "0%";
        progressLeft.style.height = "0%";
      }
      if (200 < per && per <= 300) {
        progressTop.style.width = "100%";
        progressRight.style.height = "100%";
        progressBottom.style.width = per - 200 + "%";
        progressLeft.style.height = "0%";
      }
      if (300 < per && per <= 400) {
        progressTop.style.width = "100%";
        progressRight.style.height = "100%";
        progressBottom.style.width = "100%";
        progressLeft.style.height = per - 300 + "%";
      }
      if (97 <= scrollPer) {
        progressTop.style.width = "100%";
        progressRight.style.height = "100%";
        progressBottom.style.width = "100%";
        progressLeft.style.height = "100%";
      }
    };

    productsHref && document.addEventListener("scroll", progressBar);
    return () => {
      productsHref && document.removeEventListener("scroll", progressBar);
    };
  });
  return (
    <>
      <div id={"progressTop"} className={styles.progressTop}></div>
      <div id={"progressRight"} className={styles.progressRight}></div>
      <div id={"progressBottom"} className={styles.progressBottom}></div>
      <div id={"progressLeft"} className={styles.progressLeft}></div>
    </>
  );
};

export default ProgressBar;
