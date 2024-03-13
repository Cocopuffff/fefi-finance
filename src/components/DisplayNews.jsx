import React, { useState } from "react";
import AddContext from "../context/AddContext";
import TopicFeed from "./TopicFeed";
import TopicList from "./TopicList";
import styles from "./DisplayNews.module.css";

const DisplayNews = () => {
  const [addTopic, setAddTopic] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <AddContext.Provider
      value={{ addTopic, setAddTopic, selectedTopic, setSelectedTopic }}
    >
      <div className={`${styles.displayView}`}>
        <TopicFeed />
        <TopicList />
      </div>
    </AddContext.Provider>
  );
};

export default DisplayNews;
