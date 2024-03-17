import React, { useEffect, useState } from "react";
import styles from "./SideList.module.css";
import ListItem from "./ListItem";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SideList = (props) => {
  const [selectedItemId, setSelectedItemId] = useState("");
  const liftDelete = (id) => {
    props.handleDelete(id);
  };

  const liftAdd = (event) => {
    props.handleAdd(event);
  };

  const handleSelect = (id) => {
    setSelectedItemId(id);
    props.handleSelectItem(id);
  };

  useEffect(() => {
    if (props.selectedItem && props.selectedItem.id) {
      setSelectedItemId(props.selectedItem.id);
    }
  }, [props.selectedItem]);

  return (
    <div className={`container-fluid ${styles.sideList}`}>
      <div className={`${styles.header}`}>
        <div>
          <h6>{props.title}</h6>
        </div>
        <button onClick={liftAdd} className={`${styles.add}`}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {props &&
        props.records &&
        props.records.records &&
        props.records.records.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              airtableId={item.id}
              displayName={item.fields.displayName}
              onDelete={liftDelete}
              onSelect={handleSelect}
              selectedId={selectedItemId}
              addItem={props.addItem}
            />
          );
        })}
      {!props.records.records && <Spinner />}
    </div>
  );
};

export default SideList;
