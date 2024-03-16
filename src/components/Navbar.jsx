import React, { useState } from "react";
import styles from "./NavBar.module.css";
import ListTimeFrame from "./ListTimeFrame";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const [seeTimeFrames, setSeeTimeFrames] = useState(false);
  const handleClick = () => {
    setSeeTimeFrames(!seeTimeFrames);
  };
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.submenu}`}>
        <img src="../src/assets/Logo.png" className={`${styles.logo}`} />
        {props.timeFrames.map((timeFrame, idx) => {
          return (
            <ListTimeFrame
              timeFrame={timeFrame}
              key={idx}
              setSelectedTimeFrame={props.setSelectedTimeFrame}
              selectedTimeFrame={props.selectedTimeFrame}
            />
          );
        })}
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
