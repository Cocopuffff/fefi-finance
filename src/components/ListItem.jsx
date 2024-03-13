import React, { useEffect, useState, useContext, useRef } from "react";
import AddContext from "../context/AddContext";
import styles from "./ListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const ListItem = (props) => {
  const [isActive, setActive] = useState(false);
  const [isHover, setHover] = useState(false);
  const [isButtonHover, setButtonHover] = useState(false);
  const AddCtx = useContext(AddContext);
  const buttonRef = useRef();

  const handleButtonClick = (event) => {
    props.onDelete(event.currentTarget.parentNode.id);
  };

  const handleItemClick = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setActive(true);
      props.onSelect(props.airtableId);
    }
  };

  const evaluateSelection = (id) => {
    if (id !== props.airtableId) {
      setActive(false);
    }
  };

  useEffect(() => {
    setActive(false);
  }, [AddCtx.addTopic]);

  useEffect(() => {
    evaluateSelection(props.selectedId);
  }, [props.selectedId]);

  return (
    <div
      className={`row align-items-center ${styles["sidebarItem"]} ${
        isActive ? `${styles.selected}` : ""
      }`}
      id={props.airtableId}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleItemClick}
    >
      <div className={`col-6 ${styles.name}`}>{props.displayName}</div>
      <div className="col-4">{Math.random().toFixed(2) + "%"}</div>
      <button
        className={`col-2 ${styles.delete}  ${
          isHover ? "" : `${styles.hidden}`
        } ${isButtonHover ? `${styles.active}` : ""}`}
        ref={buttonRef}
        onClick={handleButtonClick}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        <FontAwesomeIcon icon={faX} />
      </button>
    </div>
  );
};

export default ListItem;
