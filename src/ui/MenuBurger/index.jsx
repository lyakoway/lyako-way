import React from "react";

import styles from "./burger.module.css";

const MenuBurger = ({ opened, handleClick }) => (
  <div id="menuToggle" className={styles.menuToggle} onClick={handleClick}>
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={opened}
      onChange={() => console.log("")}
    />
    <span id="span1" className={styles.span1}></span>
    <span id="span2" className={styles.span2}></span>
    <span id="span3" className={styles.span3}></span>
  </div>
);

export default MenuBurger;
