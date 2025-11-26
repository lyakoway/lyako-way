import React from "react";
import { useIsomorphicLayoutEffect } from "src/features/customHooks";

import styles from "./progress.module.css";
import { getMobileOperatingSystem, isAndroid, isIos } from "src/common/utils";

const ProgressBar = () => {
  function getProductsHref() {
    const userAgent = getMobileOperatingSystem();
    return isAndroid(userAgent) || isIos(userAgent);
  }

  const productsHref = getProductsHref();

  useIsomorphicLayoutEffect(() => {
    if (!productsHref) return;

    const progressBar = () => {
      const progressTop = document.getElementById("progressTop");
      const progressRight = document.getElementById("progressRight");
      const progressBottom = document.getElementById("progressBottom");
      const progressLeft = document.getElementById("progressLeft");

      if (!progressTop || !progressRight || !progressBottom || !progressLeft) {
        return;
      }

      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;

      const fullHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const quarterHeight = fullHeight / 4;

      // per = прогресс по сторонам (0 — 400)
      const per = Number(((scrollTop / quarterHeight) * 100).toFixed(0));

      // scrollPer = общий прогресс по странице (0 — 100)
      const scrollPer = Number(((scrollTop / fullHeight) * 100).toFixed(0));

      // Анимация прогресса
      if (per <= 100) {
        progressTop.style.width = per + "%";
        progressRight.style.height = "0%";
        progressBottom.style.width = "0%";
        progressLeft.style.height = "0%";
      } else if (per <= 200) {
        progressTop.style.width = "100%";
        progressRight.style.height = per - 100 + "%";
        progressBottom.style.width = "0%";
        progressLeft.style.height = "0%";
      } else if (per <= 300) {
        progressTop.style.width = "100%";
        progressRight.style.height = "100%";
        progressBottom.style.width = per - 200 + "%";
        progressLeft.style.height = "0%";
      } else if (per <= 400) {
        progressTop.style.width = "100%";
        progressRight.style.height = "100%";
        progressBottom.style.width = "100%";
        progressLeft.style.height = per - 300 + "%";
      }

      // Если почти внизу — заполняем всё
      if (scrollPer >= 97) {
        progressTop.style.width = "100%";
        progressRight.style.height = "100%";
        progressBottom.style.width = "100%";
        progressLeft.style.height = "100%";
      }
    };

    document.addEventListener("scroll", progressBar);
    return () => document.removeEventListener("scroll", progressBar);
  }, [productsHref]);

  return (
    <>
      <div id="progressTop" className={styles.progressTop}></div>
      <div id="progressRight" className={styles.progressRight}></div>
      <div id="progressBottom" className={styles.progressBottom}></div>
      <div id="progressLeft" className={styles.progressLeft}></div>
    </>
  );
};

export default ProgressBar;
