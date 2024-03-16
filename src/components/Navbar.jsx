import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.submenu}`}>
        <img src="../src/assets/Logo.png" className={`${styles.logo}`} />

        <div>Ticker</div>
        <div>Time Frames</div>
      </div>
      <div className={`${styles.menu}`}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.pages} ${styles.active}`
              : `${styles.pages}`
          }
          to="/chart"
        >
          Chart
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? `${styles.pages} ${styles.active}`
              : `${styles.pages}`
          }
          to="/news"
        >
          News
        </NavLink>
        <div className={`${styles.account}`}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
