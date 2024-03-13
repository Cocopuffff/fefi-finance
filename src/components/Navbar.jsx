import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.submenu}`}>
        <img src="../src/assets/Logo.png" className={`${styles.logo}`} />

        <div>Ticker</div>
        <div>Time Frames</div>
      </div>
      <div className={`${styles.menu}`}>
        <div className={`${styles.pages}`}>Chart</div>
        <div className={`${styles.pages}`}>News</div>
        <div className={`${styles.account}`}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
